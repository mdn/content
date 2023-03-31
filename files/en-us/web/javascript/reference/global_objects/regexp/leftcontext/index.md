---
title: RegExp.leftContext ($`)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/leftContext
page-type: javascript-static-accessor-property
status:
  - deprecated
browser-compat: javascript.builtins.RegExp.leftContext
---

{{JSRef}} {{deprecated_header}}

> **Note:** All `RegExp` static properties that expose the last match state globally are deprecated. See [deprecated RegExp features](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) for more information.

The **`RegExp.leftContext`** static accessor property returns the substring preceding the most recent match. `` RegExp["$`"] `` is an alias for this property.

## Description

Because `leftContext` is a static property of {{jsxref("RegExp")}}, you always use it as `RegExp.leftContext` or `` RegExp["$`"] ``, rather than as a property of a `RegExp` object you created.

The value of `leftContext` updates whenever a `RegExp` (but not a `RegExp` subclass) instance makes a successful match. If no matches have been made, `leftContext` is an empty string. The set accessor of `leftContext` is `undefined`, so you cannot change this property directly.

You cannot use the shorthand alias with the dot property accessor (`` RegExp.$`  ``), because `` ` `` is not a valid identifier part, so this causes a {{jsxref("SyntaxError")}}. Use the [bracket notation](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors) instead.

`` $`  `` can also be used in the replacement string of {{jsxref("String.prototype.replace()")}}, but that's unrelated to the `` RegExp["$`"] `` legacy property.

## Examples

### Using leftContext and $\`

```js
const re = /world/g;
re.test("hello world!");
RegExp.leftContext; // "hello "
RegExp["$`"]; // "hello "
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
- {{jsxref("RegExp.n", "RegExp.$1, …, RegExp.$9")}}
