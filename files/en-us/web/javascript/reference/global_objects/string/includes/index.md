---
title: String.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.includes
---
{{JSRef}}

The **`includes()`** method performs a case-sensitive search to determine whether one string may
be found within another string, returning `true` or `false` as
appropriate.

{{EmbedInteractiveExample("pages/js/string-includes.html", "shorter")}}

## Syntax

```js
includes(searchString)
includes(searchString, position)
```

### Parameters

- `searchString`
  - : A string to be searched for within `str`.
- `position` {{optional_inline}}
  - : The position within the string at which to begin searching for
    `searchString`. (Defaults to `0`.)

### Return value

**`true`** if the search string is found anywhere within the
given string; otherwise, **`false`** if not.

## Description

This method lets you determine whether or not a string includes another string.

### Case-sensitivity

The `includes()` method is case sensitive. For example, the following
expression returns `false`:

```js
'Blue Whale'.includes('blue')  // returns false
```

## Polyfill

This method has been added to the ECMAScript 2015 specification and may not be
available in all JavaScript implementations yet.

However, you can easily polyfill this method:

```js
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';

    if (search instanceof RegExp) {
      throw TypeError('first argument must not be a RegExp');
    }
    if (start === undefined) { start = 0; }
    return this.indexOf(search, start) !== -1;
  };
}
```

## Examples

### Using `includes()`

```js
const str = 'To be, or not to be, that is the question.'

console.log(str.includes('To be'))        // true
console.log(str.includes('question'))     // true
console.log(str.includes('nonexistent'))  // false
console.log(str.includes('To be', 1))     // false
console.log(str.includes('TO BE'))        // false
console.log(str.includes(''))             // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.includes` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.endsWith()")}}
