---
title: Base64
slug: Glossary/Base64
tags:
  - Advanced
  - Base64
  - JavaScript
  - Typed Arrays
  - URI
  - URL
  - Unicode Problem
  - atob()
  - btoa()
---
**Base64** is a group of similar [binary-to-text encoding](https://en.wikipedia.org/wiki/Binary-to-text_encoding) schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation. The term *Base64* originates from a specific [MIME content transfer encoding](https://en.wikipedia.org/wiki/MIME#Content-Transfer-Encoding).

Base64 encoding schemes are commonly used when there is a need to encode binary data that needs to be stored and transferred over media that are designed to deal with ASCII. This is to ensure that the data remain intact without modification during transport. Base64 is commonly used in a number of applications including email via [MIME](https://en.wikipedia.org/wiki/MIME), and storing complex data in [XML](/en-US/docs/Web/XML).

One common application of Base64 encoding on the web is to encode binary data so it can be included in a [data: URL](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs).

In JavaScript there are two functions respectively for decoding and encoding Base64 strings:

- [`btoa()`](/en-US/docs/Web/API/btoa): creates a Base64-encoded ASCII string from a "string" of binary data ("btoa" should be read as "binary to ASCII").
- [`atob()`](/en-US/docs/Web/API/atob): decodes a Base64-encoded string("atob" should be read as "ASCII to binary").

The algorithm used by `atob()` and `btoa()` is specified in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648), section 4.

Note that `btoa()` expects to be passed binary data, and will throw an exception if the given string contains any characters whose UTF-16 representation occupies more than one byte. For more details, see the documentation for [`btoa()`](/en-US/docs/Web/API/btoa).

## Encoded size increase

Each Base64 digit represents exactly 6 bits of data. So, three 8-bits bytes of the input string/binary file (3×8 bits = 24 bits) can be represented by four 6-bit Base64 digits (4×6 = 24 bits).

This means that the Base64 version of a string or file will be at least 133% the size of its source (a \~33% increase). The increase may be larger if the encoded data is small. For example, the string `"a"` with `length === 1` gets encoded to `"YQ=="` with `length === 4` — a 300% increase.

## The "Unicode Problem"

Since [`DOMString`](/en-US/docs/Web/API/DOMString "/en-US/docs/Web/API/DOMString")s are 16-bit-encoded strings, in most browsers calling `window.btoa` on a Unicode string will cause a `Character Out Of Range` exception if a character exceeds the range of a 8-bit ASCII-encoded character. There are two possible methods to solve this problem:

- the first one is to escape the whole string and then encode it;
- the second one is to convert the UTF-16 [`DOMString`](/en-US/docs/Web/API/DOMString "/en-US/docs/Web/API/DOMString") to an UTF-8 array of characters and then encode it.

Here are the two possible methods.

### Solution #1 – escaping the string before encoding it

```js
function utf8_to_b64( str ) {
  return window.btoa(unescape(encodeURIComponent( str )));
}

function b64_to_utf8( str ) {
  return decodeURIComponent(escape(window.atob( str )));
}

// Usage:
utf8_to_b64('✓ à la mode'); // "4pyTIMOgIGxhIG1vZGU="
b64_to_utf8('4pyTIMOgIGxhIG1vZGU='); // "✓ à la mode"
```

This solution has been proposed by [Johan Sundström](http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html).

Another possible solution without utilizing the now deprecated 'unescape' and 'escape' functions.

```js
function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}
 b64EncodeUnicode('✓ à la mode'); // "4pyTIMOgIGxhIG1vZGU="
```

### Solution #2 – rewriting `atob()` and `btoa()` using `TypedArray`s and UTF-8

> **Note:** The following code is also useful to get an [ArrayBuffer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) from a Base64 string and/or viceversa ([see below](#appendix_decode_a_base64_string_to_uint8array_or_arraybuffer)).

```js
"use strict";

/*\
|*|
|*|  Base64 / binary data / UTF-8 strings utilities
|*|
|*|  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Base64_encoding_and_decoding
|*|
\*/

/* Array of bytes to Base64 string decoding */

function b64ToUint6 (nChr) {

  return nChr > 64 && nChr < 91 ?
      nChr - 65
    : nChr > 96 && nChr < 123 ?
      nChr - 71
    : nChr > 47 && nChr < 58 ?
      nChr + 4
    : nChr === 43 ?
      62
    : nChr === 47 ?
      63
    :
      0;

}

function base64DecToArr (sBase64, nBlocksSize) {

  var
    sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, ""), nInLen = sB64Enc.length,
    nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2, taBytes = new Uint8Array(nOutLen);

  for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
    nMod4 = nInIdx & 3;
    nUint24 |= b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 6 * (3 - nMod4);
    if (nMod4 === 3 || nInLen - nInIdx === 1) {
      for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
        taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
      }
      nUint24 = 0;

    }
  }

  return taBytes;
}

/* Base64 string to array encoding */

function uint6ToB64 (nUint6) {

  return nUint6 < 26 ?
      nUint6 + 65
    : nUint6 < 52 ?
      nUint6 + 71
    : nUint6 < 62 ?
      nUint6 - 4
    : nUint6 === 62 ?
      43
    : nUint6 === 63 ?
      47
    :
      65;

}

function base64EncArr (aBytes) {

  var nMod3 = 2, sB64Enc = "";

  for (var nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
    nMod3 = nIdx % 3;
    if (nIdx > 0 && (nIdx * 4 / 3) % 76 === 0) { sB64Enc += "\r\n"; }
    nUint24 |= aBytes[nIdx] << (16 >>> nMod3 & 24);
    if (nMod3 === 2 || aBytes.length - nIdx === 1) {
      sB64Enc += String.fromCodePoint(uint6ToB64(nUint24 >>> 18 & 63), uint6ToB64(nUint24 >>> 12 & 63), uint6ToB64(nUint24 >>> 6 & 63), uint6ToB64(nUint24 & 63));
      nUint24 = 0;
    }
  }

  return sB64Enc.substr(0, sB64Enc.length - 2 + nMod3) + (nMod3 === 2 ? '' : nMod3 === 1 ? '=' : '==');

}

/* UTF-8 array to DOMString and vice versa */

function UTF8ArrToStr (aBytes) {

  var sView = "";

  for (var nPart, nLen = aBytes.length, nIdx = 0; nIdx < nLen; nIdx++) {
    nPart = aBytes[nIdx];
    sView += String.fromCodePoint(
      nPart > 251 && nPart < 254 && nIdx + 5 < nLen ? /* six bytes */
        /* (nPart - 252 << 30) may be not so safe in ECMAScript! So...: */
        (nPart - 252) * 1073741824 + (aBytes[++nIdx] - 128 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
      : nPart > 247 && nPart < 252 && nIdx + 4 < nLen ? /* five bytes */
        (nPart - 248 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
      : nPart > 239 && nPart < 248 && nIdx + 3 < nLen ? /* four bytes */
        (nPart - 240 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
      : nPart > 223 && nPart < 240 && nIdx + 2 < nLen ? /* three bytes */
        (nPart - 224 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
      : nPart > 191 && nPart < 224 && nIdx + 1 < nLen ? /* two bytes */
        (nPart - 192 << 6) + aBytes[++nIdx] - 128
      : /* nPart < 127 ? */ /* one byte */
        nPart
    );
  }

  return sView;

}

function strToUTF8Arr (sDOMStr) {

  var aBytes, nChr, nStrLen = sDOMStr.length, nArrLen = 0;

  /* mapping... */

  for (var nMapIdx = 0; nMapIdx < nStrLen; nMapIdx++) {
    nChr = sDOMStr.codePointAt(nMapIdx);

    if (nChr > 65536) {
      nMapIdx++;
    }

    nArrLen += nChr < 0x80 ? 1 : nChr < 0x800 ? 2 : nChr < 0x10000 ? 3 : nChr < 0x200000 ? 4 : nChr < 0x4000000 ? 5 : 6;
  }

  aBytes = new Uint8Array(nArrLen);

  /* transcription... */

  for (var nIdx = 0, nChrIdx = 0; nIdx < nArrLen; nChrIdx++) {
    nChr = sDOMStr.codePointAt(nChrIdx);
    if (nChr < 128) {
      /* one byte */
      aBytes[nIdx++] = nChr;
    } else if (nChr < 0x800) {
      /* two bytes */
      aBytes[nIdx++] = 192 + (nChr >>> 6);
      aBytes[nIdx++] = 128 + (nChr & 63);
    } else if (nChr < 0x10000) {
      /* three bytes */
      aBytes[nIdx++] = 224 + (nChr >>> 12);
      aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
    } else if (nChr < 0x200000) {
      /* four bytes */
      aBytes[nIdx++] = 240 + (nChr >>> 18);
      aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
      aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
      nChrIdx++;
    } else if (nChr < 0x4000000) {
      /* five bytes */
      aBytes[nIdx++] = 248 + (nChr >>> 24);
      aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
      aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
      aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
      nChrIdx++;
    } else /* if (nChr <= 0x7fffffff) */ {
      /* six bytes */
      aBytes[nIdx++] = 252 + (nChr >>> 30);
      aBytes[nIdx++] = 128 + (nChr >>> 24 & 63);
      aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
      aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
      aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
      nChrIdx++;
    }
  }

  return aBytes;

}
```

### Tests

```js
/* Tests */

var sMyInput = "Base 64 \u2014 Mozilla Developer Network";

var aMyUTF8Input = strToUTF8Arr(sMyInput);

var sMyBase64 = base64EncArr(aMyUTF8Input);

alert(sMyBase64);

var aMyUTF8Output = base64DecToArr(sMyBase64);

var sMyOutput = UTF8ArrToStr(aMyUTF8Output);

alert(sMyOutput);
```

### Appendix: Decode a Base64 string to Uint8Array or ArrayBuffer

These function let us to create also [uint8Arrays](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) or [arrayBuffers](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) from Base64-encoded strings:

```js
// "Base 64 \u2014 Mozilla Developer Network"
var myArray = base64DecToArr("QmFzZSA2NCDigJQgTW96aWxsYSBEZXZlbG9wZXIgTmV0d29yaw==");

// "Base 64 \u2014 Mozilla Developer Network"
var myBuffer = base64DecToArr("QmFzZSA2NCDigJQgTW96aWxsYSBEZXZlbG9wZXIgTmV0d29yaw==").buffer;

alert(myBuffer.byteLength);
```

> **Note:** The function `base64DecToArr(sBase64[, nBlocksSize])` returns an [`uint8Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) of bytes. If your aim is to build a buffer of 16-bit / 32-bit / 64-bit raw data, use the `nBlocksSize` argument, which is the number of bytes of which the `uint8Array.buffer.bytesLength` property must result a multiple (`1` or omitted for ASCII, [binary strings](/en-US/docs/Web/API/DOMString/Binary) or UTF-8-encoded strings, `2` for UTF-16 strings, `4` for UTF-32 strings).
