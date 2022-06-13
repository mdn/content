---
title: get RegExp[@@species]
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@species
tags:
  - JavaScript
  - Property
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.@@species
---
{{JSRef}}

The **`RegExp[@@species]`** accessor property returns the `RegExp` constructor.

{{EmbedInteractiveExample("pages/js/regexp-getregexp-@@species.html")}}

## Description

The `species` accessor property returns the default constructor for `RegExp` objects. Subclass constructors may over-ride it to change the constructor assignment.

## Examples

### Species in ordinary objects

The `species` property returns the default constructor function, which is the `RegExp` constructor for `RegExp` objects:

```js
RegExp[Symbol.species]; // function RegExp()
```

### Species in derived objects

In a derived collection object (e.g. your custom regexp `MyRegExp`), the `MyRegExp` species is the `MyRegExp` constructor. However, you might want to overwrite this, in order to return parent `RegExp` objects in your derived class methods:

```js
class MyRegExp extends RegExp {
  // Overwrite MyRegExp species to the parent RegExp constructor
  static get [Symbol.species]() { return RegExp; }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("RegExp")}}
- {{jsxref("Symbol.species")}}
