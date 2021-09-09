---
title: Symbol.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toString
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Symbol
browser-compat: javascript.builtins.Symbol.toString
---
{{JSRef}}

The **`toString()`** method returns a string representing the specified {{jsxref("Symbol")}} object.

{{EmbedInteractiveExample("pages/js/symbol-prototype-tostring.html")}}

## Syntax

```js
toString()
```

### Return value

A string representing the specified {{jsxref("Symbol")}} object.

## Description

The {{jsxref("Symbol")}} object overrides the `toString` method of the {{jsxref("Object")}} object; it does not inherit {{jsxref("Object.prototype.toString()")}}. For `Symbol` objects, the `toString` method returns a string representation of the object.

### No string concatenation

While you can call `toString()` on Symbols, you cannot use string concatenation with them:

```js
Symbol('foo') + 'bar'        // TypeError: Can't convert symbol to string
```

## Examples

### Using toString()

```js
Symbol('desc').toString()    // "Symbol(desc)"

// well-known symbols
Symbol.iterator.toString()   // "Symbol(Symbol.iterator)

// global symbols
Symbol.for('foo').toString() // "Symbol(foo)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.toString()")}}
