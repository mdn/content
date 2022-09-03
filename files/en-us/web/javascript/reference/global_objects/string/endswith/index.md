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

The **`endsWith()`** method determines whether a string ends with the characters of a specified string, returning `true` or `false` as appropriate.

{{EmbedInteractiveExample("pages/js/string-endswith.html")}}

## Syntax

```js
endsWith(searchString)
endsWith(searchString, endPosition)
```

### Parameters

- `searchString`
  - : The characters to be searched for at the end of `str`. Cannot be a regex.
- `endPosition` {{optional_inline}}
  - : The end position at which `searchString` is expected to be found (the index of `searchString`'s last character plus 1). Defaults to `str.length`.

### Return value

**`true`** if the given characters are found at the end of the string; otherwise, **`false`**.

### Exceptions

- {{jsxref("TypeError")}}
  - : If `searchString` [is a regex](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

## Description

This method lets you determine whether or not a string ends with another string. This method is case-sensitive.

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
