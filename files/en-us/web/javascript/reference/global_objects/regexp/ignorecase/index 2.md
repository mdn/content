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

The **`ignoreCase`** property indicates whether or not the "`i`" flag is used with the regular expression. `ignoreCase` is a read-only property of an individual regular expression instance.

{{EmbedInteractiveExample("pages/js/regexp-prototype-ignorecase.html")}}{{js_property_attributes(0, 0, 1)}}

## Description

The value of `ignoreCase` is a {{jsxref("Boolean")}} and `true` if the "`i`" flag was used; otherwise, `false`. The "`i`" flag indicates that case should be ignored while attempting a match in a string.

You cannot change this property directly.

## Examples

### Using ignoreCase

```js
var regex = new RegExp('foo', 'i');

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
