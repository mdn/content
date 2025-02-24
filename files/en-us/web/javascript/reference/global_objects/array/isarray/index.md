---
title: Array.isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
page-type: javascript-static-method
browser-compat: javascript.builtins.Array.isArray
---

{{JSRef}}

The **`Array.isArray()`** static method determines whether the passed value is an {{jsxref("Array")}}.

{{InteractiveExample("JavaScript Demo: Array.isArray()")}}

```js interactive-example
console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray("[]"));
// Expected output: false

console.log(Array.isArray(new Array(5)));
// Expected output: true

console.log(Array.isArray(new Int16Array([15, 33])));
// Expected output: false
```

## Syntax

```js-nolint
Array.isArray(value)
```

### Parameters

- `value`
  - : The value to be checked.

### Return value

`true` if `value` is an {{jsxref("Array")}}; otherwise, `false`. `false` is always returned if `value` is a {{jsxref("TypedArray")}} instance.

## Description

`Array.isArray()` checks if the passed value is an {{jsxref("Array")}}. It performs a _branded check_, similar to the [`in`](/en-US/docs/Web/JavaScript/Reference/Operators/in) operator, for a private property initialized by the {{jsxref("Array/Array", "Array()")}} constructor.

It is a more robust alternative to [`instanceof Array`](/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) because it avoids false positives and false negatives:

- `Array.isArray()` rejects values that aren't actual `Array` instances, even if they have `Array.prototype` their prototype chain — `instanceof Array` would accept these as it does check the prototype chain.
- `Array.isArray()` accepts `Array` objects constructed in another realm — `instanceof Array` returns `false` for these because the identity of the `Array` constructor is different across realms.

See the article ["Determining with absolute accuracy whether or not a JavaScript object is an array"](https://web.mit.edu/jwalden/www/isArray.html) for more details.

## Examples

### Using Array.isArray()

```js
// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c", "d"));
Array.isArray(new Array(3));
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype);

// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
// This is not an array, because it was not created using the
// array literal syntax or the Array constructor
Array.isArray({ __proto__: Array.prototype });
```

### instanceof vs. Array.isArray()

When checking for `Array` instance, `Array.isArray()` is preferred over `instanceof` because it works across realms.

```js
const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
const xArray = window.frames[window.frames.length - 1].Array;
const arr = new xArray(1, 2, 3); // [1, 2, 3]

// Correctly checking for Array
Array.isArray(arr); // true
// The prototype of arr is xArray.prototype, which is a
// different object from Array.prototype
arr instanceof Array; // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.isArray` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections) guide
- {{jsxref("Array")}}
