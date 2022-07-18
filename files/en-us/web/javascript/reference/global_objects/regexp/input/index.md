---
title: RegExp.input ($_)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/input
tags:
  - JavaScript
  - Non-standard
  - Property
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.input
---
{{JSRef}} {{non-standard_header}}

The non-standard **`input`** property is a static property of regular expressions that contains the string against which a regular expression is matched. `RegExp.$_` is an alias for this property.

## Description

The `input` property is static, it is not a property of an individual regular expression object. Instead, you always use it as `RegExp.input` or `RegExp.$_.`

The value of the **`input`** property is modified whenever the searched string on the regular expression is changed and that string is matching.

## Examples

### Using `input` and `$_`

```js
const re = /hi/g;
re.test('hi there!');
RegExp.input;         // "hi there!"
re.test('foo');       // new test, non-matching
RegExp.$_;            // "hi there!"
re.test('hi world!'); // new test, matching
RegExp.$_;            // "hi world!"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
- {{jsxref("RegExp.n", "RegExp.$1-$9")}}
