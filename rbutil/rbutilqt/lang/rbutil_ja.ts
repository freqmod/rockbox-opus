<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.0" language="ja_JP">
<context>
    <name>BackupDialog</name>
    <message>
        <location filename="../gui/backupdialogfrm.ui" line="14"/>
        <location filename="../gui/backupdialogfrm.ui" line="40"/>
        <source>Backup</source>
        <translation type="unfinished">バックアップ</translation>
    </message>
    <message>
        <location filename="../gui/backupdialogfrm.ui" line="30"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;This dialog will create a backup by archiving the contents of the Rockbox installation on the player into a zip file. This will include installed themes and settings stored below the .rockbox folder on the player.&lt;/p&gt;&lt;p&gt;The backup filename will be created based on the installed version. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/backupdialogfrm.ui" line="46"/>
        <source>Size: unknown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/backupdialogfrm.ui" line="53"/>
        <source>Backup to: unknown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/backupdialogfrm.ui" line="73"/>
        <source>&amp;Change</source>
        <translation type="unfinished">変更(&amp;C)</translation>
    </message>
    <message>
        <location filename="../gui/backupdialogfrm.ui" line="113"/>
        <source>&amp;Backup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/backupdialogfrm.ui" line="124"/>
        <source>&amp;Cancel</source>
        <translation type="unfinished">キャンセル(&amp;C)</translation>
    </message>
    <message>
        <location filename="../gui/backupdialog.cpp" line="66"/>
        <source>Installation size: calculating ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/backupdialog.cpp" line="85"/>
        <source>Select Backup Filename</source>
        <translation type="unfinished">バックアップファイルの選択</translation>
    </message>
    <message>
        <location filename="../gui/backupdialog.cpp" line="105"/>
        <source>Installation size: %L1 %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/backupdialog.cpp" line="112"/>
        <source>File exists</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/backupdialog.cpp" line="113"/>
        <source>The selected backup file already exists. Overwrite?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/backupdialog.cpp" line="121"/>
        <source>Starting backup ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/backupdialog.cpp" line="140"/>
        <source>Backup successful.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/backupdialog.cpp" line="143"/>
        <source>Backup failed!</source>
        <translation type="unfinished">バックアップが失敗しました!</translation>
    </message>
</context>
<context>
    <name>BootloaderInstallAms</name>
    <message>
        <location filename="../base/bootloaderinstallams.cpp" line="32"/>
        <source>Bootloader installation requires you to provide a copy of the original Sandisk firmware (bin file). This firmware file will be patched and then installed to your player along with the rockbox bootloader. You need to download this file yourself due to legal reasons. Please browse the &lt;a href=&apos;http://forums.sandisk.com/sansa/&apos;&gt;Sansa Forums&apos;&lt;/a&gt; or refer to the &lt;a href=&apos;http://www.rockbox.org/manual.shtml&apos;&gt;manual&lt;/a&gt; and the &lt;a href=&apos;http://www.rockbox.org/wiki/SansaAMS&apos;&gt;SansaAMS&lt;/a&gt; wiki page on how to obtain this file.&lt;br/&gt;Press Ok to continue and browse your computer for the firmware file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallams.cpp" line="55"/>
        <source>Downloading bootloader file</source>
        <translation>ブートローダをダウンロードしています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallams.cpp" line="97"/>
        <location filename="../base/bootloaderinstallams.cpp" line="110"/>
        <source>Could not load %1</source>
        <translation>%1 をロードすることができませんでした</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallams.cpp" line="124"/>
        <source>No room to insert bootloader, try another firmware version</source>
        <translation>ブートローダに挿入する余裕がありません。他のバージョンのファームウェアで試して下さい</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallams.cpp" line="134"/>
        <source>Patching Firmware...</source>
        <translation>ファームウェアにパッチをあてています...</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallams.cpp" line="145"/>
        <source>Could not open %1 for writing</source>
        <translation>書き込めるように %1 を開くことができませんでした</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallams.cpp" line="158"/>
        <source>Could not write firmware file</source>
        <translation>ファームウェアを書き込むことができませんでした</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallams.cpp" line="174"/>
        <source>Success: modified firmware file created</source>
        <translation>成功: 変更されたファームウェアが作成されました</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallams.cpp" line="182"/>
        <source>To uninstall, perform a normal upgrade with an unmodified original firmware</source>
        <translation>アンインストールは、改変されていないオリジナルのファームウェアを用いて通常の方法でファームウェアの更新を行って下さい</translation>
    </message>
</context>
<context>
    <name>BootloaderInstallBase</name>
    <message>
        <location filename="../base/bootloaderinstallbase.cpp" line="76"/>
        <source>Download error: received HTTP error %1.</source>
        <translation>ダウンロードエラー: HTTP 受信のエラー %1.</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallbase.cpp" line="82"/>
        <source>Download error: %1</source>
        <translation>ダウンロードエラー: %1</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallbase.cpp" line="88"/>
        <source>Download finished (cache used).</source>
        <translation>ダウンロードが終了しました (キャッシュの使用)。</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallbase.cpp" line="90"/>
        <source>Download finished.</source>
        <translation>ダウンロードが終了しました。</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallbase.cpp" line="111"/>
        <source>Creating backup of original firmware file.</source>
        <translation>オリジナルのファームウェアのバックアップを行っています。</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallbase.cpp" line="113"/>
        <source>Creating backup folder failed</source>
        <translation>バックアップフォルダの作成に失敗しました</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallbase.cpp" line="119"/>
        <source>Creating backup copy failed.</source>
        <translation>バックアップに失敗しました。</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallbase.cpp" line="122"/>
        <source>Backup created.</source>
        <translation>バックアップが作成されました。</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallbase.cpp" line="135"/>
        <source>Creating installation log</source>
        <translation>インストール時のログを作成しています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallbase.cpp" line="221"/>
        <source>Zip file format detected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallbase.cpp" line="234"/>
        <source>Extracting firmware %1 from archive</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallbase.cpp" line="241"/>
        <source>Error extracting firmware from archive</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallbase.cpp" line="250"/>
        <source>Could not find firmware in archive</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallbase.cpp" line="157"/>
        <source>Waiting for system to remount player</source>
        <translation>プレイヤーが再びマウントされるのを待っています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallbase.cpp" line="187"/>
        <source>Player remounted</source>
        <translation>プレイヤーが再びマウントしました</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallbase.cpp" line="192"/>
        <source>Timeout on remount</source>
        <translation>プレイヤーの再マウント処理がタイムアウトしました</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallbase.cpp" line="147"/>
        <source>Installation log created</source>
        <translation>インストール時のログを作成しました</translation>
    </message>
</context>
<context>
    <name>BootloaderInstallChinaChip</name>
    <message>
        <location filename="../base/bootloaderinstallchinachip.cpp" line="33"/>
        <source>Bootloader installation requires you to provide a firmware file of the original firmware (HXF file). You need to download this file yourself due to legal reasons. Please refer to the &lt;a href=&apos;http://www.rockbox.org/manual.shtml&apos;&gt;manual&lt;/a&gt; and the &lt;a href=&apos;http://www.rockbox.org/wiki/OndaVX747#Download_and_extract_a_recent_ve&apos;&gt;OndaVX747&lt;/a&gt; wiki page on how to obtain this file.&lt;br/&gt;Press Ok to continue and browse your computer for the firmware file.</source>
        <translation>ブートローダのインストールには、オリジナルのファームウェア(HXF 形式のファイル)を用意する必要があります。法律上の理由により、ファームウェアはあなた自身でダウンロードする必要があります。&lt;a href=&apos;http://www.rockbox.org/manual.shtml&apos;&gt;マニュアル&lt;/a&gt; および、ファームウェアを取得する方法が書かれた &lt;a href=&apos;http://www.rockbox.org/wiki/OndaVX747#Download_and_extract_a_recent_ve&apos;&gt;OndaVX747&lt;/a&gt; の Wiki ページを参考にして下さい。&lt;br/&gt;ファームウェアが用意できましたら、OKボタンを押して下さい。</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallchinachip.cpp" line="50"/>
        <source>Downloading bootloader file</source>
        <translation>ブートローダをダウンロードしています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallchinachip.cpp" line="75"/>
        <source>Could not open firmware file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallchinachip.cpp" line="78"/>
        <source>Could not open bootloader file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallchinachip.cpp" line="81"/>
        <source>Could not allocate memory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallchinachip.cpp" line="84"/>
        <source>Could not load firmware file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallchinachip.cpp" line="87"/>
        <source>File is not a valid ChinaChip firmware</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallchinachip.cpp" line="90"/>
        <source>Could not find ccpmp.bin in input file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallchinachip.cpp" line="93"/>
        <source>Could not open backup file for ccpmp.bin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallchinachip.cpp" line="96"/>
        <source>Could not write backup file for ccpmp.bin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallchinachip.cpp" line="99"/>
        <source>Could not load bootloader file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallchinachip.cpp" line="102"/>
        <source>Could not get current time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallchinachip.cpp" line="105"/>
        <source>Could not open output file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallchinachip.cpp" line="108"/>
        <source>Could not write output file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallchinachip.cpp" line="111"/>
        <source>Unexpected error from chinachippatcher</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>BootloaderInstallFile</name>
    <message>
        <location filename="../base/bootloaderinstallfile.cpp" line="33"/>
        <source>Downloading bootloader</source>
        <translation>ブートローダをダウンロードしています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallfile.cpp" line="42"/>
        <source>Installing Rockbox bootloader</source>
        <translation>Rockboxのブートローダをインストールしています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallfile.cpp" line="74"/>
        <source>Error accessing output folder</source>
        <translation>出力フォルダへのアクセスエラー</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallfile.cpp" line="88"/>
        <source>A firmware file is already present on player</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallfile.cpp" line="93"/>
        <source>Bootloader successful installed</source>
        <translation>ブートローダのインストールが成功しました</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallfile.cpp" line="96"/>
        <source>Copying modified firmware file failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallfile.cpp" line="110"/>
        <source>Removing Rockbox bootloader</source>
        <translation>Rockboxのブートローダを削除しています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallfile.cpp" line="114"/>
        <source>No original firmware file found.</source>
        <translation>オリジナルのファームウェアが見つかりませんでした。</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallfile.cpp" line="120"/>
        <source>Can&apos;t remove Rockbox bootloader file.</source>
        <translation>Rockboxのブートローダの削除ができません。</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallfile.cpp" line="125"/>
        <source>Can&apos;t restore bootloader file.</source>
        <translation>ブートローダファイルの復旧ができません。</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallfile.cpp" line="129"/>
        <source>Original bootloader restored successfully.</source>
        <translation>オリジナルのブートローダの復旧が成功しました。</translation>
    </message>
</context>
<context>
    <name>BootloaderInstallHex</name>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="68"/>
        <source>checking MD5 hash of input file ...</source>
        <translation>入力ファイルのMD5ハッシュ値をチェックしています...</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="79"/>
        <source>Could not verify original firmware file</source>
        <translation>オリジナルのファームウェアファイルの確認ができませんでした</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="94"/>
        <source>Firmware file not recognized.</source>
        <translation>ファームウェアファイルが認識されません。</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="98"/>
        <source>MD5 hash ok</source>
        <translation>MD5ハッシュ値ok</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="105"/>
        <source>Firmware file doesn&apos;t match selected player.</source>
        <translation>ファームウェアファイルは、選択されたプレイヤーに適合しません。</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="110"/>
        <source>Descrambling file</source>
        <translation>ファームウェアを復号しています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="118"/>
        <source>Error in descramble: %1</source>
        <translation>ファームウェアの復号処理時にエラーが発生しました: %1</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="123"/>
        <source>Downloading bootloader file</source>
        <translation>ブートローダをダウンロードしています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="133"/>
        <source>Adding bootloader to firmware file</source>
        <translation>ファームウェアファイルにブートローダを追加しています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="171"/>
        <source>could not open input file</source>
        <translation>入力ファイルを開くことができませんでした</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="172"/>
        <source>reading header failed</source>
        <translation>ヘッダの読み込みに失敗しました</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="173"/>
        <source>reading firmware failed</source>
        <translation>ファームウェアの読み込みに失敗しました</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="174"/>
        <source>can&apos;t open bootloader file</source>
        <translation>ブートローダが読み込めません</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="175"/>
        <source>reading bootloader file failed</source>
        <translation>ブートローダの読み込みに失敗しました</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="176"/>
        <source>can&apos;t open output file</source>
        <translation>出力ファイルが読み込めません</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="177"/>
        <source>writing output file failed</source>
        <translation>出力ファイルの出力に失敗しました</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="179"/>
        <source>Error in patching: %1</source>
        <translation>ファームウェアにパッチをあてる処理でエラーが発生しました: %1</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="190"/>
        <source>Error in scramble: %1</source>
        <translation>ファームウェアの暗号化処理に失敗しました: %1</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="205"/>
        <source>Checking modified firmware file</source>
        <translation>変更されたファームウェアをチェックしています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="207"/>
        <source>Error: modified file checksum wrong</source>
        <translation>エラー: 変更されたファームウェアのチェックサムの値が間違っています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="214"/>
        <source>A firmware file is already present on player</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="219"/>
        <source>Success: modified firmware file created</source>
        <translation>成功: 変更されたファームウェアが作成されました</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="222"/>
        <source>Copying modified firmware file failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="236"/>
        <source>Uninstallation not possible, only installation info removed</source>
        <translation>アンインストールはできません。インストール情報を削除するだけです</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="257"/>
        <source>Can&apos;t open input file</source>
        <translation>入力ファイルをオープンすることができません</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="258"/>
        <source>Can&apos;t open output file</source>
        <translation>出力ファイルを開くことができません</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="259"/>
        <source>invalid file: header length wrong</source>
        <translation>不正なファイル: ヘッダの長さが間違っています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="260"/>
        <source>invalid file: unrecognized header</source>
        <translation>不正なファイル: ヘッダが正しくありません</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="261"/>
        <source>invalid file: &quot;length&quot; field wrong</source>
        <translation>不正なファイル: &quot;length&quot; の値が間違っています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="262"/>
        <source>invalid file: &quot;length2&quot; field wrong</source>
        <translation>不正なファイル: &quot;length2&quot; の値が間違っています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="263"/>
        <source>invalid file: internal checksum error</source>
        <translation>不正なファイル: ファームウェアに書かれたチェックサムの値が間違っています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="264"/>
        <source>invalid file: &quot;length3&quot; field wrong</source>
        <translation>不正なファイル: &quot;length3&quot; の値が間違っています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="265"/>
        <source>unknown</source>
        <translation>不明</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhex.cpp" line="49"/>
        <source>Bootloader installation requires you to provide a firmware file of the original firmware (hex file). You need to download this file yourself due to legal reasons. Please refer to the &lt;a href=&apos;http://www.rockbox.org/manual.shtml&apos;&gt;manual&lt;/a&gt; and the &lt;a href=&apos;http://www.rockbox.org/wiki/IriverBoot#Download_and_extract_a_recent_ve&apos;&gt;IriverBoot&lt;/a&gt; wiki page on how to obtain this file.&lt;br/&gt;Press Ok to continue and browse your computer for the firmware file.</source>
        <translation>ブートローダのインストールには、オリジナルのファームウェア(hex 形式のファイル)を用意する必要があります。法律上の理由により、ファームウェアはあなた自身でダウンロードする必要があります。&lt;a href=&apos;http://www.rockbox.org/manual.shtml&apos;&gt;マニュアル&lt;/a&gt; および、ファームウェアを取得する方法が書かれた &lt;a href=&apos;http://www.rockbox.org/wiki/IriverBoot#Download_and_extract_a_recent_ve&apos;&gt;IriverBoot&lt;/a&gt; の Wiki ページを参考にして下さい。&lt;br/&gt;ファームウェアが用意できましたら、OKボタンを押して下さい。</translation>
    </message>
