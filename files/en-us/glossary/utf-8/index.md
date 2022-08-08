---
title: UTF-8
slug: Glossary/UTF-8
tags:
  - CodingScripting
  - Glossary
  - HTML
  - JavaScript
  - Utf-8
---
UTF-8 (UCS Transformation Format 8) is the World Wide Web's most common {{Glossary("Character encoding", "character encoding")}}. Each character is represented by one to four bytes. UTF-8 is backward-compatible with {{Glossary("ASCII")}} and can represent any standard Unicode character.

The first 128 UTF-8 characters precisely match the first 128 ASCII characters (numbered 0-127), meaning that existing ASCII text is already valid UTF-8. All other characters use two to four bytes. Each byte has some bits reserved for encoding purposes. Since non-ASCII characters require more than one byte for storage, they run the risk of being corrupted if the bytes are separated and not recombined.

## See also

- [UTF-8](https://en.wikipedia.org/wiki/UTF-8) on Wikipedia
- [FAQ about UTF-8 on Unicode website](https://www.unicode.org/faq/utf_bom.html#UTF8)
