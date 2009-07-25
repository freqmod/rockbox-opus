/***************************************************************************
 *             __________               __   ___.
 *   Open      \______   \ ____   ____ |  | _\_ |__   _______  ___
 *   Source     |       _//  _ \_/ ___\|  |/ /| __ \ /  _ \  \/  /
 *   Jukebox    |    |   (  <_> )  \___|    < | \_\ (  <_> > <  <
 *   Firmware   |____|_  /\____/ \___  >__|_ \|___  /\____/__/\_ \
 *                     \/            \/     \/    \/            \/
 * $Id$id $
 *
 * Copyright (C) 2009 by Christophe Gouiran <bechris13250 -at- gmail -dot- com>
 *
 * Based on lodepng, a lightweight png decoder/encoder
 * (c) 2005-2008 Lode Vandevenne
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This software is distributed on an "AS IS" basis, WITHOUT WARRANTY OF ANY
 * KIND, either express or implied.
 *
 ****************************************************************************/

/*
LodePNG version 20080927

Copyright (c) 2005-2008 Lode Vandevenne

This software is provided 'as-is', without any express or implied
warranty. In no event will the authors be held liable for any damages
arising from the use of this software.

Permission is granted to anyone to use this software for any purpose,
including commercial applications, and to alter it and redistribute it
freely, subject to the following restrictions:

    1. The origin of this software must not be misrepresented; you must not
    claim that you wrote the original software. If you use this software
    in a product, an acknowledgment in the product documentation would be
    appreciated but is not required.

    2. Altered source versions must be plainly marked as such, and must not be
    misrepresented as being the original software.

    3. This notice may not be removed or altered from any source
    distribution.
*/

/*
The manual and changelog can be found in the header file "lodepng.h"
You are free to name this file lodepng.cpp or lodepng.c depending on your usage.
*/

#include "plugin.h"
#include "lcd.h"
#include <lib/playback_control.h>
#include <lib/helper.h>
#include <lib/configfile.h>
#include <lib/grey.h>
#include <lib/pluginlib_bmp.h>
#include "zlib.h"
#include "png.h"

PLUGIN_HEADER

/* ////////////////////////////////////////////////////////////////////////// */
/* LodeFlate & LodeZlib Setting structs                                       */
/* ////////////////////////////////////////////////////////////////////////// */

typedef struct LodePNG_InfoColor /*info about the color type of an image*/
{
    /*header (IHDR)*/
    unsigned colorType; /*color type*/
    unsigned bitDepth;  /*bits per sample*/

    /*palette (PLTE)*/
    unsigned char palette[256 * 4]; /*palette in RGBARGBA... order*/
    size_t palettesize; /*palette size in number of colors (amount of bytes is 4 * palettesize)*/

    /*transparent color key (tRNS)*/
    unsigned key_defined; /*is a transparent color key given?*/
    unsigned key_r;       /*red component of color key*/
    unsigned key_g;       /*green component of color key*/
    unsigned key_b;       /*blue component of color key*/
} LodePNG_InfoColor;

typedef struct LodePNG_Time /*LodePNG's encoder does not generate the current time. To make it add a time chunk the correct time has to be provided*/
{
    unsigned      year;    /*2 bytes*/
    unsigned char month;   /*1-12*/
    unsigned char day;     /*1-31*/
    unsigned char hour;    /*0-23*/
    unsigned char minute;  /*0-59*/
    unsigned char second;  /*0-60 (to allow for leap seconds)*/
} LodePNG_Time;

typedef struct LodePNG_InfoPng /*information about the PNG image, except pixels and sometimes except width and height*/
{
    /*header (IHDR), palette (PLTE) and transparency (tRNS)*/
    unsigned width;             /*width of the image in pixels (ignored by encoder, but filled in by decoder)*/
    unsigned height;            /*height of the image in pixels (ignored by encoder, but filled in by decoder)*/
    unsigned compressionMethod; /*compression method of the original file*/
    unsigned filterMethod;      /*filter method of the original file*/
    unsigned interlaceMethod;   /*interlace method of the original file*/
    LodePNG_InfoColor color;    /*color type and bits, palette, transparency*/

    /*suggested background color (bKGD)*/
    unsigned background_defined; /*is a suggested background color given?*/
    unsigned background_r;       /*red component of suggested background color*/
    unsigned background_g;       /*green component of suggested background color*/
    unsigned background_b;       /*blue component of suggested background color*/

    /*time chunk (tIME)*/
    unsigned char time_defined; /*if 0, no tIME chunk was or will be generated in the PNG image*/
    LodePNG_Time time;

    /*phys chunk (pHYs)*/
    unsigned      phys_defined; /*is pHYs chunk defined?*/
    unsigned      phys_x;
    unsigned      phys_y;
    unsigned char phys_unit; /*may be 0 (unknown unit) or 1 (metre)*/

} LodePNG_InfoPng;

typedef struct LodePNG_InfoRaw /*contains user-chosen information about the raw image data, which is independent of the PNG image*/
{
    LodePNG_InfoColor color;
} LodePNG_InfoRaw;

typedef struct LodePNG_DecodeSettings
{
    unsigned color_convert; /*whether to convert the PNG to the color type you want. Default: yes*/
} LodePNG_DecodeSettings;

typedef struct LodePNG_Decoder
{
    LodePNG_DecodeSettings settings;
    LodePNG_InfoRaw infoRaw;
    LodePNG_InfoPng infoPng; /*info of the PNG image obtained after decoding*/
    long error;
    char error_msg[128];
    int x,y;
} LodePNG_Decoder;

#define VERSION_STRING "20080927"

/* Headings */
#define DIR_PREV  1
#define DIR_NEXT -1
#define DIR_NONE  0

/* decompressed image in the possible sizes (1,2,4,8), wasting the other */
static fb_data *disp[9];
static fb_data *previous_disp;
static size_t size[9];
static size_t previous_size;

/* my memory pool (from the mp3 buffer) */
static char print[128]; /* use a common snprintf() buffer */

unsigned char *memory, *memory_max;
static size_t memory_size;

static unsigned char *image; /* where we put the content of the file */
static size_t image_size;

#if LCD_DEPTH >= 8
static fb_data *converted_image __attribute__ ((aligned (16))); /* the (color) converted image */
#else
static fb_data *converted_image; /* the (color) converted image */
#endif
static size_t converted_image_size;

static unsigned char *decoded_image; /* the decoded image */
static size_t decoded_image_size;

#if LCD_DEPTH >= 8
static fb_data *resized_image __attribute__ ((aligned (16))); /* the decoded image */
#else
static fb_data *resized_image; /* the decoded image */
#endif

static struct tree_context *tree;

/* the current full file name */
static char np_file[MAX_PATH];
static int curfile = 0, direction = DIR_NONE, entries = 0;

static LodePNG_Decoder decoder;

/* list of the jpeg files */
static char **file_pt;
/* are we using the plugin buffer or the audio buffer? */
bool plug_buf = false;

/* Persistent configuration */
#define PNG_CONFIGFILE             "png.cfg"
#define PNG_SETTINGS_MINVERSION    1
#define PNG_SETTINGS_VERSION       1

/* Slideshow times */
#define SS_MIN_TIMEOUT 1
#define SS_MAX_TIMEOUT 20
#define SS_DEFAULT_TIMEOUT 5

struct png_settings
{
    int ss_timeout;
};

static struct png_settings png_settings =
    {
        SS_DEFAULT_TIMEOUT
    };
static struct png_settings old_settings;

static struct configdata png_config[] =
    {
        { TYPE_INT, SS_MIN_TIMEOUT, SS_MAX_TIMEOUT,
            { .int_p = &png_settings.ss_timeout }, "Slideshow Time", NULL
        },
    };

#if LCD_DEPTH > 1
static fb_data* old_backdrop;
#endif

#define MAX_X_SIZE LCD_WIDTH*8

/* Min memory allowing us to use the plugin buffer
 * and thus not stopping the music
 * *Very* rough estimation:
 * Max 10 000 dir entries * 4bytes/entry (char **) = 40000 bytes
 * + 30k code size = 70 000
 * + 50k min for png = 130 000
 */
#define MIN_MEM 130000

static int slideshow_enabled = false;   /* run slideshow */
static int running_slideshow = false;   /* loading image because of slideshw */
#ifndef SIMULATOR
static int immediate_ata_off = false;   /* power down disk after loading */
#endif

static unsigned ds, ds_min, ds_max; /* downscaling and limits */

/*
The two functions below (LodePNG_decompress and LodePNG_compress) directly call the
LodeZlib_decompress and LodeZlib_compress functions. The only purpose of the functions
below, is to provide the ability to let LodePNG use a different Zlib encoder by only
changing the two functions below, instead of changing it inside the vareous places
in the other LodePNG functions.

*out must be NULL and *outsize must be 0 initially, and after the function is done,
*out must point to the decompressed data, *outsize must be the size of it, and must
be the size of the useful data in bytes, not the alloc size.
*/

static unsigned LodePNG_decompress(unsigned char* out, size_t* outsize, const unsigned char* in, size_t insize, char *error_msg)
{
    z_stream stream;
    int err;

    error_msg = "";

    stream.next_in = (Bytef*)in;
    stream.avail_in = (uInt)insize;

    stream.next_out = out;
    stream.avail_out = (uInt)*outsize;

    stream.zalloc = (alloc_func)0;
    stream.zfree = (free_func)0;

    err = inflateInit(&stream);
    if (err != Z_OK) return err;

    err = inflate(&stream, Z_FINISH);
    if (err != Z_STREAM_END) {
        inflateEnd(&stream);
        if (err == Z_NEED_DICT || (err == Z_BUF_ERROR && stream.avail_in == 0))
            return Z_DATA_ERROR;
        return err;
    }
    *outsize = stream.total_out;

    err = inflateEnd(&stream);
    error_msg = stream.msg;
    return err;

}

/* ////////////////////////////////////////////////////////////////////////// */
/* / Reading and writing single bits and bytes from/to stream for LodePNG   / */
/* ////////////////////////////////////////////////////////////////////////// */

static unsigned char readBitFromReversedStream(size_t* bitpointer, const unsigned char* bitstream)
{
    unsigned char result = (unsigned char)((bitstream[(*bitpointer) >> 3] >> (7 - ((*bitpointer) & 0x7))) & 1);
    (*bitpointer)++;
    return result;
}

static unsigned readBitsFromReversedStream(size_t* bitpointer, const unsigned char* bitstream, size_t nbits)
{
    unsigned result = 0;
    size_t i;
    for (i = nbits - 1; i < nbits; i--) result += (unsigned)readBitFromReversedStream(bitpointer, bitstream) << i;
    return result;
}

