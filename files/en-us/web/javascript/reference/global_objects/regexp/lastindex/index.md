---
title: 'RegExp: lastIndex'
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex
tags:
  - JavaScript
  - Property
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.lastIndex
---
{{JSRef}}

**`lastIndex`** is a read/write integer property of {{jsXref("RegExp")}}
instances that specifies the index at which to start the next match.

Note that `lastIndex` is not a property of the {{jsXref("RegExp")}}
prototype but is instead only exposed from {{jsXref("RegExp")}}
instances.

{{EmbedInteractiveExample("pages/js/regexp-lastindex.html")}}{{js_property_attributes(1, 0, 0)}}

## Description

This property is set only if the regular expression instance used the `g` flag
to indicate a global search, or the `y` flag to indicate a sticky search. The
following rules apply:

- If `lastIndex` is greater than the length of the string,
  {{jsxref("RegExp.prototype.test()", "test()")}} and
  {{jsxref("RegExp.prototype.exec()", "exec()")}} fail, then
  `lastIndex` is set to 0.
- If `lastIndex` is equal to or less than the length of the string and if the
  regular expression matches the empty string, then the regular expression
  matches input starting from `lastIndex`.
- If `lastIndex` is equal to the length of the string and if the regular
  expression does not match the empty string, then the regular expression
  mismatches input, and `lastIndex` is reset to 0.
- Otherwise, `lastIndex` is set to the next position following the most recent
  match.

## Examples

### Using lastIndex

Consider the following sequence of statements:

```js
var re = /(hi)?/g;
```

Matches the empty string.

```js
console.log(re.exec('hi'));
console.log(re.lastIndex);
```

Returns `["hi", "hi"]` with `lastIndex` equal to 2.

```js
console.log(re.exec('hi'));
console.log(re.lastIndex);
```

Returns `["", undefined]`, an empty array whose zeroth element is the match
string. In this case, the empty string because `lastIndex` was 2 (and still
is 2) and `hi` has length 2.

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
