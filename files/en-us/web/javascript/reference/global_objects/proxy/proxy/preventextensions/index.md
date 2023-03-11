---
title: handler.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions
page-type: javascript-instance-method
browser-compat: javascript.builtins.Proxy.handler.preventExtensions
---

{{JSRef}}

The **`handler.preventExtensions()`** method is a trap for the `[[PreventExtensions]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), which is used by operations such as {{jsxref("Object.preventExtensions()")}}.

{{EmbedInteractiveExample("pages/js/proxyhandler-preventextensions.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  preventExtensions(target) {
  }
});
```

### Parameters

The following parameter is passed to the `preventExtensions()` method. `this` is bound to the handler.

- `target`
  - : The target object.

### Return value

The `preventExtensions()` method must return a boolean value.

## Description

### Interceptions

This trap can intercept these operations:

- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Reflect.preventExtensions()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.freeze()")}}

Or any other operation that invokes the `[[PreventExtensions]]` [internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods).

### Invariants

If the following invariants are violated, the trap throws a {{jsxref("TypeError")}} when invoked.

- `Object.preventExtensions(proxy)` only returns `true` if `Object.isExtensible(proxy)` is `false`.

## Examples

### Trapping of preventExtensions

The following code traps {{jsxref("Object.preventExtensions()")}}.

```js
const p = new Proxy(
  {},
  {
    preventExtensions(target) {
      console.log("called");
      Object.preventExtensions(target);
      return true;
    },
  },
);

console.log(Object.preventExtensions(p));
// "called"
// false
```

The following code violates the invariant.

```js example-bad
const p = new Proxy(
  {},
  {
    preventExtensions(target) {
      return true;
    },
  },
);

Object.preventExtensions(p); // TypeError is thrown
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
- [`Proxy()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Reflect.preventExtensions()")}}
