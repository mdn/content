---
title: get Array[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Array/@@species
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
browser-compat: javascript.builtins.Array.@@species
---
{{JSRef}}

The **`Array[@@species]`** accessor property returns the
`Array` constructor.

## Syntax

```js
Array[Symbol.species]
```

### Return value

The {{jsxref("Array")}} constructor.

## Description

The `species` accessor property returns the default constructor for
`Array` objects. Subclass constructors may override it to change the
constructor assignment.

## Examples

### Species in ordinary objects

The `species` property returns the default constructor function, which is
the `Array` constructor for `Array` objects:

```js
Array[Symbol.species]; // function Array()
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

- {{jsxref("Array")}}
- {{jsxref("Symbol.species")}}
