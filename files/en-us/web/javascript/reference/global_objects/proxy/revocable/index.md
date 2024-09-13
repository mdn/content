---
title: Proxy.revocable()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
page-type: javascript-static-method
browser-compat: javascript.builtins.Proxy.revocable
---

{{JSRef}}

The **`Proxy.revocable()`** static method creates a revocable {{jsxref("Proxy")}} object.

## Syntax

```js-nolint
Proxy.revocable(target, handler)
```

### Parameters

- `target`
  - : A target object to wrap with `Proxy`. It can be any sort of object, including a native array, a function, or even another proxy.
- `handler`
  - : An object whose properties are functions defining the behavior of `proxy` when an operation is performed on it.

### Return value

A plain object with the following two properties:

- `proxy`
  - : A Proxy object exactly the same as one created with a [`new Proxy(target, handler)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) call.
- `revoke`
  - : A function with no parameters to revoke (switch off) the `proxy`.

## Description

The `Proxy.revocable()` factory function is the same as the [`Proxy()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) constructor, except that in addition to creating a proxy object, it also creates a `revoke` function that can be called to disable the proxy. The proxy object and the `revoke` function are wrapped in a plain object.

The `revoke` function does not take any parameters, nor does it rely on the `this` value. The created `proxy` object is attached to the `revoke` function as a [private property](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties) that the `revoke` function accesses on itself when called (the existence of the private property is not observable from the outside, but it has implications on how garbage collection happens). The `proxy` object is _not_ captured within the [closure](/en-US/docs/Web/JavaScript/Closures) of the `revoke` function (which will make garbage collection of `proxy` impossible if `revoke` is still alive).

After the `revoke()` function gets called, the proxy becomes unusable: any trap to a handler throws a {{jsxref("TypeError")}}. Once a proxy is revoked, it remains revoked, and calling `revoke()` again has no effect — in fact, the call to `revoke()` detaches the `proxy` object from the `revoke` function, so the `revoke` function will not be able to access the proxy again at all. If the proxy is not referenced elsewhere, it will then be eligible for garbage collection. The `revoke` function also detaches `target` and `handler` from the `proxy`, so if `target` is not referenced elsewhere, it will also be eligible for garbage collection, even when its proxy is still alive, since there's no longer a way to meaningfully interact with the target object.

Letting users interact with an object through a revocable proxy allows you to [control the lifetime](/en-US/docs/Web/JavaScript/Memory_management) of the object exposed to the user — you can make the object garbage-collectable even when the user is still holding a reference to its proxy.

## Examples

### Using Proxy.revocable()

```js
const revocable = Proxy.revocable(
  {},
  {
    get(target, name) {
      return `[[${name}]]`;
    },
  },
);
const proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // TypeError is thrown
proxy.foo = 1; // TypeError again
delete proxy.foo; // still TypeError
typeof proxy; // "object", typeof doesn't trigger any trap
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
