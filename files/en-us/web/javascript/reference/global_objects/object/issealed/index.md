---
title: Object.isSealed()
slug: Web/JavaScript/Reference/Global_Objects/Object/isSealed
page-type: javascript-static-method
browser-compat: javascript.builtins.Object.isSealed
---

{{JSRef}}

The **`Object.isSealed()`** static method determines if an object is [sealed](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal).

{{InteractiveExample("JavaScript Demo: Object.isSealed()")}}

```js interactive-example
const object1 = {
  property1: 42,
};

console.log(Object.isSealed(object1));
// Expected output: false

Object.seal(object1);

console.log(Object.isSealed(object1));
// Expected output: true
```

## Syntax

```js-nolint
Object.isSealed(obj)
```

### Parameters

- `obj`
  - : The object which should be checked.

### Return value

A {{jsxref("Boolean")}} indicating whether or not the given object is sealed.

## Description

Returns `true` if the object is sealed, otherwise `false`. An
object is sealed if it is not {{jsxref("Object/isExtensible", "extensible", "", 1)}} and
if all its properties are non-configurable and therefore not removable (but not
necessarily non-writable).

## Examples

### Using Object.isSealed

```js
// Objects aren't sealed by default.
const empty = {};
Object.isSealed(empty); // false

// If you make an empty object non-extensible,
// it is vacuously sealed.
Object.preventExtensions(empty);
Object.isSealed(empty); // true

// The same is not true of a non-empty object,
// unless its properties are all non-configurable.
const hasProp = { fee: "fie foe fum" };
Object.preventExtensions(hasProp);
Object.isSealed(hasProp); // false

// But make them all non-configurable
// and the object becomes sealed.
Object.defineProperty(hasProp, "fee", {
  configurable: false,
});
Object.isSealed(hasProp); // true

// The easiest way to seal an object, of course,
// is Object.seal.
const sealed = {};
Object.seal(sealed);
Object.isSealed(sealed); // true

// A sealed object is, by definition, non-extensible.
Object.isExtensible(sealed); // false

// A sealed object might be frozen,
// but it doesn't have to be.
Object.isFrozen(sealed); // true
// (all properties also non-writable)

const s2 = Object.seal({ p: 3 });
Object.isFrozen(s2); // false
// ('p' is still writable)

const s3 = Object.seal({
  get p() {
    return 0;
  },
});
Object.isFrozen(s3); // true
// (only configurability matters for accessor properties)
```

### Non-object argument

In ES5, if the argument to this method is not an object (a primitive), then it will cause a {{jsxref("TypeError")}}. In ES2015, it will return `true` without any errors if a non-object argument is passed, since primitives are, by definition, immutable.

```js
Object.isSealed(1);
// TypeError: 1 is not an object (ES5 code)

Object.isSealed(1);
// true                          (ES2015 code)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.seal()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
