---
title: Document.xmlEncoding
slug: Web/API/Document/xmlEncoding
tags:
  - API
  - DOM
  - Document.xmlEncoding
  - MakeBrowserAgnostic
  - Property
  - Deprecated
browser-compat: api.Document.xmlEncoding
---
{{APIRef("DOM")}}{{deprecated_header}}

Returns the encoding as determined by the XML declaration. Should be `null` if unspecified or unknown.

> **Warning:** Do not use this attribute; it has been removed from the DOM Level 4 specification and is no longer supported in Gecko 10.0 {{ geckoRelease("10.0") }}.

If the XML Declaration states:

    <?xml version="1.0" encoding="UTF-16"?>

...the result should be "UTF-16".

However, Firefox 3.0 includes information on endianness (e.g., UTF-16BE for big endian encoding), and while this extra information is removed as of Firefox 3.1b3, Firefox 3.1b3 is still consulting the file's encoding, rather than the XML Declaration as the spec defines it ("An attribute specifying, _as part of the XML declaration_, the encoding of this document.").

## Specifications

- [http://www.w3.org/TR/DOM-Level-3-Cor...ment3-encoding](https://www.w3.org/TR/DOM-Level-3-Core/core.html#Document3-encoding)
- This has been removed from {{ spec("http://www.w3.org/TR/domcore/","DOM Core Level 4","WD") }}

## Browser compatibility

{{Compat}}
