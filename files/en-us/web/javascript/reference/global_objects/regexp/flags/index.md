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

The **`flags`** property returns a string consisting of the [flags](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags) of the current regular expression object.

{{EmbedInteractiveExample("pages/js/regexp-prototype-flags.html")}}

{{JS_Property_Attributes(0, 0, 1)}}

## Description

Flags in the `flags` property are sorted alphabetically (from left to right, e.g. `"gimsuy"`).

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
