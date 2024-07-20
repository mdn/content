---
title: handler.construct()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct
page-type: javascript-instance-method
browser-compat: javascript.builtins.Proxy.handler.construct
---

{{JSRef}}

The **`handler.construct()`** method is a trap for the `[[Construct]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), which is used by operations such as the {{jsxref("Operators/new", "new")}} operator. In order for the new operation to be valid on the resulting Proxy object, the target used to initialize the proxy must itself be a valid constructor.

{{EmbedInteractiveExample("pages/js/proxyhandler-construct.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  construct(target, argumentsList, newTarget) {
  }
})
```

### Parameters

The following parameters are passed to the `construct()` method. `this` is bound to the handler.

- `target`
  - : The target constructor object.
- `argumentsList`
  - : An {{jsxref("Array")}} containing the arguments passed to the constructor.
- `newTarget`
  - : The constructor that was originally called.

### Return value

The `construct()` method must return an object, representing the newly created object.

## Description

### Interceptions

This trap can intercept these operations:

- The [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new) operator: `new myFunction(...args)`
- {{jsxref("Reflect.construct()")}}

Or any other operation that invokes the `[[Construct]]` [internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods).

### Invariants

The proxy's `[[Construct]]` internal method throws a {{jsxref("TypeError")}} if the handler definition violates one of the following invariants:

- The `target` must be a constructor itself.
- The result must be an {{jsxref("Object")}}.

## Examples

### Trapping the new operator

The following code traps the {{jsxref("Operators/new", "new")}} operator.

```js
const p = new Proxy(function () {}, {
  construct(target, argumentsList, newTarget) {
    console.log(`called: ${argumentsList}`);
    return { value: argumentsList[0] * 10 };
  },
});

console.log(new p(1).value); // "called: 1"
// 10
```

The following code violates the invariant.

```js example-bad
const p = new Proxy(function () {}, {
  construct(target, argumentsList, newTarget) {
    return 1;
  },
});

new p(); // TypeError is thrown
```

The following code improperly initializes the proxy. The `target` in Proxy initialization must itself be a valid constructor for the {{jsxref("Operators/new", "new")}} operator.

```js example-bad
const p = new Proxy(
  {},
  {
    construct(target, argumentsList, newTarget) {
      return {};
    },
  },
);

new p(); // TypeError is thrown, "p" is not a constructor
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
- [`Proxy()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Operators/new", "new")}}
- {{jsxref("Reflect.construct()")}}
