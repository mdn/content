---
title: unescape()
slug: Web/JavaScript/Reference/Global_Objects/unescape
tags:
  - Deprecated
  - JavaScript
  - Method
  - Polyfill
browser-compat: javascript.builtins.unescape
---
{{jsSidebar("Objects")}}{{Deprecated_Header}}

> **Warning:** Although `unescape()` is not strictly deprecated
> (as in "removed from the Web standards"), it is defined in
> [Annex B](https://tc39.es/ecma262/#sec-additional-ecmascript-features-for-web-browsers)
> of the ECMA-262 standard, whose introduction states:
>
> > … All of the language features and behaviors specified in this annex have
> > one or more undesirable characteristics and in the absence of legacy usage would be
> > removed from this specification. …
> > … Programmers should not use or assume the existence of these features and behaviors
> > when writing new ECMAScript code. …

The **`unescape()`** function computes a new string in which
hexadecimal escape sequences are replaced with the character that it represents. The
escape sequences might be introduced by a function like {{jsxref("escape")}}. Usually,
{{jsxref("decodeURI")}} or {{jsxref("decodeURIComponent")}} are preferred over
`unescape`.

> **Note:** Do not use `unescape` to decode URIs,
> use `decodeURI` instead.

## Syntax

```js
unescape(str)
```

### Parameters

- `str`
  - : A string to be decoded.

### Return value

A new string in which certain characters have been unescaped.

## Description

The `unescape` function is a property of the _global object_.

## Examples

### Using unescape

```js
unescape('abc123');     // "abc123"
unescape('%E4%F6%FC');  // "äöü"
unescape('%u0107');     // "ć"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `unescape` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("decodeURI")}}
- {{jsxref("decodeURIComponent")}}
- {{jsxref("escape")}}
