---
title: handler.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Proxy
browser-compat: javascript.builtins.Proxy.handler.setPrototypeOf
---
{{JSRef}}

The **`handler.setPrototypeOf()`** method is a trap for
{{jsxref("Object.setPrototypeOf()")}}.

{{EmbedInteractiveExample("pages/js/proxyhandler-setprototypeof.html", "taller")}}

## Syntax

```js
new Proxy(target, {
  setPrototypeOf(target, prototype) {
  }
});
```

### Parameters

The following parameters are passed to the `setPrototypeOf()` method.
`this` is bound to the handler.

- `target`
  - : The target object.
- `prototype`
  - : The object's new prototype or `null`.

### Return value

The `setPrototypeOf()` method returns `true` if the
`[[Prototype]]` was successfully changed, otherwise `false`.

## Description

The **`handler.setPrototypeOf()`** method is a trap for
{{jsxref("Object.setPrototypeOf()")}}.

### Interceptions

This trap can intercept these operations:

- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Reflect.setPrototypeOf()")}}

### Invariants

If the following invariants are violated, the proxy will throw a
{{jsxref("TypeError")}}:

- If `target` is not extensible, the `prototype`
  parameter must be the same value as
  `Object.getPrototypeOf(target)`.

## Examples

If you want to disallow setting a new prototype for your object, your handler's
`setPrototypeOf()` method can either return `false`, or it can
throw an exception.

### Approach 1: Returning false

This approach means that any mutating operation that throws an exception on failure to
mutate, must create the exception itself.

For example, {{jsxref("Object.setPrototypeOf()")}} will create and throw a
{{jsxref("TypeError")}} itself. If the mutation is performed by an operation that
_doesn't_ ordinarily throw in case of failure, such as
{{jsxref("Reflect.setPrototypeOf()")}}, no exception will be thrown.

```js
const handlerReturnsFalse = {
  setPrototypeOf(target, newProto) {
    return false;
  },
};

const newProto = {}, target = {};

const p1 = new Proxy(target, handlerReturnsFalse);
Object.setPrototypeOf(p1, newProto); // throws a TypeError
Reflect.setPrototypeOf(p1, newProto); // returns false
```

### Approach 2: Throwing an Exception

The latter approach will cause _any_ operation that attempts to mutate, to
throw. This approach is best if you want even non-throwing operations to throw on
failure, or you want to throw a custom exception value.

```js
const handlerThrows = {
  setPrototypeOf(target, newProto) {
    throw new Error('custom error');
  },
};

const newProto = {}, target = {};

const p2 = new Proxy(target, handlerThrows);
Object.setPrototypeOf(p2, newProto);  // throws new Error("custom error")
Reflect.setPrototypeOf(p2, newProto); // throws new Error("custom error")
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
- [`Proxy()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Reflect.setPrototypeOf()")}}
