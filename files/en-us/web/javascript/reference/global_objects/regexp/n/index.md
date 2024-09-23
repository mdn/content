---
title: RegExp.$1, …, RegExp.$9
slug: Web/JavaScript/Reference/Global_Objects/RegExp/n
page-type: javascript-static-accessor-property
status:
  - deprecated
browser-compat: javascript.builtins.RegExp.n
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> All `RegExp` static properties that expose the last match state globally are deprecated. See [deprecated RegExp features](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) for more information.

The **`RegExp.$1, …, RegExp.$9`** static accessor properties return parenthesized substring matches.

## Description

Because `$1`–`$9` are static properties of {{jsxref("RegExp")}}, you always use them as `RegExp.$1`, `RegExp.$2`, etc., rather than as properties of a `RegExp` object you created.

The values of `$1, …, $9` update whenever a `RegExp` (but not a `RegExp` subclass) instance makes a successful match. If no matches have been made, or if the last match does not have the corresponding capturing group, the respective property is an empty string. The set accessor of each property is `undefined`, so you cannot change the properties directly.

The number of possible parenthesized substrings is unlimited, but the `RegExp` object can only hold the first nine. You can access all parenthesized substrings through the returned array's indexes.

`$1, …, $9` can also be used in the replacement string of {{jsxref("String.prototype.replace()")}}, but that's unrelated to the `RegExp.$n` legacy properties.

## Examples

### Using $n with RegExp.prototype.test()

The following script uses the {{jsxref("RegExp.prototype.test()")}} method to grab a number in a generic string.

```js
const str = "Test 24";
const number = /(\d+)/.test(str) ? RegExp.$1 : "0";
number; // "24"
```

Please note that any operation involving the usage of other regular expressions between a `re.test(str)` call and the `RegExp.$n` property, might have side effects, so that accessing these special properties should be done instantly, otherwise the result might be unexpected.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`RegExp.input` (`$_`)](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
- [`RegExp.lastMatch` (`$&`)](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
- [`RegExp.lastParen` (`$+`)](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
- [`RegExp.leftContext` (`` $` ``)](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
- [`RegExp.rightContext` (`$'`)](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
