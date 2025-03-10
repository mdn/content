---
title: handler.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/isExtensible
page-type: javascript-instance-method
browser-compat: javascript.builtins.Proxy.handler.isExtensible
---

{{JSRef}}

The **`handler.isExtensible()`** method is a trap for the `[[IsExtensible]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), which is used by operations such as {{jsxref("Object.isExtensible()")}}.

{{InteractiveExample("JavaScript Demo: handler.isExtensible()", "taller")}}

```js interactive-example
const monster1 = {
  canEvolve: true,
};

const handler1 = {
  isExtensible(target) {
    return Reflect.isExtensible(target);
  },
  preventExtensions(target) {
    target.canEvolve = false;
    return Reflect.preventExtensions(target);
  },
};

const proxy1 = new Proxy(monster1, handler1);

console.log(Object.isExtensible(proxy1));
// Expected output: true

console.log(monster1.canEvolve);
// Expected output: true

Object.preventExtensions(proxy1);

console.log(Object.isExtensible(proxy1));
// Expected output: false

console.log(monster1.canEvolve);
// Expected output: false
```

## Syntax

```js-nolint
new Proxy(target, {
  isExtensible(target) {
  }
})
```

### Parameters

The following parameter is passed to the `isExtensible()` method. `this` is bound to the handler.

- `target`
  - : The target object.

### Return value

The `isExtensible()` method must return a {{jsxref("Boolean")}} indicating whether or not the target object is extensible. Other values are [coerced to booleans](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

## Description

### Interceptions

This trap can intercept these operations:

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}

Or any other operation that invokes the `[[IsExtensible]]` [internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods).

### Invariants

The proxy's `[[IsExtensible]]` internal method throws a {{jsxref("TypeError")}} if the handler definition violates one of the following invariants:

- The result must be the same as {{jsxref("Reflect.isExtensible()")}} on the target object.

## Examples

### Trapping of isExtensible

The following code traps {{jsxref("Object.isExtensible()")}}.

```js
const p = new Proxy(
  {},
  {
    isExtensible(target) {
      console.log("called");
      return true;
    },
  },
);

console.log(Object.isExtensible(p));
// "called"
// true
```

The following code violates the invariant.

```js example-bad
const p = new Proxy(
  {},
  {
    isExtensible(target) {
      return false;
    },
  },
);

Object.isExtensible(p); // TypeError is thrown
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
- [`Proxy()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}
- {{jsxref("Reflect.preventExtensions()")}}
