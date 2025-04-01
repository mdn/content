---
title: "WorkerGlobalScope: btoa() method"
short-title: btoa()
slug: Web/API/WorkerGlobalScope/btoa
page-type: web-api-instance-method
browser-compat: api.btoa
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

The **`btoa()`** method of the {{domxref("WorkerGlobalScope")}} interface creates a {{glossary("Base64")}}-encoded {{Glossary("ASCII")}} string from a _binary string_ (i.e., a string in which each character in the string is treated as a byte of binary data).

You can use this method to encode data which may otherwise cause communication problems, transmit it, then use the {{domxref("WorkerGlobalScope.atob()")}} method to decode the data again.
For example, you can encode control characters such as ASCII values 0 through 31.

## Syntax

```js-nolint
btoa(stringToEncode)
```

### Parameters

- `stringToEncode`
  - : The _binary string_ to encode.

### Return value

An ASCII string containing the Base64 representation of `stringToEncode`.

### Exceptions

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : The string contained a character that did not fit in a single byte. See "Unicode strings" below for more detail.

## Examples

```js
const encodedData = self.btoa("Hello, world"); // encode a string
const decodedData = self.atob(encodedData); // decode the string
```

## Unicode strings

Base64, by design, expects binary data as its input.
In terms of JavaScript strings, this means strings in which the code point of each character occupies only one byte.
So if you pass a string into `btoa()` containing characters that occupy more than one byte, you will get an error, because this is not considered binary data.

For more information and workarounds see [`Window.btoa()`](/en-US/docs/Web/API/Window/btoa#unicode_strings).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [A polyfill of `btoa`](https://github.com/zloirock/core-js#base64-utility-methods) is available in [`core-js`](https://github.com/zloirock/core-js)
- [`data` URLs](/en-US/docs/Web/URI/Reference/Schemes/data)
- {{domxref("WorkerGlobalScope.atob()")}}
- {{domxref("Window.btoa()")}}: the same method, but in window scopes.
- {{jsxref("Uint8Array.prototype.toBase64()")}}
- {{Glossary("Base64")}}
