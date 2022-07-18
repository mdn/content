---
title: RegExp.leftContext ($`)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/leftContext
tags:
  - JavaScript
  - Non-standard
  - Property
  - Read-only
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.leftContext
---
{{JSRef}} {{non-standard_header}}

The non-standard **leftContext** property is a static and read-only property of regular expressions that contains the substring preceding the most recent match. `` RegExp.$` `` is an alias for this property.

## Description

The `leftContext` property is static, it is not a property of an individual regular expression object. Instead, you always use it as `RegExp.leftContext` or `` RegExp['$`'] ``.

The value of the `leftContext` property is read-only and modified whenever a successful match is made.

You can not use the shorthand alias with the dot property accessor (`` RegExp.$` ``), because the parser expects a starting template string in that case and a {{jsxref("SyntaxError")}} is thrown. Use the [bracket notation for property access](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors).

## Examples

### Using leftContext and $\`

```js
const re = /world/g;
re.test('hello world!');
RegExp.leftContext; // "hello "
RegExp['$`'];       // "hello "
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
- {{jsxref("RegExp.n", "RegExp.$1-$9")}}
