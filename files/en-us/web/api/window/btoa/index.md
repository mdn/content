---
title: "Window: btoa() method"
short-title: btoa()
slug: Web/API/Window/btoa
page-type: web-api-instance-method
browser-compat: api.btoa
---

{{APIRef("HTML DOM")}}

The **`btoa()`** method of the {{domxref("Window")}} interface creates a
{{glossary("Base64")}}-encoded {{Glossary("ASCII")}} string from a _binary string_ (i.e., a
string in which each character in the string is treated as a byte
of binary data).

You can use this method to encode data which may otherwise cause communication
problems, transmit it, then use the {{domxref("Window.atob()")}} method to decode the data again.
For example, you can encode control characters such as ASCII values 0 through 31.

Also consider using the {{jsxref("Uint8Array.prototype.toBase64()")}} method if your data is in a `Uint8Array` object to avoid creating a string containing raw bytes.

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
const encodedData = window.btoa("Hello, world"); // encode a string
const decodedData = window.atob(encodedData); // decode the string
```

### Unicode strings

Base64, by design, expects binary data as its input. In terms of JavaScript strings,
this means strings in which the code point of each character occupies only one byte. So if you pass a
string into `btoa()` containing characters that occupy more than one byte,
you will get an error, because this is not considered binary data:

```js
const ok = "a";
console.log(ok.codePointAt(0).toString(16)); //   61: occupies < 1 byte

const notOK = "✓";
console.log(notOK.codePointAt(0).toString(16)); // 2713: occupies > 1 byte

console.log(window.btoa(ok)); // YQ==
console.log(window.btoa(notOK)); // error
```

Since `btoa` interprets the code points of its input string as byte values, calling `btoa` on a string will cause a "Character Out Of Range" exception if a character's code point exceeds `0xff`. For use cases where you need to encode arbitrary Unicode text, it is necessary to first convert the string to its constituent bytes in {{glossary("UTF-8")}}, and then encode the bytes.

The simplest solution is to use `TextEncoder` and `TextDecoder` to convert between UTF-8 and single-byte representations of the string:

```js
function base64ToBytes(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function bytesToBase64(bytes) {
  const binString = Array.from(bytes, (byte) =>
    String.fromCodePoint(byte),
  ).join("");
  return btoa(binString);
}

// Usage
bytesToBase64(new TextEncoder().encode("a Ā 𐀀 文 🦄")); // "YSDEgCDwkICAIOaWhyDwn6aE"
new TextDecoder().decode(base64ToBytes("YSDEgCDwkICAIOaWhyDwn6aE")); // "a Ā 𐀀 文 🦄"
```

### Converting arbitrary binary data

The `bytesToBase64` and `base64ToBytes` functions in the previous section can be used directly to convert between Base64 strings and [`Uint8Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)s.

For better performance, asynchronous conversion between base64 data URLs is possible natively within the web platform via the [`FileReader`](/en-US/docs/Web/API/FileReader) and [`fetch`](/en-US/docs/Web/API/Fetch_API) APIs:

```js
async function bytesToBase64DataUrl(bytes, type = "application/octet-stream") {
  return await new Promise((resolve, reject) => {
    const reader = Object.assign(new FileReader(), {
      onload: () => resolve(reader.result),
      onerror: () => reject(reader.error),
    });
    reader.readAsDataURL(new File([bytes], "", { type }));
  });
}

async function dataUrlToBytes(dataUrl) {
  const res = await fetch(dataUrl);
  return new Uint8Array(await res.arrayBuffer());
}

// Usage
await bytesToBase64DataUrl(new Uint8Array([0, 1, 2])); // "data:application/octet-stream;base64,AAEC"
await dataUrlToBytes("data:application/octet-stream;base64,AAEC"); // Uint8Array [0, 1, 2]
```

> [!NOTE]
> For supporting environments, also consider the native {{jsxref("Uint8Array.fromBase64()")}}, {{jsxref("Uint8Array.prototype.toBase64()")}}, and {{jsxref("Uint8Array.prototype.setFromBase64()")}} methods.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [A polyfill of `btoa`](https://github.com/zloirock/core-js#base64-utility-methods) is available in [`core-js`](https://github.com/zloirock/core-js)
- [`data` URLs](/en-US/docs/Web/URI/Reference/Schemes/data)
- {{domxref("WorkerGlobalScope.btoa()")}}: the same method, but in worker scopes.
- {{domxref("Window.atob()")}}
- {{jsxref("Uint8Array.prototype.toBase64()")}}
- {{Glossary("Base64")}}
