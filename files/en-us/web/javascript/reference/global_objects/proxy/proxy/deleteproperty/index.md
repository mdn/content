---
title: handler.deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty
page-type: javascript-instance-method
browser-compat: javascript.builtins.Proxy.handler.deleteProperty
---

{{JSRef}}

The **`handler.deleteProperty()`** method is a trap for the `[[Delete]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), which is used by operations such as the {{jsxref("Operators/delete", "delete")}} operator.

{{InteractiveExample("JavaScript Demo: handler.deleteProperty()", "taller")}}

```js interactive-example
const monster1 = {
  texture: "scaly",
};

const handler1 = {
  deleteProperty(target, prop) {
    if (prop in target) {
      delete target[prop];
      console.log(`property removed: ${prop}`);
      // Expected output: "property removed: texture"
    }
  },
};

console.log(monster1.texture);
// Expected output: "scaly"

const proxy1 = new Proxy(monster1, handler1);
delete proxy1.texture;

console.log(monster1.texture);
// Expected output: undefined
```

## Syntax

```js-nolint
new Proxy(target, {
  deleteProperty(target, property) {
  }
})
```

### Parameters

The following parameters are passed to the `deleteProperty()` method. `this` is bound to the handler.

- `target`
  - : The target object.
- `property`
  - : A string or {{jsxref("Symbol")}} representing the property name.

### Return value

The `deleteProperty()` method must return a {{jsxref("Boolean")}} indicating whether or not the property has been successfully deleted. Other values are [coerced to booleans](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Many operations, including the {{jsxref("Operators/delete", "delete")}} operator when in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), throw a {{jsxref("TypeError")}} if the `[[Delete]]` internal method returns `false`.

## Description

### Interceptions

This trap can intercept these operations:

- The [`delete`](/en-US/docs/Web/JavaScript/Reference/Operators/delete) operator: `delete proxy[foo]` and
  `delete proxy.foo`
- {{jsxref("Reflect.deleteProperty()")}}

Or any other operation that invokes the `[[Delete]]` [internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods).

### Invariants

The proxy's `[[Delete]]` internal method throws a {{jsxref("TypeError")}} if the handler definition violates one of the following invariants:

- A property cannot be reported as deleted, if it exists as a non-configurable own property of the target object. That is, if {{jsxref("Reflect.getOwnPropertyDescriptor()")}} returns `configurable: false` for the property on `target`, then the trap must return a falsy value.
- A property cannot be reported as deleted, if it exists as an own property of the target object and the target object is non-extensible. That is, if {{jsxref("Reflect.isExtensible()")}} returns `false` on `target`, and {{jsxref("Reflect.getOwnPropertyDescriptor()")}} returns a property descriptor for the property on `target`, then the trap must return a falsy value.

## Examples

### Trapping the delete operator

The following code traps the {{jsxref("Operators/delete", "delete")}} operator.

```js
const p = new Proxy(
  {},
  {
    deleteProperty(target, prop) {
      if (!(prop in target)) {
        console.log(`property not found: ${prop}`);
        return false;
      }
      delete target[prop];
      console.log(`property removed: ${prop}`);
      return true;
    },
  },
);

p.a = 10;
console.log("a" in p); // true

const result1 = delete p.a; // "property removed: a"
console.log(result1); // true
console.log("a" in p); // false

const result2 = delete p.a; // "property not found: a"
console.log(result2); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
- [`Proxy()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Reflect.deleteProperty()")}}
