---
title: Symbol() constructor
slug: Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
page-type: javascript-constructor
browser-compat: javascript.builtins.Symbol.Symbol
---

{{JSRef}}

The **`Symbol()`** function returns primitive values of type Symbol.

{{EmbedInteractiveExample("pages/js/symbol-constructor.html", "taller")}}

## Syntax

```js-nolint
Symbol()
Symbol(description)
```

> **Note:** `Symbol()` can only be called without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to construct it with `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `description` {{optional_inline}}
  - : A string. A description of the symbol which can be used for debugging but not to
    access the symbol itself.

## Examples

### Creating symbols

To create a new primitive symbol, you write `Symbol()` with an optional
string as its description:

```js
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
```

The above code creates three new symbols. Note that `Symbol("foo")` does not
coerce the string `"foo"` into a symbol. It creates a new symbol each time:

```js
Symbol("foo") === Symbol("foo"); // false
```

### new Symbol()

The following syntax with the {{jsxref("Operators/new", "new")}} operator will throw a
{{jsxref("TypeError")}}:

```js example-bad
const sym = new Symbol(); // TypeError
```

This prevents authors from creating an explicit `Symbol` wrapper object
instead of a new symbol value and might be surprising as creating explicit wrapper
objects around primitive data types is generally possible (for example,
`new Boolean`, `new String` and `new Number`).

If you really want to create a `Symbol` wrapper object, you can use the
`Object()` function:

```js
const sym = Symbol("foo");
const symObj = Object(sym);
typeof sym; // "symbol"
typeof symObj; // "object"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Symbol` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
