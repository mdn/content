---
title: handler.has()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has
page-type: javascript-instance-method
browser-compat: javascript.builtins.Proxy.handler.has
---

{{JSRef}}

The **`handler.has()`** method is a trap for the `[[HasProperty]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), which is used by operations such as the {{jsxref("Operators/in", "in")}} operator.

{{InteractiveExample("JavaScript Demo: handler.has()", "taller")}}

```js interactive-example
const handler1 = {
  has(target, key) {
    if (key[0] === "_") {
      return false;
    }
    return key in target;
  },
};

const monster1 = {
  _secret: "easily scared",
  eyeCount: 4,
};

const proxy1 = new Proxy(monster1, handler1);
console.log("eyeCount" in proxy1);
// Expected output: true

console.log("_secret" in proxy1);
// Expected output: false

console.log("_secret" in monster1);
// Expected output: true
```

## Syntax

```js-nolint
new Proxy(target, {
  has(target, property) {
  }
})
```

### Parameters

The following parameters are passed to `has()` method. `this` is bound to the handler.

- `target`
  - : The target object.
- `property`
  - : A string or {{jsxref("Symbol")}} representing the property name.

### Return value

The `has()` method must return a {{jsxref("Boolean")}} indicating whether or not the property exists. Other values are [coerced to booleans](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

## Description

### Interceptions

This trap can intercept these operations:

- The [`in`](/en-US/docs/Web/JavaScript/Reference/Operators/in) operator: `foo in proxy`
- [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with) check: `with(proxy) { (foo); }`
- {{jsxref("Reflect.has()")}}

Or any other operation that invokes the `[[HasProperty]]` [internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods).

### Invariants

The proxy's `[[HasProperty]]` internal method throws a {{jsxref("TypeError")}} if the handler definition violates one of the following invariants:

- A property cannot be reported as non-existent, if it exists as a non-configurable own property of the target object. That is, if {{jsxref("Reflect.getOwnPropertyDescriptor()")}} returns `configurable: false` for the property on `target`, the trap must return `true`.
- A property cannot be reported as non-existent, if it exists as an own property of the target object and the target object is not extensible. That is, if {{jsxref("Reflect.isExtensible()")}} returns `false` on `target`, and {{jsxref("Reflect.getOwnPropertyDescriptor()")}} returns a property descriptor for the property on `target`, the trap must return `true`.

## Examples

### Trapping the in operator

The following code traps the {{jsxref("Operators/in", "in")}} operator.

```js
const p = new Proxy(
  {},
  {
    has(target, prop) {
      console.log(`called: ${prop}`);
      return true;
    },
  },
);

console.log("a" in p);
// "called: a"
// true
```

The following code violates an invariant.

```js example-bad
const obj = { a: 10 };
Object.preventExtensions(obj);

const p = new Proxy(obj, {
  has(target, prop) {
    return false;
  },
});

"a" in p; // TypeError is thrown
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
- [`Proxy()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Operators/in", "in")}}
- {{jsxref("Reflect.has()")}}
