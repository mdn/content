---
title: Set[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/Set/Symbol.species
page-type: javascript-static-accessor-property
browser-compat: javascript.builtins.Set.@@species
---

{{JSRef}}

The **`Set[Symbol.species]`** static accessor property is an unused accessor property specifying how to copy `Set` objects.

## Syntax

```js-nolint
Set[Symbol.species]
```

### Return value

The value of the constructor (`this`) on which `get [Symbol.species]` was called. The return value is used to construct copied `Set` instances.

## Description

The `[Symbol.species]` accessor property returns the default constructor for `Set` objects. Subclass constructors may override it to change the constructor assignment.

> [!NOTE]
> This property is currently unused by all `Set` methods.

## Examples

### Species in ordinary objects

The `[Symbol.species]` property returns the default constructor function, which is the `Set` constructor for `Set`.

```js
Set[Symbol.species]; // function Set()
```

### Species in derived objects

In an instance of a custom `Set` subclass, such as `MySet`, the `MySet` species is the `MySet` constructor. However, you might want to overwrite this, in order to return parent `Set` objects in your derived class methods:

```js
class MySet extends Set {
  // Overwrite MySet species to the parent Set constructor
  static get [Symbol.species]() {
    return Set;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Set")}}
- {{jsxref("Symbol.species")}}
