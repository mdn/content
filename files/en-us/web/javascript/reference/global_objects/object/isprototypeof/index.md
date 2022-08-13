---
title: Object.prototype.isPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
tags:
  - JavaScript
  - Method
  - Object
  - Prototype
  - Reference
  - isPrototype
browser-compat: javascript.builtins.Object.isPrototypeOf
---
{{JSRef}}

The **`isPrototypeOf()`** method checks if an object exists in
another object's prototype chain.

{{EmbedInteractiveExample("pages/js/object-prototype-isprototypeof.html")}}

> **Note:** `isPrototypeOf()` differs from the {{jsxref("Operators/instanceof",
    "instanceof")}} operator. In the expression
> `object instanceof AFunction`, the `object` prototype chain is
> checked against `AFunction.prototype`, not against `AFunction`
> itself.

## Syntax

```js
isPrototypeOf(object)
```

### Parameters

- `object`
  - : The object whose prototype chain will be searched.

### Return value

A {{jsxref("Boolean")}} indicating whether the calling object lies in the prototype
chain of the specified object.

### Errors thrown

- {{jsxref("TypeError")}}
  - : A {{jsxref("TypeError")}} is thrown if `prototypeObj` is
    undefined or null.

## Description

The `isPrototypeOf()` method allows you to check whether or not an object
exists within another object's prototype chain.

## Examples

### Using isPrototypeOf

This example demonstrates that `Baz.prototype`,
`Bar.prototype`, `Foo.prototype` and `Object.prototype`
exist in the prototype chain for object `baz`:

```js
function Foo() {}
function Bar() {}
function Baz() {}

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

const foo = new Foo();
const bar = new Bar();
const baz = new Baz();

// prototype chains:
// foo: Foo <- Object
// bar: Bar <- Foo <- Object
// baz: Baz <- Bar <- Foo <- Object
console.log(Baz.prototype.isPrototypeOf(baz));    // true
console.log(Baz.prototype.isPrototypeOf(bar));    // false
console.log(Baz.prototype.isPrototypeOf(foo));    // false
console.log(Bar.prototype.isPrototypeOf(baz));    // true
console.log(Bar.prototype.isPrototypeOf(foo));    // false
console.log(Foo.prototype.isPrototypeOf(baz));    // true
console.log(Foo.prototype.isPrototypeOf(bar));    // true
console.log(Object.prototype.isPrototypeOf(baz)); // true
```

The `isPrototypeOf()` method — along with the {{jsxref("Operators/instanceof", "instanceof")}} operator — comes in particularly handy if you have code that can only function when dealing with objects descended from a specific prototype chain; e.g., to guarantee that certain methods or properties will be present on that object.

For example, to execute some code that's only safe to run if a `baz` object has `Foo.prototype` in its prototype chain, you can do this:

```js
if (Foo.prototype.isPrototypeOf(baz)) {
  // do something safe
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Object/proto")}}
