---
title: RegExp.prototype.global
slug: Web/JavaScript/Reference/Global_Objects/RegExp/global
tags:
  - JavaScript
  - Property
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.global
---
{{JSRef}}

The **`global`** property indicates whether or not the "`g`" flag is used with the regular expression. `global` is a read-only property of an individual regular expression instance.

{{EmbedInteractiveExample("pages/js/regexp-prototype-global.html")}}{{js_property_attributes(0, 0, 1)}}

## Description

The value of `global` is a {{jsxref("Boolean")}} and `true` if the "`g`" flag was used; otherwise, `false`. The "`g`" flag indicates that the regular expression should be tested against all possible matches in a string. A regular expression defined as both `global` ("`g`") and `sticky` ("`y`") will ignore the `global` flag and perform sticky matches.

You cannot change this property directly.

## Examples

### Using global

```js
var regex = new RegExp('foo', 'g');

console.log(regex.global);  // true

var str = 'fooexamplefoo';

var str1 = str.replace(regex, '');

console.log(str1);  // Output: example

var regex1 = new RegExp('foo');

var str2 = str.replace(regex1, '');

console.log(str2);  // Output: examplefoo
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("RegExp.lastIndex")}}
- {{JSxRef("RegExp.prototype.dotAll")}}
- {{JSxRef("RegExp.prototype.hasIndices")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