</context>
<context>
    <name>BootloaderInstallImx</name>
    <message>
        <location filename="../base/bootloaderinstallimx.cpp" line="70"/>
        <source>Bootloader installation requires you to provide a copy of the original Sandisk firmware (firmware.sb file). This file will be patched with the Rockbox bootloader and installed to your player. You need to download this file yourself due to legal reasons. Please browse the &lt;a href=&apos;http://forums.sandisk.com/sansa/&apos;&gt;Sansa Forums&lt;/a&gt; or refer to the &lt;a href= &apos;http://www.rockbox.org/wiki/SansaFuzePlus&apos;&gt;SansaFuzePlus&lt;/a&gt; wiki page on how to obtain this file.&lt;br/&gt;Press Ok to continue and browse your computer for the firmware file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallimx.cpp" line="92"/>
        <source>Could not read original firmware file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallimx.cpp" line="98"/>
        <source>Downloading bootloader file</source>
        <translation type="unfinished">ブートローダをダウンロードしています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallimx.cpp" line="108"/>
        <source>Patching file...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallimx.cpp" line="135"/>
        <source>Patching the original firmware failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallimx.cpp" line="141"/>
        <source>Succesfully patched firmware file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallimx.cpp" line="156"/>
        <source>Bootloader successful installed</source>
        <translation type="unfinished">ブートローダのインストールが成功しました</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallimx.cpp" line="162"/>
        <source>Patched bootloader could not be installed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallimx.cpp" line="173"/>
        <source>To uninstall, perform a normal upgrade with an unmodified original firmware.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>BootloaderInstallIpod</name>
    <message>
        <location filename="../base/bootloaderinstallipod.cpp" line="53"/>
        <source>Error: can&apos;t allocate buffer memory!</source>
        <translation>エラー: メモリの割り当てに失敗しました!</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallipod.cpp" line="81"/>
        <source>Downloading bootloader file</source>
        <translation>ブートローダをダウンロードしています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallipod.cpp" line="65"/>
        <location filename="../base/bootloaderinstallipod.cpp" line="152"/>
        <source>Failed to read firmware directory</source>
        <translation>ファームウェアのあるディレクトリの読み込みに失敗しました</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallipod.cpp" line="70"/>
        <location filename="../base/bootloaderinstallipod.cpp" line="157"/>
        <source>Unknown version number in firmware (%1)</source>
        <translation>ファームウェアのバージョン(%1)が不明です</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallipod.cpp" line="76"/>
        <source>Warning: This is a MacPod, Rockbox only runs on WinPods. 
See http://www.rockbox.org/wiki/IpodConversionToFAT32</source>
        <translation>注意: Macintosh 専用の iPod です。Rockbox は、Windows で使用できる iPod でしか動作しません。
  http://www.rockbox.org/wiki/IpodConversionToFAT32 を参照して下さい</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallipod.cpp" line="95"/>
        <location filename="../base/bootloaderinstallipod.cpp" line="164"/>
        <source>Could not open Ipod in R/W mode</source>
        <translation>iPod に読み書きできるようにアクセスすることができませんでした</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallipod.cpp" line="105"/>
        <source>Successfull added bootloader</source>
        <translation>ブートローダの追加が成功しました</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallipod.cpp" line="116"/>
        <source>Failed to add bootloader</source>
        <translation>ブートローダの追加に失敗しました</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallipod.cpp" line="128"/>
        <source>Bootloader Installation complete.</source>
        <translation>ブートローダのインストールが完了しました。</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallipod.cpp" line="133"/>
        <source>Writing log aborted</source>
        <translation>ログの出力が失敗しました</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallipod.cpp" line="170"/>
        <source>No bootloader detected.</source>
        <translation>ブートローダが検出されませんでした。</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallipod.cpp" line="230"/>
        <source>Error: could not retrieve device name</source>
        <translation>エラー: デバイス名を得ることができません</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallipod.cpp" line="246"/>
        <source>Error: no mountpoint specified!</source>
        <translation>エラー: マウントポイントがありません!</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallipod.cpp" line="251"/>
        <source>Could not open Ipod: permission denied</source>
        <translation>iPod にアクセスすることができませんでした: アクセス権限がありません</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallipod.cpp" line="255"/>
        <source>Could not open Ipod</source>
        <translation>iPod にアクセスできませんでした</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallipod.cpp" line="266"/>
        <source>No firmware partition on disk</source>
        <translation>ファームウェアが存在しません</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallipod.cpp" line="176"/>
        <source>Successfully removed bootloader</source>
        <translation>ブートローダの削除が成功しました</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallipod.cpp" line="183"/>
        <source>Removing bootloader failed.</source>
        <translation>ブートローダの削除に失敗しました。</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallipod.cpp" line="91"/>
        <source>Installing Rockbox bootloader</source>
        <translation>Rockbox のブートローダをインストールしています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallipod.cpp" line="143"/>
        <source>Uninstalling bootloader</source>
        <translation>ブートローダをアンインストールしています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallipod.cpp" line="260"/>
        <source>Error reading partition table - possibly not an Ipod</source>
        <translation>パーティションテーブルの読み込みのエラー - iPod ではない可能性があります</translation>
    </message>
</context>
<context>
    <name>BootloaderInstallMi4</name>
    <message>
        <location filename="../base/bootloaderinstallmi4.cpp" line="33"/>
        <source>Downloading bootloader</source>
        <translation>ブートローダをダウンロードしています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallmi4.cpp" line="42"/>
        <source>Installing Rockbox bootloader</source>
        <translation>Rockboxのブートローダをインストールしています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallmi4.cpp" line="65"/>
        <source>A firmware file is already present on player</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallmi4.cpp" line="70"/>
        <location filename="../base/bootloaderinstallmi4.cpp" line="78"/>
        <source>Bootloader successful installed</source>
        <translation>ブートローダのインストールが成功しました</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallmi4.cpp" line="73"/>
        <source>Copying modified firmware file failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallmi4.cpp" line="90"/>
        <source>Checking for Rockbox bootloader</source>
        <translation>Rockboxのブートローダをチェックしています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallmi4.cpp" line="92"/>
        <source>No Rockbox bootloader found</source>
        <translation>Rockboxのブートローダが見つかりませんでした</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallmi4.cpp" line="97"/>
        <source>Checking for original firmware file</source>
        <translation>オリジナルのファームウェアをチェックしています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallmi4.cpp" line="102"/>
        <source>Error finding original firmware file</source>
        <translation>オリジナルのファームウェアの検出エラー</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallmi4.cpp" line="112"/>
        <source>Rockbox bootloader successful removed</source>
        <translation>Rockboxのブートローダの削除が成功しました</translation>
    </message>
</context>
<context>
    <name>BootloaderInstallMpio</name>
    <message>
        <location filename="../base/bootloaderinstallmpio.cpp" line="33"/>
        <source>Bootloader installation requires you to provide a firmware file of the original firmware (bin file). You need to download this file yourself due to legal reasons. Please refer to the &lt;a href=&apos;http://www.rockbox.org/manual.shtml&apos;&gt;manual&lt;/a&gt; and the &lt;a href=&apos;http://www.rockbox.org/wiki/MPIOHD200Port&apos;&gt;MPIOHD200Port&lt;/a&gt; wiki page on how to obtain this file.&lt;br/&gt;Press Ok to continue and browse your computer for the firmware file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallmpio.cpp" line="52"/>
        <source>Downloading bootloader file</source>
        <translation type="unfinished">ブートローダをダウンロードしています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallmpio.cpp" line="79"/>
        <source>Could not open the original firmware.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallmpio.cpp" line="82"/>
        <source>Could not read the original firmware.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallmpio.cpp" line="85"/>
        <source>Loaded firmware file does not look like MPIO original firmware file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallmpio.cpp" line="100"/>
        <source>Could not open output file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallmpio.cpp" line="103"/>
        <source>Could not write output file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallmpio.cpp" line="106"/>
        <source>Unknown error number: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallmpio.cpp" line="88"/>
        <source>Could not open downloaded bootloader.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallmpio.cpp" line="91"/>
        <source>Place for bootloader in OF file not empty.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallmpio.cpp" line="94"/>
        <source>Could not read the downloaded bootloader.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallmpio.cpp" line="97"/>
        <source>Bootloader checksum error.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallmpio.cpp" line="111"/>
        <source>Patching original firmware failed: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallmpio.cpp" line="118"/>
        <source>Success: modified firmware file created</source>
        <translation type="unfinished">成功: 変更されたファームウェアが作成されました</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallmpio.cpp" line="126"/>
        <source>To uninstall, perform a normal upgrade with an unmodified original firmware</source>
        <translation type="unfinished">アンインストールは、改変されていないオリジナルのファームウェアを用いて通常の方法でファームウェアの更新を行って下さい</translation>
    </message>
</context>
<context>
    <name>BootloaderInstallSansa</name>
    <message>
        <location filename="../base/bootloaderinstallsansa.cpp" line="55"/>
        <source>Error: can&apos;t allocate buffer memory!</source>
        <translation>エラー: メモリの割り当てに失敗しました!</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallsansa.cpp" line="60"/>
        <source>Searching for Sansa</source>
        <translation>Sansa を探しています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallsansa.cpp" line="66"/>
        <source>Permission for disc access denied!
This is required to install the bootloader</source>
        <translation>このプレイヤーに対するディスクアクセスの権限がありません!
ブートローダのインストールには、ディスクアクセスの権限が必要です</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallsansa.cpp" line="73"/>
        <source>No Sansa detected!</source>
        <translation>Sansa が検出されませんでした!</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallsansa.cpp" line="86"/>
        <source>Downloading bootloader file</source>
        <translation>ブートローダをダウンロードしています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallsansa.cpp" line="78"/>
        <location filename="../base/bootloaderinstallsansa.cpp" line="188"/>
        <source>OLD ROCKBOX INSTALLATION DETECTED, ABORTING.
You must reinstall the original Sansa firmware before running
sansapatcher for the first time.
See http://www.rockbox.org/wiki/SansaE200Install
</source>
        <translation>&lt;b&gt;古い Rockbox がインストールされていますので、処理を中止します。&lt;/b&gt;
