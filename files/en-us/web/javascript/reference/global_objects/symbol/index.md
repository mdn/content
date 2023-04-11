---
title: Symbol
slug: Web/JavaScript/Reference/Global_Objects/Symbol
page-type: javascript-class
browser-compat: javascript.builtins.Symbol
---

{{JSRef}}

**`Symbol`** is a built-in object whose constructor returns a `symbol` [primitive](/en-US/docs/Glossary/Primitive) — also called a **Symbol value** or just a **Symbol** — that's guaranteed to be unique. Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object. That enables a form of weak {{Glossary("encapsulation")}}, or a weak form of [information hiding](https://en.wikipedia.org/wiki/Information_hiding).

Every `Symbol()` call is guaranteed to return a unique Symbol. Every `Symbol.for("key")` call will always return the same Symbol for a given value of `"key"`. When `Symbol.for("key")` is called, if a Symbol with the given key can be found in the global Symbol registry, that Symbol is returned. Otherwise, a new Symbol is created, added to the global Symbol registry under the given key, and returned.

## Description

To create a new primitive Symbol, you write `Symbol()` with an optional string as its description:

```js
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
```

The above code creates three new Symbols. Note that `Symbol("foo")` does not coerce the string `"foo"` into a Symbol. It creates a new Symbol each time:

```js
Symbol("foo") === Symbol("foo"); // false
```

The following syntax with the {{jsxref("Operators/new", "new")}} operator will throw a {{jsxref("TypeError")}}:

```js example-bad
const sym = new Symbol(); // TypeError
```

This prevents authors from creating an explicit `Symbol` wrapper object instead of a new Symbol value and might be surprising as creating explicit wrapper objects around primitive data types is generally possible (for example, `new Boolean`, `new String` and `new Number`).

If you really want to create a `Symbol` wrapper object, you can use the `Object()` function:

```js
const sym = Symbol("foo");
typeof sym; // "symbol"
const symObj = Object(sym);
typeof symObj; // "object"
```

Because symbols are the only primitive data type that has reference identity (that is, you cannot create the same symbol twice), they behave like objects in some way. For example, they are garbage collectable and can therefore be stored in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}}, and {{jsxref("FinalizationRegistry")}} objects.

### Shared Symbols in the global Symbol registry

The above syntax using the `Symbol()` function will create a Symbol whose value remains unique throughout the lifetime of the program. To create Symbols available across files and even across realms (each of which has its own global scope), use the methods {{jsxref("Symbol.for()")}} and {{jsxref("Symbol.keyFor()")}} to set and retrieve Symbols from the global Symbol registry.

Note that the "global Symbol registry" is only a fictitious concept and may not correspond to any internal data structure in the JavaScript engine — and even if such a registry exists, its content is not available to the JavaScript code, except through the `for()` and `keyFor()` methods.

The method `Symbol.for(tokenString)` takes a string key and returns a symbol value from the registry, while `Symbol.keyFor(symbolValue)` takes a symbol value and returns the string key corresponding to it. Each is the other's inverse, so the following is `true`:

```js
Symbol.keyFor(Symbol.for("tokenString")) === "tokenString"; // true
```

Because registered symbols can be arbitrarily created anywhere, they behave almost exactly like the strings they wrap. Therefore, they are not guaranteed to be unique and are not garbage collectable. Therefore, registered symbols are disallowed in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}}, and {{jsxref("FinalizationRegistry")}} objects.

### Well-known Symbols

All static properties of the `Symbol` constructor are Symbols themselves, whose values are constant across realms. They are known as _well-known Symbols_, and their purpose is to serve as "protocols" for certain built-in JavaScript operations, allowing users to customize the language's behavior. For example, if a constructor function has a method with {{jsxref("Symbol.hasInstance")}} as its name, this method will encode its behavior with the {{jsxref("Operators/instanceof", "instanceof")}} operator.

Prior to well-known Symbols, JavaScript used normal properties to implement certain built-in operations. For example, the [`JSON.stringify`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) function will attempt to call each object's `toJSON()` method, and the [`String`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String) function will call the object's `toString()` and `valueOf()` methods. However, as more operations are added to the language, designating each operation a "magic property" can break backward compatibility and make the language's behavior harder to reason with. Well-known Symbols allow the customizations to be "invisible" from normal code, which typically only read string properties.

