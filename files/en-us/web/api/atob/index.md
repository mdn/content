---
title: atob()
slug: Web/API/atob
tags:
  - API
  - HTML DOM
  - Method
  - Reference
  - Polyfill
  - atob
browser-compat: api.atob
---
{{APIRef("HTML DOM")}}

The **`atob()`** function decodes a
string of data which has been encoded using {{glossary("Base64")}} encoding. You can use
the {{domxref("btoa","btoa()")}} method to encode and transmit
data which may otherwise cause communication problems, then transmit it and use the
`atob()` method to decode the data again. For example, you can encode,
transmit, and decode control characters such as ASCII values 0 through 31.

For use with Unicode or UTF-8 strings, see the note on "Unicode strings" in the page
for {{domxref("btoa", "btoa()")}}.

## Syntax

```js
var decodedData = atob(encodedData);
```

### Parameters

- `encodedData`
  - : A [binary string](/en-US/docs/Web/API/DOMString/Binary) contains an
    base64 encoded data.

### Return value

An ASCII string containing decoded data from `encodedData`.

### Exceptions

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Thrown if `encodedData` is not valid base64.

## Example

```js
const encodedData = btoa('Hello, world'); // encode a string
const decodedData = atob(encodedData); // decode the string
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [A polyfill of `atob`](https://github.com/zloirock/core-js#base64-utility-methods) is available in [`core-js`](https://github.com/zloirock/core-js)
- [`data` URIs](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)
- {{domxref("btoa","btoa()")}}
