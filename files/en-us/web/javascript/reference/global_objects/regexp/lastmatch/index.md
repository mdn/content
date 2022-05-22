---
title: RegExp.lastMatch ($&)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch
tags:
  - JavaScript
  - Non-standard
  - Property
  - Read-only
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.lastMatch
---
{{JSRef}} {{non-standard_header}}

The non-standard **lastMatch** property is a static and read-only property of regular expressions that contains the last matched characters. `RegExp.$&` is an alias for this property.

## Description

The `lastMatch` property is static, it is not a property of an individual regular expression object. Instead, you always use it as `RegExp.lastMatch` or `RegExp['$&'].`

The value of the `lastMatch` property is read-only and modified whenever a successful match is made.

You can not use the shorthand alias with the dot property accessor (`RegExp.$&`), because the parser expects an expression with "&" in that case and a {{jsxref("SyntaxError")}} is thrown. Use the [bracket notation for property access](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors).

## Examples

### Using lastMatch and $&

```js
const re = /hi/g;
re.test('hi there!');
RegExp.lastMatch; // "hi"
RegExp['$&'];     // "hi"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
- {{jsxref("RegExp.n", "RegExp.$1-$9")}}
