---
title: Symbol.isConcatSpreadable
slug: Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Symbol
  - Polyfill
browser-compat: javascript.builtins.Symbol.isConcatSpreadable
---
{{JSRef}}

The **`Symbol.isConcatSpreadable`** well-known symbol is used to configure if an object should be flattened to its array elements when using the {{jsxref("Array.prototype.concat()")}} method.

{{EmbedInteractiveExample("pages/js/symbol-isconcatspreadable.html")}}

## Description

The `@@isConcatSpreadable` symbol (`Symbol.isConcatSpreadable`) can be defined as an own or inherited property and its value is a boolean. It can control behavior for arrays and array-like objects:

- For array objects, the default behavior is to spread (flatten) elements. `Symbol.isConcatSpreadable` can avoid flattening in these cases.
- For array-like objects, the default behavior is no spreading or flattening. `Symbol.isConcatSpreadable` can force flattening in these cases.

{{js_property_attributes(0,0,0)}}

## Examples

### Arrays

By default, {{jsxref("Array.prototype.concat()")}} spreads (flattens) arrays into its result:

```js
const alpha = ['a', 'b', 'c'];
const numeric = [1, 2, 3];

const alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // Result: ['a', 'b', 'c', 1, 2, 3]
```

When setting `Symbol.isConcatSpreadable` to `false`, you can disable the default behavior:

```js
const alpha = ['a', 'b', 'c'];
const numeric = [1, 2, 3];

numeric[Symbol.isConcatSpreadable] = false;
const alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // Result: ['a', 'b', 'c', [1, 2, 3] ]
```

### Array-like objects

For array-like objects, the default is to not spread. `Symbol.isConcatSpreadable` needs to be set to `true` in order to get a flattened array:

```js
const x = [1, 2, 3];

const fakeArray = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: 'hello',
  1: 'world',
};

x.concat(fakeArray); // [1, 2, 3, "hello", "world"]
```

> **Note:** The `length` property is used to control the number of object properties to be added. In the above example, `length:2` indicates two properties has to be added.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Symbol.isConcatSpreadable` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Array.prototype.concat()")}}