static void setBitOfReversedStream0(size_t* bitpointer, unsigned char* bitstream, unsigned char bit)
{
    /*the current bit in bitstream must be 0 for this to work*/
    if (bit) bitstream[(*bitpointer) >> 3] |=  (bit << (7 - ((*bitpointer) & 0x7))); /*earlier bit of huffman code is in a lesser significant bit of an earlier byte*/
    (*bitpointer)++;
}

static void setBitOfReversedStream(size_t* bitpointer, unsigned char* bitstream, unsigned char bit)
{
    /*the current bit in bitstream may be 0 or 1 for this to work*/
    if (bit == 0) bitstream[(*bitpointer) >> 3] &=  (unsigned char)(~(1 << (7 - ((*bitpointer) & 0x7))));
    else bitstream[(*bitpointer) >> 3] |=  (1 << (7 - ((*bitpointer) & 0x7)));
    (*bitpointer)++;
}

static unsigned LodePNG_read32bitInt(const unsigned char* buffer)
{
    return (buffer[0] << 24) | (buffer[1] << 16) | (buffer[2] << 8) | buffer[3];
}

/* ////////////////////////////////////////////////////////////////////////// */
/* / PNG chunks                                                             / */
/* ////////////////////////////////////////////////////////////////////////// */

unsigned LodePNG_chunk_length(const unsigned char* chunk) /*get the length of the data of the chunk. Total chunk length has 12 bytes more.*/
{
    return LodePNG_read32bitInt(&chunk[0]);
}

void LodePNG_chunk_type(char type[5], const unsigned char* chunk) /*puts the 4-byte type in null terminated string*/
{
    unsigned i;
    for (i = 0; i < 4; i++) type[i] = chunk[4 + i];
    type[4] = 0; /*null termination char*/
}

unsigned char LodePNG_chunk_type_equals(const unsigned char* chunk, const char* type) /*check if the type is the given type*/
{
    if (type[4] != 0) return 0;
    return (chunk[4] == type[0] && chunk[5] == type[1] && chunk[6] == type[2] && chunk[7] == type[3]);
}

/*properties of PNG chunks gotten from capitalization of chunk type name, as defined by the standard*/
unsigned char LodePNG_chunk_critical(const unsigned char* chunk) /*0: ancillary chunk, 1: it's one of the critical chunk types*/
{
    return((chunk[4] & 32) == 0);
}

unsigned char LodePNG_chunk_private(const unsigned char* chunk) /*0: public, 1: private*/
{
    return((chunk[6] & 32) != 0);
}

unsigned char LodePNG_chunk_safetocopy(const unsigned char* chunk) /*0: the chunk is unsafe to copy, 1: the chunk is safe to copy*/
{
    return((chunk[7] & 32) != 0);
}

unsigned char* LodePNG_chunk_data(unsigned char* chunk) /*get pointer to the data of the chunk*/
{
    return &chunk[8];
}

const unsigned char* LodePNG_chunk_data_const(const unsigned char* chunk) /*get pointer to the data of the chunk*/
{
    return &chunk[8];
}

unsigned LodePNG_chunk_check_crc(const unsigned char* chunk) /*returns 0 if the crc is correct, error code if it's incorrect*/
{
    unsigned length = LodePNG_chunk_length(chunk);
    unsigned CRC = LodePNG_read32bitInt(&chunk[length + 8]);
    unsigned checksum = crc32(0L, &chunk[4], length + 4); /*the CRC is taken of the data and the 4 chunk type letters, not the length*/
    if (CRC != checksum) return 1;
    else return 0;
}

unsigned char* LodePNG_chunk_next(unsigned char* chunk) /*don't use on IEND chunk, as there is no next chunk then*/
{
    unsigned total_chunk_length = LodePNG_chunk_length(chunk) + 12;
    return &chunk[total_chunk_length];
}

const unsigned char* LodePNG_chunk_next_const(const unsigned char* chunk) /*don't use on IEND chunk, as there is no next chunk then*/
{
    unsigned total_chunk_length = LodePNG_chunk_length(chunk) + 12;
    return &chunk[total_chunk_length];
}

/* ////////////////////////////////////////////////////////////////////////// */
/* / Color types and such                                                   / */
/* ////////////////////////////////////////////////////////////////////////// */

/*return type is a LodePNG error code*/
static unsigned checkColorValidity(unsigned colorType, unsigned bd) /*bd = bitDepth*/
{
    switch (colorType)
    {
    case 0:
        if (!(bd == 1 || bd == 2 || bd == 4 || bd == 8 || bd == 16)) return 37; break; /*grey*/
    case 2:
        if (!(                                 bd == 8 || bd == 16)) return 37; break; /*RGB*/
    case 3:
        if (!(bd == 1 || bd == 2 || bd == 4 || bd == 8            )) return 37; break; /*palette*/
    case 4:
        if (!(                                 bd == 8 || bd == 16)) return 37; break; /*grey + alpha*/
    case 6:
        if (!(                                 bd == 8 || bd == 16)) return 37; break; /*RGBA*/
    default:
        return 31;
    }
    return 0; /*allowed color type / bits combination*/
}

static unsigned getNumColorChannels(unsigned colorType)
{
    switch (colorType)
    {
    case 0:
        return 1; /*grey*/
    case 2:
        return 3; /*RGB*/
    case 3:
        return 1; /*palette*/
    case 4:
        return 2; /*grey + alpha*/
    case 6:
        return 4; /*RGBA*/
    }
    return 0; /*unexisting color type*/
}

static unsigned getBpp(unsigned colorType, unsigned bitDepth)
{
    return getNumColorChannels(colorType) * bitDepth; /*bits per pixel is amount of channels * bits per channel*/
}

/* ////////////////////////////////////////////////////////////////////////// */

void LodePNG_InfoColor_init(LodePNG_InfoColor* info)
{
    info->key_defined = 0;
    info->key_r = info->key_g = info->key_b = 0;
    info->colorType = 6;
    info->bitDepth = 8;
    memset(info->palette, 0, 256 * 4 * sizeof(unsigned char));
    info->palettesize = 0;
}

void LodePNG_InfoColor_cleanup(LodePNG_InfoColor* info)
{
    info->palettesize = 0;
}

unsigned LodePNG_InfoColor_getBpp(const LodePNG_InfoColor* info) { return getBpp(info->colorType, info->bitDepth); } /*calculate bits per pixel out of colorType and bitDepth*/
unsigned LodePNG_InfoColor_isGreyscaleType(const LodePNG_InfoColor* info) { return info->colorType == 0 || info->colorType == 4; }

unsigned LodePNG_InfoColor_equal(const LodePNG_InfoColor* info1, const LodePNG_InfoColor* info2)
{
    return info1->colorType == info2->colorType
           && info1->bitDepth  == info2->bitDepth; /*palette and color key not compared*/
}

void LodePNG_InfoPng_init(LodePNG_InfoPng* info)
{
    info->width = info->height = 0;
    LodePNG_InfoColor_init(&info->color);
    info->interlaceMethod = 0;
    info->compressionMethod = 0;
    info->filterMethod = 0;
    info->background_defined = 0;
    info->background_r = info->background_g = info->background_b = 0;

    info->time_defined = 0;
    info->phys_defined = 0;
}

void LodePNG_InfoPng_cleanup(LodePNG_InfoPng* info)
{
    LodePNG_InfoColor_cleanup(&info->color);
}

unsigned LodePNG_InfoColor_copy(LodePNG_InfoColor* dest, const LodePNG_InfoColor* source)
{
    size_t i;
    LodePNG_InfoColor_cleanup(dest);
    *dest = *source;
    for (i = 0; i < source->palettesize * 4; i++) dest->palette[i] = source->palette[i];
    return 0;
}

unsigned LodePNG_InfoPng_copy(LodePNG_InfoPng* dest, const LodePNG_InfoPng* source)
{
    unsigned error = 0;
    LodePNG_InfoPng_cleanup(dest);
    *dest = *source;
    LodePNG_InfoColor_init(&dest->color);
    error = LodePNG_InfoColor_copy(&dest->color, &source->color); if (error) return error;
    return error;
}

void LodePNG_InfoPng_swap(LodePNG_InfoPng* a, LodePNG_InfoPng* b)
{
    LodePNG_InfoPng temp = *a;
    *a = *b;
    *b = temp;
}

void LodePNG_InfoRaw_init(LodePNG_InfoRaw* info)
{
    LodePNG_InfoColor_init(&info->color);
}

void LodePNG_InfoRaw_cleanup(LodePNG_InfoRaw* info)
{
    LodePNG_InfoColor_cleanup(&info->color);
}

unsigned LodePNG_InfoRaw_copy(LodePNG_InfoRaw* dest, const LodePNG_InfoRaw* source)
{
    unsigned error = 0;
    LodePNG_InfoRaw_cleanup(dest);
    *dest = *source;
    LodePNG_InfoColor_init(&dest->color);
    error = LodePNG_InfoColor_copy(&dest->color, &source->color); if (error) return error;
    return error;
}

/* ////////////////////////////////////////////////////////////////////////// */

