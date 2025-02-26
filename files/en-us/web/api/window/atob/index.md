---
title: "Window: atob() method"
short-title: atob()
slug: Web/API/Window/atob
page-type: web-api-instance-method
browser-compat: api.atob
---

{{APIRef("HTML DOM")}}

The **`atob()`** method of the {{domxref("Window")}} interface decodes a
string of data which has been encoded using {{glossary("Base64")}} encoding. You can use
the {{domxref("Window.btoa()")}} method to encode and transmit
data which may otherwise cause communication problems, then transmit it and use the
`atob()` method to decode the data again. For example, you can encode,
transmit, and decode control characters such as {{Glossary("ASCII")}} values 0 through 31.

Also consider using the {{jsxref("Uint8Array.fromBase64()")}} method, which creates a `Uint8Array` object from a base64-encoded string. It results in a byte array, which is easier to work with than a string containing raw bytes.

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
const encodedData = window.btoa("Hello, world"); // encode a string
const decodedData = window.atob(encodedData); // decode the string
```

For more examples, see the {{domxref("Window.btoa()")}} method.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [A polyfill of `atob`](https://github.com/zloirock/core-js#base64-utility-methods) is available in [`core-js`](https://github.com/zloirock/core-js)
- [`data` URLs](/en-US/docs/Web/URI/Reference/Schemes/data)
- {{domxref("WorkerGlobalScope.atob()")}}: the same method, but in worker scopes.
- {{domxref("Window.btoa()")}}
- {{jsxref("Uint8Array.fromBase64()")}}
