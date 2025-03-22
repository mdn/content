---
title: "TextDecoder: fatal property"
short-title: fatal
slug: Web/API/TextDecoder/fatal
page-type: web-api-instance-property
browser-compat: api.TextDecoder.fatal
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

The **`fatal`** read-only property of the {{domxref("TextDecoder")}} interface is a {{jsxref('Boolean')}} indicating whether the error mode is fatal.

If the property is `true`, then a decoder will throw a {{jsxref("TypeError")}} if it encounters malformed data while decoding.
If `false`, the decoder will substitute the invalid data with the replacement character `U+FFFD` (�).
The value of the property is set in the [`TextDecoder()` constructor](/en-US/docs/Web/API/TextDecoder/TextDecoder).

## Value

A boolean which will be `true` if the error mode is set to `fatal`.
Otherwise, it will be `false`, indicating that the error mode is `replacement`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
