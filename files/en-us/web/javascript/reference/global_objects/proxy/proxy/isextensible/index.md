---
title: handler.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/isExtensible
page-type: javascript-instance-method
browser-compat: javascript.builtins.Proxy.handler.isExtensible
---

{{JSRef}}

The **`handler.isExtensible()`** method is a trap for the `[[IsExtensible]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), which is used by operations such as {{jsxref("Object.isExtensible()")}}.

{{EmbedInteractiveExample("pages/js/proxyhandler-isextensible.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  isExtensible(target) {
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

### Interceptions

This trap can intercept these operations:

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}

Or any other operation that invokes the `[[IsExtensible]]` [internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods).

### Invariants

If the following invariants are violated, the trap throws a {{jsxref("TypeError")}} when invoked.

- `Object.isExtensible(proxy)` must return the same value as
  `Object.isExtensible(target)`.

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
