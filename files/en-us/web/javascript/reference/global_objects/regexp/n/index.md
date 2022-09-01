---
title: RegExp.$1-$9
slug: Web/JavaScript/Reference/Global_Objects/RegExp/n
tags:
  - JavaScript
  - Property
  - Read-only
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.n
---
{{JSRef}}

The legacy RegExp **$1, $2, $3, $4, $5, $6, $7, $8, $9** properties are static and read-only properties of regular expressions that contain parenthesized substring matches.

## Description

The $1, …, $9 properties are static, they are not a property of an individual regular expression object. Instead, you always use them as `RegExp.$1`, …, `RegExp.$9`.

The values of these properties are read-only and modified whenever successful matches are made.

The number of possible parenthesized substrings is unlimited, but the `RegExp` object can only hold the first nine. You can access all parenthesized substrings through the returned array's indexes.

These properties can be used in the replacement text for the {{jsxref("String.replace")}} method. When used this way, do not prepend them with `RegExp`. The example below illustrates this. When parentheses are not included in the regular expression, the script interprets `$n`'s literally (where `n` is a positive integer).

## Examples

### Using $n with String.replace

The following script uses the {{jsxref("String.prototype.replace()", "replace()")}} method of the {{jsxref("String")}} instance to match a name in the format _first last_ and output it in the format _last, first_. In the replacement text, the script uses `$1` and `$2` to indicate the results of the corresponding matching parentheses in the regular expression pattern.

```js
const re = /(\w+)\s(\w+)/;
const str = 'John Smith';
str.replace(re, '$2, $1'); // "Smith, John"
RegExp.$1; // "John"
RegExp.$2; // "Smith"
```

### Using $n with RegExp.test

The following script uses the {{jsxref("RegExp.prototype.test()", "test()")}} method of the {{jsxref("RegExp")}} instance to grab a number in a generic string.

```js
const str = 'Test 24';
const number = /(\d+)/.test(str) ? RegExp.$1 : '0';
number; // "24"
```

Please note that any operation involving the usage of other regular expressions between a `re.test(str)` call and the `RegExp.$n` property, might have side effects, so that accessing these special properties should be done instantly, otherwise the result might be unexpected.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
