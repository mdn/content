---
title: Encoding API Encodings
slug: Web/API/Encoding_API/Encodings
page-type: guide
---

{{DefaultAPISidebar("Encoding API")}}

The constructors for the [Encoding API](/en-US/docs/Web/API/Encoding_API) interfaces {{domxref("TextDecoder")}} and {{domxref("TextDecoderStream")}} can be passed an optional `label` argument, which identifies the encoding to be used.

The following table lists all encoding labels that user agents must support, along with the encoding that the label identifies. Note that most encodings have more than one label.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Label</th>
      <th scope="col">Encoding</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>"unicode-1-1-utf-8"</code>, <code>"utf-8"</code>,
        <code>"utf8"</code>
      </td>
      <td><code>"utf-8"</code></td>
    </tr>
    <tr>
      <td>
        <code>"866"</code>, <code>"cp866"</code>, <code>"csibm866"</code>,
        <code>"ibm866"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/Code_page_866">ibm866</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"csisolatin2"</code>, <code>"iso-8859-2"</code>,
        <code>"iso-ir-101"</code>, <code>"iso8859-2"</code>,
        <code>"iso88592"</code>, <code>"iso_8859-2"</code>,
        <code>"iso_8859-2:1987"</code>, <code>"l2"</code>, <code>"latin2"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_8859-2">iso-8859-2</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"csisolatin3"</code>, <code>"iso-8859-3"</code>,
        <code>"iso-ir-109"</code>, <code>"iso8859-3"</code>,
        <code>"iso88593"</code>, <code>"iso_8859-3"</code>,
        <code>"iso_8859-3:1988"</code>, <code>"l3"</code>, <code>"latin3"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_8859-3">iso-8859-3</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"csisolatin4"</code>, <code>"iso-8859-4"</code>,
        <code>"iso-ir-110"</code>, <code>"iso8859-4"</code>,
        <code>"iso88594"</code>, <code>"iso_8859-4"</code>,
        <code>"iso_8859-4:1988"</code>, <code>"l4"</code>, <code>"latin4"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_8859-4">iso-8859-4</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"csisolatincyrillic"</code>, <code>"cyrillic"</code>,
        <code>"iso-8859-5"</code>, <code>"iso-ir-144"</code>,
        <code>"iso88595"</code>, <code>"iso_8859-5"</code>,
        <code>"iso_8859-5:1988"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_8859-5">iso-8859-5</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"arabic"</code>, <code>"asmo-708"</code>,
        <code>"csiso88596e"</code>, <code>"csiso88596i"</code>,
        <code>"csisolatinarabic"</code>, <code>"ecma-114"</code>,
        <code>"iso-8859-6"</code>, <code>"iso-8859-6-e"</code>,
        <code>"iso-8859-6-i"</code>, <code>"iso-ir-127"</code>,
        <code>"iso8859-6"</code>, <code>"iso88596"</code>,
        <code>"iso_8859-6"</code>, <code>"iso_8859-6:1987"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_8859-6">iso-8859-6</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"csisolatingreek"</code>, <code>"ecma-118"</code>,
        <code>"elot_928"</code>, <code>"greek"</code>, <code>"greek8"</code>,
        <code>"iso-8859-7"</code>, <code>"iso-ir-126"</code>,
        <code>"iso8859-7"</code>, <code>"iso88597"</code>,
        <code>"iso_8859-7"</code>, <code>"iso_8859-7:1987"</code>,
        <code>"sun_eu_greek"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_8859-7">iso-8859-7</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"csiso88598e"</code>, <code>"csisolatinhebrew"</code>,
        <code>"hebrew"</code>, <code>"iso-8859-8"</code>,
        <code>"iso-8859-8-e"</code>, <code>"iso-ir-138"</code>,
        <code>"iso8859-8"</code>, <code>"iso88598"</code>,
        <code>"iso_8859-8"</code>, <code>"iso_8859-8:1988"</code>,
        <code>"visual"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_8859-8">iso-8859-8</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"csiso88598i"</code>, <code>"iso-8859-8-i"</code>,
        <code>"logical"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO-8859-8-I">iso-8859-8i</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"csisolatin6"</code>, <code>"iso-8859-10"</code>,
        <code>"iso-ir-157"</code>, <code>"iso8859-10"</code>,
        <code>"iso885910"</code>, <code>"l6"</code>, <code>"latin6"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_8859-10">iso-8859-10</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"iso-8859-13"</code>, <code>"iso8859-13"</code>,
        <code>"iso885913"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_8859-13">iso-8859-13</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"iso-8859-14"</code>, <code>"iso8859-14"</code>,
        <code>"iso885914"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_8859-14">iso-8859-14</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"csisolatin9"</code>, <code>"iso-8859-15"</code>,
        <code>"iso8859-15"</code>, <code>"iso885915"</code>, <code>"l9"</code>,
        <code>"latin9"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_8859-15">iso-8859-15</a>
      </td>
    </tr>
    <tr>
      <td><code>"iso-8859-16"</code></td>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_8859-16">iso-8859-16</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"cskoi8r"</code>, <code>"koi"</code>, <code>"koi8"</code>,
        <code>"koi8-r"</code>, <code>"koi8_r"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/KOI8-R">koi8-r</a>
      </td>
    </tr>
    <tr>
      <td><code>"koi8-u"</code></td>
      <td>
        <a href="https://en.wikipedia.org/wiki/KOI8-U">koi8-u</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"csmacintosh"</code>, <code>"mac"</code>,
        <code>"macintosh"</code>, <code>"x-mac-roman"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/Mac_OS_Roman">macintosh</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"dos-874"</code>, <code>"iso-8859-11"</code>,
        <code>"iso8859-11"</code>, <code>"iso885911"</code>,
        <code>"tis-620"</code>, <code>"windows-874"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/Windows-874">windows-874</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"cp1250"</code>, <code>"windows-1250"</code>,
        <code>"x-cp1250"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/Windows-1250">windows-1250</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"cp1251"</code>, <code>"windows-1251"</code>,
        <code>"x-cp1251"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/Windows-1251">windows-1251</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"ansi_x3.4-1968"</code>, <code>"ascii"</code>,
        <code>"cp1252"</code>, <code>"cp819"</code>, <code>"csisolatin1"</code>,
        <code>"ibm819"</code>, <code>"iso-8859-1"</code>,
        <code>"iso-ir-100"</code>, <code>"iso8859-1"</code>,
        <code>"iso88591"</code>, <code>"iso_8859-1"</code>,
        <code>"iso_8859-1:1987"</code>, <code>"l1"</code>,
        <code>"latin1"</code>, <code>"us-ascii"</code>,
        <code>"windows-1252"</code>, <code>"x-cp1252"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/Windows-1252">windows-1252</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"cp1253"</code>, <code>"windows-1253"</code>,
        <code>"x-cp1253"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/Windows-1253">windows-1253</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"cp1254"</code>, <code>"csisolatin5"</code>,
        <code>"iso-8859-9"</code>, <code>"iso-ir-148"</code>,
        <code>"iso8859-9"</code>, <code>"iso88599"</code>,
        <code>"iso_8859-9"</code>, <code>"iso_8859-9:1989"</code>,
        <code>"l5"</code>, <code>"latin5"</code>, <code>"windows-1254"</code>,
        <code>"x-cp1254"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/Windows-1254">windows-1254</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"cp1255"</code>, <code>"windows-1255"</code>,
        <code>"x-cp1255"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/Windows-1255">windows-1255</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"cp1256"</code>, <code>"windows-1256"</code>,
        <code>"x-cp1256"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/Windows-1256">windows-1256</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"cp1257"</code>, <code>"windows-1257"</code>,
        <code>"x-cp1257"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/Windows-1257">windows-1257</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"cp1258"</code>, <code>"windows-1258"</code>,
        <code>"x-cp1258"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/Windows-1258">windows-1258</a>
      </td>
    </tr>
    <tr>
      <td><code>"x-mac-cyrillic"</code>, <code>"x-mac-ukrainian"</code></td>
      <td>
        <a href="https://en.wikipedia.org/wiki/Macintosh_Cyrillic_encoding">x-mac-cyrillic</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"chinese"</code>, <code>"csgb2312"</code>,
        <code>"csiso58gb231280"</code>, <code>"gb2312"</code>,
        <code>"gb_2312"</code>, <code>"gb_2312-80"</code>, <code>"gbk"</code>,
        <code>"iso-ir-58"</code>, <code>"x-gbk"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/GBK_(character_encoding)">gbk</a>
      </td>
    </tr>
    <tr>
      <td><code>"gb18030"</code></td>
      <td>
        <a href="https://en.wikipedia.org/wiki/GB_18030">gb18030</a>
      </td>
    </tr>
    <tr>
      <td><code>"hz-gb-2312"</code></td>
      <td>
        <a href="https://en.wikipedia.org/wiki/HZ_(character_encoding)">hz-gb-2312</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"big5"</code>, <code>"big5-hkscs"</code>, <code>"cn-big5"</code>,
        <code>"csbig5"</code>, <code>"x-x-big5"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/Big5">big5</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"cseucpkdfmtjapanese"</code>, <code>"euc-jp"</code>,
        <code>"x-euc-jp"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/Extended_Unix_Code#EUC-JP">euc-jp</a>
      </td>
    </tr>
    <tr>
      <td><code>"csiso2022jp"</code>, <code>"iso-2022-jp"</code></td>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_2022#ISO-2022-JP">iso-2022-jp</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"csshiftjis"</code>, <code>"ms_kanji"</code>,
        <code>"shift-jis"</code>, <code>"shift_jis"</code>, <code>"sjis"</code>,
        <code>"windows-31j"</code>, <code>"x-sjis"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/Shift_JIS">shift-jis</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>"cseuckr"</code>, <code>"csksc56011987"</code>,
        <code>"euc-kr"</code>, <code>"iso-ir-149"</code>, <code>"korean"</code>,
        <code>"ks_c_5601-1987"</code>, <code>"ks_c_5601-1989"</code>,
        <code>"ksc5601"</code>, <code>"ksc_5601"</code>,
        <code>"windows-949"</code>
      </td>
      <td>
        <a href="https://en.wikipedia.org/wiki/Extended_Unix_Code#EUC-KR">euc-kr</a>
      </td>
    </tr>
    <tr>
      <td><code>"csiso2022kr"</code>, <code>"iso-2022-kr"</code></td>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_2022#ISO-2022-KR">iso-2022-kr</a>
      </td>
    </tr>
    <tr>
      <td><code>"utf-16be"</code></td>
      <td>
        <a href="https://en.wikipedia.org/wiki/UTF-16#Byte_order_encoding_schemes">utf-16be</a>
      </td>
    </tr>
    <tr>
      <td><code>"utf-16"</code>, <code>"utf-16le"</code></td>
      <td>
        <a href="https://en.wikipedia.org/wiki/UTF-16#Byte_order_encoding_schemes">utf-16le</a>
      </td>
    </tr>
    <tr>
      <td><code>"x-user-defined"</code></td>
      <td><code>"x-user-defined"</code></td>
    </tr>
    <tr>
      <td><code>"iso-2022-cn"</code>, <code>"iso-2022-cn-ext"</code></td>
      <td><code>"replacement"</code></td>
    </tr>
  </tbody>
</table>
