---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
tags:
  - JavaScript
  - Method
  - Reference
  - URI
browser-compat: javascript.builtins.encodeURIComponent
---
{{jsSidebar("Objects")}}

The **`encodeURIComponent()`** function encodes a
{{glossary("URI")}} by replacing each instance of certain characters by one, two, three,
or four escape sequences representing the {{glossary("UTF-8")}} encoding of the
character (will only be four escape sequences for characters composed of two "surrogate"
characters).

{{EmbedInteractiveExample("pages/js/globalprops-encodeuricomponent.html","shorter")}}

## Syntax

```js
encodeURIComponent(uriComponent)
```

### Parameters

- `uriComponent`
  - : A string, number, boolean, null, undefined, or any object. Before encoding, the `uriComponent` gets converted to string.

### Return value

A new string representing the provided _uriComponent_ encoded as a URI component.

## Description

`encodeURIComponent()` escapes all characters **except**:

```plain
Not Escaped:

    A-Z a-z 0-9 - _ . ! ~ * ' ( )
```

`encodeURIComponent()` differs from {{jsxref("encodeURI", "encodeURI()")}} as follows:

```js
const set1 = ";,/?:@&=+$"; // Reserved Characters
const set2 = "-_.!~*'()"; // Unescaped Characters
const set3 = "#"; // Number Sign
const set4 = "ABC abc 123"; // Alphanumeric Characters + Space

console.log(encodeURI(set1)); // ;,/?:@&=+$
console.log(encodeURI(set2)); // -_.!~*'()
console.log(encodeURI(set3)); // #
console.log(encodeURI(set4)); // ABC%20abc%20123 (the space gets encoded as %20)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24
console.log(encodeURIComponent(set2)); // -_.!~*'()
console.log(encodeURIComponent(set3)); // %23
console.log(encodeURIComponent(set4)); // ABC%20abc%20123 (the space gets encoded as %20)
```

Note that a {{jsxref("URIError")}} will be thrown if one attempts to encode a surrogate
which is not part of a high-low pair, e.g.,

```js
// high-low pair OK
console.log(encodeURIComponent("\uD800\uDFFF"));

// lone high surrogate throws "URIError: malformed URI sequence"
console.log(encodeURIComponent("\uD800"));

// lone low surrogate throws "URIError: malformed URI sequence"
console.log(encodeURIComponent("\uDFFF"));
```

Use `encodeURIComponent()` on user-entered fields from forms
{{HTTPMethod("POST")}}'d to the server. This will encode `&` symbols that
may inadvertently be generated during data entry for special HTML entities or other
characters that require encoding/decoding.

For example, if a user writes `Jack & Jill`, the text may get encoded as
`Jack &amp; Jill`. Without `encodeURIComponent()` the
ampersand could be interpreted on the server as the start of a new field and jeopardize
the integrity of the data.

For [`application/x-www-form-urlencoded`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#application/x-www-form-urlencoded-encoding-algorithm), spaces are to be replaced by `+`, so one may wish to follow a `encodeURIComponent()` replacement with an additional replacement of `%20` with `+`.

To be more stringent in adhering to {{rfc("3986")}} (which reserves !, ', (, ),
and \*), even though these characters have no formalized URI delimiting uses, the
following can be safely used:

```js
function fixedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
  );
}
```

## Examples

### Encoding for Content-Disposition and Link headers

The following example provides the special encoding required within UTF-8
{{HTTPHeader("Content-Disposition")}} and {{HTTPHeader("Link")}} server response header
parameters (e.g., UTF-8 filenames):

```js
const fileName = "my file(2).txt";
const header =
  `Content-Disposition: attachment; filename*=UTF-8''${encodeRFC5987ValueChars(fileName)}`;

console.log(header);
// logs "Content-Disposition: attachment; filename*=UTF-8''my%20file%282%29.txt"

function encodeRFC5987ValueChars(str) {
  return (
    encodeURIComponent(str)
      // Note that although RFC3986 reserves "!", RFC5987 does not,
      // so we do not need to escape it
      .replace(/['()]/g, escape) // i.e., %27 %28 %29
      .replace(/\*/g, "%2A")
      // The following are not required for percent-encoding per RFC5987,
      // so we can allow for a little better readability over the wire: |`^
      .replace(/%(?:7C|60|5E)/g, unescape)
  );
}

// here is an alternative to the above function
function encodeRFC5987ValueChars2(str) {
  return (
    encodeURIComponent(str)
      // Note that although RFC3986 reserves "!", RFC5987 does not,
      // so we do not need to escape it
      .replace(/['()*]/g, (c) => `%${c.charCodeAt(0).toString(16)}`) // i.e., %27 %28 %29 %2a (Note that valid encoding of "*" is %2A
      // which necessitates calling toUpperCase() to properly encode)
      // The following are not required for percent-encoding per RFC5987,
      // so we can allow for a little better readability over the wire: |`^
      .replace(/%(7C|60|5E)/g, (str, hex) =>
        String.fromCharCode(parseInt(hex, 16))
      )
  );
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("decodeURIComponent")}}
