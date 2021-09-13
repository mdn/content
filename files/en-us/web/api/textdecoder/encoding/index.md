---
title: TextDecoder.prototype.encoding
slug: Web/API/TextDecoder/encoding
tags:
  - API
  - Encoding
  - Experimental
  - Property
  - Read-only
  - TextDecoder
browser-compat: api.TextDecoder.encoding
---
{{APIRef("Encoding API")}}{{SeeCompatTable}}

The **`TextDecoder.prototype.encoding`** read-only property
returns a {{DOMxRef("DOMString")}} containing the name of the decoding algorithm used by
the specific decoder.

It can be one of the following values:

- The recommended encoding for the Web: `'utf-8'`.
- The legacy single-byte encodings:
  `{{interwiki('wikipedia', 'Code_page_866', "'ibm866'")}}`,
  `{{interwiki('wikipedia', 'ISO/IEC_8859-2', "'iso-8859-2'")}}`,
  `{{interwiki('wikipedia', 'ISO/IEC_8859-3', "'iso-8859-3'")}}`,
  `{{interwiki('wikipedia', 'ISO/IEC_8859-4', "'iso-8859-4'")}}`,
  `{{interwiki('wikipedia', 'ISO/IEC_8859-5', "'iso-8859-5'")}}`,
  `{{interwiki('wikipedia', 'ISO/IEC_8859-6', "'iso-8859-6'")}}`,
  `{{interwiki('wikipedia', 'ISO/IEC_8859-7', "'iso-8859-7'")}}`,
  `{{interwiki('wikipedia', 'ISO/IEC_8859-8', "'iso-8859-8'")}}'`,
  `{{interwiki('wikipedia', 'ISO-8859-8-I', "'iso-8859-8i'")}}`,
  `{{interwiki('wikipedia', 'ISO/IEC_8859-10', "'iso-8859-10'")}}`,
  `{{interwiki('wikipedia', 'ISO/IEC_8859-13', "'iso-8859-13'")}}`,
  `{{interwiki('wikipedia', 'ISO/IEC_8859-14', "'iso-8859-14'")}}`,
  `{{interwiki('wikipedia', 'ISO/IEC_8859-15', "'iso-8859-15'")}}`,
  `{{interwiki('wikipedia', 'ISO/IEC_8859-16', "'iso-8859-16'")}}`,
  `{{interwiki('wikipedia', 'KOI8-R', "'koi8-r'")}}`,
  `{{interwiki('wikipedia', 'KOI8-U', "'koi8-u'")}}`,
  `{{interwiki('wikipedia', 'Mac OS Roman', "'macintosh'")}}`,
  `{{interwiki('wikipedia', 'Windows-874', "'windows-874'")}}`,
  `{{interwiki('wikipedia', 'Windows-1250', "'windows-1250'")}}`,
  `{{interwiki('wikipedia', 'Windows-1251', "'windows-1251'")}}`,
  `{{interwiki('wikipedia', 'Windows-1252', "'windows-1252'")}}`,
  `{{interwiki('wikipedia', 'Windows-1253', "'windows-1253'")}}`,
  `{{interwiki('wikipedia', 'Windows-1254', "'windows-1254'")}}`,
  `{{interwiki('wikipedia', 'Windows-1255', "'windows-1255'")}}`,
  `{{interwiki('wikipedia', 'Windows-1256', "'windows-1256'")}}`,
  `{{interwiki('wikipedia', 'Windows-1257', "'windows-1257'")}}`,
  `{{interwiki('wikipedia', 'Windows-1258', "'windows-1258'")}}`, or
  `{{interwiki('wikipedia', 'Macintosh Cyrillic encoding', "'x-mac-cyrillic'")}}`.
- The legacy multi-byte Chinese (simplified) encodings:
  `{{interwiki('wikipedia', 'GBK', "'gbk'")}}`,
  `{{interwiki('wikipedia', 'GB_18030', "'gb18030'")}}`, and
  `{{interwiki('wikipedia', 'HZ_(character_encoding)', "'hz-gb-2312'")}}`.
- The legacy multi-byte Chinese (traditional) encoding:
  `{{interwiki('wikipedia', 'Big5', "'big5'")}}`.
- The legacy multi-byte Japanese encodings:
  `{{interwiki('wikipedia', 'Extended_Unix_Code#EUC-JP', "'euc-jp'")}}`,
  `{{interwiki('wikipedia', 'ISO/IEC_2022#ISO-2022-JP', "'iso-2022-jp'")}}`,
  and `{{interwiki('wikipedia', 'Shift JIS', "'shift-jis'")}}`.
- The legacy multi-byte Korean encodings:
  `{{interwiki('wikipedia', 'Extended_Unix_Code#EUC-KR', "'euc-kr'")}}`, and
  `{{interwiki('wikipedia', 'ISO/IEC_2022#ISO-2022-KR', "'iso-2022-kr'")}}`.
- The legacy miscellaneous encodings:
  `{{interwiki('wikipedia', 'UTF-16#Byte_order_encoding_schemes', "'utf-16be'")}}`,
  `{{interwiki('wikipedia', 'UTF-16#Byte_order_encoding_schemes', "'utf-16le'")}}`,
  and `'x-user-defined'`.
- A special encoding, `'replacement'`, which only emits an error and an
  `EOF` code point. It is used to prevent attacks that mismatch encodings
  between the client and server. It can happen with `ISO-2022-CN` and
  `ISO-2022-CN-ext`.

## Syntax

```js
var b = decoder.decoding;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("TextDecoder")}} interface it belongs to.
