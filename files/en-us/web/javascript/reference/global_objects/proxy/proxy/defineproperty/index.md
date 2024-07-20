---
title: handler.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty
page-type: javascript-instance-method
browser-compat: javascript.builtins.Proxy.handler.defineProperty
---

{{JSRef}}

The **`handler.defineProperty()`** method is a trap for the `[[DefineOwnProperty]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), which is used by operations such as {{jsxref("Object.defineProperty()")}}.

{{EmbedInteractiveExample("pages/js/proxyhandler-defineproperty.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  defineProperty(target, property, descriptor) {
  }
})
```

### Parameters

The following parameters are passed to the `defineProperty()` method. `this` is bound to the handler.

- `target`
  - : The target object.
- `property`
  - : A string or {{jsxref("Symbol")}} representing the property name.
- `descriptor`
  - : The descriptor for the property being defined or modified.

### Return value

The `defineProperty()` method must return a {{jsxref("Boolean")}} indicating whether or not the property has been successfully defined. Other values are [coerced to booleans](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Many operations, including {{jsxref("Object.defineProperty()")}} and {{jsxref("Object.defineProperties()")}}, throw a {{jsxref("TypeError")}} if the `[[DefineOwnProperty]]` internal method returns `false`.

## Description

### Interceptions

This trap can intercept these operations:

- {{jsxref("Object.defineProperty()")}}, {{jsxref("Object.defineProperties()")}}
- {{jsxref("Reflect.defineProperty()")}}

Or any other operation that invokes the `[[DefineOwnProperty]]` [internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods).

### Invariants

The proxy's `[[DefineOwnProperty]]` internal method throws a {{jsxref("TypeError")}} if the handler definition violates one of the following invariants:

- A property cannot be added, if the target object is not extensible. That is, if {{jsxref("Reflect.isExtensible()")}} returns `false` on `target`, and {{jsxref("Reflect.getOwnPropertyDescriptor()")}} returns `undefined` for the property on `target`, then the trap must return a falsy value.
- A property cannot be non-configurable, unless there exists a corresponding non-configurable own property of the target object. That is, if {{jsxref("Reflect.getOwnPropertyDescriptor()")}} returns `undefined` or `configurable: true` for the property on `target`, and `descriptor.configurable` is `false`, then the trap must return a falsy value.
- A non-configurable property cannot be non-writable, unless there exists a corresponding non-configurable, non-writable own property of the target object. That is, if {{jsxref("Reflect.getOwnPropertyDescriptor()")}} returns `configurable: false, writable: true` for the property on `target`, and `descriptor.writable` is `false`, then the trap must return a falsy value.
- If a property has a corresponding property on the target object, then the target object property's descriptor must be compatible with `descriptor`. That is, pretending `target` is an ordinary object, and {{jsxref("Object/defineProperty", "Object.defineProperty(target, property, descriptor)")}} would throw an error, then the trap must return a falsy value. The `Object.defineProperty()` reference contains more information, but to summarize, when the target property is non-configurable, the following must hold:
  - `configurable`, `enumerable`, `get`, and `set` cannot be changed
  - the property cannot be switched between data and accessor
  - the `writable` attribute can only be changed from `true` to `false`
  - the `value` attribute can only be changed if `writable` is `true`

## Examples

### Trapping of defineProperty

The following code traps {{jsxref("Object.defineProperty()")}}.

```js
const p = new Proxy(
  {},
  {
    defineProperty(target, prop, descriptor) {
      console.log(`called: ${prop}`);
      return true;
    },
  },
);

const desc = { configurable: true, enumerable: true, value: 10 };
Object.defineProperty(p, "a", desc); // "called: a"
```

When calling {{jsxref("Object.defineProperty()")}} or
{{jsxref("Reflect.defineProperty()")}}, the `descriptor` passed to
`defineProperty()` trap has one restriction—only following properties are
usable (non-standard properties will be ignored):

- `enumerable`
- `configurable`
- `writable`
- `value`
- `get`
- `set`

```js
const p = new Proxy(
  {},
  {
    defineProperty(target, prop, descriptor) {
      console.log(descriptor);
      return Reflect.defineProperty(target, prop, descriptor);
    },
  },
);

Object.defineProperty(p, "name", {
  value: "proxy",
  type: "custom",
}); // { value: 'proxy' }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
- [`Proxy()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Reflect.defineProperty()")}}
