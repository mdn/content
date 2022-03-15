---
title: Symbol
slug: Web/JavaScript/Reference/Global_Objects/Symbol
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - Symbol
  - Polyfill
browser-compat: javascript.builtins.Symbol
---
{{JSRef}}

**`Symbol`** is a built-in object whose constructor returns a `symbol` [primitive](/en-US/docs/Glossary/Primitive) — also called a **Symbol value** or just a **Symbol** — that's guaranteed to be unique. Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object. That enables a form of weak {{Glossary("encapsulation")}}, or a weak form of [information hiding](https://en.wikipedia.org/wiki/Information_hiding).

Every `Symbol()` call is guaranteed to return a unique Symbol. Every `Symbol.for("key")` call will always return the same Symbol for a given value of `"key"`. When `Symbol.for("key")` is called, if a Symbol with the given key can be found in the global Symbol registry, that Symbol is returned. Otherwise, a new Symbol is created, added to the global Symbol registry under the given key, and returned.

## Description

To create a new primitive Symbol, you write `Symbol()` with an optional string as its description:

```js
let sym1 = Symbol()
let sym2 = Symbol('foo')
let sym3 = Symbol('foo')
```

The above code creates three new Symbols. Note that `Symbol("foo")` does not coerce the string `"foo"` into a Symbol. It creates a new Symbol each time:

```js
Symbol('foo') === Symbol('foo')  // false
```

The following syntax with the {{jsxref("Operators/new", "new")}} operator will throw a {{jsxref("TypeError")}}:

```js
let sym = new Symbol()  // TypeError
```

This prevents authors from creating an explicit `Symbol` wrapper object instead of a new Symbol value and might be surprising as creating explicit wrapper objects around primitive data types is generally possible (for example, `new Boolean`, `new String` and `new Number`).

If you really want to create a `Symbol` wrapper object, you can use the `Object()` function:

```js
let sym = Symbol('foo')
typeof sym      // "symbol"
let symObj = Object(sym)
typeof symObj   // "object"
```

### Shared Symbols in the global Symbol registry

The above syntax using the `Symbol()` function will not create a global Symbol that is available in your whole codebase. To create Symbols available across files and even across realms (each of which has its own global scope), use the methods {{jsxref("Symbol.for()")}} and {{jsxref("Symbol.keyFor()")}} to set and retrieve Symbols from the global Symbol registry.

### Finding Symbol properties on objects

The method {{jsxref("Object.getOwnPropertySymbols()")}} returns an array of Symbols and lets you find Symbol properties on a given object. Note that every object is initialized with no own Symbol properties, so that this array will be empty unless you've set Symbol properties on the object.

## Constructor

- [`Symbol()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol)
  - : Creates a new `Symbol` object. It is incomplete as a constructor because it does not support the syntax "`new Symbol()`".

## Static properties

- {{jsxref("Symbol.asyncIterator")}}
  - : A method that returns the default AsyncIterator for an object. Used by [`for await...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of).
- {{jsxref("Symbol.hasInstance")}}
  - : A method determining if a constructor object recognizes an object as its instance. Used by {{jsxref("Operators/instanceof", "instanceof")}}.
- {{jsxref("Symbol.isConcatSpreadable")}}
  - : A Boolean value indicating if an object should be flattened to its array elements. Used by {{jsxref("Array.prototype.concat()")}}.
- {{jsxref("Symbol.iterator")}}
  - : A method returning the default iterator for an object. Used by [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of).
- {{jsxref("Symbol.match")}}
  - : A method that matches against a string, also used to determine if an object may be used as a regular expression. Used by {{jsxref("String.prototype.match()")}}.
- {{jsxref("Symbol.matchAll")}}
  - : A method that returns an iterator, that yields matches of the regular expression against a string. Used by {{jsxref("String.prototype.matchAll()")}}.
- {{jsxref("Symbol.replace")}}
  - : A method that replaces matched substrings of a string. Used by {{jsxref("String.prototype.replace()")}}.
