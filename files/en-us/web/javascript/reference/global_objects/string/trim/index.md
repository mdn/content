---
title: String.prototype.trim()
slug: Web/JavaScript/Reference/Global_Objects/String/Trim
tags:
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.trim
---
{{JSRef}}

The **`trim()`** method removes whitespace from both ends of a
string and returns a new string, without modifying the original string.
Whitespace in this context is all the whitespace characters (space, tab,
no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

{{EmbedInteractiveExample("pages/js/string-trim.html")}}

## Syntax

```js
trim()
```

### Return value

A new string representing `str` stripped of whitespace from both its beginning and end.

If neither the beginning or end of `str` has any whitespace, a new string is still returned (essentially a copy of `str`), with no exception being thrown.

To return a new string with whitespace trimmed from just one end, use {{jsxref("String.prototype.trimStart()", "trimStart()")}} or {{jsxref("String.prototype.trimEnd()", "trimEnd()")}}.

## Examples

### Using `trim()`

The following example displays the lowercase string `'foo'`:

```js
const orig = '   foo  ';
console.log(orig.trim()); // 'foo'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("String.prototype.trimStart()")}}
- {{jsxref("String.prototype.trimEnd()")}}
