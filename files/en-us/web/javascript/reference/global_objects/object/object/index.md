---
title: Object() constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/Object
page-type: javascript-constructor
browser-compat: javascript.builtins.Object.Object
---

{{JSRef}}

The **`Object()`** constructor turns the input into an object. Its behavior depends on the input's type.

## Syntax

```js-nolint
new Object()
new Object(value)

Object()
Object(value)
```

> **Note:** `Object()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new), but sometimes with different effects. See [Return value](#return_value).

### Parameters

- `value` {{optional_inline}}
  - : Any value.

### Return value

When the `Object()` constructor itself is called or constructed, its return value is an object:

- If the value is [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) or {{jsxref("undefined")}}, it creates and returns an empty object.
- If the value is an object already, it returns the value.
- Otherwise, it returns an object of a type that corresponds to the given value. For example, passing a {{jsxref("BigInt")}} primitive returns a `BigInt` wrapper object.

When `Object()` is implicitly called via [`super()`](/en-US/docs/Web/JavaScript/Reference/Operators/super) in the constructor of a class that [extends `Object`](/en-US/docs/Web/JavaScript/Reference/Classes/extends#extending_object), it initializes a new object with `new.target.prototype` as its prototype. Any value passed to `super()` is ignored — for example, even if you pass a number, the `this` value inside the constructor does not become a {{jsxref("Number")}} instance.

## Examples

### Creating a new Object

```js
const o = new Object();
o.foo = 42;

console.log(o);
// { foo: 42 }
```

### Using Object given undefined and null types

The following examples store an empty `Object` object in `o`:

```js
const o = new Object();
```

```js
const o = new Object(undefined);
```

```js
const o = new Object(null);
```

### Obtaining wrapper objects for BigInt and Symbol

The {{jsxref("BigInt/BigInt", "BigInt()")}} and {{jsxref("Symbol/Symbol", "Symbol()")}} constructors throw an error when called with `new`, to prevent the common mistake of creating a wrapper object instead of the primitive value. The only way to create a wrapper object for these types is to call `Object()` with them:

```js
const numberObj = new Number(1);
console.log(typeof numberObj); // "object"

const bigintObj = Object(1n);
console.log(typeof bigintObj); // "object"

const symbolObj = Object(Symbol("foo"));
console.log(typeof symbolObj); // "object"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Object initializer](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
