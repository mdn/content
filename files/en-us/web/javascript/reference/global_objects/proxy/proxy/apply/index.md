---
title: handler.apply()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Proxy
browser-compat: javascript.builtins.Proxy.handler.apply
---
{{JSRef}}

The **`handler.apply()`** method is a trap for a function call.

{{EmbedInteractiveExample("pages/js/proxyhandler-apply.html", "taller")}}

## Syntax

```js
new Proxy(target, {
  apply(target, thisArg, argumentsList) {
  }
});
```

### Parameters

The following parameters are passed to the `apply()` method.
`this` is bound to the handler.

- `target`
  - : The target callable object.
- `thisArg`
  - : The `this` argument for the call.
- `argumentsList`
  - : The list of arguments for the call.

### Return value

The `apply()` method can return any value.

## Description

The **`handler.apply()`** method is a trap for a function call.

### Interceptions

This trap can intercept these operations:

- `proxy(...args)`
- {{jsxref("Function.prototype.apply()")}} and {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}

### Invariants

If the following invariants are violated, the proxy will throw a
{{jsxref("TypeError")}}.

The `target` must be a callable itself. That is, it must be a
function object.

## Examples

### Trapping a function call

The following code traps a function call.

```js
const p = new Proxy(function () {}, {
  apply(target, thisArg, argumentsList) {
    console.log(`called: ${argumentsList}`);
    return argumentsList[0] + argumentsList[1] + argumentsList[2];
  }
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
