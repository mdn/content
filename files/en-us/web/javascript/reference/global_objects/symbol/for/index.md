---
title: Symbol.for()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/for
page-type: javascript-static-method
browser-compat: javascript.builtins.Symbol.for
---

{{JSRef}}

The **`Symbol.for()`** static method searches for existing symbols
in a runtime-wide symbol registry with the given key and returns it if found. Otherwise
a new symbol gets created in the global symbol registry with this key.

{{InteractiveExample("JavaScript Demo: Symbol.for()")}}

```js interactive-example
console.log(Symbol.for("bar") === Symbol.for("bar"));
// Expected output: true

console.log(Symbol("bar") === Symbol("bar"));
// Expected output: false

const symbol1 = Symbol.for("foo");

console.log(symbol1.toString());
// Expected output: "Symbol(foo)"
```

## Syntax

```js-nolint
Symbol.for(key)
```

### Parameters

- `key`
  - : String, required. The key for the symbol (and also used for the description of the
    symbol).

### Return value

An existing symbol with the given key if found; otherwise, a new symbol is created and
returned.

## Description

In contrast to `Symbol()`, the `Symbol.for()` function creates a
symbol available in a [global symbol registry](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) list. `Symbol.for()` does also
not necessarily create a new symbol on every call, but checks first if a symbol with the
given `key` is already present in the registry. In that case, that symbol is
returned. If no symbol with the given key is found, `Symbol.for()` will
create a new global symbol.

## Examples

### Using Symbol.for()

```js
Symbol.for("foo"); // create a new global symbol
Symbol.for("foo"); // retrieve the already created symbol

// Same global symbol, but not locally
Symbol.for("bar") === Symbol.for("bar"); // true
Symbol("bar") === Symbol("bar"); // false

// The key is also used as the description
const sym = Symbol.for("mario");
sym.toString(); // "Symbol(mario)"
```

To avoid name clashes with your global symbol keys and other (library code) global
symbols, it might be a good idea to prefix your symbols:

```js
Symbol.for("mdn.foo");
Symbol.for("mdn.bar");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Symbol.keyFor()")}}
