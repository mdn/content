---
title: handler.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf
page-type: javascript-instance-method
browser-compat: javascript.builtins.Proxy.handler.getPrototypeOf
---

{{JSRef}}

The **`handler.getPrototypeOf()`** method is a trap for the `[[GetPrototypeOf]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), which is used by operations such as {{jsxref("Object.getPrototypeOf()")}}.

{{EmbedInteractiveExample("pages/js/proxyhandler-getprototypeof.html", "taller")}}

## Syntax

```js-nolint
new Proxy(obj, {
  getPrototypeOf(target) {
    // …
  }
});
```

### Parameters

The following parameter is passed to the `getPrototypeOf()` method.
`this` is bound to the handler.

- `target`
  - : The target object.

### Return value

The `getPrototypeOf()` method must return an object or `null`.

## Description

### Interceptions

This trap can intercept these operations:

- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Reflect.getPrototypeOf()")}}
- [`__proto__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Operators/instanceof", "instanceof")}}

Or any other operation that invokes the `[[GetPrototypeOf]]` [internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods).

### Invariants

If the following invariants are violated, the trap throws a {{jsxref("TypeError")}} when invoked.

- `getPrototypeOf()` method must return an object or `null`.
- If `target` is not extensible,
  `Object.getPrototypeOf(proxy)` method must return the same
  value as `Object.getPrototypeOf(target)`.

## Examples

### Basic usage

```js
const obj = {};
const proto = {};
const handler = {
  getPrototypeOf(target) {
    console.log(target === obj); // true
    console.log(this === handler); // true
    return proto;
  },
};

const p = new Proxy(obj, handler);
console.log(Object.getPrototypeOf(p) === proto); // true
```

### Five ways to trigger the getPrototypeOf trap

```js
const obj = {};
const p = new Proxy(obj, {
  getPrototypeOf(target) {
    return Array.prototype;
  },
});
console.log(
  Object.getPrototypeOf(p) === Array.prototype, // true
  Reflect.getPrototypeOf(p) === Array.prototype, // true
  p.__proto__ === Array.prototype, // true
  Array.prototype.isPrototypeOf(p), // true
  p instanceof Array, // true
);
```

### Two kinds of exceptions

```js example-bad
const obj = {};
const p = new Proxy(obj, {
  getPrototypeOf(target) {
    return "foo";
  },
});
Object.getPrototypeOf(p); // TypeError: "foo" is not an object or null

const obj = Object.preventExtensions({});
const p = new Proxy(obj, {
  getPrototypeOf(target) {
    return {};
  },
});
Object.getPrototypeOf(p); // TypeError: expected same prototype value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
- [`Proxy()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Reflect.getPrototypeOf()")}}
