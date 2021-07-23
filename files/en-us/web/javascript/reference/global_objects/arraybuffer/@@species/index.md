---
title: get ArrayBuffer[@@species]
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/@@species
tags:
  - ArrayBuffer
  - JavaScript
  - Property
  - TypedArrays
browser-compat: javascript.builtins.ArrayBuffer.@@species
---
{{JSRef}}

The **`ArrayBuffer[@@species]`** accessor property returns the `ArrayBuffer` constructor.

## Description

The species accessor property returns the default constructor for `ArrayBuffer` objects. Subclass constructors may over-ride it to change the constructor assignment.

## Examples

### Species in ordinary objects

The species property returns the default constructor function, which is the `ArrayBuffer` constructor for `ArrayBuffer` objects:

```js
ArrayBuffer[Symbol.species]; // function ArrayBuffer()
```

### Species in derived objects

In a derived collection object (e.g. your custom array buffer `MyArrayBuffer`), the `MyArrayBuffer` species is the `MyArrayBuffer` constructor. However, you might want to overwrite this, in order to return parent `ArrayBuffer` objects in your derived class methods:

```js
class MyArrayBuffer extends ArrayBuffer {
  // Overwrite MyArrayBuffer species to the parent ArrayBuffer constructor
  static get [Symbol.species]() { return ArrayBuffer; }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("ArrayBuffer")}}
- {{jsxref("Symbol.species")}}
