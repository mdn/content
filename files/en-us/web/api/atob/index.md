---
title: atob() global function
short-title: atob()
slug: Web/API/atob
page-type: web-api-global-function
browser-compat: api.atob
---

{{APIRef("HTML DOM")}}

The **`atob()`** function decodes a
string of data which has been encoded using {{glossary("Base64")}} encoding. You can use
the {{domxref("btoa","btoa()")}} method to encode and transmit
data which may otherwise cause communication problems, then transmit it and use the
`atob()` method to decode the data again. For example, you can encode,
transmit, and decode control characters such as {{Glossary("ASCII")}} values 0 through 31.

For use with arbitrary Unicode strings, see [The "Unicode Problem"](/en-US/docs/Glossary/Base64#the_unicode_problem) section of the {{Glossary("Base64")}} glossary entry.

## Syntax

```js-nolint
atob(encodedData)
```

### Parameters

- `encodedData`
  - : A binary string (i.e., a string in which each character in the string is treated as a byte of binary data) containing base64-encoded data.

### Return value

An ASCII string containing decoded data from `encodedData`.

### Exceptions

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Thrown if `encodedData` is not valid base64.

## Examples

```js
const encodedData = btoa("Hello, world"); // encode a string
const decodedData = atob(encodedData); // decode the string
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [A polyfill of `atob`](https://github.com/zloirock/core-js#base64-utility-methods) is available in [`core-js`](https://github.com/zloirock/core-js)
- [`data` URLs](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)
- {{domxref("btoa","btoa()")}}
