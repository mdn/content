---
title: handler.get()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get
page-type: javascript-instance-method
browser-compat: javascript.builtins.Proxy.handler.get
---

{{JSRef}}

The **`handler.get()`** method is a trap for the `[[Get]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), which is used by operations such as [property accessors](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors).

{{InteractiveExample("JavaScript Demo: handler.get()", "taller")}}

```js interactive-example
const monster1 = {
  secret: "easily scared",
  eyeCount: 4,
};

const handler1 = {
  get: function (target, prop, receiver) {
    if (prop === "secret") {
      return `${target.secret.substring(0, 4)} ... shhhh!`;
    }
    return Reflect.get(...arguments);
  },
};

const proxy1 = new Proxy(monster1, handler1);

console.log(proxy1.eyeCount);
// Expected output: 4

console.log(proxy1.secret);
// Expected output: "easi ... shhhh!"
```

## Syntax

```js-nolint
new Proxy(target, {
  get(target, property, receiver) {
  }
})
```

### Parameters

The following parameters are passed to the `get()` method. `this` is bound to the handler.

- `target`
  - : The target object.
- `property`
  - : A string or {{jsxref("Symbol")}} representing the property name.
- `receiver`
  - : The `this` value for getters; see {{jsxref("Reflect.get()")}}. This is usually either the proxy itself or an object that inherits from the proxy.

### Return value

The `get()` method can return any value, representing the property value.

## Description

### Interceptions

This trap can intercept these operations:

- Property access: `proxy[foo]` and `proxy.bar`
- {{jsxref("Reflect.get()")}}

Or any other operation that invokes the `[[Get]]` [internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods).

### Invariants

The proxy's `[[Get]]` internal method throws a {{jsxref("TypeError")}} if the handler definition violates one of the following invariants:

- The value reported for a property must be the same as the value of the corresponding target object property, if the target object property is a non-writable, non-configurable own data property. That is, if {{jsxref("Reflect.getOwnPropertyDescriptor()")}} returns `configurable: false, writable: false` for the property on `target`, then the trap must return the same value as the `value` attribute in the `target`'s property descriptor.
- The value reported for a property must be `undefined`, if the corresponding target object property is a non-configurable own accessor property that has an undefined getter. That is, if {{jsxref("Reflect.getOwnPropertyDescriptor()")}} returns `configurable: false, get: undefined` for the property on `target`, then the trap must return `undefined`.

## Examples

### Trap for getting a property value

The following code traps getting a property value.

```js
const p = new Proxy(
  {},
  {
    get(target, property, receiver) {
      console.log(`called: ${property}`);
      return 10;
    },
  },
);

console.log(p.a);
// "called: a"
// 10
```

The following code violates an invariant.

```js
const obj = {};
Object.defineProperty(obj, "a", {
  configurable: false,
  enumerable: false,
  value: 10,
  writable: false,
});

const p = new Proxy(obj, {
  get(target, property) {
    return 20;
  },
});

p.a; // TypeError is thrown
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
- [`Proxy()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Reflect.get()")}}
