---
title: get Map[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Map/@@species
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Property
browser-compat: javascript.builtins.Map.@@species
---
{{JSRef}}

The **`Map[@@species]`** accessor property returns the `Map` constructor.

## Description

The species accessor property returns the default constructor for `Map` objects.
Subclass constructors may over-ride it to change the constructor assignment.

## Examples

### Species in ordinary objects

The species property returns the default constructor function, which is the
`Map` constructor for `Map` objects:

```js
Map[Symbol.species]; // function Map()
```

### Species in derived objects

In a derived collection object (e.g. your custom map `MyMap`), the `MyMap`
species is the `MyMap` constructor. However, you might want to overwrite this,
in order to return parent `Map` objects in your derived class methods:

```js
class MyMap extends Map {
  // Overwrite MyMap species to the parent Map constructor
  static get [Symbol.species]() { return Map; }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map")}}
- {{jsxref("Symbol.species")}}
