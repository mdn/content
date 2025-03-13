---
title: RegExp.prototype.global
slug: Web/JavaScript/Reference/Global_Objects/RegExp/global
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.RegExp.global
---

{{JSRef}}

The **`global`** accessor property of {{jsxref("RegExp")}} instances returns whether or not the `g` flag is used with this regular expression.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.global")}}

```js interactive-example
const regex1 = new RegExp("foo", "g");

console.log(regex1.global);
// Expected output: true

const regex2 = new RegExp("bar", "i");

console.log(regex2.global);
// Expected output: false
```

## Description

`RegExp.prototype.global` has the value `true` if the `g` flag was used; otherwise, `false`. The `g` flag indicates that the regular expression should be tested against all possible matches in a string. Each call to [`exec()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) will update its [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) property, so that the next call to `exec()` will start at the next character.

Some methods, such as [`String.prototype.matchAll()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) and [`String.prototype.replaceAll()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll), will validate that, if the parameter is a regex, it is global. The regex's [`[Symbol.match]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) and [`[Symbol.replace]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) methods (called by [`String.prototype.match()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) and [`String.prototype.replace()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)) would also have different behaviors when the regex is global.

The set accessor of `global` is `undefined`. You cannot change this property directly.

## Examples

### Using global

```js
const regex = /foo/g;
console.log(regex.global); // true

const str = "fooexamplefoo";
const str1 = str.replace(regex, "");
console.log(str1); // example

const regex1 = /foo/;
const str2 = str.replace(regex1, "");
console.log(str2); // examplefoo
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.dotAll")}}
- {{jsxref("RegExp.prototype.hasIndices")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
- {{jsxref("RegExp.prototype.unicode")}}