sansapatcher を最初に実行する前に、Sansa のオリジナル
ファームウェアをインストールしなければいけません。
http://www.rockbox.org/wiki/SansaE200Install を参照して下さい
</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallsansa.cpp" line="110"/>
        <location filename="../base/bootloaderinstallsansa.cpp" line="198"/>
        <source>Could not open Sansa in R/W mode</source>
        <translation>Sansa に読み書きできるようにアクセスすることができませんでした</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallsansa.cpp" line="137"/>
        <source>Successfully installed bootloader</source>
        <translation>ブートローダのインストールに成功しました</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallsansa.cpp" line="148"/>
        <source>Failed to install bootloader</source>
        <translation>ブートローダのインストールに失敗しました</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallsansa.cpp" line="161"/>
        <source>Bootloader Installation complete.</source>
        <translation>ブートローダのインストールが完了しました。</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallsansa.cpp" line="166"/>
        <source>Writing log aborted</source>
        <translation>ログの出力が失敗しました</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallsansa.cpp" line="248"/>
        <source>Error: could not retrieve device name</source>
        <translation>エラー: デバイス名を得ることができません</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallsansa.cpp" line="264"/>
        <source>Can&apos;t find Sansa</source>
        <translation>Sansa が見つかりませんでした</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallsansa.cpp" line="269"/>
        <source>Could not open Sansa</source>
        <translation>Sansa にアクセスできませんでした</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallsansa.cpp" line="274"/>
        <source>Could not read partition table</source>
        <translation>パーティションテーブルを読み込めませんでした</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallsansa.cpp" line="281"/>
        <source>Disk is not a Sansa (Error %1), aborting.</source>
        <translation>Sansa にディスクが見つかりませんでした (エラー: %1)。処理を中止します。</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallsansa.cpp" line="204"/>
        <source>Successfully removed bootloader</source>
        <translation>ブートローダの削除が成功しました</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallsansa.cpp" line="211"/>
        <source>Removing bootloader failed.</source>
        <translation>ブートローダの削除に失敗しました。</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallsansa.cpp" line="102"/>
        <source>Installing Rockbox bootloader</source>
        <translation>Rockboxのブートローダをインストールしています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallsansa.cpp" line="179"/>
        <source>Uninstalling bootloader</source>
        <translation>ブートローダをアンインストールしています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallsansa.cpp" line="119"/>
        <source>Checking downloaded bootloader</source>
        <translation>ダウンロードしたブートローダをチェックしています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallsansa.cpp" line="127"/>
        <source>Bootloader mismatch! Aborting.</source>
        <translation>ブートローダが正しくありません! 処理を中止します。</translation>
    </message>
</context>
<context>
    <name>BootloaderInstallTcc</name>
    <message>
        <location filename="../base/bootloaderinstalltcc.cpp" line="33"/>
        <source>Bootloader installation requires you to provide a firmware file of the original firmware (bin file). You need to download this file yourself due to legal reasons. Please refer to the &lt;a href=&apos;http://www.rockbox.org/manual.shtml&apos;&gt;manual&lt;/a&gt; and the &lt;a href=&apos;http://www.rockbox.org/wiki/CowonD2Info&apos;&gt;CowonD2Info&lt;/a&gt; wiki page on how to obtain the file.&lt;br/&gt;Press Ok to continue and browse your computer for the firmware file.</source>
        <translation>ブートローダのインストールには、オリジナルのファームウェア(bin 形式のファイル)を用意する必要があります。法律上の理由により、ファームウェアはあなた自身でダウンロードする必要があります。&lt;a href=&apos;http://www.rockbox.org/manual.shtml&apos;&gt;マニュアル&lt;/a&gt; および、ファームウェアを取得する方法が書かれた &lt;a href=&apos;http://www.rockbox.org/wiki/CowonD2Info&apos;&gt;CowonD2&lt;/a&gt; の Wiki ページを参考にして下さい。&lt;br/&gt;ファームウェアが用意できましたら、OKボタンを押して下さい。</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstalltcc.cpp" line="50"/>
        <source>Downloading bootloader file</source>
        <translation>ブートローダをダウンロードしています</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstalltcc.cpp" line="82"/>
        <location filename="../base/bootloaderinstalltcc.cpp" line="99"/>
        <source>Could not load %1</source>
        <translation>%1 をロードすることができませんでした</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstalltcc.cpp" line="90"/>
        <source>Unknown OF file used: %1</source>
        <translation>不明なオリジナルファームウェアが使用されています: %1</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstalltcc.cpp" line="104"/>
        <source>Patching Firmware...</source>
        <translation>ファームウェアにパッチをあてています...</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstalltcc.cpp" line="111"/>
        <source>Could not patch firmware</source>
        <translation>ファームウェアにパッチをあてることができませんでした</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstalltcc.cpp" line="117"/>
        <source>Could not open %1 for writing</source>
        <translation>書き込めるように %1 を開くことができませんでした</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstalltcc.cpp" line="126"/>
        <source>Could not write firmware file</source>
        <translation>ファームウェアを書き込むことができませんでした</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstalltcc.cpp" line="131"/>
        <source>Success: modified firmware file created</source>
        <translation>成功: 変更されたファームウェアが作成されました</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstalltcc.cpp" line="151"/>
        <source>To uninstall, perform a normal upgrade with an unmodified original firmware</source>
        <translation>アンインストールは、改変されていないオリジナルのファームウェアを用いて通常の方法でファームウェアの更新を行って下さい</translation>
    </message>
</context>
<context>
    <name>Config</name>
    <message>
        <location filename="../configure.cpp" line="776"/>
        <location filename="../configure.cpp" line="785"/>
        <source>Autodetection</source>
        <translation>自動検出</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="777"/>
        <source>Could not detect a Mountpoint.
Select your Mountpoint manually.</source>
        <translation>マウントポイントが検出できませんでした。
マウントポイントを手動で選択して下さい。</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="786"/>
        <source>Could not detect a device.
Select your device and Mountpoint manually.</source>
        <translation>デバイスが検出できませんでした。
デバイスおよびマウントポイントを手動で選択して下さい。</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="797"/>
        <source>Really delete cache?</source>
        <translation>本当にキャッシュを削除していいですか?</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="798"/>
        <source>Do you really want to delete the cache? Make absolutely sure this setting is correct as it will remove &lt;b&gt;all&lt;/b&gt; files in this folder!</source>
        <translation>本当にキャッシュを削除しますか?  このフォルダに含まれる&lt;b&gt;全ての&lt;/b&gt;ファイルを削除しますので、絶対に正しい値を設定して下さい!</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="806"/>
        <source>Path wrong!</source>
        <translation>パスが間違っています!</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="807"/>
        <source>The cache path is invalid. Aborting.</source>
        <translation>キャッシュのパスが不正です。処理を中止します。</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="306"/>
        <source>Current cache size is %L1 kiB.</source>
        <translation>現在のキャッシュサイズは、%L1 kiB です。</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="755"/>
        <source>Fatal error</source>
        <translation>致命的なエラー</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="423"/>
        <location filename="../configure.cpp" line="453"/>
        <source>Configuration OK</source>
        <translation>設定OK</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="429"/>
        <location filename="../configure.cpp" line="458"/>
        <source>Configuration INVALID</source>
        <translation>不正な設定</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="122"/>
        <source>The following errors occurred:</source>
        <translation>以下のエラーが発生しました:</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="161"/>
        <source>No mountpoint given</source>
        <translation>マウントポイントが入力されていません</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="165"/>
        <source>Mountpoint does not exist</source>
        <translation>マウントポイントが存在しません</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="169"/>
        <source>Mountpoint is not a directory.</source>
        <translation>マウントポイントがフォルダではありません。</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="173"/>
        <source>Mountpoint is not writeable</source>
        <translation>マウントポイントが書き込み禁止です</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="188"/>
        <source>No player selected</source>
        <translation>プレイヤーが選択されていません</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="195"/>
        <source>Cache path not writeable. Leave path empty to default to systems temporary path.</source>
        <translation>キャッシュのパスが書き込み禁止です。デフォルトのシステムテンポラリパスを空にします。</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="215"/>
        <source>You need to fix the above errors before you can continue.</source>
        <translation>処理を続行する前に、上記のエラーを修正する必要があります。</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="218"/>
        <source>Configuration error</source>
        <translation>設定エラー</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="315"/>
        <source>Showing disabled targets</source>
        <translation>推奨されないプレイヤーの表示</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="316"/>
        <source>You just enabled showing targets that are marked disabled. Disabled targets are not recommended to end users. Please use this option only if you know what you are doing.</source>
        <translation>あなたは推奨されないプレイヤーを表示するように変更しました。推奨外のプレイヤーは、一般的なユーザにはお勧めできません。どんなことがおきても、あなたが対処できる場合に限りこのオプションを有効にして下さい。</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="498"/>
        <source>Proxy Detection</source>
        <translation>プロキシの検出</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="499"/>
        <source>The System Proxy settings are invalid!
Rockbox Utility can&apos;t work with this proxy settings. Make sure the system proxy is set correctly. Note that &quot;proxy auto-config (PAC)&quot; scripts are not supported by Rockbox Utility. If your system uses this you need to use manual proxy settings.</source>
        <translation>システムのプロキシ設定は正しくありません
Rockbox Utility は、このプロキシの設定では動作できません。システムのプロキシ設定を正しく設定して下さい。注意 &quot;proxy auto-config (PAC)&quot; スクリプトは、 Rockbox Utility ではサポートされていません。もし、あなたが使用しているシステムがこれを使用しているならば、手動でプロキシの設定を行う必要があります。</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="612"/>
        <source>Set Cache Path</source>
        <translation>キャッシュのパスを設定して下さい</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="741"/>
        <source>%1 &quot;MacPod&quot; found!
Rockbox needs a FAT formatted Ipod (so-called &quot;WinPod&quot;) to run. </source>
        <translation>%1 Macintosh 専用の iPod が見つかりました。
Rockbox を実行するには、FAT 形式でフォーマットされた iPod (&quot;WinMad&quot;)が必要です。</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="748"/>
        <source>%1 in MTP mode found!
You need to change your player to MSC mode for installation. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="753"/>
        <source>Until you change this installation will fail!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="760"/>
        <source>Detected an unsupported player:
%1
Sorry, Rockbox doesn&apos;t run on your player.</source>
        <translation>サポートされていないプレイヤーが見つかりました。:
%1
残念ながら、Rockbox はこのプレイヤーでは動きません。</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="765"/>
        <source>Fatal: player incompatible</source>
        <translation>致命的なエラー: 互換性のないプレイヤーです</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="845"/>
        <source>TTS configuration invalid</source>
        <translation>TTS の設定が不正です</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="846"/>
        <source>TTS configuration invalid. 
 Please configure TTS engine.</source>
        <translation>TTS の設定が不正です
TTSエンジンの設定を行って下さい。</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="851"/>
        <source>Could not start TTS engine.</source>
        <translation>TTS エンジンが実行できませんでした。</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="852"/>
        <source>Could not start TTS engine.
</source>
        <translation>TTS エンジンが実行できませんでした。
</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="853"/>
        <location filename="../configure.cpp" line="872"/>
        <source>
Please configure TTS engine.</source>
        <translation>
TTSエンジンの設定を行って下さい。</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="867"/>
        <source>Rockbox Utility Voice Test</source>
        <translation>Rockbox Utility Voice Test</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="870"/>
        <source>Could not voice test string.</source>
        <translation>ボイスのテストができませんでした。</translation>
    </message>
    <message>
        <location filename="../configure.cpp" line="871"/>
        <source>Could not voice test string.
</source>
        <translation>ボイスのテストができませんでした。
</translation>
    </message>
</context>
<context>
    <name>ConfigForm</name>
    <message>
        <location filename="../configurefrm.ui" line="14"/>
        <source>Configuration</source>
        <translation>設定</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="20"/>
        <source>Configure Rockbox Utility</source>
        <translation>Rockbox Utilityの設定</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="539"/>
        <source>&amp;Ok</source>
        <translation>Ok(&amp;O)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="550"/>
        <source>&amp;Cancel</source>
        <translation>キャンセル(&amp;C)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="136"/>
        <source>&amp;Proxy</source>
        <translation>プロキシーを使用(&amp;P)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="95"/>
        <source>Show disabled targets</source>
        <translation>推奨外のプレイヤーを表示</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="142"/>
        <source>&amp;No Proxy</source>
        <translation>プロキシーの不使用(&amp;N)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="159"/>
        <source>&amp;Manual Proxy settings</source>
        <translation>プロキシーの手動設定(&amp;M)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="166"/>
        <source>Proxy Values</source>
        <translation>プロキシーの値</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="172"/>
        <source>&amp;Host:</source>
        <translation>ホスト(&amp;H):</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="189"/>
        <source>&amp;Port:</source>
        <translation>ポート(&amp;P):</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="212"/>
        <source>&amp;Username</source>
        <translation>ユーザ名(&amp;U)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="253"/>
        <source>&amp;Language</source>
        <translation>表示言語(&amp;L)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="35"/>
        <source>&amp;Device</source>
        <translation>デバイス(&amp;D)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="41"/>
        <source>Select your device in the &amp;filesystem</source>
        <translation>ファイルシステムを選択して下さい(&amp;F)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="312"/>
        <source>&amp;Browse</source>
        <translation>参照(&amp;B)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="72"/>
        <source>&amp;Select your audio player</source>
        <translation>オーディオプレイヤーを選択して下さい(&amp;S)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="58"/>
        <source>&amp;Refresh</source>
        <translation type="unfinished">更新(&amp;R)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="114"/>
        <source>&amp;Autodetect</source>
        <translation>自動検出(&amp;A)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="152"/>
        <source>Use S&amp;ystem values</source>
        <translation>システム設定値を使用(&amp;Y)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="222"/>
        <source>Pass&amp;word</source>
        <translation>パスワード(&amp;W)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="267"/>
        <source>Cac&amp;he</source>
        <translation>キャッシュ(&amp;H)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="270"/>
        <source>Download cache settings</source>
        <translation>ダウンロードキャッシュの設定</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="276"/>
        <source>Rockbox Utility uses a local download cache to save network traffic. You can change the path to the cache and use it as local repository by enabling Offline mode.</source>
        <translation>Rockbox Utilityは、ネットワークのトラフィックを節約するために、ダウンロードしたファイルをローカルにキャッシュします。キャッシュフォルダは変更することができます。オフラインモードが有効であれば、選択されたキャッシュフォルダを使用します。</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="286"/>
        <source>Current cache size is %1</source>
        <translation>現在のキャッシュサイズは、%1 です</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="295"/>
        <source>P&amp;ath</source>
        <translation>パス(&amp;P)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="327"/>
        <source>Disable local &amp;download cache</source>
        <translation>ローカルのダウンロードキャッシュを無効にします(&amp;D)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="337"/>
        <source>O&amp;ffline mode</source>
        <translation>オフラインモード(&amp;F)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="372"/>
        <source>Clean cache &amp;now</source>
        <translation>キャッシュのクリア(&amp;N)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="305"/>
        <source>Entering an invalid folder will reset the path to the systems temporary path.</source>
        <translation>無効なフォルダを入力しますと、パスの値はシステムのテンポラリパスに設定されます。</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="334"/>
        <source>&lt;p&gt;This will try to use all information from the cache, even information about updates. Only use this option if you want to install without network connection. Note: you need to do the same install you want to perform later with network access first to download all required files to the cache.&lt;/p&gt;</source>
        <translation>&lt;p&gt;これはキャッシュから、全ての情報、アップデート情報さえ使用するでしょう。 ネットワークに接続しないでインストールしたいのであれば、このオプションを使用して下さい。 注意: 後で実行されるインストールに必要なファイル全てをキャッシュにダウンロードするために、最初は、ネットワークがつながる環境で実行する必要があります。&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="388"/>
        <source>&amp;TTS &amp;&amp; Encoder</source>
        <translation>TTS およびエンコーダ(&amp;T)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="394"/>
        <source>TTS Engine</source>
        <translation>TTS エンジン</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="465"/>
        <source>Encoder Engine</source>
        <translation>エンコーダエンジン</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="400"/>
        <source>&amp;Select TTS Engine</source>
        <translation>TTS エンジンの選択(&amp;S)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="413"/>
        <source>Configure TTS Engine</source>
        <translation>TTS エンジンの設定</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="420"/>
        <location filename="../configurefrm.ui" line="471"/>
        <source>Configuration invalid!</source>
        <translation>不正な設定!</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="437"/>
        <source>Configure &amp;TTS</source>
        <translation>TTS の設定(&amp;T)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="455"/>
        <source>&amp;Use string corrections for TTS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="488"/>
        <source>Configure &amp;Enc</source>
        <translation>エンコーダの設定(&amp;E)</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="499"/>
        <source>encoder name</source>
        <translation>エンコーダ名</translation>
    </message>
    <message>
        <location filename="../configurefrm.ui" line="448"/>
        <source>Test TTS</source>
        <translation>TTS のテスト</translation>
    </message>
