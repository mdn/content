---
title: handler.get()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Proxy
browser-compat: javascript.builtins.Proxy.handler.get
---
{{JSRef}}

The **`handler.get()`** method is a trap for getting a property
value.

{{EmbedInteractiveExample("pages/js/proxyhandler-get.html", "taller")}}

## Syntax

```js
new Proxy(target, {
  get(target, property, receiver) {
  }
});
```

### Parameters

The following parameters are passed to the `get()` method. `this`
is bound to the handler.

- `target`
  - : The target object.
- `property`
  - : The name or {{jsxref("Symbol")}}  of the property to get.
- `receiver`
  - : Either the proxy or an object that inherits from the proxy.

### Return value

The `get()` method can return any value.

## Description

The **`handler.get()`** method is a trap for getting a property
value.

### Interceptions

This trap can intercept these operations:

- Property access: `proxy[foo]`and
  `proxy.bar`
- Inherited property access:
  `Object.create(proxy)[foo]`
- {{jsxref("Reflect.get()")}}

### Invariants

If the following invariants are violated, the proxy will throw a
{{jsxref("TypeError")}}:

- The value reported for a property must be the same as the value of the corresponding
  target object property if the target object property is a non-writable,
  non-configurable own data property.
- The value reported for a property must be undefined if the corresponding target
  object property is a non-configurable own accessor property that has
  `undefined` as its `[[Get]]` attribute.

## Examples

### Trap for getting a property value

The following code traps getting a property value.

```js
const p = new Proxy({}, {
  get(target, property, receiver) {
    console.log(`called: ${property}`);
    return 10;
  },
});

console.log(p.a); // "called: a"
                  // 10
```

The following code violates an invariant.

```js
const obj = {};
Object.defineProperty(obj, 'a', {
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
