---
title: handler.apply()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
page-type: javascript-instance-method
browser-compat: javascript.builtins.Proxy.handler.apply
---

{{JSRef}}

The **`handler.apply()`** method is a trap for the `[[Call]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), which is used by operations such as function calls.

{{EmbedInteractiveExample("pages/js/proxyhandler-apply.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  apply(target, thisArg, argumentsList) {
  }
});
```

### Parameters

The following parameters are passed to the `apply()` method. `this` is bound to the handler.

- `target`
  - : The target callable object.
- `thisArg`
  - : The `this` argument for the call.
- `argumentsList`
  - : The list of arguments for the call.

### Return value

The `apply()` method can return any value.

## Description

### Interceptions

This trap can intercept these operations:

- Function call: `proxy(...args)`
- {{jsxref("Function.prototype.apply()")}} and {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}

Or any other operation that invokes the `[[Call]]` [internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods).

### Invariants

If the following invariants are violated, the trap throws a {{jsxref("TypeError")}} when invoked.

- The `target` must be a callable itself. That is, it must be a function object.

## Examples

### Trapping a function call

The following code traps a function call.

```js
const p = new Proxy(function () {}, {
  apply(target, thisArg, argumentsList) {
    console.log(`called: ${argumentsList}`);
    return argumentsList[0] + argumentsList[1] + argumentsList[2];
  },
});

console.log(p(1, 2, 3)); // "called: 1,2,3"
// 6
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
- [`Proxy()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}
