---
title: get RegExp.prototype.sticky
slug: Web/JavaScript/Reference/Global_Objects/RegExp/sticky
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
  - Polyfill
browser-compat: javascript.builtins.RegExp.sticky
---
{{JSRef}}

The **`sticky`** accessor property indicates whether or not the `y` flag is used with the regular expression.

{{EmbedInteractiveExample("pages/js/regexp-prototype-sticky.html", "taller")}}

## Description

`RegExp.prototype.sticky` is a getter-only property that returns `true` if the `y` flag was used; otherwise, `false`. The `y` flag indicates that it matches only from the index indicated by the {{jsxref("RegExp.lastIndex", "lastIndex")}} property of this regular expression in the target string (and does not attempt to match from any later indexes).

When the [`exec()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) method is called and the regex fails to match at the current position indicated by {{jsxref("RegExp.lastIndex", "lastIndex")}}, a global regex will continue to attempt at the next character, while a sticky regex immediately returns `null` and resets `lastIndex` to 0. When the match succeeds, `lastIndex` is advanced to the end of the match, just like global regexps do. When `lastIndex` is out of bounds of the currently matched string, it's reset to 0, just like global regexps do.

For the [`exec()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) method, a regex that's both sticky and [global](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) behaves the same as a sticky and non-global regex. However, due to many other methods special-casing the behavior of global regexps, the global flag is, in general, orthogonal to the sticky flag. For more information about how each individual regex-related method (such as [`String.prototype.match()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) and [`String.prototype.replace()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)) interact with the sticky and global flags, see their respective pages.

You cannot change this property directly.

## Examples

### Using a regular expression with the sticky flag

```js
const str = '#foo#';
const regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (lastIndex is taken into account with sticky flag)
regex.lastIndex; // 0 (reset after match failure)
```

### Anchored sticky flag

For several versions, Firefox's SpiderMonkey engine had [a bug](https://bugzilla.mozilla.org/show_bug.cgi?id=773687) with regard to the `^` assertion and the sticky flag which allowed expressions starting with the `^` assertion and using the sticky flag to match when they shouldn't. The bug was introduced some time after Firefox 3.6 (which had the sticky flag but not the bug) and fixed in 2015. Perhaps because of the bug, the specification [specifically calls out](https://tc39.es/ecma262/#sec-compileassertion) the fact that:

> Even when the `y` flag is used with a pattern, `^` always matches only at the beginning of _Input_, or (if _rer_.[[Multiline]] is `true`) at the beginning of a line.

Examples of correct behavior:

```js
const regex = /^foo/y;
regex.lastIndex = 2;
regex.test('..foo');   // false - index 2 is not the beginning of the string

const regex2 = /^foo/my;
regex2.lastIndex = 2;
regex2.test('..foo');  // false - index 2 is not the beginning of the string or line
regex2.lastIndex = 2;
regex2.test('.\nfoo'); // true - index 2 is the beginning of a line
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `sticky` `RegExp` flag in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("RegExp.lastIndex")}}
- {{JSxRef("RegExp.prototype.dotAll")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.hasIndices")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.unicode")}}
