---
title: encodeURI()
slug: Web/JavaScript/Reference/Global_Objects/encodeURI
page-type: javascript-function
browser-compat: javascript.builtins.encodeURI
---

{{jsSidebar("Objects")}}

The **`encodeURI()`** function encodes a {{glossary("URI")}} by replacing each instance of certain characters by one, two, three, or four escape sequences representing the {{glossary("UTF-8")}} encoding of the character (will only be four escape sequences for characters composed of two surrogate characters). Compared to {{jsxref("encodeURIComponent()")}}, this function encodes fewer characters, preserving those that are part of the URI syntax.

{{EmbedInteractiveExample("pages/js/globalprops-encodeuri.html")}}

## Syntax

```js-nolint
encodeURI(uri)
```

### Parameters

- `uri`
  - : A string to be encoded as a URI.

### Return value

A new string representing the provided string encoded as a URI.

### Exceptions

- {{jsxref("URIError")}}
  - : Thrown if `uri` contains a [lone surrogate](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

## Description

`encodeURI()` is a function property of the global object.

The `encodeURI()` function escapes characters by UTF-8 code units, with each octet encoded in the format `%XX`, left-padded with 0 if necessary. Because lone surrogates in UTF-16 do not encode any valid Unicode character, they cause `encodeURI()` to throw a {{jsxref("URIError")}}.

`encodeURI()` escapes all characters **except**:

```plain
A–Z a–z 0–9 - _ . ! ~ * ' ( )

; / ? : @ & = + $ , #
```

The characters on the second line are characters that may be part of the URI syntax, and are only escaped by `encodeURIComponent()`. Both `encodeURI()` and `encodeURIComponent()` do not encode the characters `-.!~*'()`, known as "unreserved marks", which do not have a reserved purpose but are allowed in a URI "as is". (See [RFC2396](https://www.ietf.org/rfc/rfc2396.txt))

The `encodeURI()` function does not encode characters that have special meaning (reserved characters) for a URI. The following example shows all the parts that a URI can possibly contain. Note how certain characters are used to signify special meaning:

```url
http://username:password@www.example.com:80/path/to/file.php?foo=316&bar=this+has+spaces#anchor
```

## Examples

### encodeURI() vs. encodeURIComponent()

`encodeURI()` differs from {{jsxref("encodeURIComponent()")}} as follows:

```js
const set1 = ";/?:@&=+$,#"; // Reserved Characters
const set2 = "-.!~*'()"; // Unreserved Marks
const set3 = "ABC abc 123"; // Alphanumeric Characters + Space

console.log(encodeURI(set1)); // ;/?:@&=+$,#
console.log(encodeURI(set2)); // -.!~*'()
console.log(encodeURI(set3)); // ABC%20abc%20123 (the space gets encoded as %20)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24%23
console.log(encodeURIComponent(set2)); // -.!~*'()
console.log(encodeURIComponent(set3)); // ABC%20abc%20123 (the space gets encoded as %20)
```

Note that `encodeURI()` by itself _cannot_ form proper HTTP {{HTTPMethod("GET")}} and {{HTTPMethod("POST")}} requests, such as for {{domxref("XMLHttpRequest")}}, because `&`, `+`, and `=` are not encoded, which are treated as special characters in `GET` and `POST` requests. `encodeURIComponent()`, however, does encode these characters.

### Encoding a lone high surrogate throws

A {{jsxref("URIError")}} will be thrown if one attempts to encode a surrogate which is not part of a high-low pair. For example:

```js
// High-low pair OK
encodeURI("\uD800\uDFFF"); // "%F0%90%8F%BF"

// Lone high surrogate throws "URIError: malformed URI sequence"
encodeURI("\uD800");

// Lone low surrogate throws "URIError: malformed URI sequence"
encodeURI("\uDFFF");
```

You can use {{jsxref("String.prototype.toWellFormed()")}}, which replaces lone surrogates with the Unicode replacement character (U+FFFD), to avoid this error. You can also use {{jsxref("String.prototype.isWellFormed()")}} to check if a string contains lone surrogates before passing it to `encodeURI()`.

### Encoding for RFC3986

The more recent [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986) makes square brackets reserved (for {{glossary("IPv6")}}) and thus not encoded when forming something which could be part of a URL (such as a host). It also reserves !, ', (, ), and \*, even though these characters have no formalized URI delimiting uses. The following function encodes a string for RFC3986-compliant URL format.

```js
function encodeRFC3986URI(str) {
  return encodeURI(str)
    .replace(/%5B/g, "[")
    .replace(/%5D/g, "]")
    .replace(
      /[!'()*]/g,
      (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
    );
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("decodeURI()")}}
- {{jsxref("encodeURIComponent()")}}
- {{jsxref("decodeURIComponent()")}}
