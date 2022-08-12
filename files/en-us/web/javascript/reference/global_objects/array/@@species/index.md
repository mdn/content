---
title: get Array[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Array/@@species
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Polyfill
browser-compat: javascript.builtins.Array.@@species
---
{{JSRef}}

The **`Array[@@species]`** accessor property returns the constructor used to construct return values from array methods.

## Syntax

```js
Array[Symbol.species]
```

### Return value

The value of the constructor (`this`) on which `get @@species` was called. The return value is used to construct return values from array methods that create new arrays.

## Description

The `@@species` accessor property returns the default constructor for `Array` objects. Subclass constructors may override it to change the constructor assignment. The default implementation is basically:

```js
// Hypothetical underlying implementation for illustration
class Array {
  static get [Symbol.species]() {
    return this;
  }
}
```

Because of this polymorphic implementation, `@@species` of derived subclasses would also return the constructor itself by default.

```js
class SubArray extends Array {}
SubArray[Symbol.species] === SubArray; // true
```

When calling array methods that do not mutate the existing array but return a new array instance (for example, `filter` and `map`), the array's `constructor[@@species]` will be accessed. The returned constructor will be used to construct the return value of the array method. This makes it technically possible to make array methods return objects unrelated to arrays.

```js
class NotAnArray {
  constructor(length) {
    this.length = length;
  }
}

const arr = [0, 1, 2];
arr.constructor = { [Symbol.species]: NotAnArray };
arr.map((i) => i); // NotAnArray { '0': 0, '1': 1, '2': 2, length: 3 }
arr.filter((i) => i); // NotAnArray { '0': 1, '1': 2, length: 0 }
arr.concat([1, 2]); // NotAnArray { '0': 0, '1': 1, '2': 2, '3': 1, '4': 2, length: 5 }
```

## Examples

### Species in ordinary objects

The `@@species` property returns the default constructor function, which is
the `Array` constructor for `Array`.

```js
Array[Symbol.species]; // [Function: Array]
```

### Species in derived objects

In a derived collection object (e.g. your custom array `MyArray`), the
`MyArray` species is the `MyArray` constructor. However, you might
want to overwrite this, in order to return parent `Array` objects in your
derived class methods:

```js
class MyArray extends Array {
  // Overwrite MyArray species to the parent Array constructor
  static get [Symbol.species]() { return Array; }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array[Symbol.species]` and support of `Symbol.species` in all affected `Array` methods in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array")}}
- {{jsxref("Symbol.species")}}
