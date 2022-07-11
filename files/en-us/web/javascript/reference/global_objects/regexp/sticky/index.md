---
title: RegExp.prototype.sticky
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

The **`sticky`** property reflects whether or not the search is sticky (searches in strings only from the index indicated by the {{jsxref("RegExp.lastIndex", "lastIndex")}} property of this regular expression). `sticky` is a read-only property of an individual regular expression object.

{{EmbedInteractiveExample("pages/js/regexp-prototype-sticky.html", "taller")}}{{js_property_attributes(0, 0, 1)}}

## Description

The value of `sticky` is a {{jsxref("Boolean")}} and true if the "`y`" flag was used; otherwise, false. The "`y`" flag indicates that it matches only from the index indicated by the {{jsxref("RegExp.lastIndex", "lastIndex")}} property of this regular expression in the target string (and does not attempt to match from any later indexes). A regular expression defined as both `sticky` and `global` ignores the `global` flag.

You cannot change this property directly. It is read-only.

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
