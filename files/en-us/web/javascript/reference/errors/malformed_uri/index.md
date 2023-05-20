---
title: "URIError: malformed URI sequence"
slug: Web/JavaScript/Reference/Errors/Malformed_URI
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "malformed URI sequence" occurs when URI encoding or decoding
wasn't successful.

## Message

```
URIError: URI malformed (V8-based)
URIError: malformed URI sequence (Firefox)
URIError: String contained an illegal UTF-16 sequence. (Safari)
```

## Error type

{{jsxref("URIError")}}

## What went wrong?

URI encoding or decoding wasn't successful. An argument given to either the
{{jsxref("decodeURI")}}, {{jsxref("encodeURI")}}, {{jsxref("encodeURIComponent")}}, or
{{jsxref("decodeURIComponent")}} function was not valid, so that the function was unable
encode or decode properly.

## Examples

### Encoding

Encoding replaces each instance of certain characters by one, two, three, or four
escape sequences representing the UTF-8 encoding of the character. An
{{jsxref("URIError")}} will be thrown if there is an attempt to encode a surrogate which
is not part of a high-low pair, for example:

```js example-bad
encodeURI("\uD800");
// "URIError: malformed URI sequence"

encodeURI("\uDFFF");
// "URIError: malformed URI sequence"
```

A high-low pair is OK. For example:

```js example-good
encodeURI("\uD800\uDFFF");
// "%F0%90%8F%BF"
```

### Decoding

Decoding replaces each escape sequence in the encoded URI component with the character
that it represents. If there isn't such a character, an error will be thrown:

```js example-bad
decodeURIComponent("%E0%A4%A");
// "URIError: malformed URI sequence"
```

With proper input, this should usually look like something like this:

```js example-good
decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
// "JavaScript_шеллы"
```

## See also

- {{jsxref("URIError")}}
- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
- {{jsxref("decodeURIComponent")}}
