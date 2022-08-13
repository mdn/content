---
title: String.prototype.endsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/endsWith
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.endsWith
---
{{JSRef}}

The **`endsWith()`** method determines
whether a string ends with the characters of a specified string, returning
`true` or `false` as appropriate.

{{EmbedInteractiveExample("pages/js/string-endswith.html")}}

## Syntax

```js
endsWith(searchString)
endsWith(searchString, length)
```

### Parameters

- `searchString`
  - : The characters to be searched for at the end of `str`.
- `length` {{optional_inline}}
  - : If provided, it is used as the length of `str`. Defaults to
    `str.length`.

### Return value

**`true`** if the given characters are found at the end of the
string; otherwise, **`false`**.

## Description

This method lets you determine whether or not a string ends with another string. This
method is case-sensitive.

## Examples

### Using endsWith()

```js
const str = 'To be, or not to be, that is the question.';

console.log(str.endsWith('question.')); // true
console.log(str.endsWith('to be')); // false
console.log(str.endsWith('to be', 19)); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.endsWith` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
