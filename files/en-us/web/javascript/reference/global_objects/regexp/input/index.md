---
title: RegExp.input ($_)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/input
page-type: javascript-static-accessor-property
status:
  - deprecated
browser-compat: javascript.builtins.RegExp.input
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> All `RegExp` static properties that expose the last match state globally are deprecated. See [deprecated RegExp features](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) for more information.

The **`RegExp.input`** static accessor property returns the string against which a regular expression is matched. `RegExp.$_` is an alias for this property.

## Description

Because `input` is a static property of {{jsxref("RegExp")}}, you always use it as `RegExp.input` or `RegExp.$_`, rather than as a property of a `RegExp` object you created.

The value of `input` updates whenever a `RegExp` (but not a `RegExp` subclass) instance makes a successful match. If no matches have been made, `input` is an empty string. You can set the value of `input`, but this does not affect other behaviors of the regex, and the value will be overwritten again when the next successful match is made.

## Examples

### Using input and $\_

```js
const re = /hi/g;
re.test("hi there!");
RegExp.input; // "hi there!"
re.test("foo"); // new test, non-matching
RegExp.$_; // "hi there!"
re.test("hi world!"); // new test, matching
RegExp.$_; // "hi world!"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`RegExp.lastMatch` (`$&`)](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
- [`RegExp.lastParen` (`$+`)](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
- [`RegExp.leftContext` (`` $` ``)](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
- [`RegExp.rightContext` (`$'`)](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
- [`RegExp.$1`, …, `RegExp.$9`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
