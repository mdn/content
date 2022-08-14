---
title: Object.freeze()
slug: Web/JavaScript/Reference/Global_Objects/Object/freeze
tags:
  - Change
  - Changeability
  - ECMAScript 5
  - JavaScript
  - Method
  - Mutability
  - Mutable
  - Object
  - Reference
  - freeze
  - lock
browser-compat: javascript.builtins.Object.freeze
---
{{JSRef}}

The **`Object.freeze()`** method _freezes_ an object. Freezing an object [prevents extensions](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. `freeze()` returns the same object that was passed in.

Freezing an object is the highest integrity level that JavaScript provides.

{{EmbedInteractiveExample("pages/js/object-freeze.html")}}

## Syntax

```js
Object.freeze(obj)
```

### Parameters

- `obj`
  - : The object to freeze.

### Return value

The object that was passed to the function.

## Description

Freezing an object is equivalent to [preventing extensions](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) and then changing all existing [properties' descriptors](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) to `configurable: false, writable: false`. Nothing can be added to or removed from the properties set of a frozen object. Any attempt to do so will fail, either silently or by throwing a {{jsxref("TypeError")}} exception (most commonly, but not exclusively, when in {{jsxref("Strict_mode", "strict mode", "", 1)}}).

For data properties of a frozen object, their values cannot be changed since the writable and
configurable attributes are set to false. Accessor properties (getters and setters) work
the same (and still give the illusion that you are changing the value). Note that values
that are objects can still be modified, unless they are also frozen. As an object, an
array can be frozen; after doing so, its elements cannot be altered and no elements can
be added to or removed from the array.

`freeze()` returns the same object that was passed into the function. It
_does not_ create a frozen copy.

A {{jsxref("TypedArray")}} or a {{jsxref("DataView")}} with elements will cause a {{jsxref("TypeError")}},
as they are views over memory and will definitely cause other possible issues:

```js
Object.freeze(new Uint8Array(0)) // No elements
// Uint8Array []

Object.freeze(new Uint8Array(1)) // Has elements
// TypeError: Cannot freeze array buffer views with elements

Object.freeze(new DataView(new ArrayBuffer(32))) // No elements
// DataView {}

Object.freeze(new Float64Array(new ArrayBuffer(64), 63, 0)) // No elements
// Float64Array []

Object.freeze(new Float64Array(new ArrayBuffer(64), 32, 2)) // Has elements
// TypeError: Cannot freeze array buffer views with elements
```

Note that as the standard three properties (`buf.byteLength`,
`buf.byteOffset` and `buf.buffer`) are read-only (as are those of
an {{jsxref("ArrayBuffer")}} or {{jsxref("SharedArrayBuffer")}}), there is no reason for
attempting to freeze these properties.

Unlike {{jsxref("Object.seal()")}}, existing properties in objects frozen with `Object.freeze()` are made immutable and data properties cannot be re-assigned.

## Examples

### Freezing objects

```js
const obj = {
  prop() {},
  foo: 'bar'
};

// Before freezing: new properties may be added,
// and existing properties may be changed or removed
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

// Freeze.
const o = Object.freeze(obj);

// The return value is just the same object we passed in.
o === obj; // true

// The object has become frozen.
Object.isFrozen(obj); // === true

// Now any changes will fail
obj.foo = 'quux'; // silently does nothing
// silently doesn't add the property
obj.quaxxor = 'the friendly duck';

// In strict mode such attempts will throw TypeErrors
function fail() {
  'use strict';
  obj.foo = 'sparky'; // throws a TypeError
  delete obj.foo; // throws a TypeError
  delete obj.quaxxor; // returns true since attribute 'quaxxor' was never added
  obj.sparky = 'arf'; // throws a TypeError
}

fail();

// Attempted changes through Object.defineProperty;
// both statements below throw a TypeError.
Object.defineProperty(obj, 'ohai', { value: 17 });
Object.defineProperty(obj, 'foo', { value: 'eit' });

// It's also impossible to change the prototype
// both statements below will throw a TypeError.
Object.setPrototypeOf(obj, { x: 20 })
obj.__proto__ = { x: 20 }
```

### Freezing arrays

```js
const a = [0];
Object.freeze(a); // The array cannot be modified now.

a[0] = 1; // fails silently

// In strict mode such attempt will throw a TypeError
function fail() {
  "use strict";
  a[0] = 1;
}

fail();

// Attempted to push
a.push(2); // throws a TypeError
```

The object being frozen is _immutable_. However, it is not necessarily
_constant_. The following example shows that a frozen object is not constant
(freeze is shallow).

```js
const obj1 = {
  internal: {}
};

Object.freeze(obj1);
obj1.internal.a = 'aValue';

obj1.internal.a // 'aValue'
```

To be a constant object, the entire reference graph (direct and indirect references to
other objects) must reference only immutable frozen objects. The object being frozen is
said to be immutable because the entire object _state_ (values and references to
other objects) within the whole object is fixed. Note that strings, numbers, and
booleans are always immutable and that Functions and Arrays are objects.

#### What is "shallow freeze"?

The result of calling `Object.freeze(object)` only applies to the
immediate properties of `object` itself and will prevent future property
addition, removal or value re-assignment operations _only_ on
`object`. If the value of those properties are objects themselves, those
objects are not frozen and may be the target of property addition, removal or value
re-assignment operations.

```js
const employee = {
  name: "Mayank",
  designation: "Developer",
  address: {
    street: "Rohini",
    city: "Delhi"
  }
};

Object.freeze(employee);

employee.name = "Dummy"; // fails silently in non-strict mode
employee.address.city = "Noida"; // attributes of child object can be modified

console.log(employee.address.city) // Output: "Noida"
```

To make an object immutable, recursively freeze each property which is of type object
(deep freeze). Use the pattern on a case-by-case basis based on your design when you
know the object contains no [cycles](<https://en.wikipedia.org/wiki/Cycle_(graph_theory)>) in the reference
graph, otherwise an endless loop will be triggered. An enhancement to
`deepFreeze()` would be to have an internal function that receives a path
(e.g. an Array) argument so you can suppress calling `deepFreeze()`
recursively when an object is in the process of being made immutable. You still run a
risk of freezing an object that shouldn't be frozen, such as \[window].

```js
function deepFreeze(object) {
  // Retrieve the property names defined on object
  const propNames = Object.getOwnPropertyNames(object);

  // Freeze properties before freezing self

  for (const name of propNames) {
    const value = object[name];

    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}

const obj2 = {
  internal: {
    a: null
  }
};

deepFreeze(obj2);

obj2.internal.a = 'anotherValue'; // fails silently in non-strict mode
obj2.internal.a; // null
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
