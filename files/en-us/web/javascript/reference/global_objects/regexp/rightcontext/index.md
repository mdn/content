---
title: RegExp.rightContext ($')
slug: Web/JavaScript/Reference/Global_Objects/RegExp/rightContext
tags:
  - JavaScript
  - Non-standard
  - Property
  - Read-only
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.rightContext
---
{{JSRef}} {{non-standard_header}}

The non-standard **rightContext** property is a static and read-only property of regular expressions that contains the substring following the most recent match. `RegExp.$'` is an alias for this property.

## Description

The `rightContext` property is static, it is not a property of an individual regular expression object. Instead, you always use it as `RegExp.rightContext` or `RegExp["$'"]`.

The value of the `rightContext` property is read-only and modified whenever a successful match is made.

You can not use the shorthand alias with the dot property accessor (`RegExp.$'`), because the parser expects a starting string in that case and a {{jsxref("SyntaxError")}} is thrown. Use the [bracket notation for property access](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors).

## Examples

### Using rightContext and $'

```js
const re = /hello/g;
re.test('hello world!');
RegExp.rightContext; // " world!"
RegExp["$'"];       // " world!"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{jsxref("RegExp.n", "RegExp.$1-$9")}}
