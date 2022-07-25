---
title: btoa()
slug: Web/API/btoa
page-type: web-api-global-function
tags:
  - API
  - HTML DOM
  - Method
  - Reference
  - Polyfill
  - Web
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

```js
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
const encodedData = btoa('Hello, world'); // encode a string
const decodedData = atob(encodedData); // decode the string
```

## Unicode strings

The `btoa()` function takes a JavaScript string as a parameter. In
JavaScript strings are represented using the UTF-16 character encoding: in this
encoding, strings are represented as a sequence of 16-bit (2 byte) units. Every ASCII
character fits into the first byte of one of these units, but many other characters
don't.

Base64, by design, expects binary data as its input. In terms of JavaScript strings,
this means strings in which each character occupies only one byte. So if you pass a
string into `btoa()` containing characters that occupy more than one byte,
you will get an error, because this is not considered binary data:

```js
const ok = "a";
console.log(ok.codePointAt(0).toString(16)); //   61: occupies < 1 byte

const notOK = "✓"
console.log(notOK.codePointAt(0).toString(16)); // 2713: occupies > 1 byte

console.log(btoa(ok));    // YQ==
console.log(btoa(notOK)); // error
```

If you need to encode Unicode text as ASCII using `btoa()`, one option is to
convert the string such that each 16-bit unit occupies only one byte. For example:

```js
// convert a Unicode string to a string in which
// each 16-bit unit occupies only one byte
function toBinary(string) {
  const codeUnits = new Uint16Array(string.length);
  for (let i = 0; i < codeUnits.length; i++) {
    codeUnits[i] = string.charCodeAt(i);
  }
  const charCodes = new Uint8Array(codeUnits.buffer);
  let result = '';
  for (let i = 0; i < charCodes.byteLength; i++) {
    result += String.fromCharCode(charCodes[i]);
  }
  return result;
}

// a string that contains characters occupying > 1 byte
const myString = "☸☹☺☻☼☾☿";

const converted = toBinary(myString);
const encoded = btoa(converted);
console.log(encoded);                 // OCY5JjomOyY8Jj4mPyY=
```

If you do this, of course you'll have to reverse the conversion on the decoded string:

```js
function fromBinary(binary) {
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  const charCodes = new Uint16Array(bytes.buffer);
  let result = '';
  for (let i = 0; i < charCodes.length; i++) {
    result += String.fromCharCode(charCodes[i]);
  }
  return result;
}

const decoded = atob(encoded);
const original = fromBinary(decoded);
console.log(original);                // ☸☹☺☻☼☾☿
```

See also the example `utf8_to_b64` and `b64_to_utf8` functions in the [Solution #1 – escaping the string before encoding it](/en-US/docs/Glossary/Base64#solution_1_%E2%80%93_escaping_the_string_before_encoding_it) section of the {{Glossary("Base64")}} glossary entry.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [A polyfill of `btoa`](https://github.com/zloirock/core-js#base64-utility-methods) is available in [`core-js`](https://github.com/zloirock/core-js)
- [`data` URLs](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)
- {{domxref("atob","atob()")}}
- {{Glossary("Base64")}}
