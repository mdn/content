---
title: Map[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Map/@@species
page-type: javascript-static-accessor-property
browser-compat: javascript.builtins.Map.@@species
---

{{JSRef}}

The **`Map[@@species]`** static accessor property is an unused accessor property specifying how to copy `Map` objects.

## Syntax

```js-nolint
Map[Symbol.species]
```

### Return value

The value of the constructor (`this`) on which `get @@species` was called. The return value is used to construct copied `Map` instances.

## Description

The `@@species` accessor property returns the default constructor for `Map` objects. Subclass constructors may override it to change the constructor assignment.

> **Note:** This property is currently unused by all `Map` methods.

## Examples

### Species in ordinary objects

The `@@species` property returns the default constructor function, which is the `Map` constructor for `Map`.

```js
Map[Symbol.species]; // function Map()
```

### Species in derived objects

In an instance of a custom `Map` subclass, such as `MyMap`, the `MyMap` species is the `MyMap` constructor. However, you might want to overwrite this, in order to return parent `Map` objects in your derived class methods:

```js
class MyMap extends Map {
  // Overwrite MyMap species to the parent Map constructor
  static get [Symbol.species]() {
    return Map;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map")}}
- {{jsxref("Symbol.species")}}
