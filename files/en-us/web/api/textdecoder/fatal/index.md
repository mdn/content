---
title: TextDecoder.fatal
slug: Web/API/TextDecoder/fatal
page-type: web-api-instance-property
tags:
  - API
  - TextDecoder
  - fatal
  - Property
  - Reference
browser-compat: api.TextDecoder.fatal
---

{{APIRef("Encoding API")}}

The **`fatal`** read-only property of the {{domxref("TextDecoder")}} interface is a {{jsxref('Boolean')}} indicating whether the error mode is fatal.

If the property is `true` then a decoder will throw a {{jsxref("TypeError")}} if it encounters malformed data while decoding.
If `false` the decoder will substitute the invalid data with replacement characters.
The value is set in the [`TextDecoder()` constructor](/en-US/docs/Web/API/TextDecoder/TextDecoder).

## Value

`true` indicates that errors are fatal; `false` indicates that invalid data is substituted with placeholder characters.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
