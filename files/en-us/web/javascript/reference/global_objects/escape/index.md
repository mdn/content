---
title: escape()
slug: Web/JavaScript/Reference/Global_Objects/escape
tags:
  - Deprecated
  - JavaScript
  - Method
  - Polyfill
browser-compat: javascript.builtins.escape
---
{{jsSidebar("Objects")}}{{Deprecated_Header}}

> **Warning:** Although `escape()` is not
> strictly deprecated (as in "removed from the Web standards"), it is defined in
> [Annex B](https://tc39.es/ecma262/#sec-additional-ecmascript-features-for-web-browsers)
> of the ECMA-262 standard, whose introduction states:
>
> > … All of the language features and behaviors specified in this annex have
> > one or more undesirable characteristics and in the absence of legacy usage would be
> > removed from this specification. …
> > … Programmers should not use or assume the existence of these features and behaviors
> > when writing new ECMAScript code. …

The **`escape()`** function computes a
new string in which certain characters have been replaced by a hexadecimal escape
sequence.

> **Note:** This function was used mostly for URL queries (the part of a
> URL following `?`)—_not_ for escaping ordinary String literals,
> which use the format `\xHH`. (`HH` are
> two hexadecimal digits, and the form `\xHH\xHH` is
> used for higher-plane Unicode characters.)
>
> Escaped characters in String literals can be expanded by replacing the
> `\x` with `%`, then using the `decodeURIComponent()`
> function.

## Syntax

```js
escape(str)
```

### Parameters

- `str`
  - : A string to be encoded.

### Return value

A new string in which certain characters have been escaped.

## Description

The `escape` function is a property of the _global object_. Special
characters are encoded with the exception of: `@*_+-./`

The hexadecimal form for characters, whose code unit value is `0xFF` or
less, is a two-digit escape sequence: `%xx`. For characters with a
greater code unit, the four-digit format `%uxxxx`
is used.

## Examples

### Using escape

```js
escape('abc123');     // "abc123"
escape('äöü');        // "%E4%F6%FC"
escape('ć');          // "%u0107"

// special characters
escape('@*_+-./');    // "@*_+-./"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `escape` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
- {{jsxref("unescape")}}
