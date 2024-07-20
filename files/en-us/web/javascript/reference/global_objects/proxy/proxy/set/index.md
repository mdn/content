---
title: handler.set()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
page-type: javascript-instance-method
browser-compat: javascript.builtins.Proxy.handler.set
---

{{JSRef}}

The **`handler.set()`** method is a trap for the `[[Set]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), which is used by operations such as using [property accessors](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors) to set a property's value.

{{EmbedInteractiveExample("pages/js/proxyhandler-set.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  set(target, property, value, receiver) {
  }
})
```

### Parameters

The following parameters are passed to the `set()` method. `this` is bound to the handler.

- `target`
  - : The target object.
- `property`
  - : A string or {{jsxref("Symbol")}} representing the property name.
- `value`
  - : The new value of the property to set.
- `receiver`
  - : The `this` value for setters; see {{jsxref("Reflect.set()")}}. This is usually either the proxy itself or an object that inherits from the proxy.

### Return value

The `set()` method must return a {{jsxref("Boolean")}} indicating whether or not the assignment succeeded. Other values are [coerced to booleans](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Many operations, including using property accessors in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), throw a {{jsxref("TypeError")}} if the `[[Set]]` internal method returns `false`.

## Description

### Interceptions

This trap can intercept these operations:

- Property assignment: `proxy[foo] = bar` and `proxy.foo = bar`
- {{jsxref("Reflect.set()")}}

Or any other operation that invokes the `[[Set]]` [internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods).

### Invariants

The proxy's `[[Set]]` internal method throws a {{jsxref("TypeError")}} if the handler definition violates one of the following invariants:

- Cannot change the value of a property to be different from the value of the corresponding target object property, if the corresponding target object property is a non-writable, non-configurable own data property. That is, if {{jsxref("Reflect.getOwnPropertyDescriptor()")}} returns `configurable: false, writable: false` for the property on `target`, and `value` is different from the `value` attribute in the `target`'s property descriptor, then the trap must return a falsy value.
- Cannot set the value of a property if the corresponding target object property is a non-configurable own accessor property that has an undefined setter. That is, if {{jsxref("Reflect.getOwnPropertyDescriptor()")}} returns `configurable: false, set: undefined` for the property on `target`, then the trap must return a falsy value.

## Examples

### Trap setting of a property value

The following code traps setting a property value.

```js
const p = new Proxy(
  {},
  {
    set(target, prop, value, receiver) {
      target[prop] = value;
      console.log(`property set: ${prop} = ${value}`);
      return true;
    },
  },
);

console.log("a" in p); // false

p.a = 10; // "property set: a = 10"
console.log("a" in p); // true
console.log(p.a); // 10
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
- [`Proxy()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Reflect.set()")}}
