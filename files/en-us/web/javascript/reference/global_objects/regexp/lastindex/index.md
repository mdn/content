---
title: "RegExp: lastIndex"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex
page-type: javascript-instance-data-property
browser-compat: javascript.builtins.RegExp.lastIndex
---

{{JSRef}}

The **`lastIndex`** data property of a {{jsxref("RegExp")}} instance specifies the index at which to start the next match.

{{EmbedInteractiveExample("pages/js/regexp-lastindex.html")}}

## Value

A non-negative integer.

{{js_property_attributes(1, 0, 0)}}

## Description

This property is set only if the regular expression instance used the `g` flag to indicate a global search, or the `y` flag to indicate a sticky search. The following rules apply when {{jsxref("RegExp.prototype.test()", "test()")}} and {{jsxref("RegExp.prototype.exec()", "exec()")}} are called on a given input:

- If `lastIndex` is greater than the length of the input, `exec()` or `test()` will not find a match, and `lastIndex` will be set to 0.
- If `lastIndex` is equal to or less than the length of the input, `exec()` or `test()` will attempt to match the input starting from `lastIndex`.

  - If `exec()` or `test()` find a match, then `lastIndex` will be set to the position of the end of the matched string in the input.
  - If `exec()` or `test()` do not find a match, then `lastIndex` will be set to 0.

## Examples

### Using lastIndex

Consider the following sequence of statements:

```js
const re = /(hi)?/g;
```

Matches the empty string.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Returns `["hi", "hi"]` with `lastIndex` equal to 2.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Returns `["", undefined]`, an empty array whose zeroth element is the match string. In this case, the empty string because `lastIndex` was 2 (and still is 2) and `hi` has length 2.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{JSxRef("RegExp.prototype.dotAll")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.hasIndices")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
