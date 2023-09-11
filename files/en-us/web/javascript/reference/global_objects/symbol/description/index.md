---
title: Symbol.prototype.description
slug: Web/JavaScript/Reference/Global_Objects/Symbol/description
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Symbol.description
---

{{JSRef}}

The **`description`** accessor property of {{jsxref("Symbol")}} values returns a string containing the description of this symbol, or `undefined` if the symbol has no description.

{{EmbedInteractiveExample("pages/js/symbol-prototype-description.html")}}

## Description

{{JSxRef("Symbol")}} objects can be created with an optional description which can be used for debugging but not to access the symbol itself. The `Symbol.prototype.description` property can be used to read that description. It is different to `Symbol.prototype.toString()` as it does not contain the enclosing `"Symbol()"` string. See the examples.

## Examples

### Using description

```js
Symbol("desc").toString(); // "Symbol(desc)"
Symbol("desc").description; // "desc"
Symbol("").description; // ""
Symbol().description; // undefined

// well-known symbols
Symbol.iterator.toString(); // "Symbol(Symbol.iterator)"
Symbol.iterator.description; // "Symbol.iterator"

// global symbols
Symbol.for("foo").toString(); // "Symbol(foo)"
Symbol.for("foo").description; // "foo"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Symbol.prototype.description` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{JSxRef("Symbol.prototype.toString()")}}
