---
title: Symbol
slug: Glossary/Symbol
tags:
  - Data Type
  - ECMAScript 2015
  - Glossary
  - JavaScript
  - Sharing
  - Symbol
---
In {{Glossary("JavaScript")}}, Symbol is a {{Glossary("Primitive", "primitive value")}}.

A value having the data type **Symbol** can be referred to as a "Symbol value". In a JavaScript runtime environment, a symbol value is created by invoking the function {{jsxref("Symbol")}}, which dynamically produces an anonymous, unique value. A symbol may be used as an object property.

Symbol can have an optional description, but for debugging purposes only.

A **Symbol** value represents a unique identifier. For example:

```js
// Here are two symbols with the same description:
let Sym1 = Symbol("Sym")
let Sym2 = Symbol("Sym")

console.log(Sym1 === Sym2) // returns "false"
// Symbols are guaranteed to be unique.
// Even if we create many symbols with the same description,
// they are different values.
```

> **Note:** If you are familiar with Ruby (or another language) that also has a feature called _"symbols"_, please don’t be misled. JavaScript symbols are different.

_Symbol_ type is a new feature in ECMAScript 2015. There is no ECMAScript 5 equivalent for Symbol.

In some programming languages, the symbol data type is referred to as an "atom."

### Symbols don't "Auto-Convert" to strings

Most values in JavaScript support implicit conversion to a string. For instance, we can `alert` almost any value, and it will work. Symbols are special. They don’t auto-convert.

For example:

```js
let Sym = Symbol("Sym")
alert(Sym)  // TypeError: Cannot convert a Symbol value to a string
```

That’s a "language guard" against messing up, because strings and symbols are fundamentally different, and should not occasionally convert one into another.

If you really want to show a symbol, we need to call `.toString()` on it.

```js
let Sym = Symbol("Sym")
alert(Sym.toString())  // Symbol(Sym), now it works
```

Or you can use the `symbol.description` property to get its description:

```js
let _Sym = Symbol("Sym");

alert(_Sym.description); // Sym
```

### Well-known symbols

The {{jsxref("Symbol")}} class has constants for so-called _well-known symbols_. These symbols let you configure how JS treats an object, by using them as property keys.

Examples of well-known symbols are: {{jsxref("Symbol.iterator")}} for array-like objects, or {{jsxref("Symbol.search")}} for string objects.

They are listed in the specification in the [Well-known symbols](https://tc39.github.io/ecma262/#sec-well-known-symbols) table:

- `Symbol.hasInstance`
- `Symbol.isConcatSpreadable`
- `Symbol.iterator`
- `Symbol.toPrimitive`
- …and so on.

### Global symbol registry

There is a global symbol registry holding all available symbols. The methods that access the registry are {{jsxref("Symbol.for()")}} and {{jsxref("Symbol.keyFor()")}}; these mediate between the global symbol table (or "registry") and the run-time environment. The global symbol registry is mostly built by JavaScript's compiler infrastructure, and the global symbol registry's content is not available to JavaScript's run-time infrastructure, except through these reflective methods.

The method `Symbol.for(tokenString)` returns a symbol value from the registry, and `Symbol.keyFor(symbolValue)` returns a token string from the registry; each is the other's inverse, so the following is `true`:

```js
Symbol.keyFor(Symbol.for("tokenString")) === "tokenString" // true
```

## See also

- {{Interwiki("wikipedia", "Symbol (programming)")}} on Wikipedia
- [JavaScript data types and data structures](/en-US/docs/Web/JavaScript/Data_structures)
- [Symbols in ECMAScript 6](https://2ality.com/2014/12/es6-symbols.html)
- {{jsxref("Symbol")}} in the MDN JS reference
- {{jsxref("Object.getOwnPropertySymbols()")}}
- [MDN Web Docs Glossary](/en-US/docs/Glossary)

  - {{Glossary("JavaScript")}}
  - {{Glossary("Primitive")}}
