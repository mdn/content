---
title: handler.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/isExtensible
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Proxy
browser-compat: javascript.builtins.Proxy.handler.isExtensible
---
{{JSRef}}

The **`handler.isExtensible()`** method is a trap for
{{jsxref("Object.isExtensible()")}}.

{{EmbedInteractiveExample("pages/js/proxyhandler-isextensible.html", "taller")}}

## Syntax

```js
const p = new Proxy(target, {
  isExtensible: function(target) {
  }
});
```

### Parameters

The following parameter is passed to the `isExtensible()` method.
`this` is bound to the handler.

- `target`
  - : The target object.

### Return value

The `isExtensible()` method must return a boolean value.

## Description

The **`handler.isExtensible()`** method is a trap for
{{jsxref("Object.isExtensible()")}}.

### Interceptions

This trap can intercept these operations:

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}

### Invariants

If the following invariants are violated, the proxy will throw a
{{jsxref("TypeError")}}:

- `Object.isExtensible(proxy)` must return the same value as
  `Object.isExtensible(target)`.

## Examples

### Trapping of isExtensible

The following code traps {{jsxref("Object.isExtensible()")}}.

```js
const p = new Proxy({}, {
  isExtensible: function(target) {
    console.log('called');
    return true;
  }
});

console.log(Object.isExtensible(p)); // "called"
                                     // true
```

The following code violates the invariant.

```js example-bad
const p = new Proxy({}, {
  isExtensible: function(target) {
    return false;
  }
});

Object.isExtensible(p); // TypeError is thrown
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}