/*
converts from any color type to 24-bit or 32-bit (later maybe more supported). return value = LodePNG error code
the out buffer must have (w * h * bpp + 7) / 8 bytes, where bpp is the bits per pixel of the output color type (LodePNG_InfoColor_getBpp)
for < 8 bpp images, there may _not_ be padding bits at the end of scanlines.
*/
unsigned LodePNG_convert(fb_data* out, const unsigned char* in, LodePNG_InfoColor* infoOut, LodePNG_InfoColor* infoIn, unsigned w, unsigned h)
{
    size_t i, j, bp = 0; /*bitpointer, used by less-than-8-bit color types*/
    size_t x, y;
    unsigned char c;

    if (!running_slideshow)
    {
        rb->snprintf(print, sizeof(print), "color conversion in progress");
        rb->lcd_puts(0, 3, print);
        rb->lcd_update();
    }

    /*cases where in and out already have the same format*/
    if (LodePNG_InfoColor_equal(infoIn, infoOut))
    {

        i = 0;
        j = 0;
        for (y = 0 ; y < h ; y++) {
            for (x = 0 ; x < w ; x++) {
                unsigned char r = in[i++];
                unsigned char g = in[i++];
                unsigned char b = in[i++];
                out[j++] = LCD_RGBPACK(r,g,b);
            }
        }
        return 0;
    }

    if ((infoOut->colorType == 2 || infoOut->colorType == 6) && infoOut->bitDepth == 8)
    {
        if (infoIn->bitDepth == 8)
        {
            switch (infoIn->colorType)
            {
            case 0: /*greyscale color*/
                i = 0;
                for (y = 0 ; y < h ; y++) {
                    for (x = 0 ; x < w ; x++) {
                        c=in[i];
                        //unsigned char r = in[i];
                        //unsigned char g = in[i];
                        //unsigned char b = in[i];
                        out[i++] = LCD_RGBPACK(c,c,c);
                    }
                }
                break;
            case 2: /*RGB color*/
                i = 0;
                for (y = 0 ; y < h ; y++) {
                    for (x = 0 ; x < w ; x++) {
                        j = 3 * i;
                        unsigned char r = in[j];
                        unsigned char g = in[j + 1];
                        unsigned char b = in[j + 2];
                        out[i++] = LCD_RGBPACK(r,g,b);
                    }
                }
                break;
            case 3: /*indexed color (palette)*/
                i = 0;
                for (y = 0 ; y < h ; y++) {
                    for (x = 0 ; x < w ; x++) {
                        if (in[i] >= infoIn->palettesize) return 46;
                        j = in[i] << 2;
                        unsigned char r = infoIn->palette[j];
                        unsigned char g = infoIn->palette[j + 1];
                        unsigned char b = infoIn->palette[j + 2];
                        out[i++] = LCD_RGBPACK(r,g,b);
                    }
                }
                break;
            case 4: /*greyscale with alpha*/
                i = 0;
                for (y = 0 ; y < h ; y++) {
                    for (x = 0 ; x < w ; x++) {
                        c = in[i << 1];
                        //unsigned char r = in[i<<1];
                        //unsigned char g = in[i<<1];
                        //unsigned char b = in[i<<1];
                        out[i++] = LCD_RGBPACK(c,c,c);
                    }
                }
                break;
            case 6: /*RGB with alpha*/
                i = 0;
                for (y = 0 ; y < h ; y++) {
                    for (x = 0 ; x < w ; x++) {
                        j = i << 2;
                        unsigned char r = in[j];
                        unsigned char g = in[j + 1];
                        unsigned char b = in[j + 2];
                        out[i++] = LCD_RGBPACK(r,g,b);
                    }
                }
                break;
            default:
                break;
            }
        }
        else if (infoIn->bitDepth == 16)
        {
            switch (infoIn->colorType)
            {
            case 0: /*greyscale color*/
                i = 0;
                for (y = 0 ; y < h ; y++) {
                    for (x = 0 ; x < w ; x++) {
                        c = in[i << 1];
                        //unsigned char r = in[2 * i];
                        //unsigned char g = in[2 * i];
                        //unsigned char b = in[2 * i];
                        out[i++] = LCD_RGBPACK(c,c,c);
                    }
                }
                break;
            case 2: /*RGB color*/
                i = 0;
                for (y = 0 ; y < h ; y++) {
                    for (x = 0 ; x < w ; x++) {
                        j = 6 * i;
                        unsigned char r = in[j];
                        unsigned char g = in[j + 2];
                        unsigned char b = in[j + 4];
                        out[i++] = LCD_RGBPACK(r,g,b);
                    }
                }
                break;
            case 4: /*greyscale with alpha*/
                i = 0;
                for (y = 0 ; y < h ; y++) {
                    for (x = 0 ; x < w ; x++) {
                        c = in[i << 2];
                        //unsigned char r = in[4 * i];
                        //unsigned char g = in[4 * i];
                        //unsigned char b = in[4 * i];
                        out[i++] = LCD_RGBPACK(c,c,c);
                    }
                }
                break;
            case 6: /*RGB with alpha*/
                i = 0;
                for (y = 0 ; y < h ; y++) {
                    for (x = 0 ; x < w ; x++) {
                        j = i << 3;
                        unsigned char r = in[j];
                        unsigned char g = in[j + 2];
                        unsigned char b = in[j + 4];
                        out[i++] = LCD_RGBPACK(r,g,b);
                    }
                }
                break;
            default:
                break;
            }
        }
        else /*infoIn->bitDepth is less than 8 bit per channel*/
        {
            switch (infoIn->colorType)
            {
            case 0: /*greyscale color*/
                i = 0;
                for (y = 0 ; y < h ; y++) {
                    for (x = 0 ; x < w ; x++) {
                        unsigned value = readBitsFromReversedStream(&bp, in, infoIn->bitDepth);
                        value = (value * 255) / ((1 << infoIn->bitDepth) - 1); /*scale value from 0 to 255*/
                        unsigned char r = (unsigned char)value;
                        unsigned char g = (unsigned char)value;
                        unsigned char b = (unsigned char)value;
                        out[i++] = LCD_RGBPACK(r,g,b);
                    }
                }
                break;
            case 3: /*indexed color (palette)*/
                i = 0;
                for (y = 0 ; y < h ; y++) {
                    for (x = 0 ; x < w ; x++) {
                        unsigned value = readBitsFromReversedStream(&bp, in, infoIn->bitDepth);
                        if (value >= infoIn->palettesize) return 47;
                        j = value << 2;
                        unsigned char r = infoIn->palette[j];
                        unsigned char g = infoIn->palette[j + 1];
                        unsigned char b = infoIn->palette[j + 2];
                        out[i++] = LCD_RGBPACK(r,g,b);
                    }
                }
                break;
            default:
                break;
            }
        }
    }
    else if (LodePNG_InfoColor_isGreyscaleType(infoOut) && infoOut->bitDepth == 8) /*conversion from greyscale to greyscale*/
    {
        if (!LodePNG_InfoColor_isGreyscaleType(infoIn)) return 62;
        if (infoIn->bitDepth == 8)
        {
            switch (infoIn->colorType)
            {
            case 0: /*greyscale color*/
                i = 0;
                for (y = 0 ; y < h ; y++) {
                    for (x = 0 ; x < w ; x++) {
                        c = in[i];
                        //unsigned char r = in[i];
                        //unsigned char g = in[i];
                        //unsigned char b = in[i];
                        out[i++] = LCD_RGBPACK(c,c,c);
                    }
                }
                break;
            case 4: /*greyscale with alpha*/
                i = 0;
                for (y = 0 ; y < h ; y++) {
                    for (x = 0 ; x < w ; x++) {
                        c = in[(i << 1) + 1];
                        //unsigned char r = in[2 * i + 1];
                        //unsigned char g = in[2 * i + 1];
                        //unsigned char b = in[2 * i + 1];
                        out[i++] = LCD_RGBPACK(c,c,c);
                    }
                }
                break;
            default:
                return 31;
            }
        }
        else if (infoIn->bitDepth == 16)
        {
            switch (infoIn->colorType)
            {
            case 0: /*greyscale color*/
                i = 0;
                for (y = 0 ; y < h ; y++) {
                    for (x = 0 ; x < w ; x++) {
                        c = in[i << 1];
                        //unsigned char r = in[2 * i];
                        //unsigned char g = in[2 * i];
                        //unsigned char b = in[2 * i];
                        out[i++] = LCD_RGBPACK(c,c,c);
                    }
                }
                break;
            case 4: /*greyscale with alpha*/
                i = 0;
                for (y = 0 ; y < h ; y++) {
                    for (x = 0 ; x < w ; x++) {
                        c = in[i << 2];
                        //unsigned char r = in[4 * i];
                        //unsigned char g = in[4 * i];
                        //unsigned char b = in[4 * i];
                        out[i++] = LCD_RGBPACK(c,c,c);
                    }
                }
                break;
            default:
                return 31;
            }
        }
        else /*infoIn->bitDepth is less than 8 bit per channel*/
        {
            if (infoIn->colorType != 0) return 31; /*colorType 0 is the only greyscale type with < 8 bits per channel*/
            i = 0;
            for (y = 0 ; y < h ; y++) {
                for (x = 0 ; x < w ; x++) {
                    unsigned value = readBitsFromReversedStream(&bp, in, infoIn->bitDepth);
                    value = (value * 255) / ((1 << infoIn->bitDepth) - 1); /*scale value from 0 to 255*/
                    unsigned char r = (unsigned char)value;
                    unsigned char g = (unsigned char)value;
                    unsigned char b = (unsigned char)value;
                    out[i++] = LCD_RGBPACK(r,g,b);
                }
            }
        }
    }
    else return 59;

    return 0;
}

/*Paeth predicter, used by PNG filter type 4*/
static int paethPredictor(int a, int b, int c)
{
    int p = a + b - c;
    int pa = p > a ? p - a : a - p;
    int pb = p > b ? p - b : b - p;
    int pc = p > c ? p - c : c - p;

    if (pa <= pb && pa <= pc) return a;
    else if (pb <= pc) return b;
    else return c;
}

/*shared values used by multiple Adam7 related functions*/

static const unsigned ADAM7_IX[7] = { 0, 4, 0, 2, 0, 1, 0 }; /*x start values*/
static const unsigned ADAM7_IY[7] = { 0, 0, 4, 0, 2, 0, 1 }; /*y start values*/
static const unsigned ADAM7_DX[7] = { 8, 8, 4, 4, 2, 2, 1 }; /*x delta values*/
static const unsigned ADAM7_DY[7] = { 8, 8, 8, 4, 4, 2, 2 }; /*y delta values*/

static void Adam7_getpassvalues(unsigned passw[7], unsigned passh[7], size_t filter_passstart[8], size_t padded_passstart[8], size_t passstart[8], unsigned w, unsigned h, unsigned bpp)
{
    /*the passstart values have 8 values: the 8th one actually indicates the byte after the end of the 7th (= last) pass*/
    unsigned i;

    /*calculate width and height in pixels of each pass*/
    for (i = 0; i < 7; i++)
    {
        passw[i] = (w + ADAM7_DX[i] - ADAM7_IX[i] - 1) / ADAM7_DX[i];
        passh[i] = (h + ADAM7_DY[i] - ADAM7_IY[i] - 1) / ADAM7_DY[i];
        if (passw[i] == 0) passh[i] = 0;
        if (passh[i] == 0) passw[i] = 0;
    }

    filter_passstart[0] = padded_passstart[0] = passstart[0] = 0;
    for (i = 0; i < 7; i++)
    {
        filter_passstart[i + 1] = filter_passstart[i] + ((passw[i] && passh[i]) ? passh[i] * (1 + (passw[i] * bpp + 7) / 8) : 0); /*if passw[i] is 0, it's 0 bytes, not 1 (no filtertype-byte)*/
        padded_passstart[i + 1] = padded_passstart[i] + passh[i] * ((passw[i] * bpp + 7) / 8); /*bits padded if needed to fill full byte at end of each scanline*/
        passstart[i + 1] = passstart[i] + (passh[i] * passw[i] * bpp + 7) / 8; /*only padded at end of reduced image*/
    }
}

/* ////////////////////////////////////////////////////////////////////////// */
/* / PNG Decoder                                                            / */
/* ////////////////////////////////////////////////////////////////////////// */

