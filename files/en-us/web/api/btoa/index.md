---
title: btoa() global function
short-title: btoa()
slug: Web/API/btoa
page-type: web-api-global-function
browser-compat: api.btoa
---

{{APIRef("HTML DOM")}}

The **`btoa()`** method creates a
{{glossary("Base64")}}-encoded ASCII string from a _binary string_ (i.e., a
string in which each character in the string is treated as a byte
of binary data).

You can use this method to encode data which may otherwise cause communication
problems, transmit it, then use the {{domxref("atob",
  "atob()")}} method to decode the data again. For example, you can encode control
characters such as ASCII values 0 through 31.

## Syntax

```js-nolint
btoa(stringToEncode)
```

### Parameters

- `stringToEncode`
  - : The _binary string_ to encode.

### Return value

An ASCII string containing the Base64 representation of
`stringToEncode`.

### Exceptions

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : The string contained a character that did not fit in a single byte. See "Unicode
    strings" below for more detail.

## Examples

```js
const encodedData = btoa("Hello, world"); // encode a string
const decodedData = atob(encodedData); // decode the string
```

## Unicode strings

Base64, by design, expects binary data as its input. In terms of JavaScript strings,
this means strings in which the code point of each character occupies only one byte. So if you pass a
string into `btoa()` containing characters that occupy more than one byte,
you will get an error, because this is not considered binary data:

```js
const ok = "a";
console.log(ok.codePointAt(0).toString(16)); //   61: occupies < 1 byte

const notOK = "✓";
console.log(notOK.codePointAt(0).toString(16)); // 2713: occupies > 1 byte

console.log(btoa(ok)); // YQ==
console.log(btoa(notOK)); // error
```

For how to work around this limitation when dealing with arbitrary Unicode text, see [The "Unicode Problem"](/en-US/docs/Glossary/Base64#the_unicode_problem) section of the {{Glossary("Base64")}} glossary entry.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [A polyfill of `btoa`](https://github.com/zloirock/core-js#base64-utility-methods) is available in [`core-js`](https://github.com/zloirock/core-js)
- [`data` URLs](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)
- {{domxref("atob","atob()")}}
- {{Glossary("Base64")}}
