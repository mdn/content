---
title: RegExp.prototype.hasIndices
slug: Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices
tags:
  - JavaScript
  - Property
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.hasIndices
---
{{JSRef}}

The **`hasIndices`** accessor property indicates whether or not the `d` flag is used with the regular expression.

{{EmbedInteractiveExample("pages/js/regexp-prototype-hasindices.html")}}

## Description

`RegExp.prototype.hasIndices` has the value `true` if the `d` flag was used; otherwise, `false`. The `d` flag indicates that the result of a regular expression match should contain the start and end indices of the substrings of each capture group. It does not change the regex's interpretation or matching behavior in any way, but only provides additional information in the matching result.

The set accessor of `hasIndices` is `undefined`. You cannot change this property directly.

## Examples

### Using hasIndices

```js
const str1 = 'foo bar foo';

const regex1 = /foo/gd;

console.log(regex1.hasIndices); // Output: true

console.log(regex1.exec(str1).indices[0]); // Output: Array [0, 3]
console.log(regex1.exec(str1).indices[0]); // Output: Array [8, 11]

const str2 = 'foo bar foo';

const regex2 = /foo/;

console.log(regex2.hasIndices); // Output: false

console.log(regex2.exec(str2).indices); // Output: undefined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{JSxRef("RegExp.lastIndex")}}
- {{JSxRef("RegExp.prototype.exec()")}}
- {{JSxRef("RegExp.prototype.dotAll")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
