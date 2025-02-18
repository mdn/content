---
title: decodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/decodeURIComponent
page-type: javascript-function
browser-compat: javascript.builtins.decodeURIComponent
---

{{jsSidebar("Objects")}}

The **`decodeURIComponent()`** function decodes a Uniform Resource Identifier (URI) component previously created by {{jsxref("encodeURIComponent()")}} or by a similar routine.

{{InteractiveExample("JavaScript Demo: Standard built-in objects - decodeURIComponent()")}}

```js interactive-example
function containsEncodedComponents(x) {
  // ie ?,=,&,/ etc
  return decodeURI(x) !== decodeURIComponent(x);
}

console.log(containsEncodedComponents("%3Fx%3Dtest")); // ?x=test
// Expected output: true

console.log(containsEncodedComponents("%D1%88%D0%B5%D0%BB%D0%BB%D1%8B")); // шеллы
// Expected output: false
```

## Syntax

```js-nolint
decodeURIComponent(encodedURI)
```

### Parameters

- `encodedURI`
  - : An encoded component of a Uniform Resource Identifier.

### Return value

A new string representing the decoded version of the given encoded Uniform Resource Identifier (URI) component.

### Exceptions

- {{jsxref("URIError")}}
  - : Thrown if `encodedURI` contains a `%` not followed by two hexadecimal digits, or if the escape sequence does not encode a valid UTF-8 character.

## Description

`decodeURIComponent()` is a function property of the global object.

`decodeURIComponent()` uses the same decoding algorithm as described in {{jsxref("decodeURI()")}}. It decodes _all_ escape sequences, including those that are not created by {{jsxref("encodeURIComponent")}}, like `-.!~*'()`.

## Examples

### Decoding a Cyrillic URL component

```js
decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
// "JavaScript_шеллы"
```

### Catching errors

```js
try {
  const a = decodeURIComponent("%E0%A4%A");
} catch (e) {
  console.error(e);
}

// URIError: malformed URI sequence
```

### Decoding query parameters from a URL

`decodeURIComponent()` cannot be used directly to parse query parameters from a URL. It needs a bit of preparation.

```js
function decodeQueryParam(p) {
  return decodeURIComponent(p.replace(/\+/g, " "));
}

decodeQueryParam("search+query%20%28correct%29");
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