/*read the information from the header and store it in the LodePNG_Info. return value is error*/
void LodePNG_inspect(LodePNG_Decoder* decoder, const unsigned char* in, size_t inlength)
{
    if (inlength == 0 || in == 0) { decoder->error = 48; return; } /*the given data is empty*/
    if (inlength < 29) { decoder->error = 27; return; } /*error: the data length is smaller than the length of the header*/

    /*when decoding a new PNG image, make sure all parameters created after previous decoding are reset*/
    LodePNG_InfoPng_cleanup(&decoder->infoPng);
    LodePNG_InfoPng_init(&decoder->infoPng);
    decoder->error = 0;

    if (in[0] != 137 || in[1] != 80 || in[2] != 78 || in[3] != 71 || in[4] != 13 || in[5] != 10 || in[6] != 26 || in[7] != 10) { decoder->error = 28; return; } /*error: the first 8 bytes are not the correct PNG signature*/
    if (in[12] != 'I' || in[13] != 'H' || in[14] != 'D' || in[15] != 'R') { decoder->error = 29; return; } /*error: it doesn't start with a IHDR chunk!*/

    /*read the values given in the header*/
    decoder->infoPng.width = LodePNG_read32bitInt(&in[16]);
    decoder->infoPng.height = LodePNG_read32bitInt(&in[20]);
    decoder->infoPng.color.bitDepth = in[24];
    decoder->infoPng.color.colorType = in[25];
    decoder->infoPng.compressionMethod = in[26];
    decoder->infoPng.filterMethod = in[27];
    decoder->infoPng.interlaceMethod = in[28];

    unsigned CRC = LodePNG_read32bitInt(&in[29]);
    unsigned checksum = crc32(0L, &in[12], 17);
    if (CRC != checksum) { decoder->error = 57; return; }

    if (decoder->infoPng.compressionMethod != 0) { decoder->error = 32; return; } /*error: only compression method 0 is allowed in the specification*/
    if (decoder->infoPng.filterMethod != 0)      { decoder->error = 33; return; } /*error: only filter method 0 is allowed in the specification*/
    if (decoder->infoPng.interlaceMethod > 1)    { decoder->error = 34; return; } /*error: only interlace methods 0 and 1 exist in the specification*/

    decoder->error = checkColorValidity(decoder->infoPng.color.colorType, decoder->infoPng.color.bitDepth);
}

static unsigned unfilterScanline(unsigned char* recon, const unsigned char* scanline, const unsigned char* precon, size_t bytewidth, unsigned char filterType, size_t length)
{
    /*
    For PNG filter method 0
    unfilter a PNG image scanline by scanline. when the pixels are smaller than 1 byte, the filter works byte per byte (bytewidth = 1)
    precon is the previous unfiltered scanline, recon the result, scanline the current one
    the incoming scanlines do NOT include the filtertype byte, that one is given in the parameter filterType instead
    recon and scanline MAY be the same memory address! precon must be disjoint.
    */

    size_t i;
    switch (filterType)
    {
    case 0:
        //for(i = 0; i < length; i++) recon[i] = scanline[i];
        memcpy(recon, scanline, length * sizeof(unsigned char));
        break;
    case 1:
        //for(i =         0; i < bytewidth; i++) recon[i] = scanline[i];
        memcpy(recon, scanline, bytewidth * sizeof(unsigned char));
        for (i = bytewidth; i <    length; i++) recon[i] = scanline[i] + recon[i - bytewidth];
        break;
    case 2:
        if (precon) for (i = 0; i < length; i++) recon[i] = scanline[i] + precon[i];
        else       //for(i = 0; i < length; i++) recon[i] = scanline[i];
            memcpy(recon, scanline, length * sizeof(unsigned char));
        break;
    case 3:
        if (precon)
        {
            for (i =         0; i < bytewidth; i++) recon[i] = scanline[i] + precon[i] / 2;
            for (i = bytewidth; i <    length; i++) recon[i] = scanline[i] + ((recon[i - bytewidth] + precon[i]) / 2);
        }
        else
        {
            //for(i =         0; i < bytewidth; i++) recon[i] = scanline[i];
            memcpy(recon, scanline, bytewidth * sizeof(unsigned char));
            for (i = bytewidth; i <    length; i++) recon[i] = scanline[i] + recon[i - bytewidth] / 2;
        }
        break;
    case 4:
        if (precon)
        {
            for (i =         0; i < bytewidth; i++) recon[i] = (unsigned char)(scanline[i] + paethPredictor(0, precon[i], 0));
            for (i = bytewidth; i <    length; i++) recon[i] = (unsigned char)(scanline[i] + paethPredictor(recon[i - bytewidth], precon[i], precon[i - bytewidth]));
        }
        else
        {
            //for(i =         0; i < bytewidth; i++) recon[i] = scanline[i];
            memcpy(recon, scanline, bytewidth * sizeof(unsigned char));
            for (i = bytewidth; i <    length; i++) recon[i] = (unsigned char)(scanline[i] + paethPredictor(recon[i - bytewidth], 0, 0));
        }
        break;
    default:
        return 36; /*error: unexisting filter type given*/
    }
    return 0;
}

static unsigned unfilter(unsigned char* out, const unsigned char* in, unsigned w, unsigned h, unsigned bpp)
{
    /*
    For PNG filter method 0
    this function unfilters a single image (e.g. without interlacing this is called once, with Adam7 it's called 7 times)
    out must have enough bytes allocated already, in must have the scanlines + 1 filtertype byte per scanline
    w and h are image dimensions or dimensions of reduced image, bpp is bits per pixel
    in and out are allowed to be the same memory address!
    */

    unsigned y;
    unsigned char* prevline = 0;

    size_t bytewidth = (bpp + 7) / 8; /*bytewidth is used for filtering, is 1 when bpp < 8, number of bytes per pixel otherwise*/
    size_t linebytes = (w * bpp + 7) / 8;

    for (y = 0; y < h; y++)
    {
        size_t outindex = linebytes * y;
        size_t inindex = (1 + linebytes) * y; /*the extra filterbyte added to each row*/
        unsigned char filterType = in[inindex];

        unsigned error = unfilterScanline(&out[outindex], &in[inindex + 1], prevline, bytewidth, filterType, linebytes);
        if (error) return error;

        prevline = &out[outindex];
    }

    return 0;
}

static void Adam7_deinterlace(unsigned char* out, const unsigned char* in, unsigned w, unsigned h, unsigned bpp)
{
    /*Note: this function works on image buffers WITHOUT padding bits at end of scanlines with non-multiple-of-8 bit amounts, only between reduced images is padding
    out must be big enough AND must be 0 everywhere if bpp < 8 in the current implementation (because that's likely a little bit faster)*/
    unsigned passw[7], passh[7]; size_t filter_passstart[8], padded_passstart[8], passstart[8];
    unsigned i;

    Adam7_getpassvalues(passw, passh, filter_passstart, padded_passstart, passstart, w, h, bpp);

    if (bpp >= 8)
    {
        for (i = 0; i < 7; i++)
        {
            unsigned x, y, b;
            size_t bytewidth = bpp / 8;
            for (y = 0; y < passh[i]; y++)
                for (x = 0; x < passw[i]; x++)
                {
                    size_t pixelinstart = passstart[i] + (y * passw[i] + x) * bytewidth;
                    size_t pixeloutstart = ((ADAM7_IY[i] + y * ADAM7_DY[i]) * w + ADAM7_IX[i] + x * ADAM7_DX[i]) * bytewidth;
                    for (b = 0; b < bytewidth; b++)
                    {
                        out[pixeloutstart + b] = in[pixelinstart + b];
                    }
                }
        }
    }
    else /*bpp < 8: Adam7 with pixels < 8 bit is a bit trickier: with bit pointers*/
    {
        for (i = 0; i < 7; i++)
        {
            unsigned x, y, b;
            unsigned ilinebits = bpp * passw[i];
            unsigned olinebits = bpp * w;
            size_t obp, ibp; /*bit pointers (for out and in buffer)*/
            for (y = 0; y < passh[i]; y++)
                for (x = 0; x < passw[i]; x++)
                {
                    ibp = (8 * passstart[i]) + (y * ilinebits + x * bpp);
                    obp = (ADAM7_IY[i] + y * ADAM7_DY[i]) * olinebits + (ADAM7_IX[i] + x * ADAM7_DX[i]) * bpp;
                    for (b = 0; b < bpp; b++)
                    {
                        unsigned char bit = readBitFromReversedStream(&ibp, in);
                        setBitOfReversedStream0(&obp, out, bit); /*note that this function assumes the out buffer is completely 0, use setBitOfReversedStream otherwise*/
                    }
                }
        }
    }
}

static void removePaddingBits(unsigned char* out, const unsigned char* in, size_t olinebits, size_t ilinebits, unsigned h)
{
    /*
    After filtering there are still padding bits if scanlines have non multiple of 8 bit amounts. They need to be removed (except at last scanline of (Adam7-reduced) image) before working with pure image buffers for the Adam7 code, the color convert code and the output to the user.
    in and out are allowed to be the same buffer, in may also be higher but still overlapping; in must have >= ilinebits*h bits, out must have >= olinebits*h bits, olinebits must be <= ilinebits
    also used to move bits after earlier such operations happened, e.g. in a sequence of reduced images from Adam7
    only useful if (ilinebits - olinebits) is a value in the range 1..7
    */
    unsigned y;
    size_t diff = ilinebits - olinebits;
    size_t obp = 0, ibp = 0; /*bit pointers*/
    for (y = 0; y < h; y++)
    {
        size_t x;
        for (x = 0; x < olinebits; x++)
        {
            unsigned char bit = readBitFromReversedStream(&ibp, in);
            setBitOfReversedStream(&obp, out, bit);
        }
        ibp += diff;
    }
}

/*out must be buffer big enough to contain full image, and in must contain the full decompressed data from the IDAT chunks*/
static unsigned postProcessScanlines(unsigned char* out, unsigned char* in, const LodePNG_Decoder* decoder) /*return value is error*/
{
    /*
    This function converts the filtered-padded-interlaced data into pure 2D image buffer with the PNG's colortype. Steps:
    *) if no Adam7: 1) unfilter 2) remove padding bits (= posible extra bits per scanline if bpp < 8)
    *) if adam7: 1) 7x unfilter 2) 7x remove padding bits 3) Adam7_deinterlace
    NOTE: the in buffer will be overwritten with intermediate data!
    */
    unsigned bpp = LodePNG_InfoColor_getBpp(&decoder->infoPng.color);
    unsigned w = decoder->infoPng.width;
    unsigned h = decoder->infoPng.height;
    unsigned error = 0;
    if (bpp == 0) return 31; /*error: invalid colortype*/

    if (decoder->infoPng.interlaceMethod == 0)
    {
        if (bpp < 8 && w * bpp != ((w * bpp + 7) / 8) * 8)
        {
            error = unfilter(in, in, w, h, bpp);
            if (error) return error;
            removePaddingBits(out, in, w * bpp, ((w * bpp + 7) / 8) * 8, h);
        }
        else error = unfilter(out, in, w, h, bpp); /*we can immediatly filter into the out buffer, no other steps needed*/
    }
    else /*interlaceMethod is 1 (Adam7)*/
    {
        unsigned passw[7], passh[7]; size_t filter_passstart[8], padded_passstart[8], passstart[8];
        unsigned i;

        Adam7_getpassvalues(passw, passh, filter_passstart, padded_passstart, passstart, w, h, bpp);

        for (i = 0; i < 7; i++)
        {
            error = unfilter(&in[padded_passstart[i]], &in[filter_passstart[i]], passw[i], passh[i], bpp);
            if (error) return error;
            if (bpp < 8) /*TODO: possible efficiency improvement: if in this reduced image the bits fit nicely in 1 scanline, move bytes instead of bits or move not at all*/
            {
                /*remove padding bits in scanlines; after this there still may be padding bits between the different reduced images: each reduced image still starts nicely at a byte*/
                removePaddingBits(&in[passstart[i]], &in[padded_passstart[i]], passw[i] * bpp, ((passw[i] * bpp + 7) / 8) * 8, passh[i]);
            }
        }

        Adam7_deinterlace(out, in, w, h, bpp);
    }

    return error;
}

