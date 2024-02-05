---
title: RegExp.prototype.multiline
slug: Web/JavaScript/Reference/Global_Objects/RegExp/multiline
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.RegExp.multiline
---

{{JSRef}}

The **`multiline`** accessor property of {{jsxref("RegExp")}} instances returns whether or not the `m` flag is used with this regular expression.

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

- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.dotAll")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.hasIndices")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
- {{jsxref("RegExp.prototype.unicode")}}
