---
title: RegExp.lastParen ($+)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastParen
tags:
  - JavaScript
  - Non-standard
  - Property
  - Read-only
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.lastParen
---
{{JSRef}} {{non-standard_header}}

The non-standard **`lastParen`** property is a static and read-only property of regular expressions that contains the last parenthesized substring match, if any. `RegExp.$+` is an alias for this property.

## Description

The `lastParen` property is static, it is not a property of an individual regular expression object. Instead, you always use it as `RegExp.lastParen` or `RegExp['$+']`.

The value of the `lastParen` property is read-only and modified whenever a successful match is made.

You can not use the shorthand alias with the dot property accessor (`RegExp.$+`), because the parser expects an expression with "+" in that case and a {{jsxref("SyntaxError")}} is thrown. Use the [bracket notation for property access](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors).

## Examples

### Using lastParen and $+

```js
const re = /(hi)/g;
re.test('hi there!');
RegExp.lastParen; // "hi"
RegExp['$+'];     // "hi"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
- {{jsxref("RegExp.n", "RegExp.$1-$9")}}