/*read a PNG, the result will be in the same color type as the PNG (hence "generic")*/
static void decodeGeneric(LodePNG_Decoder* decoder, unsigned char* in, size_t size, void (*pf_progress)(int current, int total))
{
    if (pf_progress != NULL)
        pf_progress(0, 100);
    unsigned char IEND = 0;
    const unsigned char* chunk;
    size_t i;
    unsigned char *idat = memory;
    size_t idat_size = 0;

    /*for unknown chunk order*/
    unsigned unknown = 0;
    unsigned critical_pos = 1; /*1 = after IHDR, 2 = after PLTE, 3 = after IDAT*/

    /*provide some proper output values if error will happen*/
    decoded_image_size = 0;

if (size == 0 || in == 0) { decoder->error = 48; return; } /*the given data is empty*/

    LodePNG_inspect(decoder, in, size); /*reads header and resets other parameters in decoder->infoPng*/
    if (decoder->error) return;

    chunk = &in[33]; /*first byte of the first chunk after the header*/

    while (!IEND) /*loop through the chunks, ignoring unknown chunks and stopping at IEND chunk. IDAT data is put at the start of the in buffer*/
    {
        unsigned chunkLength;
        const unsigned char* data; /*the data in the chunk*/

        if ((size_t)((chunk - in) + 12) > size || chunk < in) { decoder->error = 30; break; } /*error: size of the in buffer too small to contain next chunk*/
        chunkLength = LodePNG_chunk_length(chunk); /*length of the data of the chunk, excluding the length bytes, chunk type and CRC bytes*/
        if (chunkLength > 2147483647) { decoder->error = 63; break; }
        if ((size_t)((chunk - in) + chunkLength + 12) > size || (chunk + chunkLength + 12) < in) { decoder->error = 35; break; } /*error: size of the in buffer too small to contain next chunk*/
        data = LodePNG_chunk_data_const(chunk);

        /*IDAT chunk, containing compressed image data*/
        if (LodePNG_chunk_type_equals(chunk, "IDAT"))
        {
            size_t oldsize = idat_size;
            idat_size += chunkLength;
            if (idat + idat_size >= image) { decoder->error = OUT_OF_MEMORY; break; }
            memcpy(idat+oldsize, data, chunkLength * sizeof(unsigned char));
            critical_pos = 3;
        }
        /*IEND chunk*/
        else if (LodePNG_chunk_type_equals(chunk, "IEND"))
        {
            IEND = 1;
        }
        /*palette chunk (PLTE)*/
        else if (LodePNG_chunk_type_equals(chunk, "PLTE"))
        {
            unsigned pos = 0;
            decoder->infoPng.color.palettesize = chunkLength / 3;
            if (decoder->infoPng.color.palettesize > 256) { decoder->error = 38; break; } /*error: palette too big*/
            for (i = 0; i < decoder->infoPng.color.palettesize; i++)
            {
                decoder->infoPng.color.palette[4 * i + 0] = data[pos++]; /*R*/
                decoder->infoPng.color.palette[4 * i + 1] = data[pos++]; /*G*/
                decoder->infoPng.color.palette[4 * i + 2] = data[pos++]; /*B*/
                decoder->infoPng.color.palette[4 * i + 3] = 255; /*alpha*/
            }
            critical_pos = 2;
        }
        /*palette transparency chunk (tRNS)*/
        else if (LodePNG_chunk_type_equals(chunk, "tRNS"))
        {
            if (decoder->infoPng.color.colorType == 3)
            {
                if (chunkLength > decoder->infoPng.color.palettesize) { decoder->error = 39; break; } /*error: more alpha values given than there are palette entries*/
                for (i = 0; i < chunkLength; i++) decoder->infoPng.color.palette[4 * i + 3] = data[i];
            }
            else if (decoder->infoPng.color.colorType == 0)
            {
                if (chunkLength != 2) { decoder->error = 40; break; } /*error: this chunk must be 2 bytes for greyscale image*/
                decoder->infoPng.color.key_defined = 1;
                decoder->infoPng.color.key_r = decoder->infoPng.color.key_g = decoder->infoPng.color.key_b = 256 * data[0] + data[1];
            }
            else if (decoder->infoPng.color.colorType == 2)
            {
                if (chunkLength != 6) { decoder->error = 41; break; } /*error: this chunk must be 6 bytes for RGB image*/
                decoder->infoPng.color.key_defined = 1;
                decoder->infoPng.color.key_r = 256 * data[0] + data[1];
                decoder->infoPng.color.key_g = 256 * data[2] + data[3];
                decoder->infoPng.color.key_b = 256 * data[4] + data[5];
            }
            else { decoder->error = 42; break; } /*error: tRNS chunk not allowed for other color models*/
        }
        /*background color chunk (bKGD)*/
        else if (LodePNG_chunk_type_equals(chunk, "bKGD"))
        {
            if (decoder->infoPng.color.colorType == 3)
            {
                if (chunkLength != 1) { decoder->error = 43; break; } /*error: this chunk must be 1 byte for indexed color image*/
                decoder->infoPng.background_defined = 1;
                decoder->infoPng.background_r = decoder->infoPng.background_g = decoder->infoPng.background_g = data[0];
            }
            else if (decoder->infoPng.color.colorType == 0 || decoder->infoPng.color.colorType == 4)
            {
                if (chunkLength != 2) { decoder->error = 44; break; } /*error: this chunk must be 2 bytes for greyscale image*/
                decoder->infoPng.background_defined = 1;
                decoder->infoPng.background_r = decoder->infoPng.background_g = decoder->infoPng.background_b = 256 * data[0] + data[1];
            }
            else if (decoder->infoPng.color.colorType == 2 || decoder->infoPng.color.colorType == 6)
            {
                if (chunkLength != 6) { decoder->error = 45; break; } /*error: this chunk must be 6 bytes for greyscale image*/
                decoder->infoPng.background_defined = 1;
                decoder->infoPng.background_r = 256 * data[0] + data[1];
                decoder->infoPng.background_g = 256 * data[2] + data[3];
                decoder->infoPng.background_b = 256 * data[4] + data[5];
            }
        }
        else if (LodePNG_chunk_type_equals(chunk, "tIME"))
        {
            if (chunkLength != 7) { decoder->error = 73; break; }
            decoder->infoPng.time_defined = 1;
            decoder->infoPng.time.year = 256 * data[0] + data[+ 1];
            decoder->infoPng.time.month = data[2];
            decoder->infoPng.time.day = data[3];
            decoder->infoPng.time.hour = data[4];
            decoder->infoPng.time.minute = data[5];
            decoder->infoPng.time.second = data[6];
        }
        else if (LodePNG_chunk_type_equals(chunk, "pHYs"))
        {
            if (chunkLength != 9) { decoder->error = 74; break; }
            decoder->infoPng.phys_defined = 1;
            decoder->infoPng.phys_x = 16777216 * data[0] + 65536 * data[1] + 256 * data[2] + data[3];
            decoder->infoPng.phys_y = 16777216 * data[4] + 65536 * data[5] + 256 * data[6] + data[7];
            decoder->infoPng.phys_unit = data[8];
        }
        else /*it's not an implemented chunk type, so ignore it: skip over the data*/
        {
            if (LodePNG_chunk_critical(chunk)) { decoder->error = 69; break; } /*error: unknown critical chunk (5th bit of first byte of chunk type is 0)*/
            unknown = 1;
        }

        if (!unknown) /*check CRC if wanted, only on known chunk types*/
        {
            long time = *rb->current_tick;
            if (LodePNG_chunk_check_crc(chunk)) { decoder->error = 57; break; }
            time = *rb->current_tick-time;
        }

        if (!IEND) chunk = LodePNG_chunk_next_const(chunk);
    }

    if (!decoder->error)
    {
        unsigned char *scanlines = idat + idat_size;
        size_t scanlines_size = (size_t)memory_max - idat_size + 1;
        long time = *rb->current_tick;
        decoder->error = LodePNG_decompress(scanlines, &scanlines_size, idat, idat_size, decoder->error_msg); /*decompress with the Zlib decompressor*/
        if (pf_progress) pf_progress(100, 100);
        time = *rb->current_tick-time;

        if (!decoder->error)
        {
            decoded_image_size = (decoder->infoPng.height * decoder->infoPng.width * LodePNG_InfoColor_getBpp(&decoder->infoPng.color) + 7) / 8;
            if (decoded_image_size > memory_size) { decoder->error = OUT_OF_MEMORY; return; }
            decoded_image = memory_max - decoded_image_size + 1;
            if (scanlines + scanlines_size >= decoded_image) { decoder->error = OUT_OF_MEMORY; return; }
            memset(decoded_image, 0, decoded_image_size * sizeof(unsigned char));
            if (!running_slideshow)
            {
                rb->snprintf(print, sizeof(print), "unfiltering scanlines");
                rb->lcd_puts(0, 3, print);
                rb->lcd_update();
            }
            decoder->error = postProcessScanlines(decoded_image, scanlines, decoder);
        }
    }
}

void LodePNG_decode(LodePNG_Decoder* decoder, unsigned char* in, size_t insize, void (*pf_progress)(int current, int total))
{
    decodeGeneric(decoder, in, insize, pf_progress);
    if (decoder->error) return;

    /*TODO: check if this works according to the statement in the documentation: "The converter can convert from greyscale input color type, to 8-bit greyscale or greyscale with alpha"*/
if (!(decoder->infoRaw.color.colorType == 2 || decoder->infoRaw.color.colorType == 6) && !(decoder->infoRaw.color.bitDepth == 8)) { decoder->error = 56; return; }
    converted_image = (fb_data *)((int)(memory + 3) & ~3);
    converted_image_size = FB_DATA_SZ*decoder->infoPng.width*decoder->infoPng.height;
    if ((unsigned char *)(converted_image + converted_image_size) >= decoded_image) { decoder->error = OUT_OF_MEMORY; }
    if (!decoder->error) decoder->error = LodePNG_convert(converted_image, decoded_image, &decoder->infoRaw.color, &decoder->infoPng.color, decoder->infoPng.width, decoder->infoPng.height);
}

