---
title: get Set[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Set/@@species
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - set
browser-compat: javascript.builtins.Set.@@species
---
{{JSRef}}

The **`Set[Symbol.species]`** accessor property returns the `Set` constructor.

## Description

The `species` accessor property returns the default constructor for `Set` objects. Subclass constructors may override it to change the constructor assignment.

## Examples

### Species in ordinary objects

The `species` property returns the default constructor function, which is the `Set` constructor for `Set` objects:

```js
Set[Symbol.species]; // function Set()
```

### Species in derived objects

In a derived collection object (e.g. your custom set `MySet`), the `MySet` species is the `MySet` constructor. However, you might want to overwrite this, in order to return parent `Set` objects in your derived class methods:

```js
class MySet extends Set {
  // Overwrite MySet species to the parent Set constructor
  static get [Symbol.species]() { return Set; }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Set")}}
- {{jsxref("Symbol.species")}}
