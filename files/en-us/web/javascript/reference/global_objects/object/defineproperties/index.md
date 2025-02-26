---
title: Object.defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
page-type: javascript-static-method
browser-compat: javascript.builtins.Object.defineProperties
---

{{JSRef}}

The **`Object.defineProperties()`** static method defines new or
modifies existing properties directly on an object, returning the object.

{{InteractiveExample("JavaScript Demo: Object.defineProperties()")}}

```js interactive-example
const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});

console.log(object1.property1);
// Expected output: 42
```

## Syntax

```js-nolint
Object.defineProperties(obj, props)
```

### Parameters

- `obj`
  - : The object on which to define or modify properties.
- `props`

  - : An object whose keys represent the names of properties to be defined or modified and
    whose values are objects describing those properties. Each value in `props`
    must be either a data descriptor or an accessor descriptor; it cannot be both (see
    {{jsxref("Object.defineProperty()")}} for more details).

    Data descriptors and accessor descriptors may optionally contain the following keys:

    - `configurable`
      - : `true` if and only if the type of this property descriptor may be
        changed and if the property may be deleted from the corresponding object.
        **Defaults to `false`.**
    - `enumerable`
      - : `true` if and only if this property shows up during enumeration of
        the properties on the corresponding object.
        **Defaults to `false`.**

    A data descriptor also has the following optional keys:

    - `value`
      - : The value associated with the property. Can be any valid JavaScript value
        (number, object, function, etc.).
        **Defaults to {{jsxref("undefined")}}.**
    - `writable`
      - : `true` if and only if the value associated with the property may be
        changed with an {{jsxref("Operators", "assignment operator", "assignment_operators", 1)}}.
        **Defaults to `false`.**

    An accessor descriptor also has the following optional keys:

    - `get`
      - : A function which serves as a getter for the property, or {{jsxref("undefined")}}
        if there is no getter. The function's return value will be used as the value of
        the property.
        **Defaults to {{jsxref("undefined")}}.**
    - `set`
      - : A function which serves as a setter for the property, or {{jsxref("undefined")}}
        if there is no setter. The function will receive as its only argument the new
        value being assigned to the property.
        **Defaults to {{jsxref("undefined")}}.**

    If a descriptor has neither of `value`, `writable`,
    `get` and `set` keys, it is treated as a data descriptor. If a
    descriptor has both `value` or `writable` and `get`
    or `set` keys, an exception is thrown.

### Return value

The object that was passed to the function.

## Examples

### Using Object.defineProperties

```js
const obj = {};
Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true,
  },
  property2: {
    value: "Hello",
    writable: false,
  },
  // etc. etc.
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Object.defineProperties` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.keys()")}}
- [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