void LodePNG_DecodeSettings_init(LodePNG_DecodeSettings* settings)
{
    settings->color_convert = 1;
}

void LodePNG_Decoder_init(LodePNG_Decoder* decoder)
{
    LodePNG_DecodeSettings_init(&decoder->settings);
    LodePNG_InfoRaw_init(&decoder->infoRaw);
    LodePNG_InfoPng_init(&decoder->infoPng);
    decoder->error = 1;
}

void LodePNG_Decoder_cleanup(LodePNG_Decoder* decoder)
{
    LodePNG_InfoRaw_cleanup(&decoder->infoRaw);
    LodePNG_InfoPng_cleanup(&decoder->infoPng);
}

/* support function for qsort() */
static int compare(const void* p1, const void* p2)
{
    return rb->strcasecmp(*((char **)p1), *((char **)p2));
}

bool png_ext(const char ext[])
{
    if (!ext)
        return false;
    if (!rb->strcasecmp(ext,".png"))
        return true;
    else
        return false;
}

/*Read directory contents for scrolling. */
void get_pic_list(void)
{
    int i;
    long int str_len = 0;
    char *pname;
    tree = rb->tree_get_context();

#if PLUGIN_BUFFER_SIZE >= MIN_MEM
    file_pt = rb->plugin_get_buffer((size_t *)&image_size);
#else
    file_pt = rb->plugin_get_audio_buffer((size_t *)&image_size);
#endif

    for (i = 0; i < tree->filesindir; i++)
    {
        if (png_ext(rb->strrchr(&tree->name_buffer[str_len],'.')))
            file_pt[entries++] = &tree->name_buffer[str_len];

        str_len += rb->strlen(&tree->name_buffer[str_len]) + 1;
    }

    rb->qsort(file_pt, entries, sizeof(char**), compare);

    /* Remove path and leave only the name.*/
    pname = rb->strrchr(np_file,'/');
    pname++;

    /* Find Selected File. */
    for (i = 0; i < entries; i++)
        if (!rb->strcmp(file_pt[i], pname))
            curfile = i;
}

int change_filename(int direct)
{
    int count = 0;
    direction = direct;

    if (direct == DIR_PREV)
    {
        do
        {
            count++;
            if (curfile == 0)
                curfile = entries - 1;
            else
                curfile--;
        }while (file_pt[curfile] == '\0' && count < entries);
        /* we "erase" the file name if  we encounter
         * a non-supported file, so skip it now */
    }
    else /* DIR_NEXT/DIR_NONE */
    {
        do
        {
            count++;
            if (curfile == entries - 1)
                curfile = 0;
            else
                curfile++;
        }while (file_pt[curfile] == '\0' && count < entries);
    }

    if (count == entries && file_pt[curfile] == '\0')
    {
        rb->splash(HZ, "No supported files");
        return PLUGIN_ERROR;
    }
    if (rb->strlen(tree->currdir) > 1)
    {
        rb->strcpy(np_file, tree->currdir);
        rb->strcat(np_file, "/");
    }
    else
        rb->strcpy(np_file, tree->currdir);

    rb->strcat(np_file, file_pt[curfile]);

    return PLUGIN_OTHER;
}

/* switch off overlay, for handling SYS_ events */
void cleanup(void *parameter)
{
    (void)parameter;
}

#define VSCROLL (LCD_HEIGHT/8)
#define HSCROLL (LCD_WIDTH/10)

#define ZOOM_IN  100 /* return codes for below function */
#define ZOOM_OUT 101

int show_menu(void) /* return 1 to quit */
{
#if LCD_DEPTH > 1
    rb->lcd_set_backdrop(old_backdrop);
#ifdef HAVE_LCD_COLOR
    rb->lcd_set_foreground(rb->global_settings->fg_color);
    rb->lcd_set_background(rb->global_settings->bg_color);
#else
    rb->lcd_set_foreground(LCD_BLACK);
    rb->lcd_set_background(LCD_WHITE);
#endif
#endif
    int result;

    enum menu_id
    {
        MIID_RETURN = 0,
        MIID_TOGGLE_SS_MODE,
        MIID_CHANGE_SS_MODE,
#if PLUGIN_BUFFER_SIZE >= MIN_MEM
        MIID_SHOW_PLAYBACK_MENU,
#endif
        MIID_QUIT,
    };

    MENUITEM_STRINGLIST(menu, "Png Menu", NULL,
                        "Return", "Toggle Slideshow Mode",
                        "Change Slideshow Time",
#if PLUGIN_BUFFER_SIZE >= MIN_MEM
                        "Show Playback Menu",
#endif
                        "Quit");

    static const struct opt_items slideshow[2] = {
                { "Disable", -1 },
                { "Enable", -1 },
            };

    result=rb->do_menu(&menu, NULL, NULL, false);

    switch (result)
    {
    case MIID_RETURN:
        break;
    case MIID_TOGGLE_SS_MODE:
        rb->set_option("Toggle Slideshow", &slideshow_enabled, INT,
                       slideshow , 2, NULL);
        break;
    case MIID_CHANGE_SS_MODE:
        rb->set_int("Slideshow Time", "s", UNIT_SEC,
                    &png_settings.ss_timeout, NULL, 1,
                    SS_MIN_TIMEOUT, SS_MAX_TIMEOUT, NULL);
        break;
#if PLUGIN_BUFFER_SIZE >= MIN_MEM
    case MIID_SHOW_PLAYBACK_MENU:
        if (plug_buf)
        {
            playback_control(NULL);
        }
        else
        {
            rb->splash(HZ, "Cannot restart playback");
        }
        break;
#endif
    case MIID_QUIT:
        return 1;
        break;
    }

#if !defined(SIMULATOR) && defined(HAVE_DISK_STORAGE)
    /* change ata spindown time based on slideshow time setting */
    immediate_ata_off = false;
    rb->storage_spindown(rb->global_settings->disk_spindown);

    if (slideshow_enabled)
    {
        if (png_settings.ss_timeout < 10)
        {
            /* slideshow times < 10s keep disk spinning */
            rb->storage_spindown(0);
        }
        else if (!rb->mp3_is_playing())
        {
            /* slideshow times > 10s and not playing: ata_off after load */
            immediate_ata_off = true;
        }
    }
#endif
#if LCD_DEPTH > 1
    rb->lcd_set_backdrop(NULL);
    rb->lcd_set_foreground(LCD_WHITE);
    rb->lcd_set_background(LCD_BLACK);
#endif
    rb->lcd_clear_display();
    return 0;
}

/* Pan the viewing window right - move image to the left and fill in
   the right-hand side */
static void pan_view_right(struct LodePNG_Decoder* decoder)
{
    int move;

    move = MIN(HSCROLL, decoder->infoPng.width/ds - decoder->x - LCD_WIDTH);
    if (move > 0 && decoder->infoPng.width/ds > LCD_WIDTH)
    {
        decoder->x += move;
        rb->lcd_bitmap_part(resized_image, decoder->x, decoder->y, decoder->infoPng.width/ds /*stride*/,
                            MAX(0, (LCD_WIDTH - (int)decoder->infoPng.width/(int)ds) / 2),
                            MAX(0, (LCD_HEIGHT - (int)decoder->infoPng.height/(int)ds) / 2),
                            MIN(LCD_WIDTH, decoder->infoPng.width/ds),
                            MIN(LCD_HEIGHT, decoder->infoPng.height/ds));
        rb->lcd_update();
    }
}

/* Pan the viewing window left - move image to the right and fill in
   the left-hand side */
static void pan_view_left(struct LodePNG_Decoder* decoder)
{
    int move;

    move = MIN(HSCROLL, decoder->x);
    if (move > 0)
    {
        decoder->x -= move;
        rb->lcd_bitmap_part(resized_image, decoder->x, decoder->y, decoder->infoPng.width/ds /*stride*/,
                            MAX(0, (LCD_WIDTH - (int)decoder->infoPng.width/(int)ds) / 2),
                            MAX(0, (LCD_HEIGHT - (int)decoder->infoPng.height/(int)ds) / 2),
                            MIN(LCD_WIDTH, decoder->infoPng.width/ds),
                            MIN(LCD_HEIGHT, decoder->infoPng.height/ds));
        rb->lcd_update();
    }
}


/* Pan the viewing window up - move image down and fill in
   the top */
static void pan_view_up(struct LodePNG_Decoder* decoder)
{
    int move;

    move = MIN(VSCROLL, decoder->y);
    if (move > 0)
    {
        decoder->y -= move;
        rb->lcd_bitmap_part(resized_image, decoder->x, decoder->y, decoder->infoPng.width/ds /*stride*/,
                            MAX(0, (LCD_WIDTH - (int)decoder->infoPng.width/(int)ds) / 2),
                            MAX(0, (LCD_HEIGHT - (int)decoder->infoPng.height/(int)ds) / 2),
                            MIN(LCD_WIDTH, decoder->infoPng.width/ds),
                            MIN(LCD_HEIGHT, decoder->infoPng.height/ds));
        rb->lcd_update();
    }
}

/* Pan the viewing window down - move image up and fill in
   the bottom */
static void pan_view_down(struct LodePNG_Decoder* decoder)
{
    int move;

    move = MIN(VSCROLL, decoder->infoPng.height/ds - decoder->y - LCD_HEIGHT);
    if (move > 0 && decoder->infoPng.height/ds > LCD_HEIGHT)
    {
        decoder->y += move;
        rb->lcd_bitmap_part(resized_image, decoder->x, decoder->y, decoder->infoPng.width/ds /*stride*/,
                            MAX(0, (LCD_WIDTH - (int)decoder->infoPng.width/(int)ds) / 2),
                            MAX(0, (LCD_HEIGHT - (int)decoder->infoPng.height/(int)ds) / 2),
                            MIN(LCD_WIDTH, decoder->infoPng.width/ds),
                            MIN(LCD_HEIGHT, decoder->infoPng.height/ds));
        rb->lcd_update();
    }
}

