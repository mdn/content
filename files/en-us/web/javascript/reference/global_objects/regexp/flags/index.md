---
title: RegExp.prototype.flags
slug: Web/JavaScript/Reference/Global_Objects/RegExp/flags
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
  - Polyfill
browser-compat: javascript.builtins.RegExp.flags
---
{{JSRef}}

The **`flags`** accessor property represents the [flags](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags) of the current regular expression object.

{{EmbedInteractiveExample("pages/js/regexp-prototype-flags.html")}}

## Description

`RegExp.prototype.flags` has a string as its value. Flags in the `flags` property are sorted alphabetically (from left to right, e.g. `"dgimsuy"`). It actually invokes the other flag accessors ([`hasIndices`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices), [`global`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global), etc.) one-by-one and concatenates the results.

All built-in functions read the `flags` property instead of reading individual flag accessors.

The set accessor of `flag` is `undefined`. You cannot change this property directly.

## Examples

### Using flags

```js
/foo/ig.flags;   // "gi"
/bar/myu.flags;  // "muy"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `RegExp.prototype.flags` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{JSxRef("RegExp.prototype.source")}}