</context>
<context>
    <name>Configure</name>
    <message>
        <location filename="../configure.cpp" line="558"/>
        <source>English</source>
        <comment>This is the localized language name, i.e. your language.</comment>
        <translation>日本語</translation>
    </message>
</context>
<context>
    <name>CreateVoiceFrm</name>
    <message>
        <location filename="../createvoicefrm.ui" line="17"/>
        <source>Create Voice File</source>
        <translation>ボイスファイルの作成</translation>
    </message>
    <message>
        <location filename="../createvoicefrm.ui" line="42"/>
        <source>Select the Language you want to generate a voicefile for:</source>
        <translation>作成するボイスファイルの言語を選択して下さい:</translation>
    </message>
    <message>
        <location filename="../createvoicefrm.ui" line="49"/>
        <source>Generation settings</source>
        <translation>ボイスファイル作成の設定</translation>
    </message>
    <message>
        <location filename="../createvoicefrm.ui" line="68"/>
        <source>Change</source>
        <translation>変更</translation>
    </message>
    <message>
        <location filename="../createvoicefrm.ui" line="101"/>
        <source>Silence threshold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createvoicefrm.ui" line="139"/>
        <source>&amp;Install</source>
        <translation>インストール(&amp;I)</translation>
    </message>
    <message>
        <location filename="../createvoicefrm.ui" line="150"/>
        <source>&amp;Cancel</source>
        <translation>キャンセル(&amp;C)</translation>
    </message>
    <message>
        <location filename="../createvoicefrm.ui" line="88"/>
        <source>Wavtrim Threshold</source>
        <translation>Wavtrim の閾値</translation>
    </message>
    <message>
        <location filename="../createvoicefrm.ui" line="55"/>
        <source>TTS:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createvoicefrm.ui" line="163"/>
        <source>Language</source>
        <translation>言語</translation>
    </message>
</context>
<context>
    <name>CreateVoiceWindow</name>
    <message>
        <location filename="../createvoicewindow.cpp" line="97"/>
        <location filename="../createvoicewindow.cpp" line="100"/>
        <source>Engine: &lt;b&gt;%1&lt;/b&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>EncTtsCfgGui</name>
    <message>
        <location filename="../encttscfggui.cpp" line="31"/>
        <source>Waiting for engine...</source>
        <translation>エンコードエンジンを待っています...</translation>
    </message>
    <message>
        <location filename="../encttscfggui.cpp" line="81"/>
        <source>Ok</source>
        <translation>Ok</translation>
    </message>
    <message>
        <location filename="../encttscfggui.cpp" line="84"/>
        <source>Cancel</source>
        <translation>キャンセル</translation>
    </message>
    <message>
        <location filename="../encttscfggui.cpp" line="183"/>
        <source>Browse</source>
        <translation>参照</translation>
    </message>
    <message>
        <location filename="../encttscfggui.cpp" line="191"/>
        <source>Refresh</source>
        <translation>更新</translation>
    </message>
    <message>
        <location filename="../encttscfggui.cpp" line="363"/>
        <source>Select executable</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>EncoderExe</name>
    <message>
        <location filename="../base/encoderexe.cpp" line="40"/>
        <source>Path to Encoder:</source>
        <translation type="unfinished">エンコーダのパス:</translation>
    </message>
    <message>
        <location filename="../base/encoderexe.cpp" line="42"/>
        <source>Encoder options:</source>
        <translation type="unfinished">エンコーダ・オプション:</translation>
    </message>
</context>
<context>
    <name>EncoderLame</name>
    <message>
        <location filename="../base/encoderlame.cpp" line="72"/>
        <location filename="../base/encoderlame.cpp" line="82"/>
        <source>LAME</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/encoderlame.cpp" line="74"/>
        <source>Volume</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/encoderlame.cpp" line="78"/>
        <source>Quality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/encoderlame.cpp" line="82"/>
        <source>Could not find libmp3lame!</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>EncoderRbSpeex</name>
    <message>
        <location filename="../base/encoderrbspeex.cpp" line="33"/>
        <source>Volume:</source>
        <translation type="unfinished">ボリューム:</translation>
    </message>
    <message>
        <location filename="../base/encoderrbspeex.cpp" line="35"/>
        <source>Quality:</source>
        <translation type="unfinished">品質:</translation>
    </message>
    <message>
        <location filename="../base/encoderrbspeex.cpp" line="37"/>
        <source>Complexity:</source>
        <translation type="unfinished">複雑さ:</translation>
    </message>
    <message>
        <location filename="../base/encoderrbspeex.cpp" line="39"/>
        <source>Use Narrowband:</source>
        <translation type="unfinished">ナローバンド版:</translation>
    </message>
</context>
<context>
    <name>InfoWidget</name>
    <message>
        <location filename="../gui/infowidget.cpp" line="29"/>
        <location filename="../gui/infowidget.cpp" line="106"/>
        <source>File</source>
        <translation type="unfinished">ファイル</translation>
    </message>
    <message>
        <location filename="../gui/infowidget.cpp" line="29"/>
        <location filename="../gui/infowidget.cpp" line="106"/>
        <source>Version</source>
        <translation type="unfinished">バージョン</translation>
    </message>
</context>
<context>
    <name>InfoWidgetFrm</name>
    <message>
        <location filename="../gui/infowidgetfrm.ui" line="14"/>
        <source>Info</source>
        <translation type="unfinished">情報</translation>
    </message>
    <message>
        <location filename="../gui/infowidgetfrm.ui" line="20"/>
        <source>Currently installed packages.&lt;br/&gt;&lt;b&gt;Note:&lt;/b&gt; if you manually installed packages this might not be correct!</source>
        <translation type="unfinished">現在インストールされているパッケージ&lt;br/&gt;&lt;b&gt;注意:&lt;/b&gt; もし、パッケージを手動でインストールした場合、正しくない可能性があります!</translation>
    </message>
    <message>
        <location filename="../gui/infowidgetfrm.ui" line="34"/>
        <source>Package</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>InstallTalkFrm</name>
    <message>
        <location filename="../installtalkfrm.ui" line="17"/>
        <source>Install Talk Files</source>
        <translation>トークファイルのインストール</translation>
    </message>
    <message>
        <location filename="../installtalkfrm.ui" line="42"/>
        <source>Strip Extensions</source>
        <translation>拡張子を削除します</translation>
    </message>
    <message>
        <location filename="../installtalkfrm.ui" line="52"/>
        <source>Generate for files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../installtalkfrm.ui" line="85"/>
        <source>Generate for folders</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../installtalkfrm.ui" line="95"/>
        <source>Recurse into folders</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../installtalkfrm.ui" line="118"/>
        <source>Ignore files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../installtalkfrm.ui" line="128"/>
        <source>Skip existing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../installtalkfrm.ui" line="154"/>
        <source>&amp;Cancel</source>
        <translation>キャンセル(&amp;C)</translation>
    </message>
    <message>
        <location filename="../installtalkfrm.ui" line="170"/>
        <source>Select folders for Talkfile generation (Ctrl for multiselect)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../installtalkfrm.ui" line="78"/>
        <source>TTS profile:</source>
        <translation>TTSのプロファイル:</translation>
    </message>
    <message>
        <location filename="../installtalkfrm.ui" line="36"/>
        <source>Generation options</source>
        <translation>オプション</translation>
    </message>
    <message>
        <location filename="../installtalkfrm.ui" line="111"/>
        <source>Change</source>
        <translation>変更</translation>
    </message>
    <message>
        <location filename="../installtalkfrm.ui" line="143"/>
        <source>&amp;Install</source>
        <translation>インストール(&amp;I)</translation>
    </message>
</context>
<context>
    <name>InstallTalkWindow</name>
    <message>
        <location filename="../installtalkwindow.cpp" line="126"/>
        <location filename="../installtalkwindow.cpp" line="129"/>
        <source>&lt;b&gt;%1&lt;/b&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ManualWidget</name>
    <message>
        <location filename="../gui/manualwidget.cpp" line="40"/>
        <source>&lt;a href=&apos;%1&apos;&gt;PDF Manual&lt;/a&gt;</source>
        <translation type="unfinished">&lt;a href=&apos;%1&apos;&gt;PDF 形式のマニュアル&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../gui/manualwidget.cpp" line="42"/>
        <source>&lt;a href=&apos;%1&apos;&gt;HTML Manual (opens in browser)&lt;/a&gt;</source>
        <translation type="unfinished">&lt;a href=&apos;%1&apos;&gt;HTML 形式のマニュアル (ブラウザで開きます)&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../gui/manualwidget.cpp" line="46"/>
        <source>Select a device for a link to the correct manual</source>
        <translation type="unfinished">正しいマニュアルへのリンクを指定するため、デバイスを選択して下さい</translation>
    </message>
    <message>
        <location filename="../gui/manualwidget.cpp" line="47"/>
        <source>&lt;a href=&apos;%1&apos;&gt;Manual Overview&lt;/a&gt;</source>
        <translation type="unfinished">&lt;a href=&apos;%1&apos;&gt;Manual の概要&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../gui/manualwidget.cpp" line="58"/>
        <source>Confirm download</source>
        <translation type="unfinished">ダウンロードの確認</translation>
    </message>
    <message>
        <location filename="../gui/manualwidget.cpp" line="59"/>
        <source>Do you really want to download the manual? The manual will be saved to the root folder of your player.</source>
        <translation type="unfinished">マニュアルのダウンロードを本当に行いますか? マニュアルは、プレイヤーのルートフォルダに保存されます。</translation>
    </message>
</context>
<context>
    <name>ManualWidgetFrm</name>
    <message>
        <location filename="../gui/manualwidgetfrm.ui" line="14"/>
        <source>Manual</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/manualwidgetfrm.ui" line="20"/>
        <source>Read the manual</source>
        <translation type="unfinished">マニュアルを読む</translation>
    </message>
    <message>
        <location filename="../gui/manualwidgetfrm.ui" line="26"/>
        <source>PDF manual</source>
        <translation type="unfinished">PDF 形式のマニュアル</translation>
    </message>
    <message>
        <location filename="../gui/manualwidgetfrm.ui" line="39"/>
        <source>HTML manual</source>
        <translation type="unfinished">HTML 形式のマニュアル</translation>
    </message>
    <message>
        <location filename="../gui/manualwidgetfrm.ui" line="55"/>
        <source>Download the manual</source>
        <translation type="unfinished">マニュアルのインストール</translation>
    </message>
    <message>
        <location filename="../gui/manualwidgetfrm.ui" line="63"/>
        <source>&amp;PDF version</source>
        <translation type="unfinished">PDF 形式(&amp;P)</translation>
    </message>
    <message>
        <location filename="../gui/manualwidgetfrm.ui" line="70"/>
        <source>&amp;HTML version (zip file)</source>
        <translation type="unfinished">HTML 形式 (zip ファイル)(&amp;H)</translation>
    </message>
    <message>
        <location filename="../gui/manualwidgetfrm.ui" line="92"/>
        <source>Down&amp;load</source>
        <translation type="unfinished">ダウンロード(&amp;L)</translation>
    </message>
</context>
<context>
    <name>PreviewFrm</name>
    <message>
        <location filename="../previewfrm.ui" line="16"/>
        <source>Preview</source>
        <translation>プレビュー</translation>
    </message>
