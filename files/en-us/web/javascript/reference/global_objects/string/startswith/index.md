---
title: String.prototype.startsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/startsWith
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.startsWith
---
{{JSRef}}

The **`startsWith()`** method
determines whether a string begins with the characters of a specified string,
returning `true` or `false` as appropriate.

{{EmbedInteractiveExample("pages/js/string-startswith.html")}}

## Syntax

```js
startsWith(searchString)
startsWith(searchString, position)
```

### Parameters

- `searchString`
  - : The characters to be searched for at the start of this string.
- `position` {{optional_inline}}
  - : The position in this string at which to begin searching for
    `searchString`. Defaults to `0`.

### Return value

**`true`** if the given characters are found at the beginning
of the string; otherwise, **`false`**.

## Description

This method lets you determine whether or not a string begins with another string. This
method is case-sensitive.

## Examples

### Using startsWith()

```js
const str = 'To be, or not to be, that is the question.';

console.log(str.startsWith('To be')); // true
console.log(str.startsWith('not to be')); // false
console.log(str.startsWith('not to be', 10)); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.startsWith` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.endsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
