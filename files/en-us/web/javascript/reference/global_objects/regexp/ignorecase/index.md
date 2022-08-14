---
title: get RegExp.prototype.ignoreCase
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

`RegExp.prototype.ignoreCase` is a getter-only property that returns `true` if the `i` flag was used; otherwise, `false`. The `i` flag indicates that case should be ignored while attempting a match in a string.

You cannot change this property directly.

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