/* interactively scroll around the image */
int scroll_bmp(struct LodePNG_Decoder* decoder)
{
    int button;
    int lastbutton = 0;

    while (true)
    {
        if (slideshow_enabled)
            button = rb->button_get_w_tmo(png_settings.ss_timeout * HZ);
        else button = rb->button_get(true);

        running_slideshow = false;

        switch (button)
        {
        case PNG_LEFT:
            if (!(ds < ds_max) && entries > 0 && decoder->infoPng.width <= MAX_X_SIZE)
                return change_filename(DIR_PREV);
        case PNG_LEFT | BUTTON_REPEAT:
            pan_view_left(decoder);
            break;

        case PNG_RIGHT:
            if (!(ds < ds_max) && entries > 0 && decoder->infoPng.width <= MAX_X_SIZE)
                return change_filename(DIR_NEXT);
        case PNG_RIGHT | BUTTON_REPEAT:
            pan_view_right(decoder);
            break;

        case PNG_UP:
        case PNG_UP | BUTTON_REPEAT:
            pan_view_up(decoder);
            break;

        case PNG_DOWN:
        case PNG_DOWN | BUTTON_REPEAT:
            pan_view_down(decoder);
            break;

        case BUTTON_NONE:
            if (!slideshow_enabled)
                break;
            running_slideshow = true;
            if (entries > 0)
                return change_filename(DIR_NEXT);
            break;

#ifdef PNG_SLIDE_SHOW
        case PNG_SLIDE_SHOW:
            slideshow_enabled = !slideshow_enabled;
            running_slideshow = slideshow_enabled;
            break;
#endif

#ifdef PNG_NEXT_REPEAT
        case PNG_NEXT_REPEAT:
#endif
        case PNG_NEXT:
            if (entries > 0)
                return change_filename(DIR_NEXT);
            break;

#ifdef PNG_PREVIOUS_REPEAT
        case PNG_PREVIOUS_REPEAT:
#endif
        case PNG_PREVIOUS:
            if (entries > 0)
                return change_filename(DIR_PREV);
            break;

        case PNG_ZOOM_IN:
#ifdef PNG_ZOOM_PRE
            if (lastbutton != PNG_ZOOM_PRE)
                break;
#endif
            return ZOOM_IN;
            break;

        case PNG_ZOOM_OUT:
#ifdef PNG_ZOOM_PRE
            if (lastbutton != PNG_ZOOM_PRE)
                break;
#endif
            return ZOOM_OUT;
            break;

#ifdef PNG_RC_MENU
        case PNG_RC_MENU:
#endif
        case PNG_MENU:
            if (show_menu() == 1)
                return PLUGIN_OK;
            else
                return PLUGIN_REFRESH;

            break;
        default:
            if (rb->default_event_handler_ex(button, cleanup, NULL)
                    == SYS_USB_CONNECTED)
                return PLUGIN_USB_CONNECTED;
            break;

        } /* switch */

        if (button != BUTTON_NONE)
            lastbutton = button;
    } /* while (true) */
}

/* set the view to the given center point, limit if necessary */
void set_view (struct LodePNG_Decoder* decoder, int cx, int cy)
{
    int x, y;

    /* plain center to available width/height */
    x = cx - MIN(LCD_WIDTH, decoder->infoPng.width/ds) / 2;
    y = cy - MIN(LCD_HEIGHT, decoder->infoPng.height/ds) / 2;

    /* limit against upper image size */
    x = MIN((int)(decoder->infoPng.width/ds) - LCD_WIDTH, x);
    y = MIN((int)(decoder->infoPng.height/ds) - LCD_HEIGHT, y);

    /* limit against negative side */
    x = MAX(0, x);
    y = MAX(0, y);

    decoder->x = x; /* set the values */
    decoder->y = y;

}

/* callback updating a progress meter while PNG decoding */
void cb_progress(int current, int total)
{

    if (current & 1) rb->yield(); /* be nice to the other threads */
    if (!running_slideshow)
    {
        rb->gui_scrollbar_draw(rb->screens[SCREEN_MAIN],0, LCD_HEIGHT-8, LCD_WIDTH, 8, total, 0,
                               current, HORIZONTAL);
        rb->lcd_update_rect(0, LCD_HEIGHT-8, LCD_WIDTH, 8);
    }
    else
    {
        /* in slideshow mode, keep gui interference to a minimum */
        rb->gui_scrollbar_draw(rb->screens[SCREEN_MAIN],0, LCD_HEIGHT-4, LCD_WIDTH, 4, total, 0,
                               current, HORIZONTAL);
        rb->lcd_update_rect(0, LCD_HEIGHT-4, LCD_WIDTH, 4);
    }
}

int pngmem(struct LodePNG_Decoder* decoder, int ds)
{
    return decoder->infoPng.width * decoder->infoPng.height * FB_DATA_SZ / ds;
}

/* how far can we zoom in without running out of memory */
int min_downscale(struct LodePNG_Decoder* decoder, int bufsize)
{
    int downscale = 8;

    if (pngmem(decoder, 8) > bufsize)
        return 0; /* error, too large, even 1:8 doesn't fit */

    while (downscale > 1 && pngmem(decoder, downscale/2) <= bufsize)
        downscale /= 2;

    return downscale;
}

/* how far can we zoom out, to fit image into the LCD */
unsigned max_downscale(struct LodePNG_Decoder* decoder)
{
    unsigned downscale = 1;

    while (downscale < 8 && (decoder->infoPng.width > LCD_WIDTH*downscale
                             || decoder->infoPng.height > LCD_HEIGHT*downscale))
    {
        downscale *= 2;
    }

    return downscale;
}

/* calculate the view center based on the bitmap position */
void get_view(struct LodePNG_Decoder* decoder, int* p_cx, int* p_cy)
{
    *p_cx = decoder->x + MIN(LCD_WIDTH, decoder->infoPng.width/ds) / 2;
    *p_cy = decoder->y + MIN(LCD_HEIGHT, decoder->infoPng.height/ds) / 2;
}

/* return decoded or cached image */
fb_data *get_image(struct LodePNG_Decoder* decoder)
{
    fb_data * p_disp = disp[ds]; /* short cut */

    if (p_disp != NULL)
    {
        DEBUGF("Found an image in cache\n");
        return p_disp; /* we still have it */
    }

    if (previous_disp == NULL) {
        previous_disp = converted_image;
        previous_size = converted_image_size;
    }

    size[ds] = decoder->infoPng.width * decoder->infoPng.height * FB_DATA_SZ / ds;

    /* assign image buffer */
    if (ds > 1) {
        if (!running_slideshow)
        {
            rb->snprintf(print, sizeof(print), "resizing %d*%d",
                         decoder->infoPng.width/ds, decoder->infoPng.height/ds);
            rb->lcd_puts(0, 3, print);
            rb->lcd_update();
        }
        static struct bitmap bmp_src, bmp_dst;

        disp[ds] = (fb_data *)((int)(previous_disp + previous_size + 3) & ~3);

        if ((unsigned char *)(disp[ds] + size[ds]) >= memory_max) {
            //rb->splash(HZ, "Out of Memory");
            // Still display the original image which is already decoded in RAM
            disp[ds] = NULL;
            ds = 1;
            return converted_image;
        } else {
            bmp_src.width = decoder->infoPng.width;
            bmp_src.height = decoder->infoPng.height;
            bmp_src.data = (unsigned char *)converted_image;

            bmp_dst.width = decoder->infoPng.width/ds;
            bmp_dst.height = decoder->infoPng.height/ds;
            bmp_dst.data = (unsigned char *)disp[ds];
#ifdef HAVE_ADJUSTABLE_CPU_FREQ
            rb->cpu_boost(true);
            smooth_resize_bitmap(&bmp_src, &bmp_dst);
            rb->cpu_boost(false);
#else
            smooth_resize_bitmap(&bmp_src, &bmp_dst);
#endif /*HAVE_ADJUSTABLE_CPU_FREQ*/
        }
    } else {
        disp[ds] = converted_image;
    }



    previous_disp = disp[ds];
    previous_size = size[ds];

    return disp[ds];


}

