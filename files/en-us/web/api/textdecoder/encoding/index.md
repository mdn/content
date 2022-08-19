---
title: TextDecoder.encoding
slug: Web/API/TextDecoder/encoding
page-type: web-api-instance-property
tags:
  - API
  - Encoding
  - Property
  - Read-only
  - TextDecoder
browser-compat: api.TextDecoder.encoding
---
{{APIRef("Encoding API")}}

The **`TextDecoder.encoding`** read-only property
returns a string containing the name of the decoding algorithm used by
the specific decoder.

It can be one of the following values:

- The recommended encoding for the Web: `'utf-8'`.
- The legacy single-byte encodings:
  ['ibm866'](https://en.wikipedia.org/wiki/Code_page_866),
  ['iso-8859-2'](https://en.wikipedia.org/wiki/ISO/IEC_8859-2),
  ['iso-8859-3'](https://en.wikipedia.org/wiki/ISO/IEC_8859-3),
  ['iso-8859-4'](https://en.wikipedia.org/wiki/ISO/IEC_8859-4),
  ['iso-8859-5'](https://en.wikipedia.org/wiki/ISO/IEC_8859-5),
  ['iso-8859-6'](https://en.wikipedia.org/wiki/ISO/IEC_8859-6),
  ['iso-8859-7'](https://en.wikipedia.org/wiki/ISO/IEC_8859-7),
  ['iso-8859-8'](https://en.wikipedia.org/wiki/ISO/IEC_8859-8)'`,
  ['iso-8859-8i'](https://en.wikipedia.org/wiki/ISO-8859-8-I),
  ['iso-8859-10'](https://en.wikipedia.org/wiki/ISO/IEC_8859-10),
  ['iso-8859-13'](https://en.wikipedia.org/wiki/ISO/IEC_8859-13),
  ['iso-8859-14'](https://en.wikipedia.org/wiki/ISO/IEC_8859-14),
  ['iso-8859-15'](https://en.wikipedia.org/wiki/ISO/IEC_8859-15),
  ['iso-8859-16'](https://en.wikipedia.org/wiki/ISO/IEC_8859-16),
  ['koi8-r'](https://en.wikipedia.org/wiki/KOI8-R),
  ['koi8-u'](https://en.wikipedia.org/wiki/KOI8-U),
  ['macintosh'](https://en.wikipedia.org/wiki/Mac_OS_Roman),
  ['windows-874'](https://en.wikipedia.org/wiki/Windows-874),
  ['windows-1250'](https://en.wikipedia.org/wiki/Windows-1250),
  ['windows-1251'](https://en.wikipedia.org/wiki/Windows-1251),
  ['windows-1252'](https://en.wikipedia.org/wiki/Windows-1252),
  ['windows-1253'](https://en.wikipedia.org/wiki/Windows-1253),
  ['windows-1254'](https://en.wikipedia.org/wiki/Windows-1254),
  ['windows-1255'](https://en.wikipedia.org/wiki/Windows-1255),
  ['windows-1256'](https://en.wikipedia.org/wiki/Windows-1256),
  ['windows-1257'](https://en.wikipedia.org/wiki/Windows-1257),
  ['windows-1258'](https://en.wikipedia.org/wiki/Windows-1258), or
  ['x-mac-cyrillic'](https://en.wikipedia.org/wiki/Macintosh_Cyrillic_encoding).
- The legacy multi-byte Chinese (simplified) encodings:
  ['gbk'](https://en.wikipedia.org/wiki/GBK),
  ['gb18030'](https://en.wikipedia.org/wiki/GB_18030), and
  ['hz-gb-2312'](https://en.wikipedia.org/wiki/HZ_(character_encoding)).
- The legacy multi-byte Chinese (traditional) encoding:
  ['big5'](https://en.wikipedia.org/wiki/Big5).
- The legacy multi-byte Japanese encodings:
  ['euc-jp'](https://en.wikipedia.org/wiki/Extended_Unix_Code#EUC-JP),
  ['iso-2022-jp'](https://en.wikipedia.org/wiki/ISO/IEC_2022#ISO-2022-JP),
  and ['shift-jis'](https://en.wikipedia.org/wiki/Shift_JIS).
- The legacy multi-byte Korean encodings:
  ['euc-kr'](https://en.wikipedia.org/wiki/Extended_Unix_Code#EUC-KR), and
  ['iso-2022-kr'](https://en.wikipedia.org/wiki/ISO/IEC_2022#ISO-2022-KR).
- The legacy miscellaneous encodings:
  ['utf-16be'](https://en.wikipedia.org/wiki/UTF-16#Byte_order_encoding_schemes),
  ['utf-16le'](https://en.wikipedia.org/wiki/UTF-16#Byte_order_encoding_schemes),
  and `'x-user-defined'`.
- A special encoding, `'replacement'`, which only emits an error and an
  `EOF` code point. It is used to prevent attacks that mismatch encodings
  between the client and server. It can happen with `ISO-2022-CN` and
  `ISO-2022-CN-ext`.

## Value

A string.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("TextDecoder")}} interface it belongs to.
