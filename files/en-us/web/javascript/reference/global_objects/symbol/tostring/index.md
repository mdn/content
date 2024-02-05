---
title: Symbol.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toString
page-type: javascript-instance-method
browser-compat: javascript.builtins.Symbol.toString
---

{{JSRef}}

The **`toString()`** method of {{jsxref("Symbol")}} values returns a string representing this symbol value.

{{EmbedInteractiveExample("pages/js/symbol-prototype-tostring.html")}}

## Syntax

```js-nolint
toString()
```

### Parameters

None.

### Return value

A string representing the specified symbol value.

## Description

The {{jsxref("Symbol")}} object overrides the `toString` method of {{jsxref("Object")}}; it does not inherit
{{jsxref("Object.prototype.toString()")}}. For `Symbol` values, the `toString` method returns a descriptive string in the form `"Symbol(description)"`, where `description` is the symbol's [description](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description).

The `toString()` method requires its `this` value to be a `Symbol` primitive or wrapper object. It throws a {{jsxref("TypeError")}} for other `this` values without attempting to coerce them to symbol values.

Because `Symbol` has a [`[@@toPrimitive]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive) method, that method always takes priority over `toString()` when a `Symbol` object is [coerced to a string](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). However, because `Symbol.prototype[@@toPrimitive]()` returns a symbol primitive, and symbol primitives throw a {{jsxref("TypeError")}} when implicitly converted to a string, the `toString()` method is never implicitly called by the language. To stringify a symbol, you must explicitly call its `toString()` method or use the [`String()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String#using_string_to_stringify_a_symbol) function.

## Examples

### Using toString()

```js
Symbol("desc").toString(); // "Symbol(desc)"

// well-known symbols
Symbol.iterator.toString(); // "Symbol(Symbol.iterator)"

// global symbols
Symbol.for("foo").toString(); // "Symbol(foo)"
```

### Implicitly calling toString()

The only way to make JavaScript implicitly call `toString()` instead of [`[@@toPrimitive]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive) on a symbol wrapper object is by [deleting](/en-US/docs/Web/JavaScript/Reference/Operators/delete) the `@@toPrimitive` method first.

> **Warning:** You should not do this in practice. Never mutate built-in objects unless you know exactly what you're doing.

```js
delete Symbol.prototype[Symbol.toPrimitive];
console.log(`${Object(Symbol("foo"))}`); // "Symbol(foo)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.toString()")}}
