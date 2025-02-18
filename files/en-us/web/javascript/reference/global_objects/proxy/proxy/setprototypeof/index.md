---
title: handler.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf
page-type: javascript-instance-method
browser-compat: javascript.builtins.Proxy.handler.setPrototypeOf
---

{{JSRef}}

The **`handler.setPrototypeOf()`** method is a trap for the `[[SetPrototypeOf]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), which is used by operations such as {{jsxref("Object.setPrototypeOf()")}}.

{{InteractiveExample("JavaScript Demo: handler.setPrototypeOf()", "taller")}}

```js interactive-example
const handler1 = {
  setPrototypeOf(monster1, monsterProto) {
    monster1.geneticallyModified = true;
    return false;
  },
};

const monsterProto = {};
const monster1 = {
  geneticallyModified: false,
};

const proxy1 = new Proxy(monster1, handler1);
// Object.setPrototypeOf(proxy1, monsterProto); // Throws a TypeError

console.log(Reflect.setPrototypeOf(proxy1, monsterProto));
// Expected output: false

console.log(monster1.geneticallyModified);
// Expected output: true
```

## Syntax

```js-nolint
new Proxy(target, {
  setPrototypeOf(target, prototype) {
  }
})
```

### Parameters

The following parameters are passed to the `setPrototypeOf()` method. `this` is bound to the handler.

- `target`
  - : The target object.
- `prototype`
  - : The object's new prototype or `null`.

### Return value

The `setPrototypeOf()` method must return a {{jsxref("Boolean")}} indicating whether or not the prototype was successfully changed. Other values are [coerced to booleans](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Many operations, including {{jsxref("Object.setPrototypeOf()")}}, throw a {{jsxref("TypeError")}} if the `[[SetPrototypeOf]]` internal method returns `false`.

## Description

### Interceptions

This trap can intercept these operations:

- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Reflect.setPrototypeOf()")}}

Or any other operation that invokes the `[[SetPrototypeOf]]` [internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods).

### Invariants

The proxy's `[[SetPrototypeOf]]` internal method throws a {{jsxref("TypeError")}} if the handler definition violates one of the following invariants:

- If the target object is not extensible, the prototype cannot be changed. That is, if {{jsxref("Reflect.isExtensible()")}} returns `false` on `target`, and `prototype` is not the same as the result of `Reflect.getPrototypeOf(target)`, then the trap must return a falsy value.

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

const newProto = {},
  target = {};

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
    throw new Error("custom error");
  },
};

const newProto = {},
  target = {};

const p2 = new Proxy(target, handlerThrows);
Object.setPrototypeOf(p2, newProto); // throws new Error("custom error")
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
