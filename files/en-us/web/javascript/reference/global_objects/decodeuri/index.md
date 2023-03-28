---
title: decodeURI()
slug: Web/JavaScript/Reference/Global_Objects/decodeURI
page-type: javascript-function
browser-compat: javascript.builtins.decodeURI
---

{{jsSidebar("Objects")}}

The **`decodeURI()`** function decodes a Uniform Resource Identifier (URI) previously created by {{jsxref("encodeURI()")}} or a similar routine.

{{EmbedInteractiveExample("pages/js/globalprops-decodeuri.html")}}

## Syntax

```js-nolint
decodeURI(encodedURI)
```

### Parameters

- `encodedURI`
  - : A complete, encoded Uniform Resource Identifier.

### Return value

A new string representing the unencoded version of the given encoded Uniform Resource Identifier (URI).

### Exceptions

- {{jsxref("URIError")}}
  - : Thrown if `encodedURI` contains a `%` not followed by two hexadecimal digits, or if the escape sequence does not encode a valid UTF-8 character.

## Description

`decodeURI()` is a function property of the global object.

The `decodeURI()` function decodes the URI by treating each escape sequence in the form `%XX` as one UTF-8 code unit (one byte). In UTF-8, the number of leading 1 bits in the first byte, which may be 0 (for 1-byte ASCII characters), 2, 3, or 4, indicates the number of bytes in the character. So by reading the first escape sequence, `decodeURI()` can determine how many more escape sequences to consume. If `decodeURI()` fails to find the expected number of sequences, or if the escape sequences don't encode a valid UTF-8 character, a {{jsxref("URIError")}} is thrown.

`decodeURI()` decodes all escape sequences, but if the escape sequence encodes one of the following characters, the escape sequence is preserved in the output string (because they are part of the URI syntax):

```
; / ? : @ & = + $ , #
```

## Examples

### Decoding a Cyrillic URL

```js
decodeURI(
  "https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B",
);
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"
```

### decodeURI() vs. decodeURIComponent()

`decodeURI()` assumes the input is a full URI, so it does not decode characters that are part of the URI syntax.

```js
decodeURI(
  "https://developer.mozilla.org/docs/JavaScript%3A%20a_scripting_language",
);
// "https://developer.mozilla.org/docs/JavaScript%3A a_scripting_language"

decodeURIComponent(
  "https://developer.mozilla.org/docs/JavaScript%3A%20a_scripting_language",
);
// "https://developer.mozilla.org/docs/JavaScript: a_scripting_language"
```

### Catching errors

```js
try {
  const a = decodeURI("%E0%A4%A");
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
