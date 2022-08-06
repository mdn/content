---
title: Proxy.revocable()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Proxy
browser-compat: javascript.builtins.Proxy.revocable
---
{{JSRef}}

The **`Proxy.revocable()`** method is used to create a
revocable {{jsxref("Proxy")}} object.

## Syntax

```js
Proxy.revocable(target, handler);
```

### Parameters

- `target`
  - : A target object to wrap with `Proxy`. It can be any sort of object,
    including a native array, a function, or even another proxy.
- `handler`
  - : An object whose properties are functions define the behavior of proxy
    `p` when an operation is performed on it.

### Return value

A newly created revocable `Proxy` object is returned.

## Description

A revocable `Proxy` is an object with following two properties
`{proxy: proxy, revoke: revoke}`.

- `proxy`
  - : A Proxy object created with `new Proxy(target, handler)` call.
- `revoke`
  - : A function with no argument to invalidate (switch off) the `proxy`.

If the `revoke()` function gets called, the proxy becomes unusable: Any trap
to a handler will throw a {{jsxref("TypeError")}}. Once a proxy is revoked, it will
remain revoked and can be garbage collected. Calling `revoke()` again has no
effect.

## Examples

### Using Proxy.revocable

```js
const revocable = Proxy.revocable({}, {
  get(target, name) {
    return `[[${name}]]`;
  }
});
const proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // TypeError is thrown
proxy.foo = 1           // TypeError again
delete proxy.foo;       // still TypeError
typeof proxy            // "object", typeof doesn't trigger any trap
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
