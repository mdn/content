---
title: RegExp.prototype.flags
slug: Web/JavaScript/Reference/Global_Objects/RegExp/flags
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.RegExp.flags
---

{{JSRef}}

The **`flags`** accessor property of {{jsxref("RegExp")}} instances returns the [flags](/en-US/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) of this regular expression.

{{EmbedInteractiveExample("pages/js/regexp-prototype-flags.html")}}

## Syntax

### Return value

The getter for `flags` returns a string where each letter represents a flag set on the regular expression. The letters are sorted in ascending alphabetical order (e.g. `"dgimsuvy"`).

There is no setter for `flags`, so you cannot change this property's value using assignment.

## Description

The `flags` getter actually invokes the other flag accessors ([`hasIndices`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices), [`global`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global), etc.) one-by-one and concatenates the results.

All built-in functions read the `flags` property instead of reading individual flag accessors.

## Examples

### Using flags

```js-nolint
/foo/ig.flags; // "gi"
/bar/myu.flags; // "muy"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `RegExp.prototype.flags` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{JSxRef("RegExp.prototype.source")}}
