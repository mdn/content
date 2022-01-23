---
title: Array.prototype[@@unscopables]
slug: Web/JavaScript/Reference/Global_Objects/Array/@@unscopables
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Property
  - Prototype
browser-compat: javascript.builtins.Array.@@unscopables
---
{{JSRef}}

The **`@@unscopables`** data property contains property names that were not included in the ECMAScript standard prior to the ES2015 version and that are ignored for [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with) statement-binding purposes.

## Description

The default `Array` properties that are ignored for `with` statement-binding purposes are:

- {{jsxref("Array.prototype.at()", "at()")}}
- {{jsxref("Array.prototype.copyWithin()", "copyWithin()")}}
- {{jsxref("Array.prototype.entries()", "entries()")}}
- {{jsxref("Array.prototype.fill()", "fill()")}}
- {{jsxref("Array.prototype.find()", "find()")}}
- {{jsxref("Array.prototype.findIndex()", "findIndex()")}}
- {{jsxref("Array.prototype.includes()", "includes()")}}
- {{jsxref("Array.prototype.keys()", "keys()")}}
- {{jsxref("Array.prototype.values()", "values()")}}

See {{jsxref("Symbol.unscopables")}} for how to set `unscopables` for your own objects.

{{js_property_attributes(0,0,1)}}

## Example

Imagine the `keys.push('something')` call below is in code that was written prior to ECMAScript 2015.

When ECMAScript 2015 introduced the {{jsxref("Array.prototype.keys()")}} method, if the `@@unscopables` data property had not also been introduced, that `keys.push('something')` call would break — because the JavaScript runtime would have interpreted `keys` as being the {{jsxref("Array.prototype.keys()")}} method, rather than the `keys` array defined in the example code.

So the `@@unscopables` data property for `Array.prototype` causes the `Array` properties introduced in ECMAScript 2015 to be ignored for `with` statement-binding purposes — allowing code that was written prior to ECMAScript 2015 to continue working as expected, rather than breaking.

```js
var keys = [];

with (Array.prototype) {
  keys.push('something');
}

Object.keys(Array.prototype[Symbol.unscopables]);
// ["at", "copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Symbol.unscopables")}}
