---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
page-type: javascript-function
browser-compat: javascript.builtins.encodeURIComponent
---

{{jsSidebar("Objects")}}

The **`encodeURIComponent()`** function encodes a {{Glossary("URI")}} by replacing each instance of certain characters by one, two, three, or four escape sequences representing the {{Glossary("UTF-8")}} encoding of the character (will only be four escape sequences for characters composed of two surrogate characters). Compared to {{jsxref("encodeURI()")}}, this function encodes more characters, including those that are part of the URI syntax.

{{EmbedInteractiveExample("pages/js/globalprops-encodeuricomponent.html", "shorter")}}

## Syntax

```js-nolint
encodeURIComponent(uriComponent)
```

### Parameters

- `uriComponent`
  - : A string to be encoded as a URI component (a path, query string, fragment, etc.). Other values are [converted to strings](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion).

### Return value

A new string representing the provided `uriComponent` encoded as a URI component.

### Exceptions

- {{jsxref("URIError")}}
  - : Thrown if `uriComponent` contains a [lone surrogate](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

## Description

`encodeURIComponent()` is a function property of the global object.

`encodeURIComponent()` uses the same encoding algorithm as described in {{jsxref("encodeURI()")}}. It escapes all characters **except**:

```plain
A–Z a–z 0–9 - _ . ! ~ * ' ( )
```

Compared to {{jsxref("encodeURI()")}}, `encodeURIComponent()` escapes a larger set of characters. Use `encodeURIComponent()` on user-entered fields from forms {{HTTPMethod("POST")}}'d to the server — this will encode `&` symbols that may inadvertently be generated during data entry for {{glossary("character reference", "character references")}} or other characters that require encoding/decoding. For example, if a user writes `Jack & Jill`, without `encodeURIComponent()`, the ampersand could be interpreted on the server as the start of a new field and jeopardize the integrity of the data.

For [`application/x-www-form-urlencoded`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#application/x-www-form-urlencoded-encoding-algorithm), spaces are to be replaced by `+`, so one may wish to follow a `encodeURIComponent()` replacement with an additional replacement of `%20` with `+`.

## Examples

### Encoding for Content-Disposition and Link headers

The following example provides the special encoding required within UTF-8 {{HTTPHeader("Content-Disposition")}} and {{HTTPHeader("Link")}} server response header parameters (e.g., UTF-8 filenames):

```js
const fileName = "my file(2).txt";
const header = `Content-Disposition: attachment; filename*=UTF-8''${encodeRFC5987ValueChars(
  fileName,
)}`;

console.log(header);
// "Content-Disposition: attachment; filename*=UTF-8''my%20file%282%29.txt"

function encodeRFC5987ValueChars(str) {
  return (
    encodeURIComponent(str)
      // The following creates the sequences %27 %28 %29 %2A (Note that
      // the valid encoding of "*" is %2A, which necessitates calling
      // toUpperCase() to properly encode). Although RFC3986 reserves "!",
      // RFC5987 does not, so we do not need to escape it.
      .replace(
        /['()*]/g,
        (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
      )
      // The following are not required for percent-encoding per RFC5987,
      // so we can allow for a little better readability over the wire: |`^
      .replace(/%(7C|60|5E)/g, (str, hex) =>
        String.fromCharCode(parseInt(hex, 16)),
      )
  );
}
```

### Encoding for RFC3986

The more recent [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986) reserves `!`, `'`, `(`, `)`, and `*`, even though these characters have no formalized URI delimiting uses. The following function encodes a string for RFC3986-compliant URL component format. It also encodes `[` and `]`, which are part of the {{Glossary("IPv6")}} URI syntax. An RFC3986-compliant `encodeURI` implementation should not escape them, which is demonstrated in the [`encodeURI()` example](/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI#encoding_for_rfc3986).

```js
function encodeRFC3986URIComponent(str) {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
  );
}
```

### Encoding a lone surrogate throws

A {{jsxref("URIError")}} will be thrown if one attempts to encode a surrogate which is not part of a high-low pair. For example:

```js
// High-low pair OK
encodeURIComponent("\uD800\uDFFF"); // "%F0%90%8F%BF"

// Lone high-surrogate code unit throws "URIError: malformed URI sequence"
encodeURIComponent("\uD800");

// Lone high-surrogate code unit throws "URIError: malformed URI sequence"
encodeURIComponent("\uDFFF");
```

You can use {{jsxref("String.prototype.toWellFormed()")}}, which replaces lone surrogates with the Unicode replacement character (U+FFFD), to avoid this error. You can also use {{jsxref("String.prototype.isWellFormed()")}} to check if a string contains lone surrogates before passing it to `encodeURIComponent()`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("decodeURI()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