</context>
<context>
    <name>ProgressLoggerFrm</name>
    <message>
        <location filename="../progressloggerfrm.ui" line="13"/>
        <location filename="../progressloggerfrm.ui" line="19"/>
        <source>Progress</source>
        <translation>処理中</translation>
    </message>
    <message>
        <location filename="../progressloggerfrm.ui" line="82"/>
        <source>&amp;Abort</source>
        <translation>中止(&amp;A)</translation>
    </message>
    <message>
        <location filename="../progressloggerfrm.ui" line="32"/>
        <source>progresswindow</source>
        <translation>進捗画面</translation>
    </message>
    <message>
        <location filename="../progressloggerfrm.ui" line="58"/>
        <source>Save Log</source>
        <translation>ログの保存</translation>
    </message>
</context>
<context>
    <name>ProgressLoggerGui</name>
    <message>
        <location filename="../progressloggergui.cpp" line="121"/>
        <source>&amp;Ok</source>
        <translation>Ok(&amp;O)</translation>
    </message>
    <message>
        <location filename="../progressloggergui.cpp" line="103"/>
        <source>&amp;Abort</source>
        <translation>中止(&amp;A)</translation>
    </message>
    <message>
        <location filename="../progressloggergui.cpp" line="144"/>
        <source>Save system trace log</source>
        <translation>システムトレースのログを保存します</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../configure.cpp" line="594"/>
        <location filename="../main.cpp" line="70"/>
        <source>LTR</source>
        <extracomment>This string is used to indicate the writing direction. Translate it to &quot;RTL&quot; (without quotes) for RTL languages. Anything else will get treated as LTR language.
----------
This string is used to indicate the writing direction. Translate it to &quot;RTL&quot; (without quotes) for RTL languages. Anything else will get treated as LTR language.</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/system.cpp" line="384"/>
        <source>(unknown vendor name) </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/system.cpp" line="402"/>
        <source>(unknown product name)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhelper.cpp" line="80"/>
        <source>Bootloader installation is almost complete. Installation &lt;b&gt;requires&lt;/b&gt; you to perform the following steps manually:</source>
        <translation type="unfinished">ブートローダのインストールは、ほとんど完了していますが、以下のことを手動で行う&lt;b&gt;必要があります&lt;/b&gt;:</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhelper.cpp" line="86"/>
        <source>&lt;li&gt;Safely remove your player.&lt;/li&gt;</source>
        <translation type="unfinished">&lt;li&gt;プレイヤーを安全に取り外します。&lt;/li&gt;</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhelper.cpp" line="91"/>
        <source>&lt;li&gt;Reboot your player into the original firmware.&lt;/li&gt;&lt;li&gt;Perform a firmware upgrade using the update functionality of the original firmware. Please refer to your player&apos;s manual on details.&lt;br/&gt;&lt;b&gt;Important:&lt;/b&gt; updating the firmware is a critical process that must not be interrupted. &lt;b&gt;Make sure the player is charged before starting the firmware update process.&lt;/b&gt;&lt;/li&gt;&lt;li&gt;After the firmware has been updated reboot your player.&lt;/li&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhelper.cpp" line="102"/>
        <source>&lt;li&gt;Remove any previously inserted microSD card&lt;/li&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhelper.cpp" line="103"/>
        <source>&lt;li&gt;Disconnect your player. The player will reboot and perform an update of the original firmware. Please refer to your players manual on details.&lt;br/&gt;&lt;b&gt;Important:&lt;/b&gt; updating the firmware is a critical process that must not be interrupted. &lt;b&gt;Make sure the player is charged before disconnecting the player.&lt;/b&gt;&lt;/li&gt;&lt;li&gt;After the firmware has been updated reboot your player.&lt;/li&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhelper.cpp" line="114"/>
        <source>&lt;li&gt;Turn the player off&lt;/li&gt;&lt;li&gt;Insert the charger&lt;/li&gt;</source>
        <translation type="unfinished">&lt;li&gt;プレイヤーの電源を落として下さい&lt;/li&gt;&lt;li&gt;充電器に接続して下さい&lt;/li&gt;</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhelper.cpp" line="119"/>
        <source>&lt;li&gt;Unplug USB and power adaptors&lt;/li&gt;&lt;li&gt;Hold &lt;i&gt;Power&lt;/i&gt; to turn the player off&lt;/li&gt;&lt;li&gt;Toggle the battery switch on the player&lt;/li&gt;&lt;li&gt;Hold &lt;i&gt;Power&lt;/i&gt; to boot into Rockbox&lt;/li&gt;</source>
        <translation type="unfinished">&lt;li&gt;USBおよび充電器から取り外して下さい&lt;/li&gt;&lt;li&gt;プレイヤーの電源を落として下さい&lt;/li&gt;&lt;li&gt;電源スイッチを切り替えて下さい&lt;/li&gt;&lt;li&gt;電源スイッチを入れ、Rockboxを起動して下さい&lt;/li&gt;</translation>
    </message>
    <message>
        <location filename="../base/bootloaderinstallhelper.cpp" line="125"/>
        <source>&lt;p&gt;&lt;b&gt;Note:&lt;/b&gt; You can safely install other parts first, but the above steps are &lt;b&gt;required&lt;/b&gt; to finish the installation!&lt;/p&gt;</source>
        <translation type="unfinished">&lt;p&gt;&lt;b&gt;注意:&lt;/b&gt; 他のインストールを行うことができますが、インストールを完了させるためには、上記のことを行う&lt;b&gt;必要があります!&lt;/b&gt;&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>QuaZipFile</name>
    <message>
        <location filename="../quazip/quazipfile.cpp" line="141"/>
        <source>ZIP/UNZIP API error %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>RbUtilQt</name>
    <message>
        <location filename="../rbutilqt.cpp" line="434"/>
        <source>Confirm Installation</source>
        <translation>インストールの確認</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="414"/>
        <source>No Rockbox installation found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="415"/>
        <source>Could not determine the installed Rockbox version. Please install a Rockbox build before installing voice files.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="435"/>
        <source>Do you really want to install the voice file?</source>
        <translation>ボイスファイルのインストールを本当に行いますか?</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="496"/>
        <source>Confirm Uninstallation</source>
        <translation>アンインストールの確認</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="497"/>
        <source>Do you really want to uninstall the Bootloader?</source>
        <translation>ブートローダのアンインストールを本当に行いますか?</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="512"/>
        <source>No uninstall method for this target known.</source>
        <translation>このプレイヤーに対するアンインストール方法は不明です。</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="526"/>
        <source>Rockbox Utility can not uninstall the bootloader on this target. Try a normal firmware update to remove the booloader.</source>
        <translation>Rockbox Utility は、このプレイヤーに対して、ブートローダをアンインストールすることができません。通常のファームウェアのアップデート処理を行って、ブートローダを削除して下さい。</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="534"/>
        <source>No Rockbox bootloader found.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="552"/>
        <source>Confirm installation</source>
        <translation>インストールの確認</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="553"/>
        <source>Do you really want to install Rockbox Utility to your player? After installation you can run it from the players hard drive.</source>
        <translation>Rockbox Utilityをプレイヤーにインストールしてもいいですか? インストール後、プレイヤーのハードディスクから実行して下さい。</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="562"/>
        <source>Installing Rockbox Utility</source>
        <translation>Rockbox Utilityをインストールしています</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="715"/>
        <source>New version of Rockbox Utility available.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="718"/>
        <source>Rockbox Utility is up to date.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="566"/>
        <source>Mount point is wrong!</source>
        <translation>マウントポイントが間違っています!</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="423"/>
        <source>No voice file available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="424"/>
        <source>The installed version of Rockbox is a development version. Pre-built voices are only available for release versions of Rockbox. Please generate a voice yourself using the &quot;Create voice file&quot; functionality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="580"/>
        <source>Error installing Rockbox Utility</source>
        <translation>Rockbox Utilityのインストール中にエラーが発生しました</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="584"/>
        <source>Installing user configuration</source>
        <translation>ユーザ設定をインストールしています</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="588"/>
        <source>Error installing user configuration</source>
        <translation>ユーザ設定のインストール中にエラーが発生しました</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="592"/>
        <source>Successfully installed Rockbox Utility.</source>
        <translation>Rockbox Utilityのインストールが成功しました。</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="321"/>
        <location filename="../rbutilqt.cpp" line="622"/>
        <source>Configuration error</source>
        <translation>設定エラー</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="623"/>
        <source>Your configuration is invalid. Please go to the configuration dialog and make sure the selected values are correct.</source>
        <translation>設定が正しくありません。設定ダイアログを表示し、選択された値が正しいか確認して下さい。</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="314"/>
        <source>This is a new installation of Rockbox Utility, or a new version. The configuration dialog will now open to allow you to setup the program,  or review your settings.</source>
        <translation>これは、新規にインストール、または、新しいバージョンに更新された Rockbox Utility です。プログラムのセットアップを許可したり、または、設定を見直すために設定ダイアログが表示されることがあります。</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="104"/>
        <source>Wine detected!</source>
        <translation>Wine が検出されました!</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="105"/>
        <source>It seems you are trying to run this program under Wine. Please don&apos;t do this, running under Wine will fail. Use the native Linux binary instead.</source>
        <translation>Wine 上でこのプログラムを動かそうとしている様に思えます。Wine 上では処理が失敗するので、Wine 上で実行しないで下さい。代わりに Linux で動くバイナリを用いて下さい。</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="225"/>
        <source>Can&apos;t get version information.
Network error: %1. Please check your network and proxy settings.</source>
        <translation>バージョン情報が取得できません。
