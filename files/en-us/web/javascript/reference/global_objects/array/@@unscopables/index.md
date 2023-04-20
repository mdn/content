---
title: Array.prototype[@@unscopables]
slug: Web/JavaScript/Reference/Global_Objects/Array/@@unscopables
page-type: javascript-instance-data-property
browser-compat: javascript.builtins.Array.@@unscopables
---

{{JSRef}}

The **`@@unscopables`** data property of `Array.prototype` is shared by all {{jsxref("Array")}} instances. It contains property names that were not included in the ECMAScript standard prior to the ES2015 version and that are ignored for [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with) statement-binding purposes.

## Value

A [`null`-prototype object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) with property names given below and their values set to `true`.

{{js_property_attributes(0, 0, 1)}}

## Description

The default `Array` properties that are ignored for `with` statement-binding purposes are:

- [`at()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
- [`copyWithin()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)
- [`entries()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)
- [`fill()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
- [`find()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [`findIndex()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [`findLast()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)
- [`findLastIndex()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)
- [`flat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- [`flatMap()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
- [`includes()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [`keys()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)
- [`toReversed()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed)
- [`toSorted()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
- [`toSpliced()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced)
- [`values()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values)

`Array.prototype[@@unscopables]` is an empty object only containing all the above property names with the value `true`. Its [prototype is `null`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), so `Object.prototype` properties like [`toString`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) won't accidentally be made unscopable, and a `toString()` within the `with` statement will continue to be called on the array.

See {{jsxref("Symbol.unscopables")}} for how to set unscopable properties for your own objects.

## Examples

Imagine the `keys.push('something')` call below is in code that was written prior to ECMAScript 2015.

```js
var keys = [];

with (Array.prototype) {
  keys.push("something");
}
```

When ECMAScript 2015 introduced the {{jsxref("Array.prototype.keys()")}} method, if the `@@unscopables` data property had not also been introduced, that `keys.push('something')` call would break — because the JavaScript runtime would have interpreted `keys` as being the {{jsxref("Array.prototype.keys()")}} method, rather than the `keys` array defined in the example code.

So the `@@unscopables` data property for `Array.prototype` causes the `Array` properties introduced in ECMAScript 2015 to be ignored for `with` statement-binding purposes — allowing code that was written prior to ECMAScript 2015 to continue working as expected, rather than breaking.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype[@@unscopables]` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Statements/with", "with")}}
- {{jsxref("Symbol.unscopables")}}
