---
title: Symbol.unscopables
slug: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Symbol.unscopables
---

{{JSRef}}

The **`Symbol.unscopables`** static data property represents the [well-known symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.unscopables`. The {{jsxref("Statements/with", "with")}} statement looks up this symbol on the scope object for a property containing a collection of properties that should not become bindings within the `with` environment.

{{InteractiveExample("JavaScript Demo: Symbol.unscopables")}}

```js interactive-example
const object1 = {
  property1: 42,
};

object1[Symbol.unscopables] = {
  property1: true,
};

with (object1) {
  console.log(property1);
  // Expected output: Error: property1 is not defined
}
```

## Value

The well-known symbol `Symbol.unscopables`.

{{js_property_attributes(0, 0, 0)}}

## Description

The `[Symbol.unscopables]` symbol (accessed via `Symbol.unscopables`) can be defined on any object to exclude property names from being exposed as lexical variables in [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with) environment bindings. Note that when using [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), `with` statements are not available, and this symbol is likely not needed.

Setting a property of the `[Symbol.unscopables]` object to `true` (or any [truthy](/en-US/docs/Glossary/Truthy) value) will make the corresponding property of the `with` scope object _unscopable_ and therefore won't be introduced to the `with` body scope. Setting a property to `false` (or any [falsy](/en-US/docs/Glossary/Falsy) value) will make it _scopable_ and thus appear as lexical scope variables.

When deciding whether `x` is unscopable, the entire prototype chain of the `[Symbol.unscopables]` property is looked up for a property called `x`. This means if you declared `[Symbol.unscopables]` as a plain object, `Object.prototype` properties like [`toString`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) would become unscopable as well, which may cause backward incompatibility for legacy code assuming those properties are normally scoped (see [an example below](#avoid_using_a_non-null-prototype_object_as_symbol.unscopables)). You are advised to make your custom `[Symbol.unscopables]` property have `null` as its prototype, like [`Array.prototype[Symbol.unscopables]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) does.

This protocol is also utilized by DOM APIs, such as [`Element.prototype.append()`](/en-US/docs/Web/API/Element/append).

## Examples

### Scoping in with statements

The following code works fine in ES5 and below. However, in ECMAScript 2015, the {{jsxref("Array.prototype.values()")}} method was introduced. That means that inside a `with` environment, "values" would now be the `Array.prototype.values()` method and not the variable outside the `with` statement.

```js
var values = [];

with (values) {
  // If [Symbol.unscopables] did not exist, values would become
  // Array.prototype.values starting with ECMAScript 2015.
  // And an error would have occurred.
  values.push("something");
}
```

The code containing `with (values)` caused some websites to malfunction in Firefox when `Array.prototype.values()` was added ([Firefox Bug 883914](https://bugzil.la/883914)). Furthermore, this implies that any future array method addition may be breaking if it implicitly changes the `with` scope. Therefore, the `[Symbol.unscopables]` symbol was introduced and implemented on `Array` as [`Array.prototype[Symbol.unscopables]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) to prevent some of the Array methods being scoped into the `with` statement.

### Unscopables in objects

You can also set `[Symbol.unscopables]` for your own objects.

```js
const obj = {
  foo: 1,
  bar: 2,
  baz: 3,
};

obj[Symbol.unscopables] = {
  // Make the object have `null` prototype to prevent
  // `Object.prototype` methods from being unscopable
  __proto__: null,
  // `foo` will be scopable
  foo: false,
  // `bar` will be unscopable
  bar: true,
  // `baz` is omitted; because `undefined` is falsy, it is also scopable (default)
};

with (obj) {
  console.log(foo); // 1
  console.log(bar); // ReferenceError: bar is not defined
  console.log(baz); // 3
}
```

### Avoid using a non-null-prototype object as `[Symbol.unscopables]`

Declaring `[Symbol.unscopables]` as a plain object without eliminating its prototype may cause subtle bugs. Consider the following code working before `[Symbol.unscopables]`:

```js
const character = {
  name: "Yoda",
  toString: function () {
    return "Use with statements, you must not";
  },
};

with (character) {
  console.log(name + ' says: "' + toString() + '"'); // Yoda says: "Use with statements, you must not"
}
```

To preserve backward compatibility, you decided to add an `[Symbol.unscopables]` property when adding more properties to `character`. You may naïvely do it like:

```js example-bad
const character = {
  name: "Yoda",
  toString: function () {
    return "Use with statements, you must not";
  },
  student: "Luke",
  [Symbol.unscopables]: {
    // Make `student` unscopable
    student: true,
  },
};
```

However, the code above now breaks:

```js
with (character) {
  console.log(name + ' says: "' + toString() + '"'); // Yoda says: "[object Undefined]"
}
```

This is because when looking up `character[Symbol.unscopables].toString`, it returns [`Object.prototype.toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString), which is a truthy value, thus making the `toString()` call in the `with()` statement reference `globalThis.toString()` instead — and because it's called without a [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this), `this` is `undefined`, making it return `[object Undefined]`.

Even when the method is not overridden by `character`, making it unscopable will change the value of `this`.

```js
const proto = {};
const obj = { __proto__: proto };

with (proto) {
  console.log(isPrototypeOf(obj)); // true; `isPrototypeOf` is scoped and `this` is `proto`
}

proto[Symbol.unscopables] = {};

with (proto) {
  console.log(isPrototypeOf(obj)); // TypeError: Cannot convert undefined or null to object
  // `isPrototypeOf` is unscoped and `this` is undefined
}
```

To fix this, always make sure `[Symbol.unscopables]` only contains properties you wish to be unscopable, without `Object.prototype` properties.

```js example-good
const character = {
  name: "Yoda",
  toString: function () {
    return "Use with statements, you must not";
  },
  student: "Luke",
  [Symbol.unscopables]: {
    // Make the object have `null` prototype to prevent
    // `Object.prototype` methods from being unscopable
    __proto__: null,
    // Make `student` unscopable
    student: true,
  },
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`Array.prototype[Symbol.unscopables]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables)
- [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with)
- [`Element.prototype.append()`](/en-US/docs/Web/API/Element/append)