ネットワークエラー: %1. ネットワークおよびプロキシーの設定を確認して下さい。</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="400"/>
        <source>Warning</source>
        <translation>警告</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="401"/>
        <source>The Application is still downloading Information about new Builds. Please try again shortly.</source>
        <translation>そのアプリケーションは、新規ビルドに対する情報をまだダウンロードしています。もう少し経ちましたら、再度行って下さい。</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="313"/>
        <source>New installation</source>
        <translation>新規インストール</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="322"/>
        <source>Your configuration is invalid. This is most likely due to a changed device path. The configuration dialog will now open to allow you to correct the problem.</source>
        <translation>設定が正しくありません。たぶん、デバイスのパスが変更されているのが原因です。問題を修正できるように、設定ダイアログが表示されます。</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="224"/>
        <source>Network error</source>
        <translation>ネットワークエラー</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="212"/>
        <source>Downloading build information, please wait ...</source>
        <translation>ビルド情報をダウンロードしています。お待ち下さい...</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="223"/>
        <source>Can&apos;t get version information!</source>
        <translation>バージョン情報を取得することができませんでした!</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="237"/>
        <source>Download build information finished.</source>
        <translation>ビルド情報のダウンロードが完了しました。</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="646"/>
        <source>Checking for update ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="711"/>
        <source>RockboxUtility Update available</source>
        <translation>より新しい Rockbox Utility が存在しています</translation>
    </message>
    <message>
        <location filename="../rbutilqt.cpp" line="712"/>
        <source>&lt;b&gt;New RockboxUtility Version available.&lt;/b&gt; &lt;br&gt;&lt;br&gt;Download it from here: &lt;a href=&apos;%1&apos;&gt;%2&lt;/a&gt;</source>
        <translation>&lt;b&gt;新しい RockboxUtility が存在しています。&lt;/b&gt; &lt;br&gt;&lt;br&gt;ここから最新版をダウンロードします: &lt;a href=&apos;%1&apos;&gt;%2&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>RbUtilQtFrm</name>
    <message>
        <location filename="../rbutilqtfrm.ui" line="14"/>
        <source>Rockbox Utility</source>
        <translation>Rockbox Utility</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="137"/>
        <location filename="../rbutilqtfrm.ui" line="634"/>
        <source>&amp;Installation</source>
        <translation>インストール(&amp;I)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="434"/>
        <source>&amp;Uninstallation</source>
        <translation>アンインストール(&amp;U)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="370"/>
        <source>&amp;Manual</source>
        <translation>マニュアル(&amp;M)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="396"/>
        <source>&amp;File</source>
        <translation>ファイル(&amp;F)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="473"/>
        <source>&amp;About</source>
        <translation>Rockbox Utilityについて(&amp;A)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="450"/>
        <source>Empty local download cache</source>
        <translation>ローカルのダウンロードキャッシュを空にします</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="37"/>
        <source>mountpoint unknown or invalid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="44"/>
        <source>Mountpoint:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="51"/>
        <source>device unknown or invalid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="64"/>
        <source>Device:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="455"/>
        <source>Install Rockbox Utility on player</source>
        <translation>Rockbox Utilityのインストール</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="460"/>
        <source>&amp;Configure</source>
        <translation>設定(&amp;C)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="465"/>
        <source>E&amp;xit</source>
        <translation>終了(&amp;E)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="468"/>
        <source>Ctrl+Q</source>
        <translation>Ctrl+Q</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="478"/>
        <source>About &amp;Qt</source>
        <translation>Qt について(&amp;Q)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="269"/>
        <source>Uninstall Bootloader</source>
        <translation>ブートローダのアンインストール</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="263"/>
        <location filename="../rbutilqtfrm.ui" line="296"/>
        <source>Uninstall Rockbox</source>
        <translation>Rockbox のアンインストール</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="31"/>
        <source>Device</source>
        <translation>デバイス</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="94"/>
        <source>&amp;Change</source>
        <translation>変更(&amp;C)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="140"/>
        <source>Welcome</source>
        <translation>ようこそ</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="145"/>
        <location filename="../rbutilqtfrm.ui" line="426"/>
        <source>&amp;Accessibility</source>
        <translation>ユーザ補助(&amp;A)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="148"/>
        <source>Install accessibility add-ons</source>
        <translation>ユーザ補助用のアドオンのインストール</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="154"/>
        <source>Install Voice files</source>
        <translation>ボイスファイルのインストール</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="181"/>
        <source>Install Talk files</source>
        <translation>トークファイルのインストール</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="373"/>
        <source>View and download the manual</source>
        <translation>閲覧およびマニュアルのダウンロード</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="378"/>
        <source>Inf&amp;o</source>
        <translation>情報(&amp;I)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="405"/>
        <location filename="../rbutilqtfrm.ui" line="483"/>
        <source>&amp;Help</source>
        <translation>ヘルプ(&amp;H)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="422"/>
        <source>Action&amp;s</source>
        <translation>アクション(&amp;S)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="488"/>
        <source>Info</source>
        <translation>情報</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="592"/>
        <source>Read PDF manual</source>
        <translation>PDF形式のマニュアルを読む</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="597"/>
        <source>Read HTML manual</source>
        <translation>HTML形式のマニュアルを読む</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="602"/>
        <source>Download PDF manual</source>
        <translation>PDF形式のマニュアルのダウンロード</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="607"/>
        <source>Download HTML manual (zip)</source>
        <translation>HTML形式のマニュアルのダウンロード (zip)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="231"/>
        <source>Create Voice files</source>
        <translation>ボイスファイルの作成</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="619"/>
        <source>Create Voice File</source>
        <translation>ボイスファイルの作成</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="171"/>
        <source>&lt;b&gt;Install Voice file&lt;/b&gt;&lt;br/&gt;Voice files are needed to make Rockbox speak the user interface. Speaking is enabled by default, so if you installed the voice file Rockbox will speak.</source>
        <translation>&lt;b&gt;ボイスファイルのインストール&lt;/b&gt;&lt;br/&gt;Rockboxにユーザインターフェースを話させるためには、ボイスファイルが必要です。デフォルトで、Rockbox は話すことが可能になっていますので、ボイスファイルをインストールしますと、Rockbox は話すようになります。</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="198"/>
        <source>&lt;b&gt;Create Talk Files&lt;/b&gt;&lt;br/&gt;Talkfiles are needed to let Rockbox speak File and Foldernames</source>
        <translation>&lt;b&gt;トークファイルの作成&lt;/b&gt;&lt;br/&gt;Rockbox がファイル名やフォルダ名を話すためには、トークファイルが必要です</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="248"/>
        <source>&lt;b&gt;Create Voice file&lt;/b&gt;&lt;br/&gt;Voice files are needed to make Rockbox speak the  user interface. Speaking is enabled by default, so
 if you installed the voice file Rockbox will speak.</source>
        <translation>&lt;b&gt;ボイスファイルの作成&lt;/b&gt;&lt;br/&gt;Rockboxにユーザインターフェースを話させるためには、ボイスファイルが必要です。デフォルトで、Rockbox は話すことが可能になっていますので、ボイスファイルをインストールしますと、Rockbox は話すようになります。</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="260"/>
        <source>Backup &amp;&amp; &amp;Uninstallation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="286"/>
        <source>&lt;b&gt;Remove the bootloader&lt;/b&gt;&lt;br/&gt;After removing the bootloader you won&apos;t be able to start Rockbox.</source>
        <translation>&lt;b&gt;ブートローダの削除&lt;/b&gt;&lt;br/&gt;ブートローダを削除しますと、Rockbox をスタートすることができなくなります。</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="313"/>
        <source>&lt;b&gt;Uninstall Rockbox from your audio player.&lt;/b&gt;&lt;br/&gt;This will leave the bootloader in place (you need to remove it manually).</source>
        <translation>&lt;b&gt;Rockbox のアンインストール&lt;/b&gt;&lt;br/&gt;ブートローダは残ります。 (手動で削除する必要があります。).</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="326"/>
        <source>Backup</source>
        <translation type="unfinished">バックアップ</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="343"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Backup current installation.&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Create a backup by archiving the contents of the Rockbox installation folder.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="515"/>
        <source>Install &amp;Bootloader</source>
        <translation>ブートローダのインストール(&amp;B)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="524"/>
        <source>Install &amp;Rockbox</source>
        <translation>Rockbox のインストール(&amp;R)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="533"/>
        <source>Install &amp;Fonts Package</source>
        <translation>フォントパッケージのインストール(&amp;F)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="542"/>
        <source>Install &amp;Themes</source>
        <translation>テーマのインストール(&amp;T)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="551"/>
        <source>Install &amp;Game Files</source>
        <translation>ゲームのインストール(&amp;G)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="560"/>
        <source>&amp;Install Voice File</source>
        <translation>ボイスファイルのインストール(&amp;I)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="569"/>
        <source>Create &amp;Talk Files</source>
        <translation>トークファイルの作成(&amp;T)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="578"/>
        <source>Remove &amp;bootloader</source>
        <translation>ブートローダのアンインストール(&amp;B)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="587"/>
        <source>Uninstall &amp;Rockbox</source>
        <translation>Rockbox のアンインストール(&amp;R)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="616"/>
        <source>Create &amp;Voice File</source>
        <translation>ボイスファイルの作成(&amp;V)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="624"/>
        <source>&amp;System Info</source>
        <translation>システム情報(&amp;S)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="497"/>
        <source>&amp;Complete Installation</source>
        <translation>完全インストール(&amp;C)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="506"/>
        <source>&amp;Minimal Installation</source>
        <translation>最小インストール(&amp;M)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="409"/>
        <source>&amp;Troubleshoot</source>
        <translation>トラブルシュート(&amp;T)</translation>
    </message>
    <message>
        <location filename="../rbutilqtfrm.ui" line="629"/>
        <source>System &amp;Trace</source>
        <translation>システムトレース(&amp;T)</translation>
    </message>
