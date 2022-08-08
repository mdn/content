---
title: decodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/decodeURIComponent
tags:
  - JavaScript
  - Method
  - Reference
browser-compat: javascript.builtins.decodeURIComponent
---
{{jsSidebar("Objects")}}

The **`decodeURIComponent()`** function decodes a Uniform
Resource Identifier (URI) component previously created by
{{jsxref("encodeURIComponent")}} or by a similar routine.

{{EmbedInteractiveExample("pages/js/globalprops-decodeuricomponent.html")}}

## Syntax

```js
decodeURIComponent(encodedURI)
```

### Parameters

- `encodedURI`
  - : An encoded component of a Uniform Resource Identifier.

### Return value

A new string representing the decoded version of the given encoded Uniform Resource
Identifier (URI) component.

### Exceptions

Throws an {{jsxref("URIError")}} ("malformed URI sequence") exception when used
wrongly.

## Description

Replaces each escape sequence in the encoded URI component with the character that it
represents.

## Examples

### Decoding a Cyrillic URL component

```js
decodeURIComponent('JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B');
// "JavaScript_шеллы"
```

### Catching errors

```js
try {
  const a = decodeURIComponent('%E0%A4%A');
} catch (e) {
  console.error(e);
}

// URIError: malformed URI sequence
```

### Decoding query parameters from a URL

decodeURIComponent cannot be used directly to parse query parameters from a URL. It
needs a bit of preparation.

```js
function decodeQueryParam(p) {
  return decodeURIComponent(p.replace(/\+/g, ' '));
}

decodeQueryParam('search+query%20%28correct%29');
// 'search query (correct)'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
