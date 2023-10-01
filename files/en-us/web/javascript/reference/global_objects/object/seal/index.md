---
title: Object.seal()
slug: Web/JavaScript/Reference/Global_Objects/Object/seal
page-type: javascript-static-method
browser-compat: javascript.builtins.Object.seal
---

{{JSRef}}

The **`Object.seal()`** static method _seals_ an object. Sealing an object [prevents extensions](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) and makes existing properties non-configurable. A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed, their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned. Values of existing properties can still be changed as long as they are writable. `seal()` returns the same object that was passed in.

{{EmbedInteractiveExample("pages/js/object-seal.html")}}

## Syntax

```js-nolint
Object.seal(obj)
```

### Parameters

- `obj`
  - : The object which should be sealed.

### Return value

The object being sealed.

## Description

Sealing an object is equivalent to [preventing extensions](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) and then changing all existing [properties' descriptors](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) to `configurable: false`. This has the effect of making the set of properties on the object fixed. Making all properties non-configurable
also prevents them from being converted from data properties to accessor properties and
vice versa, but it does not prevent the values of data properties from being changed.
Attempting to delete or add properties to a sealed object, or to convert a data property
to accessor or vice versa, will fail, either silently or by throwing a
{{jsxref("TypeError")}} (most commonly, although not exclusively, when in
{{jsxref("Strict_mode", "strict mode", "", 1)}} code).

The prototype chain remains untouched. However, due to the effect of [preventing extensions](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions), the `[[Prototype]]` cannot be reassigned.

Unlike {{jsxref("Object.freeze()")}}, objects sealed with `Object.seal()` may have their existing
properties changed, as long as they are writable.

## Examples

### Using Object.seal

```js
const obj = {
  prop() {},
  foo: "bar",
};

// New properties may be added, existing properties
// may be changed or removed.
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;

const o = Object.seal(obj);

o === obj; // true
Object.isSealed(obj); // true

// Changing property values on a sealed object
// still works.
obj.foo = "quux";

// But you can't convert data properties to accessors,
// or vice versa.
Object.defineProperty(obj, "foo", {
  get() {
    return "g";
  },
}); // throws a TypeError

// Now any changes, other than to property values,
// will fail.
obj.quaxxor = "the friendly duck";
// silently doesn't add the property
delete obj.foo;
// silently doesn't delete the property

// ...and in strict mode such attempts
// will throw TypeErrors.
function fail() {
  "use strict";
  delete obj.foo; // throws a TypeError
  obj.sparky = "arf"; // throws a TypeError
}
fail();

// Attempted additions through
// Object.defineProperty will also throw.
Object.defineProperty(obj, "ohai", {
  value: 17,
}); // throws a TypeError
Object.defineProperty(obj, "foo", {
  value: "eit",
}); // changes existing property value
```

### Non-object argument

In ES5, if the argument to this method is not an object (a primitive), then it will cause a {{jsxref("TypeError")}}. In ES2015, a non-object argument will be returned as-is without any errors, since primitives are already, by definition, immutable.

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
