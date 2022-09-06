---
title: handler.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Proxy
browser-compat: javascript.builtins.Proxy.handler.defineProperty
---
{{JSRef}}

The **`handler.defineProperty()`** method is a trap for
{{jsxref("Object.defineProperty()")}}.

{{EmbedInteractiveExample("pages/js/proxyhandler-defineproperty.html", "taller")}}

## Syntax

```js
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

The **`handler.defineProperty()`** method is a trap for
{{jsxref("Object.defineProperty()")}}.

### Interceptions

This trap can intercept these operations:

- [`Object.prototype.__defineGetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Reflect.defineProperty()")}}

### Invariants

If the following invariants are violated, the proxy will throw a
{{jsxref("TypeError")}}:

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
const p = new Proxy({}, {
  defineProperty(target, prop, descriptor) {
    console.log(`called: ${prop}`);
    return true;
  }
});

const desc = { configurable: true, enumerable: true, value: 10 };
Object.defineProperty(p, 'a', desc); // "called: a"
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
const p = new Proxy({}, {
  defineProperty(target, prop, descriptor) {
    console.log(descriptor);
    return Reflect.defineProperty(target, prop, descriptor);
  }
});

Object.defineProperty(p, 'name', {
  value: 'proxy',
  type: 'custom'
});  // { value: 'proxy' }
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
