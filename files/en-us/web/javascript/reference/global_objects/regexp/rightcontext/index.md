---
title: RegExp.rightContext ($')
slug: Web/JavaScript/Reference/Global_Objects/RegExp/rightContext
page-type: javascript-static-accessor-property
status:
  - deprecated
browser-compat: javascript.builtins.RegExp.rightContext
---

{{JSRef}} {{deprecated_header}}

> **Note:** All `RegExp` static properties that expose the last match state globally are deprecated. See [deprecated RegExp features](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) for more information.

The **`RegExp.rightContext`** static accessor property returns the substring following the most recent match. `RegExp["$'"]` is an alias for this property.

## Syntax

### Return value

The getter for `rightContext` returns a string containing the substring following the matched substring from the last time when a `RegExp` (but not a `RegExp` subclass) instance made a successful match. If no matches have been made, it returns an empty string.

There is no setter for `rightContext`, so you cannot change this property's value using assignment.

## Description

Because `rightContext` is a static property of {{jsxref("RegExp")}}, you always use it as `RegExp.rightContext` or `RegExp["$'"]`, rather than as a property of a `RegExp` object you created.

You cannot use the shorthand alias with the dot property accessor (`RegExp.$'`), because `'` is not a valid identifier part, so this causes a {{jsxref("SyntaxError")}}. Use the [bracket notation](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors) instead.

`$'` can also be used in the replacement string of {{jsxref("String.prototype.replace()")}}, but that's unrelated to the `RegExp["$'"]` legacy property.

## Examples

### Using rightContext and $'

```js
const re = /hello/g;
re.test("hello world!");
RegExp.rightContext; // " world!"
RegExp["$'"]; // " world!"
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
- {{jsxref("RegExp/n", "RegExp.$1, …, RegExp.$9")}}
