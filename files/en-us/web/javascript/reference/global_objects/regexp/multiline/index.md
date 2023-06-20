---
title: RegExp.prototype.multiline
slug: Web/JavaScript/Reference/Global_Objects/RegExp/multiline
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.RegExp.multiline
---

{{JSRef}}

The **`multiline`** accessor property of {{jsxref("RegExp")}} instances returns whether or not the `m` flag is used with this regular expression.

{{EmbedInteractiveExample("pages/js/regexp-prototype-multiline.html", "taller")}}

## Syntax

### Return value

The getter for `multiline` returns a boolean which is `true` if the `m` flag was used, and `false` otherwise.

There is no setter for `multiline`, so you cannot change this property's value using assignment.

## Description

The `m` flag indicates that a multiline input string should be treated as multiple lines. For example, if `m` is used, `^` and `$` change from matching at only the start or end of the entire string to the start or end of any line within the string.

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
- {{JSxRef("RegExp.prototype.dotAll")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.hasIndices")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
