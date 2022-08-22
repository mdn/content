---
title: Proxy() constructor
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
tags:
  - Constructor
  - JavaScript
  - Proxy
  - Reference
browser-compat: javascript.builtins.Proxy.Proxy
---
{{JSRef}}

The **`Proxy()`** constructor is used to create
{{jsxref("Proxy")}} objects.

## Syntax

```js
new Proxy(target, handler)
```

> **Note:** `Proxy()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `target`
  - : A target object to wrap with `Proxy`. It can be any sort of object,
    including a native array, a function, or even another proxy.
- `handler`
  - : An object whose properties are functions that define the behavior of the proxy when
    an operation is performed on it.

## Description

Use the `Proxy()` constructor to create a new `Proxy` object.
This constructor takes two mandatory arguments:

- `target` is the object for which you want to create the proxy
- `handler` is the object that defines the custom behavior of the proxy.

An empty handler will create a proxy that behaves, in almost all respects, exactly like
the target. By defining any of a set group of functions on the `handler`
object, you can customize specific aspects of the proxy's behavior. For example, by
defining `get()` you can provide a customized version of the target's
[property accessor](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors).

### Handler functions

This section lists all the handler functions you can define. Handler functions are
sometimes called _traps_, because they trap calls to the underlying target
object.

- {{JSxRef("Global_Objects/Proxy/Proxy/apply", "handler.apply()")}}
  - : A trap for a function call.
- {{JSxRef("Global_Objects/Proxy/Proxy/construct", "handler.construct()")}}
  - : A trap for the {{JSxRef("Operators/new", "new")}} operator.
- {{JSxRef("Global_Objects/Proxy/Proxy/defineProperty", "handler.defineProperty()")}}
  - : A trap for {{JSxRef("Object.defineProperty")}}.
- {{JSxRef("Global_Objects/Proxy/Proxy/deleteProperty", "handler.deleteProperty()")}}
  - : A trap for the {{JSxRef("Operators/delete", "delete")}} operator.
- {{JSxRef("Global_Objects/Proxy/Proxy/get", "handler.get()")}}
  - : A trap for getting property values.
- {{JSxRef("Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor",
    "handler.getOwnPropertyDescriptor()")}}
  - : A trap for {{JSxRef("Object.getOwnPropertyDescriptor")}}.
- {{JSxRef("Global_Objects/Proxy/Proxy/getPrototypeOf", "handler.getPrototypeOf()")}}
  - : A trap for {{JSxRef("Object.getPrototypeOf")}}.
- {{JSxRef("Global_Objects/Proxy/Proxy/has", "handler.has()")}}
  - : A trap for the {{JSxRef("Operators/in", "in")}} operator.
- {{JSxRef("Global_Objects/Proxy/Proxy/isExtensible", "handler.isExtensible()")}}
  - : A trap for {{JSxRef("Object.isExtensible")}}.
- {{JSxRef("Global_Objects/Proxy/Proxy/ownKeys", "handler.ownKeys()")}}
  - : A trap for {{JSxRef("Object.getOwnPropertyNames")}} and
    {{JSxRef("Object.getOwnPropertySymbols")}}.
- {{JSxRef("Global_Objects/Proxy/Proxy/preventExtensions",
    "handler.preventExtensions()")}}
  - : A trap for {{JSxRef("Object.preventExtensions")}}.
- {{JSxRef("Global_Objects/Proxy/Proxy/set", "handler.set()")}}
  - : A trap for setting property values.
- {{JSxRef("Global_Objects/Proxy/Proxy/setPrototypeOf", "handler.setPrototypeOf()")}}
  - : A trap for {{JSxRef("Object.setPrototypeOf")}}.

## Examples

### Selectively proxy property accessors

In this example the target has two properties, `notProxied` and
`proxied`. We define a handler that returns a different value for
`proxied`, and lets any other accesses through to the target.

```js
const target = {
  notProxied: "original value",
  proxied: "original value"
};

const handler = {
  get(target, prop, receiver) {
    if (prop === "proxied") {
      return "replaced value";
    }
    return Reflect.get(...arguments);
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.notProxied); // "original value"
console.log(proxy.proxied);    // "replaced value"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`Proxy` and `Reflect` in the JavaScript Guide](/en-US/docs/Web/JavaScript/Guide/Meta_programming)
- {{jsxref("Global_Objects/Reflect", "Reflect")}}
