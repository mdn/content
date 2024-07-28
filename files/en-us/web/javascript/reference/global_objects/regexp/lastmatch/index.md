---
title: RegExp.lastMatch ($&)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch
page-type: javascript-static-accessor-property
status:
  - deprecated
browser-compat: javascript.builtins.RegExp.lastMatch
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> All `RegExp` static properties that expose the last match state globally are deprecated. See [deprecated RegExp features](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) for more information.

The **`RegExp.lastMatch`** static accessor property returns the last matched substring. `RegExp["$&"]` is an alias for this property.

## Description

Because `lastMatch` is a static property of {{jsxref("RegExp")}}, you always use it as `RegExp.lastMatch` or `RegExp["$&"]`, rather than as a property of a `RegExp` object you created.

The value of `lastMatch` updates whenever a `RegExp` (but not a `RegExp` subclass) instance makes a successful match. If no matches have been made, `lastMatch` is an empty string. The set accessor of `lastMatch` is `undefined`, so you cannot change this property directly.

You cannot use the shorthand alias with the dot property accessor (`RegExp.$&`), because `&` is not a valid identifier part, so this causes a {{jsxref("SyntaxError")}}. Use the [bracket notation](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors) instead.

`$&` can also be used in the replacement string of {{jsxref("String.prototype.replace()")}}, but that's unrelated to the `RegExp["$&"]` legacy property.

## Examples

### Using lastMatch and $&

```js
const re = /hi/g;
re.test("hi there!");
RegExp.lastMatch; // "hi"
RegExp["$&"]; // "hi"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`RegExp.input` (`$_`)](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
- [`RegExp.lastParen` (`$+`)](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
- [`RegExp.leftContext` (`` $` ``)](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
- [`RegExp.rightContext` (`$'`)](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
- [`RegExp.$1`, …, `RegExp.$9`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