- {{jsxref("Symbol.search")}}
  - : A method that returns the index within a string that matches the regular expression. Used by {{jsxref("String.prototype.search()")}}.
- {{jsxref("Symbol.split")}}
  - : A method that splits a string at the indices that match a regular expression. Used by {{jsxref("String.prototype.split()")}}.
- {{jsxref("Symbol.species")}}
  - : A constructor function that is used to create derived objects.
- {{jsxref("Symbol.toPrimitive")}}
  - : A method converting an object to a primitive value.
- {{jsxref("Symbol.toStringTag")}}
  - : A string value used for the default description of an object. Used by {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Symbol.unscopables")}}
  - : An object value of whose own and inherited property names are excluded from the [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with) environment bindings of the associated object.

## Static methods

- {{jsxref("Symbol.for()", "Symbol.for(key)")}}
  - : Searches for existing Symbols with the given `key` and returns it if found. Otherwise a new Symbol gets created in the global Symbol registry with `key`.
- {{jsxref("Symbol.keyFor", "Symbol.keyFor(sym)")}}
  - : Retrieves a shared Symbol key from the global Symbol registry for the given Symbol.

## Instance properties

- {{jsxref("Symbol.prototype.description")}}
  - : A read-only string containing the description of the Symbol.

## Instance methods

- {{jsxref("Symbol.prototype.toString()")}}
  - : Returns a string containing the description of the Symbol. Overrides the {{jsxref("Object.prototype.toString()")}} method.
- {{jsxref("Symbol.prototype.valueOf()")}}
  - : Returns the Symbol. Overrides the {{jsxref("Object.prototype.valueOf()")}} method.
- {{jsxref("Symbol.prototype.@@toPrimitive()", "Symbol.prototype[@@toPrimitive]")}}
  - : Returns the Symbol.

## Examples

### Using the typeof operator with Symbols

The {{jsxref("Operators/typeof", "typeof")}} operator can help you to identify Symbols.

```js
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'
```

### Symbol type conversions

Some things to note when working with type conversion of Symbols.

- When trying to convert a Symbol to a number, a {{jsxref("TypeError")}} will be thrown
  (e.g. `+sym` or `sym | 0`).
- When using loose equality, `Object(sym) == sym` returns `true`.
- `Symbol("foo") + "bar"` throws a {{jsxref("TypeError")}} (can't convert Symbol to string). This prevents you from silently creating a new string property name from a Symbol, for example.
- The ["safer" `String(sym)` conversion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_conversion) works like a call to {{jsxref("Symbol.prototype.toString()")}} with Symbols, but note that `new String(sym)` will throw.

### Symbols and for...in iteration

Symbols are not enumerable in [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) iterations. In addition, {{jsxref("Object.getOwnPropertyNames()")}} will not return Symbol object properties, however, you can use {{jsxref("Object.getOwnPropertySymbols()")}} to get these.

```js
let obj = {}

obj[Symbol('a')] = 'a'
obj[Symbol.for('b')] = 'b'
obj['c'] = 'c'
obj.d = 'd'

for (let i in obj) {
   console.log(i)  // logs "c" and "d"
}
```

### Symbols and JSON.stringify()

Symbol-keyed properties will be completely ignored when using `JSON.stringify()`:

```js
JSON.stringify({[Symbol('foo')]: 'foo'})
// '{}'
```

For more details, see {{jsxref("JSON.stringify()")}}.

### Symbol wrapper objects as property keys

When a Symbol wrapper object is used as a property key, this object will be coerced to its wrapped Symbol:

```js
let sym = Symbol('foo')
let obj = {[sym]: 1}
obj[sym]             // 1
obj[Object(sym)]     // still 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Symbol` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- [Glossary: Symbol data type](/en-US/docs/Glossary/Symbol)
- {{jsxref("Operators/typeof", "typeof")}}
- [Data types and data structures](/en-US/docs/Web/JavaScript/Data_structures)
- ["ES6 In Depth: Symbols" on hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/)
