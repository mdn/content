---
title: handler.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor
page-type: javascript-instance-method
browser-compat: javascript.builtins.Proxy.handler.getOwnPropertyDescriptor
---

{{JSRef}}

The **`handler.getOwnPropertyDescriptor()`** method is a trap for the `[[GetOwnProperty]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), which is used by operations such as {{jsxref("Object.getOwnPropertyDescriptor()")}}.

{{InteractiveExample("JavaScript Demo: handler.getOwnPropertyDescriptor()", "taller")}}

```js interactive-example
const monster1 = {
  eyeCount: 4,
};

const handler1 = {
  getOwnPropertyDescriptor(target, prop) {
    console.log(`called: ${prop}`);
    // Expected output: "called: eyeCount"

    return { configurable: true, enumerable: true, value: 5 };
  },
};

const proxy1 = new Proxy(monster1, handler1);

console.log(Object.getOwnPropertyDescriptor(proxy1, "eyeCount").value);
// Expected output: 5
```

## Syntax

```js-nolint
new Proxy(target, {
  getOwnPropertyDescriptor(target, property) {
  }
})
```

### Parameters

The following parameters are passed to the `getOwnPropertyDescriptor()` method. `this` is bound to the handler.

- `target`
  - : The target object.
- `property`
  - : A string or {{jsxref("Symbol")}} representing the property name.

### Return value

The `getOwnPropertyDescriptor()` method must return an object or `undefined`, representing the property descriptor. Missing attributes are normalized in the same way as {{jsxref("Object.defineProperty()")}}.

## Description

### Interceptions

This trap can intercept these operations:

- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}

Or any other operation that invokes the `[[GetOwnProperty]]` [internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods).

### Invariants

The proxy's `[[GetOwnProperty]]` internal method throws a {{jsxref("TypeError")}} if the handler definition violates one of the following invariants:

- The result must be either an {{jsxref("Object")}} or `undefined`.
- A property cannot be reported as non-existent, if it exists as a non-configurable own property of the target object. That is, if {{jsxref("Reflect.getOwnPropertyDescriptor()")}} returns `configurable: false` for the property on `target`, then the trap must not return `undefined`.
- A property cannot be reported as non-existent, if it exists as an own property of a non-extensible target object. That is, if {{jsxref("Reflect.isExtensible()")}} returns `false` for the target object, then the trap must not return `undefined`.
- A property cannot be reported as existent, if it does not exist as an own property of the target object and the target object is not extensible. That is, if {{jsxref("Reflect.isExtensible()")}} returns `false` for the target object, and {{jsxref("Reflect.getOwnPropertyDescriptor()")}} returns `undefined` for the property on `target`, then the trap must return `undefined`.
- A property cannot be reported as non-configurable, unless it exists as a non-configurable own property of the target object. That is, if {{jsxref("Reflect.getOwnPropertyDescriptor()")}} returns `undefined` or `configurable: true` for the property on `target`, then the trap must not return `configurable: false`.
- A property cannot be reported as both non-configurable and non-writable, unless it exists as a non-configurable, non-writable own property of the target object. That is, in addition to the previous invariant, if {{jsxref("Reflect.getOwnPropertyDescriptor()")}} returns `configurable: false, writable: true` for the property on `target`, then the trap must not return `configurable: false, writable: false`.
- If a property has a corresponding property on the target object, then the target object property's descriptor must be compatible with `descriptor`. That is, pretending `target` is an ordinary object, then {{jsxref("Object/defineProperty", "Object.defineProperty(target, property, resultObject)")}} must not throw an error. The `Object.defineProperty()` reference contains more information, but to summarize, when the target property is non-configurable, the following must hold:
  - `configurable`, `enumerable`, `get`, and `set` must be the same as original. `writable` must also be the original by virtue of the previous invariant.
  - the property must stay as data or accessor
  - the `value` attribute can only be changed if `writable` is `true`

## Examples

### Trapping of getOwnPropertyDescriptor

The following code traps {{jsxref("Object.getOwnPropertyDescriptor()")}}.

```js
const p = new Proxy(
  { a: 20 },
  {
    getOwnPropertyDescriptor(target, prop) {
      console.log(`called: ${prop}`);
      return { configurable: true, enumerable: true, value: 10 };
    },
  },
);

console.log(Object.getOwnPropertyDescriptor(p, "a").value);
// "called: a"
// 10
```

The following code violates an invariant.

```js example-bad
const obj = { a: 10 };
Object.preventExtensions(obj);
const p = new Proxy(obj, {
  getOwnPropertyDescriptor(target, prop) {
    return undefined;
  },
});

Object.getOwnPropertyDescriptor(p, "a"); // TypeError is thrown
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
- [`Proxy()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
