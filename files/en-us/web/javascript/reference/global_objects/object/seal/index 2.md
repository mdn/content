---
title: Object.seal()
slug: Web/JavaScript/Reference/Global_Objects/Object/seal
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Method
  - Object
  - Reference
browser-compat: javascript.builtins.Object.seal
---
{{JSRef}}

The **`Object.seal()`** method seals an object, preventing new
properties from being added to it and marking all existing properties as
non-configurable. Values of present properties can still be changed as long as they are
writable.

{{EmbedInteractiveExample("pages/js/object-seal.html")}}

## Syntax

```js
Object.seal(obj)
```

### Parameters

- `obj`
  - : The object which should be sealed.

### Return value

The object being sealed.

## Description

By default, objects are {{jsxref("Object.isExtensible()", "extensible", "", 1)}} (new
properties can be added to them). Sealing an object prevents new properties from being
added and marks all existing properties as non-configurable. This has the effect of
making the set of properties on the object fixed. Making all properties non-configurable
also prevents them from being converted from data properties to accessor properties and
vice versa, but it does not prevent the values of data properties from being changed.
Attempting to delete or add properties to a sealed object, or to convert a data property
to accessor or vice versa, will fail, either silently or by throwing a
{{jsxref("TypeError")}} (most commonly, although not exclusively, when in
{{jsxref("Strict_mode", "strict mode", "", 1)}} code).

The prototype chain remains untouched. However, the {{jsxref("Object.proto",
  "__proto__")}} property is sealed as well.

### Comparison to Object.freeze()

Existing properties in objects frozen with {{jsxref("Object.freeze()")}} are made
immutable. Objects sealed with `Object.seal()` can have their existing
properties changed.

## Examples

### Using Object.seal

```js
var obj = {
  prop: function() {},
  foo: 'bar'
};

// New properties may be added, existing properties
// may be changed or removed.
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

var o = Object.seal(obj);

o === obj; // true
Object.isSealed(obj); // === true

// Changing property values on a sealed object
// still works.
obj.foo = 'quux';

// But you can't convert data properties to accessors,
// or vice versa.
Object.defineProperty(obj, 'foo', {
  get: function() { return 'g'; }
}); // throws a TypeError

// Now any changes, other than to property values,
// will fail.
obj.quaxxor = 'the friendly duck';
// silently doesn't add the property
delete obj.foo;
// silently doesn't delete the property

// ...and in strict mode such attempts
// will throw TypeErrors.
function fail() {
  'use strict';
  delete obj.foo; // throws a TypeError
  obj.sparky = 'arf'; // throws a TypeError
}
fail();

// Attempted additions through
// Object.defineProperty will also throw.
Object.defineProperty(obj, 'ohai', {
  value: 17
}); // throws a TypeError
Object.defineProperty(obj, 'foo', {
  value: 'eit'
}); // changes existing property value
```

### Non-object coercion

In ES5, if the argument to this method is not an object (a primitive), then it will
cause a {{jsxref("TypeError")}}. In ES2015, a non-object argument will be treated as if
it was a sealed ordinary object by returning it.

```js
Object.seal(1);
// TypeError: 1 is not an object (ES5 code)

Object.seal(1);
// 1                             (ES2015 code)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
