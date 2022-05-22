---
title: Object.getOwnPropertySymbols()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Object
  - Polyfill
browser-compat: javascript.builtins.Object.getOwnPropertySymbols
---
{{JSRef}}

The **`Object.getOwnPropertySymbols()`** method returns an array of all symbol properties found directly upon a given object.

{{EmbedInteractiveExample("pages/js/object-getownpropertysymbols.html")}}

## Syntax

```js
Object.getOwnPropertySymbols(obj)
```

### Parameters

- `obj`
  - : The object whose symbol properties are to be returned.

### Return value

An array of all symbol properties found directly upon the given object.

## Description

Similar to {{jsxref("Object.getOwnPropertyNames()")}}, you can get all symbol properties of a given object as an array of symbols. Note that {{jsxref("Object.getOwnPropertyNames()")}} itself does not contain the symbol properties of an object and only the string properties.

As all objects have no own symbol properties initially, `Object.getOwnPropertySymbols()` returns an empty array unless you have set symbol properties on your object.

## Examples

### Using getOwnPropertySymbols

```js
const obj = {};
const a = Symbol('a');
const b = Symbol.for('b');

obj[a] = 'localSymbol';
obj[b] = 'globalSymbol';

const objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // 2
console.log(objectSymbols);        // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0]);     // Symbol(a)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Object.getOwnPropertySymbols` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Symbol")}}
