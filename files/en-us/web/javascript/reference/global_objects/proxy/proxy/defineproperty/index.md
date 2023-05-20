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
});
```

### Parameters

The following parameters are passed to the `defineProperty()` method.
`this` is bound to the handler.

- `target`
  - : The target object.
- `property`
  - : The name or {{jsxref("Symbol")}} of the property whose description is to be
    retrieved.
- `descriptor`
  - : The descriptor for the property being defined or modified.

### Return value

The `defineProperty()` method must return a {{jsxref("Boolean")}} indicating
whether or not the property has been successfully defined.

## Description

### Interceptions

This trap can intercept these operations:

- {{jsxref("Object.defineProperty()")}}, {{jsxref("Object.defineProperties()")}}
- {{jsxref("Reflect.defineProperty()")}}

Or any other operation that invokes the `[[DefineOwnProperty]]` [internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods).

### Invariants

If the following invariants are violated, the trap throws a {{jsxref("TypeError")}} when invoked.

- A property cannot be added, if the target object is not extensible.
- A property cannot be added as or modified to be non-configurable, if it does not
  exists as a non-configurable own property of the target object.
- A property may not be non-configurable, if a corresponding configurable property of
  the target object exists.
- If a property has a corresponding target object property then
  `Object.defineProperty(target, prop, descriptor)`
  will not throw an exception.
- In strict mode, a `false` return value from the
  `defineProperty()` handler will throw a {{jsxref("TypeError")}} exception.

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
