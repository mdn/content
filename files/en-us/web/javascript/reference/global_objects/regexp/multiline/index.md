---
title: RegExp.prototype.multiline
slug: Web/JavaScript/Reference/Global_Objects/RegExp/multiline
tags:
  - JavaScript
  - Property
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.multiline
---
{{JSRef}}

The **`multiline`** accessor property indicates whether or not the `m` flag is used with the regular expression.

{{EmbedInteractiveExample("pages/js/regexp-prototype-multiline.html", "taller")}}

## Description

`RegExp.prototype.multiline` has the value `true` if the `m` flag was used; otherwise, `false`. The `m` flag indicates that a multiline input string should be treated as multiple lines. For example, if `m` is used, `^` and `$` change from matching at only the start or end of the entire string to the start or end of any line within the string.

The set accessor of `multiline` is `undefined`. You cannot change this property directly.

## Examples

### Using multiline

```js
const regex = /foo/m;

console.log(regex.multiline); // true
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
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