/* load, decode, display the image */
int load_and_show(char* filename)
{
    int fd;
    int status;
    long time=0; /* measured ticks */
    int cx=0, cy=0; /* view center */
    int w, h; /* used to center output */

    LodePNG_Decoder_init(&decoder);

    rb->lcd_clear_display();

    fd = rb->open(filename, O_RDONLY);
    if (fd < 0)
    {
        rb->snprintf(print,sizeof(print),"err opening %s:%d",filename,fd);
        rb->splash(HZ, print);
        return PLUGIN_ERROR;
    }
    image_size = rb->filesize(fd);
    memset(&disp, 0, sizeof(disp));
    previous_disp = NULL;
    previous_size = 0;

    DEBUGF("reading file '%s'\n", filename);

    if (!running_slideshow) {
#if LCD_DEPTH > 1
        rb->lcd_set_foreground(LCD_WHITE);
        rb->lcd_set_background(LCD_BLACK);
        rb->lcd_set_backdrop(NULL);
#endif

        rb->lcd_clear_display();
        rb->snprintf(print, sizeof(print), "%s:", rb->strrchr(filename,'/')+1);
        rb->lcd_puts(0, 0, print);
        rb->lcd_update();
    }

    if (rb->button_get(false) == PNG_MENU) {
        decoder.error = PLUGIN_ABORT;
        rb->close(fd);

    } else if (image_size > memory_size) {
        decoder.error = FILE_TOO_LARGE;
        rb->close(fd);

    } else {
        if (!running_slideshow) {
            rb->snprintf(print, sizeof(print), "loading %lu bytes", image_size);
            rb->lcd_puts(0, 1, print);
            rb->lcd_update();
        }

        image = memory_max - image_size + 1;
        rb->read(fd, image, image_size);
        rb->close(fd);

        if (!running_slideshow) {
            rb->snprintf(print, sizeof(print), "decoding image");
            rb->lcd_puts(0, 2, print);
            rb->lcd_update();
        }
#ifndef SIMULATOR
        else if (immediate_ata_off) {
            /* running slideshow and time is long enough: power down disk */
            rb->storage_sleep();
        }
#endif

        decoder.settings.color_convert = 1;
        decoder.infoRaw.color.colorType = 2;
        decoder.infoRaw.color.bitDepth = 8;

        if (rb->button_get(false) == PNG_MENU) {
            decoder.error = PLUGIN_ABORT;
        } else {
            LodePNG_inspect(&decoder, image, image_size);
        }

        if (!decoder.error) {

            if (!running_slideshow) {
                rb->snprintf(print, sizeof(print), "image %dx%d", decoder.infoPng.width, decoder.infoPng.height);
                rb->lcd_puts(0, 2, print);
                rb->lcd_update();
            }
            ds_max = max_downscale(&decoder);            /* check display constraint */

            ds = ds_max; /* initials setting */

            if (!running_slideshow)
            {
                rb->snprintf(print, sizeof(print), "decoding %d*%d",
                             decoder.infoPng.width, decoder.infoPng.height);
                rb->lcd_puts(0, 3, print);
                rb->lcd_update();
            }

            /* the actual decoding */
            time = *rb->current_tick;
#ifdef HAVE_ADJUSTABLE_CPU_FREQ
            rb->cpu_boost(true);
            LodePNG_decode(&decoder, image, image_size, cb_progress);
            rb->cpu_boost(false);
#else
            LodePNG_decode(&decoder, image, image_size, cb_progress);
#endif /*HAVE_ADJUSTABLE_CPU_FREQ*/

            ds_min = min_downscale(&decoder, memory_max - (unsigned char*)(converted_image + converted_image_size));  /* check memory constraint */

            if (ds_min == 0) {
                // Could not resize the image
                ds_min = ds = ds_max = 1;
            }
        }
    }

    if (decoder.error == PLUGIN_ABORT || decoder.error == FILE_TOO_LARGE) {
        rb->close(fd);
#ifndef SIMULATOR
        if (immediate_ata_off) {
            /* running slideshow and time is long enough: power down disk */
            rb->storage_sleep();
        }
#endif
    }

    time = *rb->current_tick - time;

    if (!running_slideshow && !decoder.error)
    {
        rb->snprintf(print, sizeof(print), " %ld.%02ld sec ", time/HZ, time%HZ);
        rb->lcd_getstringsize(print, &w, &h); /* centered in progress bar */
        rb->lcd_putsxy((LCD_WIDTH - w)/2, LCD_HEIGHT - h, print);
        rb->lcd_update();
    }

    do {
#if PLUGIN_BUFFER_SIZE >= MIN_MEM
        if (plug_buf && (decoder.error == FILE_TOO_LARGE || decoder.error == OUT_OF_MEMORY || decoder.error == Z_MEM_ERROR))
        {
            rb->lcd_setfont(FONT_SYSFIXED);
            rb->lcd_clear_display();
            rb->snprintf(print,sizeof(print),"%s:",rb->strrchr(filename,'/')+1);
            rb->lcd_puts(0,0,print);
            rb->lcd_puts(0,1,"Not enough plugin memory!");
            rb->lcd_puts(0,2,"Zoom In: Stop playback.");
            if (entries>1)
                rb->lcd_puts(0,3,"Left/Right: Skip File.");
            rb->lcd_puts(0,4,"Off: Quit.");
            rb->lcd_update();
            rb->lcd_setfont(FONT_UI);

            rb->button_clear_queue();

            while (1)
            {
                int button = rb->button_get(true);
                switch (button)
                {
                case PNG_ZOOM_IN:
                    plug_buf = false;
                    memory = rb->plugin_get_audio_buffer(
                                 (size_t *)&memory_size);
                    memory += (entries * sizeof(char**));
                    memory_size -= (entries * sizeof(char**));
                    memory_max = memory + memory_size - 1;
                    /*try again this file, now using the audio buffer */
                    return PLUGIN_OTHER;
#ifdef PNG_RC_MENU
                case PNG_RC_MENU:
#endif
                case PNG_MENU:
                    return PLUGIN_OK;

                case PNG_LEFT:
                    if (entries>1)
                    {
                        rb->lcd_clear_display();
                        return change_filename(DIR_PREV);
                    }
                    break;

                case PNG_RIGHT:
                    if (entries>1)
                    {
                        rb->lcd_clear_display();
                        return change_filename(DIR_NEXT);
                    }
                    break;
                default:
                    if (rb->default_event_handler_ex(button, cleanup, NULL)
                            == SYS_USB_CONNECTED)
                        return PLUGIN_USB_CONNECTED;

                }
            }
        }
        //else
#endif

        if (!decoder.error) {
            resized_image = get_image(&decoder); /* decode or fetch from cache */
        }
        if (decoder.error) {

            switch (decoder.error) {
            case PLUGIN_ABORT:
                rb->splash(HZ, "aborted");break;
            case 27:
                rb->splash(HZ, "png file smaller than a png header");break;
            case 28:
                rb->splash(HZ, "incorrect png signature");break;
            case 29:
                rb->splash(HZ, "first chunk is not IHDR");break;
            case 30:
                rb->splash(HZ, "chunk length too large");break;
            case 31:
                rb->splash(HZ, "illegal PNG color type or bpp");break;
            case 32:
                rb->splash(HZ, "illegal PNG compression method");break;
            case 33:
                rb->splash(HZ, "illegal PNG filter method");break;
            case 34:
                rb->splash(HZ, "illegal PNG interlace method");break;
            case 35:
                rb->splash(HZ, "chunk length of a chunk is too large or the chunk too small");break;
            case 36:
                rb->splash(HZ, "illegal PNG filter type encountered");break;
            case 37:
                rb->splash(HZ, "illegal bit depth for this color type given");break;
            case 38:
                rb->splash(HZ, "the palette is too big (more than 256 colors)");break;
            case 39:
                rb->splash(HZ, "more palette alpha values given in tRNS, than there are colors in the palette");break;
            case 40:
                rb->splash(HZ, "tRNS chunk has wrong size for greyscale image");break;
            case 41:
                rb->splash(HZ, "tRNS chunk has wrong size for RGB image");break;
            case 42:
                rb->splash(HZ, "tRNS chunk appeared while it was not allowed for this color type");break;
            case 43:
                rb->splash(HZ, "bKGD chunk has wrong size for palette image");break;
            case 44:
                rb->splash(HZ, "bKGD chunk has wrong size for greyscale image");break;
            case 45:
                rb->splash(HZ, "bKGD chunk has wrong size for RGB image");break;
            case 46:
            case 47:
                rb->splash(HZ, "value encountered in indexed image is larger than the palette size");break;
            case 48:
                rb->splash(HZ, "input file is empty");break;
            case OUT_OF_MEMORY:
            case Z_MEM_ERROR:
                rb->splash(HZ, "Out of Memory");break;
            case 57:
                rb->splash(HZ, "invalid CRC");break;
            case 59:
                rb->splash(HZ, "conversion to unexisting or unsupported color type or bit depth");break;
            case 63:
                rb->splash(HZ, "png chunk too long");break;
            case 69:
                rb->splash(HZ, "unknown critical chunk");break;
            case 73:
                rb->splash(HZ, "invalid tIME chunk size");break;
            case 74:
                rb->splash(HZ, "invalid pHYs chunk size");break;
            case FILE_TOO_LARGE:
                rb->splash(HZ, "File too large");break;
            case Z_DATA_ERROR:
                rb->splash(HZ, decoder.error_msg);break;
            default:
                rb->splashf(HZ, "other error : %ld", decoder.error);break;
            }

            if (decoder.error == PLUGIN_ABORT) {
                return PLUGIN_OK;
            } else if (decoder.error == OUT_OF_MEMORY && entries == 1) {
                return PLUGIN_ERROR;
            } else {
                return change_filename(direction);
            }

        }

        cx = decoder.infoPng.width/ds/2; /* center the view */
        cy = decoder.infoPng.height/ds/2;

        set_view(&decoder, cx, cy);

        if (!running_slideshow)
        {
            rb->snprintf(print, sizeof(print), "showing %dx%d",
                         decoder.infoPng.width/ds, decoder.infoPng.height/ds);
            rb->lcd_puts(0, 3, print);
            rb->lcd_update();
        }

        rb->lcd_clear_display();

        rb->lcd_bitmap_part(resized_image, decoder.x, decoder.y, decoder.infoPng.width/ds /*stride*/,
                            MAX(0, (LCD_WIDTH - (int)decoder.infoPng.width/(int)ds) / 2),
                            MAX(0, (LCD_HEIGHT - (int)decoder.infoPng.height/(int)ds) / 2),
                            MIN(LCD_WIDTH, decoder.infoPng.width/ds),
                            MIN(LCD_HEIGHT, decoder.infoPng.height/ds));

        rb->lcd_update();

        //}
        //}

        /* drawing is now finished, play around with scrolling
         * until you press OFF or connect USB
         */
        while (1)
        {
            status = scroll_bmp(&decoder);
            if (status == ZOOM_IN)
            {
                if (ds > ds_min)
                {
                    while (1)
                    {
                        ds /= 2; /* reduce downscaling to zoom in */
                        get_view(&decoder, &cx, &cy);
                        cx *= 2; /* prepare the position in the new image */
                        cy *= 2;
                        if (disp[ds] != converted_image || ds <= ds_min) break;
                    }
                }
                else
                    continue;
            }

            if (status == ZOOM_OUT)
            {
                if (ds < ds_max)
                {
                    while (1)
                    {
                        ds *= 2; /* increase downscaling to zoom out */
                        get_view(&decoder, &cx, &cy);
                        cx /= 2; /* prepare the position in the new image */
                        cy /= 2;
                        if (disp[ds] != converted_image || ds >= ds_max) break;
                    }
                }
                else
                    continue;
            }
            break;
        }
        rb->lcd_clear_display();
    }
    while (status != PLUGIN_OK && status != PLUGIN_USB_CONNECTED
            && status != PLUGIN_OTHER);

    return status;
}

/******************** Plugin entry point *********************/

enum plugin_status plugin_start(const void* parameter)
{
    int condition;
#if LCD_DEPTH > 1
    old_backdrop = rb->lcd_get_backdrop();
#endif

    if (!parameter) return PLUGIN_ERROR;

    rb->strcpy(np_file, parameter);
    get_pic_list();

    if (!entries) return PLUGIN_ERROR;

#if (PLUGIN_BUFFER_SIZE >= MIN_MEM) && !defined(SIMULATOR)
    if (rb->audio_status()) {
        memory = (unsigned char *)rb->plugin_get_buffer((size_t *)&memory_size);
        plug_buf = true;
    } else {
        memory = (unsigned char *)rb->plugin_get_audio_buffer((size_t *)&memory_size);
    }
#else
    memory = (unsigned char *)rb->plugin_get_audio_buffer((size_t *)&memory_size);
#endif

    memory += (entries * sizeof(char**));
    memory_size -= (entries * sizeof(char**));
    memory_max = memory + memory_size - 1;

    /* should be ok to just load settings since the plugin itself has
       just been loaded from disk and the drive should be spinning */
    configfile_load(PNG_CONFIGFILE, png_config,
                    ARRAYLEN(png_config), PNG_SETTINGS_MINVERSION);
    old_settings = png_settings;

    /* Turn off backlight timeout */
    backlight_force_on(); /* backlight control in lib/helper.c */

    do
    {
        condition = load_and_show(np_file);
    }while (condition != PLUGIN_OK && condition != PLUGIN_USB_CONNECTED
            && condition != PLUGIN_ERROR);

    if (rb->memcmp(&png_settings, &old_settings, sizeof (png_settings)))
    {
        /* Just in case drive has to spin, keep it from looking locked */
        rb->splash(0, "Saving Settings");
        configfile_save(PNG_CONFIGFILE, png_config,
                        ARRAYLEN(png_config), PNG_SETTINGS_VERSION);
    }

#if !defined(SIMULATOR) && defined(HAVE_DISK_STORAGE)
    /* set back ata spindown time in case we changed it */
    rb->storage_spindown(rb->global_settings->disk_spindown);
#endif

    /* Turn on backlight timeout (revert to settings) */
    backlight_use_settings(); /* backlight control in lib/helper.c */

    return condition;
}

