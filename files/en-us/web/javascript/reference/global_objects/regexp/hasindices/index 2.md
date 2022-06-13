---
title: RegExp.prototype.hasIndices
slug: Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices
tags:
  - Draft
  - JavaScript
  - Property
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.hasIndices
---
{{JSRef}}

The **`hasIndices`** property indicates whether or not the "`d`" flag is used with the regular expression. `hasIndices` is a read-only property of an individual regular expression instance.

{{EmbedInteractiveExample("pages/js/regexp-prototype-hasindices.html")}}

{{JS_Property_Attributes(0, 0, 1)}}

## Description

The value of `hasIndices` is a {{JSxRef("Boolean")}} and `true` if the "`d`" flag was used; otherwise, `false`. The "`d`" flag indicates that the result of a regular expression match should contain the start and end indices of the substrings of each capture group.

You cannot change this property directly.

## Examples

### Using `hasIndices`

```js
const str1 = 'foo bar foo';

const regex1 = new RegExp('foo', 'gd');

console.log(regex1.hasIndices); // Output: true

console.log(regex1.exec(str1).indices[0]); // Output: Array [0, 3]
console.log(regex1.exec(str1).indices[0]); // Output: Array [8, 11]

const str2 = 'foo bar foo';

const regex2 = new RegExp('foo');

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