In MDN and other sources, well-known symbol values are stylized by prefixing `@@`. For example, {{jsxref("Symbol.hasInstance")}} is written as `@@hasInstance`. This is because symbols don't have actual literal formats, but using `Symbol.hasInstance` does not reflect the ability of using other aliases to refer to the same symbol. This is like the difference between `Function.name` and `"Function"`.

Well-known symbols do not have the concept of garbage collectability, because they come in a fixed set and are unique throughout the lifetime of the program, similar to intrinsic objects such as `Array.prototype`, so they are also allowed in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}}, and {{jsxref("FinalizationRegistry")}} objects.

### Finding Symbol properties on objects

The method {{jsxref("Object.getOwnPropertySymbols()")}} returns an array of Symbols and lets you find Symbol properties on a given object. Note that every object is initialized with no own Symbol properties, so that this array will be empty unless you've set Symbol properties on the object.

## Constructor

- {{jsxref("Symbol/Symbol", "Symbol()")}}
  - : Creates a new `Symbol` object. It is not a constructor in the traditional sense, because it can only be called as a function, instead of being constructed with `new Symbol()`.

## Static properties

The static properties are all well-known Symbols. In these Symbols' descriptions, we will use language like "`Symbol.hasInstance` is a method determining…", but bear in mind that this is referring to the semantic of an object's method having this Symbol as the method name (because well-known Symbols act as "protocols"), not describing the value of the Symbol itself.

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
- {{jsxref("Symbol.species")}}
  - : A constructor function that is used to create derived objects.
- {{jsxref("Symbol.split")}}
  - : A method that splits a string at the indices that match a regular expression. Used by {{jsxref("String.prototype.split()")}}.
- {{jsxref("Symbol.toPrimitive")}}
  - : A method converting an object to a primitive value.
- {{jsxref("Symbol.toStringTag")}}
  - : A string value used for the default description of an object. Used by {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Symbol.unscopables")}}
  - : An object value of whose own and inherited property names are excluded from the [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with) environment bindings of the associated object.

## Static methods

- {{jsxref("Symbol.for()")}}
  - : Searches for existing Symbols with the given `key` and returns it if found. Otherwise a new Symbol gets created in the global Symbol registry with `key`.
- {{jsxref("Symbol.keyFor()")}}
  - : Retrieves a shared Symbol key from the global Symbol registry for the given Symbol.

## Instance properties

These properties are defined on `Symbol.prototype` and shared by all `Symbol` instances.

- {{jsxref("Object/constructor", "Symbol.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Symbol` instances, the initial value is the {{jsxref("Symbol/Symbol", "Symbol")}} constructor.
- {{jsxref("Symbol.prototype.description")}}
  - : A read-only string containing the description of the Symbol.
- `Symbol.prototype[@@toStringTag]`
  - : The initial value of the [`@@toStringTag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Symbol"`. This property is used in {{jsxref("Object.prototype.toString()")}}. However, because `Symbol` also has its own [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString) method, this property is not used unless you call [`Object.prototype.toString.call()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) with a symbol as `thisArg`.

## Instance methods

- {{jsxref("Symbol.prototype.toString()")}}
  - : Returns a string containing the description of the Symbol. Overrides the {{jsxref("Object.prototype.toString()")}} method.
- {{jsxref("Symbol.prototype.valueOf()")}}
  - : Returns the Symbol. Overrides the {{jsxref("Object.prototype.valueOf()")}} method.
- [`Symbol.prototype[@@toPrimitive]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive)
  - : Returns the Symbol.

## Examples

### Using the typeof operator with Symbols

The {{jsxref("Operators/typeof", "typeof")}} operator can help you to identify Symbols.

```js
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";
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
const obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";

for (const i in obj) {
  console.log(i);
}
// "c" "d"
```

### Symbols and JSON.stringify()

Symbol-keyed properties will be completely ignored when using `JSON.stringify()`:

```js
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
```

For more details, see {{jsxref("JSON.stringify()")}}.

### Symbol wrapper objects as property keys

When a Symbol wrapper object is used as a property key, this object will be coerced to its wrapped Symbol:

```js
const sym = Symbol("foo");
const obj = { [sym]: 1 };
obj[sym]; // 1
obj[Object(sym)]; // still 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Symbol` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Operators/typeof", "typeof")}}
- [Data types and data structures](/en-US/docs/Web/JavaScript/Data_structures)
- ["ES6 In Depth: Symbols" on hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/)