</context>
<context>
    <name>SelectiveInstallWidget</name>
    <message>
        <location filename="../gui/selectiveinstallwidgetfrm.ui" line="20"/>
        <source>Selective Installation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidgetfrm.ui" line="26"/>
        <source>Rockbox version to install</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidgetfrm.ui" line="35"/>
        <source>Version information not available yet.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidgetfrm.ui" line="54"/>
        <source>Rockbox components to install</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidgetfrm.ui" line="60"/>
        <source>&amp;Bootloader</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidgetfrm.ui" line="80"/>
        <source>The main Rockbox firmware.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidgetfrm.ui" line="90"/>
        <source>Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidgetfrm.ui" line="104"/>
        <source>&amp;Rockbox</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidgetfrm.ui" line="124"/>
        <source>Some game plugins require additional files.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidgetfrm.ui" line="140"/>
        <source>Additional fonts for the User Interface.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidgetfrm.ui" line="156"/>
        <source>The bootloader is required for starting Rockbox. Only necessary for first time install.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidgetfrm.ui" line="166"/>
        <source>Game Files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidgetfrm.ui" line="177"/>
        <source>Customize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidgetfrm.ui" line="184"/>
        <source>Themes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidgetfrm.ui" line="201"/>
        <source>Themes allow adjusting the user interface of Rockbox. Use &quot;Customize&quot; to select themes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidgetfrm.ui" line="246"/>
        <source>&amp;Install</source>
        <translation type="unfinished">インストール(&amp;I)</translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="64"/>
        <source>This is the latest stable release available.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="67"/>
        <source>The development version is updated on every code change. Last update was on %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="71"/>
        <source>This will eventually become the next Rockbox version. Install it to help testing.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="97"/>
        <source>Stable Release (Version %1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="101"/>
        <source>Development Version (Revison %1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="105"/>
        <source>Release Candidate (Revison %1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="127"/>
        <source>The selected player doesn&apos;t need a bootloader.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="132"/>
        <source>The bootloader is required for starting Rockbox. Installation of the bootloader is only necessary on first time installation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="165"/>
        <source>Mountpoint is wrong</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="219"/>
        <source>No install method known.</source>
        <translation type="unfinished">インストール方法が不明です。</translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="246"/>
        <source>Bootloader detected</source>
        <translation type="unfinished">ブートローダが検出されました</translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="247"/>
        <source>Bootloader already installed. Do you want to reinstall the bootloader?</source>
        <translation type="unfinished">ブートローダは既にインストールされています。ブートローダをインストールしますか?</translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="251"/>
        <source>Bootloader installation skipped</source>
        <translation type="unfinished">ブートローダのインストールをスキップしました</translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="264"/>
        <source>Create Bootloader backup</source>
        <translation type="unfinished">ブートローダのバックアップを作成します</translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="265"/>
        <source>You can create a backup of the original bootloader file. Press &quot;Yes&quot; to select an output folder on your computer to save the file to. The file will get placed in a new folder &quot;%1&quot; created below the selected folder.
Press &quot;No&quot; to skip this step.</source>
        <translation type="unfinished">オリジナルのブートローダファイルのバックアップファイルを作成することができます。&quot;はい&quot;ボタンを押して、バックアップファイルを保存するためのフォルダを選択して下さい。選択されたフォルダの下に &quot;%1&quot; フォルダを作成し、バックアップファイルを作成します。
&quot;いいえ&quot;ボタンを押しますと、バックアップファイルを作成しません。</translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="272"/>
        <source>Browse backup folder</source>
        <translation type="unfinished">バックアップフォルダの表示</translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="284"/>
        <source>Prerequisites</source>
        <translation type="unfinished">前提条件</translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="289"/>
        <source>Bootloader installation aborted</source>
        <translation type="unfinished">ブートローダのインストールが中止しました</translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="299"/>
        <source>Bootloader files (%1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="301"/>
        <source>All files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="303"/>
        <source>Select firmware file</source>
        <translation type="unfinished">ファームウェアを選択して下さい</translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="305"/>
        <source>Error opening firmware file</source>
        <translation type="unfinished">ファームウェア読み込み時のエラー</translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="311"/>
        <source>Error reading firmware file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="321"/>
        <source>Backup error</source>
        <translation type="unfinished">バックアップエラー</translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="322"/>
        <source>Could not create backup file. Continue?</source>
        <translation type="unfinished">バックアップファイルが作成されませんでした。続行しますか?</translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="346"/>
        <source>Manual steps required</source>
        <translation type="unfinished">手動で行う必要があります</translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="366"/>
        <source>Continue with installation?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="367"/>
        <source>Really continue?</source>
        <translation type="unfinished">本当に続行しますか?</translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="371"/>
        <source>Aborted!</source>
        <translation type="unfinished">処理を中止します!</translation>
    </message>
    <message>
        <location filename="../gui/selectiveinstallwidget.cpp" line="485"/>
        <source>Your installation doesn&apos;t require game files, skipping.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ServerInfo</name>
    <message>
        <location filename="../base/serverinfo.cpp" line="116"/>
        <source>Unknown</source>
        <translation>不明</translation>
    </message>
    <message>
        <location filename="../base/serverinfo.cpp" line="120"/>
        <source>Unusable</source>
        <translation>使用不可能</translation>
    </message>
    <message>
        <location filename="../base/serverinfo.cpp" line="123"/>
        <source>Unstable</source>
        <translation>不安定版</translation>
    </message>
    <message>
        <location filename="../base/serverinfo.cpp" line="126"/>
        <source>Stable</source>
        <translation>安定版</translation>
    </message>
</context>
<context>
    <name>SysTrace</name>
    <message>
        <location filename="../systrace.cpp" line="75"/>
        <location filename="../systrace.cpp" line="84"/>
        <source>Save system trace log</source>
        <translation>システムトレースのログを保存します</translation>
    </message>
</context>
<context>
    <name>SysTraceFrm</name>
    <message>
        <location filename="../systracefrm.ui" line="14"/>
        <source>System Trace</source>
        <translation>システムトレース</translation>
    </message>
    <message>
        <location filename="../systracefrm.ui" line="20"/>
        <source>System State trace</source>
        <translation>システム情報のトレース</translation>
    </message>
    <message>
        <location filename="../systracefrm.ui" line="46"/>
        <source>&amp;Close</source>
        <translation>閉じる(&amp;C)</translation>
    </message>
    <message>
        <location filename="../systracefrm.ui" line="57"/>
        <source>&amp;Save</source>
        <translation>保存(&amp;S)</translation>
    </message>
    <message>
        <location filename="../systracefrm.ui" line="68"/>
        <source>&amp;Refresh</source>
        <translation>更新(&amp;R)</translation>
    </message>
    <message>
        <location filename="../systracefrm.ui" line="79"/>
        <source>Save &amp;previous</source>
        <translation>１つ前を保存(&amp;p)</translation>
    </message>
</context>
<context>
    <name>Sysinfo</name>
    <message>
        <location filename="../sysinfo.cpp" line="44"/>
        <source>&lt;b&gt;OS&lt;/b&gt;&lt;br/&gt;</source>
        <translation>&lt;b&gt;OS&lt;/b&gt;&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../sysinfo.cpp" line="45"/>
        <source>&lt;b&gt;Username&lt;/b&gt;&lt;br/&gt;%1&lt;hr/&gt;</source>
        <translation>&lt;b&gt;ユーザ名&lt;/b&gt;&lt;br/&gt;%1&lt;hr/&gt;</translation>
    </message>
    <message>
        <location filename="../sysinfo.cpp" line="47"/>
        <source>&lt;b&gt;Permissions&lt;/b&gt;&lt;br/&gt;%1&lt;hr/&gt;</source>
        <translation>&lt;b&gt;権限&lt;/b&gt;&lt;br/&gt;%1&lt;hr/&gt;</translation>
    </message>
    <message>
        <location filename="../sysinfo.cpp" line="49"/>
        <source>&lt;b&gt;Attached USB devices&lt;/b&gt;&lt;br/&gt;</source>
        <translation>&lt;b&gt;接続された USB デバイス&lt;/b&gt;&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../sysinfo.cpp" line="53"/>
        <source>VID: %1 PID: %2, %3</source>
        <translation>VID: %1 PID: %2, %3</translation>
    </message>
    <message>
        <location filename="../sysinfo.cpp" line="62"/>
        <source>Filesystem</source>
        <translation>ファイルシステム</translation>
    </message>
    <message>
        <location filename="../sysinfo.cpp" line="65"/>
        <source>Mountpoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../sysinfo.cpp" line="65"/>
        <source>Label</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../sysinfo.cpp" line="66"/>
        <source>Free</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../sysinfo.cpp" line="66"/>
        <source>Total</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../sysinfo.cpp" line="67"/>
        <source>Cluster Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../sysinfo.cpp" line="69"/>
        <source>&lt;tr&gt;&lt;td&gt;%1&lt;/td&gt;&lt;td&gt;%4&lt;/td&gt;&lt;td&gt;%2 GiB&lt;/td&gt;&lt;td&gt;%3 GiB&lt;/td&gt;&lt;td&gt;%5&lt;/td&gt;&lt;/tr&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SysinfoFrm</name>
    <message>
        <location filename="../sysinfofrm.ui" line="13"/>
        <source>System Info</source>
        <translation>システム情報</translation>
    </message>
    <message>
        <location filename="../sysinfofrm.ui" line="22"/>
        <source>&amp;Refresh</source>
        <translation>更新(&amp;R)</translation>
    </message>
    <message>
        <location filename="../sysinfofrm.ui" line="45"/>
        <source>&amp;OK</source>
        <translation>Ok(&amp;O)</translation>
    </message>
</context>
<context>
    <name>System</name>
    <message>
        <location filename="../base/system.cpp" line="120"/>
        <source>Guest</source>
        <translation type="unfinished">ゲスト</translation>
    </message>
    <message>
        <location filename="../base/system.cpp" line="123"/>
        <source>Admin</source>
        <translation type="unfinished">管理者</translation>
    </message>
    <message>
        <location filename="../base/system.cpp" line="126"/>
        <source>User</source>
        <translation type="unfinished">ユーザ</translation>
    </message>
    <message>
        <location filename="../base/system.cpp" line="129"/>
        <source>Error</source>
        <translation type="unfinished">エラー</translation>
    </message>
    <message>
        <location filename="../base/system.cpp" line="277"/>
        <location filename="../base/system.cpp" line="322"/>
        <source>(no description available)</source>
        <translation type="unfinished">(利用可能な記述がありません)</translation>
    </message>
</context>
<context>
    <name>TTSBase</name>
    <message>
        <location filename="../base/ttsbase.cpp" line="40"/>
        <source>Espeak TTS Engine</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/ttsbase.cpp" line="42"/>
        <source>Flite TTS Engine</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/ttsbase.cpp" line="43"/>
        <source>Swift TTS Engine</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/ttsbase.cpp" line="45"/>
        <source>SAPI TTS Engine</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/ttsbase.cpp" line="48"/>
        <source>Festival TTS Engine</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/ttsbase.cpp" line="51"/>
        <source>OS X System Engine</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TTSCarbon</name>
    <message>
        <location filename="../base/ttscarbon.cpp" line="138"/>
        <source>Voice:</source>
        <translation>ボイス:</translation>
    </message>
    <message>
        <location filename="../base/ttscarbon.cpp" line="144"/>
        <source>Speed (words/min):</source>
        <translation>スピード(語/分):</translation>
    </message>
    <message>
        <location filename="../base/ttscarbon.cpp" line="151"/>
        <source>Pitch (0 for default):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/ttscarbon.cpp" line="221"/>
        <source>Could not voice string</source>
        <translation>ボイス化する文字列が見つかりませんでした</translation>
    </message>
    <message>
        <location filename="../base/ttscarbon.cpp" line="231"/>
        <source>Could not convert intermediate file</source>
        <translation>中間ファイルへの変換に失敗しました</translation>
    </message>
</context>
<context>
    <name>TTSExes</name>
    <message>
        <location filename="../base/ttsexes.cpp" line="77"/>
        <source>TTS executable not found</source>
        <translation>実行可能な TTS が見つかりませんでした</translation>
    </message>
    <message>
        <location filename="../base/ttsexes.cpp" line="42"/>
        <source>Path to TTS engine:</source>
        <translation>TTS エンジンのパス:</translation>
    </message>
    <message>
        <location filename="../base/ttsexes.cpp" line="44"/>
        <source>TTS engine options:</source>
        <translation>TTS エンジンのオプション:</translation>
    </message>
</context>
<context>
    <name>TTSFestival</name>
    <message>
        <location filename="../base/ttsfestival.cpp" line="204"/>
        <source>engine could not voice string</source>
        <translation>ボイス化する文字列が見つかりませんでした</translation>
    </message>
    <message>
        <location filename="../base/ttsfestival.cpp" line="287"/>
        <source>No description available</source>
        <translation>利用可能な記述がありません</translation>
    </message>
    <message>
        <location filename="../base/ttsfestival.cpp" line="52"/>
        <source>Path to Festival client:</source>
        <translation>Festival クライアントのパス:</translation>
    </message>
    <message>
        <location filename="../base/ttsfestival.cpp" line="57"/>
        <source>Voice:</source>
        <translation>ボイス:</translation>
    </message>
    <message>
        <location filename="../base/ttsfestival.cpp" line="66"/>
        <source>Voice description:</source>
        <translation>ボイスの説明:</translation>
    </message>
</context>
<context>
    <name>TTSSapi</name>
    <message>
        <location filename="../base/ttssapi.cpp" line="47"/>
        <source>Language:</source>
        <translation>言語:</translation>
    </message>
    <message>
        <location filename="../base/ttssapi.cpp" line="53"/>
        <source>Voice:</source>
        <translation>ボイス:</translation>
    </message>
    <message>
        <location filename="../base/ttssapi.cpp" line="63"/>
        <source>Speed:</source>
        <translation>スピード:</translation>
    </message>
    <message>
        <location filename="../base/ttssapi.cpp" line="66"/>
        <source>Options:</source>
        <translation>オプション:</translation>
    </message>
    <message>
        <location filename="../base/ttssapi.cpp" line="110"/>
        <source>Could not copy the SAPI script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/ttssapi.cpp" line="131"/>
        <source>Could not start SAPI process</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TalkFileCreator</name>
    <message>
        <location filename="../base/talkfile.cpp" line="44"/>
        <source>Talk file creation aborted</source>
        <translation>トークファイルの作成を中止しました</translation>
    </message>
    <message>
        <location filename="../base/talkfile.cpp" line="79"/>
        <source>Finished creating Talk files</source>
        <translation>トークファイルの作成が終了しました</translation>
    </message>
    <message>
        <location filename="../base/talkfile.cpp" line="41"/>
        <source>Reading Filelist...</source>
        <translation>ファイルリストを読み込んでいます...</translation>
    </message>
    <message>
        <location filename="../base/talkfile.cpp" line="256"/>
        <source>Copying of %1 to %2 failed</source>
        <translation>%1 から %2 にファイルをコピーすることに失敗しました</translation>
    </message>
    <message>
        <location filename="../base/talkfile.cpp" line="67"/>
        <source>Copying Talkfiles...</source>
        <translation>トークファイルをコピーしています...</translation>
    </message>
    <message>
        <location filename="../base/talkfile.cpp" line="35"/>
        <source>Starting Talk file generation for folder %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/talkfile.cpp" line="237"/>
        <source>File copy aborted</source>
        <translation>ファイルのコピーが失敗しました</translation>
    </message>
    <message>
        <location filename="../base/talkfile.cpp" line="277"/>
        <source>Cleaning up...</source>
        <translation>不要なファイルを削除しています...</translation>
    </message>
    <message>
        <location filename="../base/talkfile.cpp" line="288"/>
        <source>Finished</source>
        <translation>終了しました</translation>
    </message>
</context>
<context>
    <name>TalkGenerator</name>
    <message>
        <location filename="../base/talkgenerator.cpp" line="38"/>
        <source>Starting TTS Engine</source>
        <translation>TTS エンジンの開始</translation>
    </message>
    <message>
        <location filename="../base/talkgenerator.cpp" line="43"/>
        <source>Init of TTS engine failed</source>
        <translation>TTS エンジンの初期化に失敗しました</translation>
    </message>
    <message>
        <location filename="../base/talkgenerator.cpp" line="50"/>
        <source>Starting Encoder Engine</source>
        <translation>エンコーダエンジンの開始</translation>
    </message>
    <message>
        <location filename="../base/talkgenerator.cpp" line="54"/>
        <source>Init of Encoder engine failed</source>
        <translation>エンコーダエンジンの初期化に失敗しました</translation>
    </message>
    <message>
        <location filename="../base/talkgenerator.cpp" line="64"/>
        <source>Voicing entries...</source>
        <translation>ボイス化しています...</translation>
    </message>
    <message>
        <location filename="../base/talkgenerator.cpp" line="79"/>
        <source>Encoding files...</source>
        <translation>エンコードしています...</translation>
    </message>
    <message>
        <location filename="../base/talkgenerator.cpp" line="118"/>
        <source>Voicing aborted</source>
        <translation>ボイス化に失敗しました</translation>
    </message>
    <message>
        <location filename="../base/talkgenerator.cpp" line="154"/>
        <location filename="../base/talkgenerator.cpp" line="159"/>
        <source>Voicing of %1 failed: %2</source>
        <translation>%1 のボイス化に失敗しました: %2</translation>
    </message>
    <message>
        <location filename="../base/talkgenerator.cpp" line="203"/>
        <source>Encoding aborted</source>
        <translation>エンコード処理に失敗しました</translation>
    </message>
    <message>
        <location filename="../base/talkgenerator.cpp" line="231"/>
        <source>Encoding of %1 failed</source>
        <translation>%1 のエンコードに失敗しました</translation>
    </message>
</context>
<context>
    <name>ThemeInstallFrm</name>
    <message>
        <location filename="../themesinstallfrm.ui" line="13"/>
        <source>Theme Installation</source>
        <translation>テーマのインストール</translation>
    </message>
    <message>
        <location filename="../themesinstallfrm.ui" line="48"/>
        <source>Selected Theme</source>
        <translation>テーマの選択</translation>
    </message>
    <message>
        <location filename="../themesinstallfrm.ui" line="73"/>
        <source>Description</source>
        <translation>説明</translation>
    </message>
    <message>
        <location filename="../themesinstallfrm.ui" line="83"/>
        <source>Download size:</source>
        <translation>ダウンロードサイズ:</translation>
    </message>
    <message>
        <location filename="../themesinstallfrm.ui" line="125"/>
        <source>&amp;Cancel</source>
        <translation>キャンセル(&amp;C)</translation>
    </message>
    <message>
        <location filename="../themesinstallfrm.ui" line="115"/>
        <source>&amp;Install</source>
        <translation>インストール(&amp;I)</translation>
    </message>
    <message>
        <location filename="../themesinstallfrm.ui" line="93"/>
        <source>Hold Ctrl to select multiple item, Shift for a range</source>
        <translation>複数の項目を選択するためには、Ctrlキーを押し続けて下さい。範囲指定を行うには、Shiftキーを押し続けて下さい</translation>
    </message>
</context>
<context>
    <name>ThemesInstallWindow</name>
    <message>
        <location filename="../themesinstallwindow.cpp" line="38"/>
        <source>no theme selected</source>
        <translation>テーマが選択されていません</translation>
    </message>
    <message>
        <location filename="../themesinstallwindow.cpp" line="112"/>
        <source>Network error: %1.
Please check your network and proxy settings.</source>
        <translation>ネットワークエラー: %1.
ネットワークおよびプロキシーの設定を確認して下さい。</translation>
    </message>
    <message>
        <location filename="../themesinstallwindow.cpp" line="125"/>
        <source>the following error occured:
%1</source>
        <translation>以下のエラーが発生しました:
%1</translation>
    </message>
    <message>
        <location filename="../themesinstallwindow.cpp" line="131"/>
        <source>done.</source>
        <translation>終了しました。</translation>
    </message>
    <message>
        <location filename="../themesinstallwindow.cpp" line="198"/>
        <source>fetching details for %1</source>
        <translation>%1 の説明を取得しています</translation>
    </message>
    <message>
        <location filename="../themesinstallwindow.cpp" line="201"/>
        <source>fetching preview ...</source>
        <translation>プレビューを取得しています...</translation>
    </message>
    <message>
        <location filename="../themesinstallwindow.cpp" line="214"/>
        <source>&lt;b&gt;Author:&lt;/b&gt; %1&lt;hr/&gt;</source>
        <translation>&lt;b&gt;制作者:&lt;/b&gt; %1&lt;hr/&gt;</translation>
    </message>
    <message>
        <location filename="../themesinstallwindow.cpp" line="215"/>
        <location filename="../themesinstallwindow.cpp" line="217"/>
        <source>unknown</source>
        <translation>不明</translation>
    </message>
    <message>
        <location filename="../themesinstallwindow.cpp" line="216"/>
        <source>&lt;b&gt;Version:&lt;/b&gt; %1&lt;hr/&gt;</source>
        <translation>&lt;b&gt;バージョン:&lt;/b&gt; %1&lt;hr/&gt;</translation>
    </message>
    <message>
        <location filename="../themesinstallwindow.cpp" line="219"/>
        <source>no description</source>
        <translation>説明はありません</translation>
    </message>
    <message>
        <location filename="../themesinstallwindow.cpp" line="261"/>
        <source>no theme preview</source>
        <translation>テーマのプレビューはありません</translation>
    </message>
    <message>
        <location filename="../themesinstallwindow.cpp" line="291"/>
        <source>Select</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../themesinstallwindow.cpp" line="295"/>
        <source>getting themes information ...</source>
        <translation>テーマの情報を取得しています...</translation>
    </message>
    <message>
        <location filename="../themesinstallwindow.cpp" line="324"/>
        <source>No themes selected, skipping</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../themesinstallwindow.cpp" line="354"/>
        <source>Mount point is wrong!</source>
        <translation>マウントポイントが間違っています!</translation>
    </message>
    <message>
        <location filename="../themesinstallwindow.cpp" line="218"/>
        <source>&lt;b&gt;Description:&lt;/b&gt; %1&lt;hr/&gt;</source>
        <translation>&lt;b&gt;説明:&lt;/b&gt; %1&lt;hr/&gt;</translation>
    </message>
    <message>
        <location filename="../themesinstallwindow.cpp" line="39"/>
        <source>no selection</source>
        <translation>選択されていません</translation>
    </message>
    <message>
        <location filename="../themesinstallwindow.cpp" line="168"/>
        <source>Information</source>
        <translation>情報</translation>
    </message>
    <message numerus="yes">
        <location filename="../themesinstallwindow.cpp" line="185"/>
        <source>Download size %L1 kiB (%n item(s))</source>
        <translation>
            <numerusform>ダウンロードサイズ %L1 kiB (%n アイテム)</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../themesinstallwindow.cpp" line="249"/>
        <source>Retrieving theme preview failed.
HTTP response code: %1</source>
        <translation>テーマのプレビュー画像の取得に失敗しました。
HTTP レスポンスコード: %1</translation>
    </message>
</context>
<context>
    <name>UninstallFrm</name>
    <message>
        <location filename="../uninstallfrm.ui" line="16"/>
        <source>Uninstall Rockbox</source>
        <translation>Rockbox のアンインストール</translation>
    </message>
    <message>
        <location filename="../uninstallfrm.ui" line="35"/>
        <source>Please select the Uninstallation Method</source>
        <translation>アンインストール方法を選択して下さい</translation>
    </message>
    <message>
        <location filename="../uninstallfrm.ui" line="45"/>
        <source>Uninstallation Method</source>
        <translation>アンインストール方法</translation>
    </message>
    <message>
        <location filename="../uninstallfrm.ui" line="51"/>
        <source>Complete Uninstallation</source>
        <translation>完全アンインストール</translation>
    </message>
    <message>
        <location filename="../uninstallfrm.ui" line="58"/>
        <source>Smart Uninstallation</source>
        <translation>高性能アンインストール</translation>
    </message>
    <message>
        <location filename="../uninstallfrm.ui" line="68"/>
        <source>Please select what you want to uninstall</source>
        <translation>アンインストール方法を選択して下さい</translation>
    </message>
    <message>
        <location filename="../uninstallfrm.ui" line="78"/>
        <source>Installed Parts</source>
        <translation>インストールしたもの</translation>
    </message>
    <message>
        <location filename="../uninstallfrm.ui" line="138"/>
        <source>&amp;Cancel</source>
        <translation>キャンセル(&amp;C)</translation>
    </message>
    <message>
        <location filename="../uninstallfrm.ui" line="128"/>
        <source>&amp;Uninstall</source>
        <translation>アンインストール(&amp;U)</translation>
    </message>
</context>
<context>
    <name>Uninstaller</name>
    <message>
        <location filename="../base/uninstall.cpp" line="31"/>
        <location filename="../base/uninstall.cpp" line="42"/>
        <source>Starting Uninstallation</source>
        <translation>アンインストールを開始します</translation>
    </message>
    <message>
        <location filename="../base/uninstall.cpp" line="35"/>
        <source>Finished Uninstallation</source>
        <translation>アンインストールが終了しました</translation>
    </message>
    <message>
        <location filename="../base/uninstall.cpp" line="48"/>
        <source>Uninstalling %1...</source>
        <translation>%1 をアンインストールしています...</translation>
    </message>
    <message>
        <location filename="../base/uninstall.cpp" line="79"/>
        <source>Could not delete %1</source>
        <translation>%1 を削除することができませんでした</translation>
    </message>
    <message>
        <location filename="../base/uninstall.cpp" line="108"/>
        <source>Uninstallation finished</source>
        <translation>アンインストールが終了しました</translation>
    </message>
</context>
<context>
    <name>Utils</name>
    <message>
        <location filename="../base/utils.cpp" line="310"/>
        <source>&lt;li&gt;Permissions insufficient for bootloader installation.
Administrator priviledges are necessary.&lt;/li&gt;</source>
        <translation type="unfinished">&lt;li&gt;ブートローダをインストールするのに、アクセス権限が足りません。
管理者権限が必要です。&lt;/li&gt;</translation>
    </message>
    <message>
        <location filename="../base/utils.cpp" line="322"/>
        <source>&lt;li&gt;Target mismatch detected.&lt;br/&gt;Installed target: %1&lt;br/&gt;Selected target: %2.&lt;/li&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/utils.cpp" line="329"/>
        <source>Problem detected:</source>
        <translation type="unfinished">問題が見つかりました:</translation>
    </message>
</context>
<context>
    <name>VoiceFileCreator</name>
    <message>
        <location filename="../base/voicefile.cpp" line="42"/>
        <source>Starting Voicefile generation</source>
        <translation>ボイスファイルの作成を開始しています</translation>
    </message>
    <message>
        <location filename="../base/voicefile.cpp" line="89"/>
        <source>Extracted voice strings from installation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/voicefile.cpp" line="99"/>
        <source>Extracted voice strings incompatible</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/voicefile.cpp" line="144"/>
        <source>Could not retrieve strings from installation, downloading</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/voicefile.cpp" line="183"/>
        <source>Download error: received HTTP error %1.</source>
        <translation>ダウンロードエラー: HTTP 受信のエラー %1.</translation>
    </message>
    <message>
        <location filename="../base/voicefile.cpp" line="190"/>
        <source>Cached file used.</source>
        <translation>キャッシュファイルを使用しました。</translation>
    </message>
    <message>
        <location filename="../base/voicefile.cpp" line="193"/>
        <source>Download error: %1</source>
        <translation>ダウンロードエラー: %1</translation>
    </message>
    <message>
        <location filename="../base/voicefile.cpp" line="198"/>
        <source>Download finished.</source>
        <translation>ダウンロードが終了しました。</translation>
    </message>
    <message>
        <location filename="../base/voicefile.cpp" line="211"/>
        <source>failed to open downloaded file</source>
        <translation>ダウンロードしたファイルが開けませんでした</translation>
    </message>
    <message>
        <location filename="../base/voicefile.cpp" line="270"/>
        <source>The downloaded file was empty!</source>
        <translation>ダウンロードしたファイルが空です!</translation>
    </message>
    <message>
        <location filename="../base/voicefile.cpp" line="301"/>
        <source>Error opening downloaded file</source>
        <translation>ダウンロードしたファイルの読み込みエラー</translation>
    </message>
    <message>
        <location filename="../base/voicefile.cpp" line="312"/>
        <source>Error opening output file</source>
        <translation>出力ファイルの出力時のエラー</translation>
    </message>
    <message>
        <location filename="../base/voicefile.cpp" line="332"/>
        <source>successfully created.</source>
        <translation>正常に作成されました。</translation>
    </message>
    <message>
        <location filename="../base/voicefile.cpp" line="55"/>
        <source>could not find rockbox-info.txt</source>
        <translation>rockbox-info.txt が見つかりませんでした</translation>
    </message>
    <message>
        <location filename="../base/voicefile.cpp" line="170"/>
        <source>Downloading voice info...</source>
        <translation>ボイス情報をダウンロードしています...</translation>
    </message>
    <message>
        <location filename="../base/voicefile.cpp" line="217"/>
        <source>Reading strings...</source>
        <translation>文字列を読み込んでいます...</translation>
    </message>
    <message>
        <location filename="../base/voicefile.cpp" line="296"/>
        <source>Creating voicefiles...</source>
        <translation>ボイスファイルを作成しています...</translation>
    </message>
    <message>
        <location filename="../base/voicefile.cpp" line="341"/>
        <source>Cleaning up...</source>
        <translation>不要なファイルを削除しています...</translation>
    </message>
    <message>
        <location filename="../base/voicefile.cpp" line="352"/>
        <source>Finished</source>
        <translation>終了しました</translation>
    </message>
</context>
<context>
    <name>ZipInstaller</name>
    <message>
        <location filename="../base/zipinstaller.cpp" line="58"/>
        <source>done.</source>
        <translation>終了しました。</translation>
    </message>
    <message>
        <location filename="../base/zipinstaller.cpp" line="78"/>
        <source>Downloading file %1.%2</source>
        <translation>%1.%2 をダウンロードしています</translation>
    </message>
    <message>
        <location filename="../base/zipinstaller.cpp" line="112"/>
        <source>Download error: received HTTP error %1.</source>
        <translation>ダウンロードエラー: HTTP 受信のエラー %1.</translation>
    </message>
    <message>
        <location filename="../base/zipinstaller.cpp" line="120"/>
        <source>Download error: %1</source>
        <translation>ダウンロードエラー: %1</translation>
    </message>
    <message>
        <location filename="../base/zipinstaller.cpp" line="124"/>
        <source>Download finished.</source>
        <translation>ダウンロードが終了しました。</translation>
    </message>
    <message>
        <location filename="../base/zipinstaller.cpp" line="130"/>
        <source>Extracting file.</source>
        <translation>解凍しています。</translation>
    </message>
    <message>
        <location filename="../base/zipinstaller.cpp" line="150"/>
        <source>Extraction failed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/zipinstaller.cpp" line="159"/>
        <source>Installing file.</source>
        <translation>ファイルをインストールしています。</translation>
    </message>
    <message>
        <location filename="../base/zipinstaller.cpp" line="170"/>
        <source>Installing file failed.</source>
        <translation>ファイルのインストールに失敗しました。</translation>
    </message>
    <message>
        <location filename="../base/zipinstaller.cpp" line="183"/>
        <source>Creating installation log</source>
        <translation>インストール時のログを作成しています</translation>
    </message>
    <message>
        <location filename="../base/zipinstaller.cpp" line="118"/>
        <source>Cached file used.</source>
        <translation>キャッシュファイルを使用しました。</translation>
    </message>
    <message>
        <location filename="../base/zipinstaller.cpp" line="66"/>
        <source>Package installation finished successfully.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/zipinstaller.cpp" line="143"/>
        <source>Not enough disk space! Aborting.</source>
        <translation>ディスクの空き領域が足りません! 処理を中止します。</translation>
    </message>
</context>
<context>
    <name>ZipUtil</name>
    <message>
        <location filename="../base/ziputil.cpp" line="124"/>
        <source>Creating output path failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/ziputil.cpp" line="131"/>
        <source>Creating output file failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base/ziputil.cpp" line="140"/>
        <source>Error during Zip operation</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>aboutBox</name>
    <message>
        <location filename="../aboutbox.ui" line="14"/>
        <source>About Rockbox Utility</source>
        <translation>Rockbox Utilityについて</translation>
    </message>
    <message>
        <location filename="../aboutbox.ui" line="74"/>
        <source>&amp;Credits</source>
        <translation>クレジット(&amp;C)</translation>
    </message>
    <message>
        <location filename="../aboutbox.ui" line="106"/>
        <source>&amp;License</source>
        <translation>ライセンス(&amp;L)</translation>
    </message>
    <message>
        <location filename="../aboutbox.ui" line="132"/>
        <source>&amp;Speex License</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aboutbox.ui" line="158"/>
        <source>&amp;Ok</source>
        <translation>Ok(&amp;O)</translation>
    </message>
    <message>
        <location filename="../aboutbox.ui" line="32"/>
        <source>The Rockbox Utility</source>
        <translation>The Rockbox Utility</translation>
    </message>
    <message utf8="true">
        <location filename="../aboutbox.ui" line="54"/>
        <source>Installer and housekeeping utility for the Rockbox open source digital audio player firmware.&lt;br/&gt;© 2005 - 2012 The Rockbox Team.&lt;br/&gt;Released under the GNU General Public License v2.&lt;br/&gt;Uses icons by the &lt;a href=&quot;http://tango.freedesktop.org/&quot;&gt;Tango Project&lt;/a&gt;.&lt;br/&gt;&lt;center&gt;&lt;a href=&quot;http://www.rockbox.org&quot;&gt;http://www.rockbox.org&lt;/a&gt;&lt;/center&gt;</source>
        <translation>Installer and housekeeping utility for the Rockbox open source digital audio player firmware.&lt;br/&gt;© 2005 - 2012 The Rockbox Team &lt;br/&gt;Released under the GNU General Public License v2.&lt;br/&gt;Uses icons by the &lt;a href=&quot;http://tango.freedesktop.org/&quot;&gt;Tango Project&lt;/a&gt;.&lt;br/&gt;&lt;center&gt;&lt;a href=&quot;http://www.rockbox.org&quot;&gt;http://www.rockbox.org&lt;/a&gt;&lt;/center&gt;</translation>
    </message>
</context>
</TS>
