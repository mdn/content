---
title: RegExp.prototype.ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
tags:
  - JavaScript
  - Property
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.ignoreCase
---
{{JSRef}}

The **`ignoreCase`** accessor property indicates whether or not the `i` flag is used with the regular expression.

{{EmbedInteractiveExample("pages/js/regexp-prototype-ignorecase.html")}}

## Description

`RegExp.prototype.ignoreCase` has the value `true` if the `i` flag was used; otherwise, `false`. The `i` flag indicates that case should be ignored while attempting a match in a string.

If the regex has the [`unicode`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) flag, the case mapping happens as specified in [`CaseFolding.txt`](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt). Otherwise, case mapping uses the [Unicode Default Case Conversion](https://unicode-org.github.io/icu/userguide/transforms/casemappings.html) — the same algorithm used in [`String.prototype.toUpperCase()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) and [`String.prototype.toLowerCase()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase).

The set accessor of `ignoreCase` is `undefined`. You cannot change this property directly.

## Examples

### Using ignoreCase

```js
const regex = /foo/i;

console.log(regex.ignoreCase); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("RegExp.lastIndex")}}
- {{JSxRef("RegExp.prototype.dotAll")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.hasIndices")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
