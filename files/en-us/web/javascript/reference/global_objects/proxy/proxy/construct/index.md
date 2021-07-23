---
title: handler.construct()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Proxy
browser-compat: javascript.builtins.Proxy.handler.construct
---
{{JSRef}}

The **`handler.construct()`** method is a trap for the {{jsxref("Operators/new", "new")}} operator. In order for the new operation to be valid on the resulting Proxy object, the target used to initialize the proxy must itself have a `[[Construct]]` internal method (i.e. `new target` must be valid).

{{EmbedInteractiveExample("pages/js/proxyhandler-construct.html", "taller")}}

## Syntax

```js
const p = new Proxy(target, {
  construct: function(target, argumentsList, newTarget) {
  }
});
```

### Parameters

The following parameters are passed to the `construct()` method. `this` is bound to the handler.

- `target`
  - : The target object.
- `argumentsList`
  - : The list of arguments for the constructor.
- `newTarget`
  - : The constructor that was originally called, `p` above.

### Return value

The `construct` method must return an object.

## Description

The **`handler.construct()`** method is a trap for the {{jsxref("Operators/new", "new")}} operator.

### Interceptions

This trap can intercept these operations:

- `new myFunction(...args)`
- {{jsxref("Reflect.construct()")}}

### Invariants

If the following invariants are violated, the proxy will throw a {{jsxref("TypeError")}}:

- The result must be an `Object`.

## Examples

### Trapping the new operator

The following code traps the {{jsxref("Operators/new", "new")}} operator.

```js
const p = new Proxy(function() {}, {
  construct: function(target, argumentsList, newTarget) {
    console.log('called: ' + argumentsList.join(', '));
    return { value: argumentsList[0] * 10 };
  }
});

console.log(new p(1).value); // "called: 1"
                             // 10
```

The following code violates the invariant.

```js example-bad
const p = new Proxy(function() {}, {
  construct: function(target, argumentsList, newTarget) {
    return 1;
  }
});

new p(); // TypeError is thrown
```

The following code improperly initializes the proxy. The `target` in Proxy initialization must itself be a valid constructor for the {{jsxref("Operators/new", "new")}} operator.

```js example-bad
const p = new Proxy({}, {
  construct: function(target, argumentsList, newTarget) {
    return {};
  }
});

new p(); // TypeError is thrown, "p" is not a constructor
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
- {{jsxref("Proxy/Proxy", "handler")}}
- {{jsxref("Operators/new", "new")}} operator.
- {{jsxref("Reflect.construct()")}}
