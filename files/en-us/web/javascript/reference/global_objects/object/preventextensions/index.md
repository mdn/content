---
title: Object.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
page-type: javascript-static-method
browser-compat: javascript.builtins.Object.preventExtensions
---

{{JSRef}}

The **`Object.preventExtensions()`** static method prevents new
properties from ever being added to an object (i.e. prevents future extensions to the
object). It also prevents the object's prototype from being re-assigned.

{{InteractiveExample("JavaScript Demo: Object.preventExtensions()")}}

```js interactive-example
const object1 = {};

Object.preventExtensions(object1);

try {
  Object.defineProperty(object1, "property1", {
    value: 42,
  });
} catch (e) {
  console.log(e);
  // Expected output: TypeError: Cannot define property property1, object is not extensible
}
```

## Syntax

```js-nolint
Object.preventExtensions(obj)
```

### Parameters

- `obj`
  - : The object which should be made non-extensible.

### Return value

The object being made non-extensible.

## Description

An object is extensible if new properties can be added to it.
`Object.preventExtensions()` marks an object as no longer extensible, so that
it will never have properties beyond the ones it had at the time it was marked as
non-extensible. Note that the properties of a non-extensible object, in general, may
still be _deleted_. Attempting to add new properties to a non-extensible object
will fail, either silently or, in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), throwing a {{jsxref("TypeError")}}.

Unlike [`Object.seal()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) and [`Object.freeze()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze), `Object.preventExtensions()` invokes an intrinsic JavaScript behavior and cannot be replaced with a composition of several other operations. It also has its `Reflect` counterpart (which only exists for intrinsic operations), [`Reflect.preventExtensions()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions).

`Object.preventExtensions()` only prevents addition of own properties. Properties can still be added to the object prototype.

This method makes the `[[Prototype]]` of the target immutable; any `[[Prototype]]` re-assignment will throw a `TypeError`. This behavior is specific to the internal `[[Prototype]]` property; other properties of the target object will remain mutable.

There is no way to make an object extensible again once it has been made non-extensible.

## Examples

### Using Object.preventExtensions

```js
// Object.preventExtensions returns the object
// being made non-extensible.
const obj = {};
const obj2 = Object.preventExtensions(obj);
obj === obj2; // true

// Objects are extensible by default.
const empty = {};
Object.isExtensible(empty); // true

// They can be made un-extensible
Object.preventExtensions(empty);
Object.isExtensible(empty); // false

// Object.defineProperty throws when adding
// a new property to a non-extensible object.
const nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, "new", {
  value: 8675309,
}); // throws a TypeError

// In strict mode, attempting to add new properties
// to a non-extensible object throws a TypeError.
function fail() {
  "use strict";
  // throws a TypeError
  nonExtensible.newProperty = "FAIL";
}
fail();
```

A non-extensible object's prototype is immutable:

```js
const fixed = Object.preventExtensions({});
// throws a 'TypeError'.
fixed.__proto__ = { oh: "hai" };
```

### Non-object argument

In ES5, if the argument to this method is not an object (a primitive), then it will cause a {{jsxref("TypeError")}}. In ES2015, a non-object argument will be returned as-is without any errors, since primitives are already, by definition, immutable.

```js
Object.preventExtensions(1);
// TypeError: 1 is not an object (ES5 code)

Object.preventExtensions(1);
// 1                             (ES2015 code)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Reflect.preventExtensions()")}}
