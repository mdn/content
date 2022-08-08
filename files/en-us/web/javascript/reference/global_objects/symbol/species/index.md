---
title: Symbol.species
slug: Web/JavaScript/Reference/Global_Objects/Symbol/species
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Symbol
browser-compat: javascript.builtins.Symbol.species
---
{{JSRef}}

The well-known symbol **`Symbol.species`** specifies a function-valued property that the constructor function uses to create derived objects.

{{EmbedInteractiveExample("pages/js/symbol-species.html")}}

## Description

The `species` accessor property allows subclasses to override the default constructor for objects.

{{js_property_attributes(0,0,0)}}

## Examples

### Using species

You might want to return {{jsxref("Array")}} objects in your derived array class `MyArray`. For example, when using methods such as {{jsxref("Array.map", "map()")}} that return the default constructor, you want these methods to return a parent `Array` object, instead of the `MyArray` object. The `species` symbol lets you do this:

```js
class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() { return Array; }
}
const a = new MyArray(1, 2, 3);
const mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array.@@species", "Array[@@species]")}}
- {{jsxref("ArrayBuffer.@@species", "ArrayBuffer[@@species]")}}
- {{jsxref("Map.@@species", "Map[@@species]")}}
- {{jsxref("Promise.@@species", "Promise[@@species]")}}
- {{jsxref("RegExp.@@species", "RegExp[@@species]")}}
- {{jsxref("Set.@@species", "Set[@@species]")}}
- {{jsxref("TypedArray.@@species", "TypedArray[@@species]")}}
