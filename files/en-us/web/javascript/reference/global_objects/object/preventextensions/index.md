---
title: Object.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Method
  - Object
browser-compat: javascript.builtins.Object.preventExtensions
---
{{JSRef}}

The **`Object.preventExtensions()`** method prevents new
properties from ever being added to an object (i.e. prevents future extensions to the
object).

{{EmbedInteractiveExample("pages/js/object-preventextensions.html")}}

## Syntax

```js
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
will fail, either silently or by throwing a {{jsxref("TypeError")}} (most commonly, but
not exclusively, when in {{jsxref("Functions_and_function_scope/Strict_mode", "strict
  mode", "", 1)}}).

`Object.preventExtensions()` only prevents addition of own properties.
Properties can still be added to the object prototype.

This method makes the `[[prototype]]` of the target immutable; any
`[[prototype]]` re-assignment will throw a `TypeError`. This
behavior is specific to the internal `[[prototype]]` property, other
properties of the target object will remain mutable.

There is no way to make an object extensible again once it has been made
non-extensible.

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
Object.isExtensible(empty); // === true

// ...but that can be changed.
Object.preventExtensions(empty);
Object.isExtensible(empty); // === false

// Object.defineProperty throws when adding
// a new property to a non-extensible object.
const nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, 'new', {
  value: 8675309
}); // throws a TypeError

// In strict mode, attempting to add new properties
// to a non-extensible object throws a TypeError.
function fail() {
  'use strict';
  // throws a TypeError
  nonExtensible.newProperty = 'FAIL';
}
fail();
```

A non-extensible object's prototype is immutable:

```js
const fixed = Object.preventExtensions({});
// throws a 'TypeError'.
fixed.__proto__ = { oh: 'hai' };
```

### Non-object coercion

In ES5, if the argument to this method is not an object (a primitive), then it will
cause a {{jsxref("TypeError")}}. In ES2015, a non-object argument will be treated as if
it was a non-extensible ordinary object, return it.

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
