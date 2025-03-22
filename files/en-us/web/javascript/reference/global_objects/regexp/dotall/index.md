---
title: RegExp.prototype.dotAll
slug: Web/JavaScript/Reference/Global_Objects/RegExp/dotAll
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.RegExp.dotAll
---

{{JSRef}}

The **`dotAll`** accessor property of {{jsxref("RegExp")}} instances returns whether or not the `s` flag is used with this regular expression.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.dotAll")}}

```js interactive-example
const regex1 = new RegExp("foo", "s");

console.log(regex1.dotAll);
// Expected output: true

const regex2 = new RegExp("bar");

console.log(regex2.dotAll);
// Expected output: false
```

## Description

`RegExp.prototype.dotAll` has the value `true` if the `s` flag was used; otherwise, `false`. The `s` flag indicates that the dot special character (`.`) should additionally match the following line terminator ("newline") characters in a string, which it would not match otherwise:

- U+000A LINE FEED (LF) (`\n`)
- U+000D CARRIAGE RETURN (CR) (`\r`)
- U+2028 LINE SEPARATOR
- U+2029 PARAGRAPH SEPARATOR

This effectively means the dot will match any UTF-16 code unit. However, it will _not_ match characters that are outside of the Unicode Basic Multilingual Plane (BMP), also known as astral characters, which are represented as [surrogate pairs](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) and necessitate matching with two `.` patterns instead of one.

```js
"😄".match(/(.)(.)/s);
// Array(3) [ "😄", "\ud83d", "\ude04" ]
```

The [`u`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) (unicode) flag can be used to allow the dot to match astral characters as a single character.

```js
"😄".match(/./su);
// Array [ "😄" ]
```

Note that a pattern such as `.*` is still capable of _consuming_ astral characters as part of a larger context, even without the `u` flag.

```js
"😄".match(/.*/s);
// Array [ "😄" ]
```

Using both the `s` and `u` flags in conjunction allows the dot to match any Unicode character in a more intuitive manner.

The set accessor of `dotAll` is `undefined`. You cannot change this property directly.

## Examples

### Using dotAll

```js
const str1 = "bar\nexample foo example";

const regex1 = /bar.example/s;

console.log(regex1.dotAll); // true

console.log(str1.replace(regex1, "")); // foo example

const str2 = "bar\nexample foo example";

const regex2 = /bar.example/;

console.log(regex2.dotAll); // false

console.log(str2.replace(regex2, ""));
// bar
// example foo example
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of the `dotAll` flag in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.hasIndices")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
- {{jsxref("RegExp.prototype.unicode")}}
