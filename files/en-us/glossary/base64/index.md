---
title: Base64
slug: Glossary/Base64
page-type: glossary-definition
---

**Base64** is a group of similar [binary-to-text encoding](https://en.wikipedia.org/wiki/Binary-to-text_encoding) schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation. The term _Base64_ originates from a specific [MIME content transfer encoding](https://en.wikipedia.org/wiki/MIME#Content-Transfer-Encoding).

When the term "Base64" is used on its own to refer to a specific algorithm, it typically refers to the version of Base64 outlined in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648), section 4, which uses the following alphabet to represent the radix-64 digits, alongside `=` as a padding character:

```plain
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```

A common variant is "Base64 URL safe", which omits the padding and replaces `+/` with `-_` to avoid characters that might cause problems in URL path segments or query parameters.

Base64 encoding schemes are commonly used to encode binary data for storage or transfer over media that can only deal with ASCII text (or some superset of ASCII that still falls short of accepting arbitrary binary data). This ensures that the data remains intact without modification during transport. Common applications of Base64 include:

- Email via [MIME](https://en.wikipedia.org/wiki/MIME)
- Storing complex data in [XML](/en-US/docs/Web/XML).
- Encoding binary data so it can be included in a [`data:` URL](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs).

## Encoded size increase

Each Base64 digit represents 6 bits of data. So, three 8-bit bytes of the input string/binary file (3×8 bits = 24 bits) can be represented by four 6-bit Base64 digits (4×6 = 24 bits).

This means that the Base64 version of a string or file is typically roughly a third larger than its source (the exact size increase depends on various factors, such as the absolute length of the string, its length modulo 3, and whether padding characters are used).

## JavaScript support

Browsers natively provide two JavaScript functions for decoding and encoding Base64 strings:

- [`btoa`](/en-US/docs/Web/API/btoa): creates a Base64-encoded ASCII string from a string of binary data ("btoa" should be read as "binary to ASCII").
- [`atob`](/en-US/docs/Web/API/atob): decodes a Base64-encoded string ("atob" should be read as "ASCII to binary").

> **Note:** Base64 is a binary encoding rather than a text encoding, but `btoa` and `atob` were added to the web platform before it supported binary data types. As a result, the two functions use strings to represent binary data, with the codepoint of each character representing the value of each byte. This has led to a common misconception that `btoa` can be used to encode arbitrary text data — for example, creating a Base64 `data:` URL of a text or HTML document.
>
> However, the byte-codepoint correspondence only holds true for codepoints up to `0x7f`, and furthermore, codepoints over `0xff` will cause `btoa` to throw an error due to exceeding the maximum value for 1 byte. The next section details ways of working around this limitation when encoding arbitrary Unicode text.

## The "Unicode Problem"

Since `btoa` only accepts characters within the `Latin1` Unicode range (code points `0x00` to `0xff`), calling `btoa` on a string will cause a "Character Out Of Range" exception if a character exceeds that range. For use cases where you need to encode arbitrary Unicode text, it is necessary to first convert the string to its constituent bytes in UTF-8, and then encode the bytes.

### Solution 1 – `TextEncoder` and `TextDecoder`

The simplest solution is to use `TextEncoder` and `TextDecoder` to convert between UTF-8 and single-byte representations of the string:

```js
function base64ToBytes(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function bytesToBase64(bytes) {
  const binString = Array.from(bytes, (x) => String.fromCodePoint(x)).join("");
  return btoa(binString);
}

// Usage
bytesToBase64(new TextEncoder().encode("a Ā 𐀀 文 🦄")); // "YSDEgCDwkICAIOaWhyDwn6aE"
new TextDecoder().decode(base64ToBytes("YSDEgCDwkICAIOaWhyDwn6aE")); // "a Ā 𐀀 文 🦄"
```

### Solution 2 – custom Base64 implementation

If you need to support environments that lack support for `TextEncoder` and `TextDecoder` (or `atob` and `btoa`), you can manually implement UTF-8 and/or Base64 from scratch:

```js
const base64Alphabet =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const base64ToUint6 = Object.fromEntries(
  [...[...base64Alphabet].entries()].map((x) => x.reverse())
);

function base64ToBytes(base64) {
  const base64Clean = base64.replace(/[^A-Za-z0-9+/]/g, ""); // Remove any non-base64 characters, such as trailing "=", whitespace, etc.
  const inLength = base64Clean.length;
  const outLength = (inLength * 3 + 1) >> 2;
  const bytes = new Uint8Array(outLength);

  let mod3;
  let mod4;
  let uint24 = 0;
  let outIdx = 0;
  for (let inIdx = 0; inIdx < inLength; inIdx++) {
    mod4 = inIdx & 3;
    uint24 |= base64ToUint6[base64Clean[inIdx]] << (6 * (3 - mod4));
    if (mod4 === 3 || inLength - inIdx === 1) {
      mod3 = 0;
      while (mod3 < 3 && outIdx < outLength) {
        bytes[outIdx] = (uint24 >>> ((16 >>> mod3) & 24)) & 255;
        mod3++;
        outIdx++;
      }
      uint24 = 0;
    }
  }

  return bytes;
}

function bytesToBase64(bytes) {
  let mod3 = 2;
  let base64 = "";

  const len = bytes.length;
  let uint24 = 0;
  for (let idx = 0; idx < len; idx++) {
    mod3 = idx % 3;

    uint24 |= bytes[idx] << ((16 >>> mod3) & 24);
    if (mod3 === 2 || bytes.length - idx === 1) {
      base64 +=
        base64Alphabet[(uint24 >>> 18) & 63] +
        base64Alphabet[(uint24 >>> 12) & 63] +
        base64Alphabet[(uint24 >>> 6) & 63] +
        base64Alphabet[uint24 & 63];
      uint24 = 0;
    }
  }
  return base64.substring(0, base64.length - 2 + mod3) + "=".repeat(2 - mod3);
}

function utf8ToStr(bytes) {
  let view = "";
  let part;
  const len = bytes.length;
  for (let idx = 0; idx < len; idx++) {
    part = bytes[idx];
    view += String.fromCodePoint(
      part > 251 && part < 254 && idx + 5 < len /* six bytes */
        ? /* (part - 252 << 30) might overflow, so we multiply instead */
          (part - 252) * Math.pow(2, 30) +
            ((bytes[++idx] - 128) << 24) +
            ((bytes[++idx] - 128) << 18) +
            ((bytes[++idx] - 128) << 12) +
            ((bytes[++idx] - 128) << 6) +
            bytes[++idx] -
            128
        : part > 247 && part < 252 && idx + 4 < len /* five bytes */
        ? ((part - 248) << 24) +
          ((bytes[++idx] - 128) << 18) +
          ((bytes[++idx] - 128) << 12) +
          ((bytes[++idx] - 128) << 6) +
          bytes[++idx] -
          128
        : part > 239 && part < 248 && idx + 3 < len /* four bytes */
        ? ((part - 240) << 18) +
          ((bytes[++idx] - 128) << 12) +
          ((bytes[++idx] - 128) << 6) +
          bytes[++idx] -
          128
        : part > 223 && part < 240 && idx + 2 < len /* three bytes */
        ? ((part - 224) << 12) +
          ((bytes[++idx] - 128) << 6) +
          bytes[++idx] -
          128
        : part > 191 && part < 224 && idx + 1 < len /* two bytes */
        ? ((part - 192) << 6) + bytes[++idx] - 128
        : /* part < 127 ? */ /* one byte */
          part
    );
  }
  return view;
}

function strToUtf8(str) {
  let bytes;
  let codePoint;
  const strLen = str.length;
  let arrLen = 0;

  /* mapping… */
  for (let mapIdx = 0; mapIdx < strLen; mapIdx++) {
    codePoint = str.codePointAt(mapIdx);

    if (codePoint >= 0x10000) {
      mapIdx++;
    }

    arrLen +=
      codePoint < 0x80
        ? 1
        : codePoint < 0x800
        ? 2
        : codePoint < 0x10000
        ? 3
        : codePoint < 0x200000
        ? 4
        : codePoint < 0x4000000
        ? 5
        : 6;
  }

  bytes = new Uint8Array(arrLen);

  /* transcription… */
  let idx = 0;
  let charIdx = 0;
  while (idx < arrLen) {
    codePoint = str.codePointAt(charIdx);
    if (codePoint < 128) {
      /* one byte */
      bytes[idx++] = codePoint;
    } else if (codePoint < 0x800) {
      /* two bytes */
      bytes[idx++] = 192 + (codePoint >>> 6);
      bytes[idx++] = 128 + (codePoint & 63);
    } else if (codePoint < 0x10000) {
      /* three bytes */
      bytes[idx++] = 224 + (codePoint >>> 12);
      bytes[idx++] = 128 + ((codePoint >>> 6) & 63);
      bytes[idx++] = 128 + (codePoint & 63);
    } else if (codePoint < 0x200000) {
      /* four bytes */
      bytes[idx++] = 240 + (codePoint >>> 18);
      bytes[idx++] = 128 + ((codePoint >>> 12) & 63);
      bytes[idx++] = 128 + ((codePoint >>> 6) & 63);
      bytes[idx++] = 128 + (codePoint & 63);
      charIdx++;
    } else if (codePoint < 0x4000000) {
      /* five bytes */
      bytes[idx++] = 248 + (codePoint >>> 24);
      bytes[idx++] = 128 + ((codePoint >>> 18) & 63);
      bytes[idx++] = 128 + ((codePoint >>> 12) & 63);
      bytes[idx++] = 128 + ((codePoint >>> 6) & 63);
      bytes[idx++] = 128 + (codePoint & 63);
      charIdx++;
    } else {
      /* codePoint <= 0x7fffffff (max Unicode code point) */
      /* six bytes */
      bytes[idx++] = 252 + (codePoint >>> 30);
      bytes[idx++] = 128 + ((codePoint >>> 24) & 63);
      bytes[idx++] = 128 + ((codePoint >>> 18) & 63);
      bytes[idx++] = 128 + ((codePoint >>> 12) & 63);
      bytes[idx++] = 128 + ((codePoint >>> 6) & 63);
      bytes[idx++] = 128 + (codePoint & 63);
      charIdx++;
    }
    charIdx++;
  }

  return bytes;
}

// Usage
bytesToBase64(strToUtf8("a Ā 𐀀 文 🦄")); // "YSDEgCDwkICAIOaWhyDwn6aE"
utf8ToStr(base64ToBytes("YSDEgCDwkICAIOaWhyDwn6aE")); // "a Ā 𐀀 文 🦄"
```

## Converting arbitrary binary data

Either version of the `bytesToBase64` and `base64ToBytes` functions in the previous section can also be used alone to convert between Base64 strings and [`Uint8Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)s. For example, to create a data URL from a [`File` object](/en-US/docs/Web/API/File/File), you could use the following:

```js
const base64 = bytesToBase64(new Uint8Array(await file.arrayBuffer()));
const mimeType = file.type || "application/octet-stream";
const dataUrl = `data:${mimeType};base64,${base64}`;
```

Or in the opposite direction, getting the raw bytes from a data URL:

```js
const bytes = base64ToBytes(dataUrl.slice(dataUrl.indexOf(",") + 1));
```
