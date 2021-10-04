---
title: Symbol.keyFor()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/keyFor
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Symbol
browser-compat: javascript.builtins.Symbol.keyFor
---

{{JSRef}}

The **`Symbol.keyFor(sym)`** method retrieves a shared symbol
key from the global symbol registry for the given symbol.

{{EmbedInteractiveExample("pages/js/symbol-keyfor.html")}}

## Syntax

```js
Symbol.keyFor(sym);
```

### Parameters

- `sym`
  - : Symbol, required. The symbol to find a key for.

### Return value

A string representing the key for the given symbol if one is found on the global
registry; otherwise, {{jsxref("undefined")}}.

## Examples

### Using keyFor()

```js
var globalSym = Symbol.for("foo"); // create a new global symbol
Symbol.keyFor(globalSym); // "foo"

var localSym = Symbol();
Symbol.keyFor(localSym); // undefined

// well-known symbols are not symbols registered
// in the global symbol registry
Symbol.keyFor(Symbol.iterator); // undefined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Symbol.for()")}}
