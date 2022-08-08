---
title: decodeURI()
slug: Web/JavaScript/Reference/Global_Objects/decodeURI
tags:
  - Decode
  - JavaScript
  - Method
  - String
  - Text
  - URI
  - URL
  - decodeURI
  - decoding
browser-compat: javascript.builtins.decodeURI
---
{{jsSidebar("Objects")}}

The **`decodeURI()`** function decodes
a Uniform Resource Identifier (URI) previously created by {{jsxref("encodeURI",
    "encodeURI()")}} or by a similar routine.

{{EmbedInteractiveExample("pages/js/globalprops-decodeuri.html")}}

## Syntax

```js
decodeURI(encodedURI)
```

### Parameters

- `encodedURI`
  - : A complete, encoded Uniform Resource Identifier.

### Return value

A new string representing the unencoded version of the given encoded Uniform Resource
Identifier (URI).

### Exceptions

Throws an {{jsxref("URIError")}} ("malformed URI sequence") exception when
`encodedURI` contains invalid character sequences.

## Description

Replaces each escape sequence in the encoded URI with the character that it represents,
but does not decode escape sequences that could not have been introduced by
{{jsxref("encodeURI")}}. The character `#` is not decoded from escape
sequences.

## Examples

### Decoding a Cyrillic URL

```js
decodeURI('https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B');
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"
```

### Catching errors

```js
try {
  const a = decodeURI('%E0%A4%A');
} catch (e) {
  console.error(e);
}

// URIError: malformed URI sequence
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("decodeURIComponent", "decodeURIComponent()")}}
- {{jsxref("encodeURI", "encodeURI()")}}
- {{jsxref("encodeURIComponent", "encodeURIComponent()")}}
