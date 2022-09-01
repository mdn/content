---
title: RegExp.prototype.dotAll
slug: Web/JavaScript/Reference/Global_Objects/RegExp/dotAll
tags:
  - JavaScript
  - Property
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
  - Polyfill
browser-compat: javascript.builtins.RegExp.dotAll
---
{{JSRef}}

The **`dotAll`** accessor property indicates whether or not the `s` flag is used with the regular expression.

{{EmbedInteractiveExample("pages/js/regexp-prototype-dotall.html")}}

## Description

`RegExp.prototype.dotAll` has the value `true` if the `s` flag was used; otherwise, `false`. The `s` flag indicates that the dot special character (`.`) should additionally match the following line terminator ("newline") characters in a string, which it would not match otherwise:

- U+000A LINE FEED (LF) (`\n`)
- U+000D CARRIAGE RETURN (CR) (`\r`)
- U+2028 LINE SEPARATOR
- U+2029 PARAGRAPH SEPARATOR

This effectively means the dot will match any character on the Unicode Basic Multilingual Plane (BMP). To allow it to match astral characters, the `u` (unicode) flag should be used. Using both flags in conjunction allows the dot to match any Unicode character, without exceptions.

The set accessor of `dotAll` is `undefined`. You cannot change this property directly.

## Examples

### Using dotAll

```js
const str1 = 'bar\nexample foo example';

const regex1 = /bar.example/s;

console.log(regex1.dotAll); // Output: true

console.log(str1.replace(regex1, '')); // Output: foo example

const str2 = 'bar\nexample foo example';

const regex2 = /bar.example/;

console.log(regex2.dotAll); // Output: false

console.log(str2.replace(regex2,'')); // Output: bar
                                      //         example foo example
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `dotAll` `RegExp` flag in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{JSxRef("RegExp.lastIndex")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.hasIndices")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
