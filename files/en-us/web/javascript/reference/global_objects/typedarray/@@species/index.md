---
title: get TypedArray[@@species]
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/@@species
tags:
  - JavaScript
  - Property
  - Prototype
  - TypedArray
  - TypedArrays
browser-compat: javascript.builtins.TypedArray.@@species
---
{{JSRef}}

The **`TypedArray[@@species]`** accessor property returns the constructor of a [typed array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects).

## Description

The `species` accessor property returns the default constructor for [typed array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) objects. Subclass constructors may over-ride it to change the constructor assignment.

## Examples

### Species in ordinary objects

The `species` property returns the default constructor function, which is one of the typed array constructors for a given [typed array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) object:

```js
Int8Array[Symbol.species];    // function Int8Array()
Uint8Array[Symbol.species];   // function Uint8Array()
Float32Array[Symbol.species]; // function Float32Array()
```

### Species in derived objects

In a derived collection object (e.g. your custom typed array `MyTypedArray`), the `MyTypedArray` species is the `MyTypedArray` constructor. However, you might want to overwrite this, in order to return a parent [typed array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) object in your derived class methods:

```js
class MyTypedArray extends Uint8Array {
  // Overwrite MyTypedArray species to the parent Uint8Array constructor
  static get [Symbol.species]() { return Uint8Array; }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("TypedArray")}}
- {{jsxref("Symbol.species")}}
