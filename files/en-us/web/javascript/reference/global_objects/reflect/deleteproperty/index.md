---
title: Reflect.deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty
page-type: javascript-static-method
browser-compat: javascript.builtins.Reflect.deleteProperty
---

{{JSRef}}

The **`Reflect.deleteProperty()`** static method is like the {{jsxref("Operators/delete", "delete")}} operator, but as a function. It deletes a property from an object.

{{InteractiveExample("JavaScript Demo: Reflect.deleteProperty()", "taller")}}

```js interactive-example
const object1 = {
  property1: 42,
};

Reflect.deleteProperty(object1, "property1");

console.log(object1.property1);
// Expected output: undefined

const array1 = [1, 2, 3, 4, 5];
Reflect.deleteProperty(array1, "3");

console.log(array1);
// Expected output: Array [1, 2, 3, undefined, 5]
```

## Syntax

```js-nolint
Reflect.deleteProperty(target, propertyKey)
```

### Parameters

- `target`
  - : The target object on which to delete the property.
- `propertyKey`
  - : The name of the property to be deleted.

### Return value

A boolean indicating whether or not the property was successfully deleted.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `target` is not an object.

## Description

`Reflect.deleteProperty()` provides the reflective semantic of the [`delete`](/en-US/docs/Web/JavaScript/Reference/Operators/delete) operator. That is, `Reflect.deleteProperty(target, propertyKey)` is semantically equivalent to:

```js
delete target.propertyKey;
```

At the very low level, deleting a property returns a boolean (as is the case with [the proxy handler](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)). `Reflect.deleteProperty()` directly returns the status, while `delete` would throw a {{jsxref("TypeError")}} in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) if the status is `false`. In non-strict mode, `delete` and `Reflect.deleteProperty()` have the same behavior.

`Reflect.deleteProperty()` invokes the `[[Delete]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) of `target`.

## Examples

### Using Reflect.deleteProperty()

```js
const obj = { x: 1, y: 2 };
Reflect.deleteProperty(obj, "x"); // true
console.log(obj); // { y: 2 }

const arr = [1, 2, 3, 4, 5];
Reflect.deleteProperty(arr, "3"); // true
console.log(arr); // [1, 2, 3, undefined, 5]

// Returns true if no such property exists
Reflect.deleteProperty({}, "foo"); // true

// Returns false if a property is unconfigurable
Reflect.deleteProperty(Object.freeze({ foo: 1 }), "foo"); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Reflect.deleteProperty` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- [`delete`](/en-US/docs/Web/JavaScript/Reference/Operators/delete)
- [`handler.deleteProperty()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)
