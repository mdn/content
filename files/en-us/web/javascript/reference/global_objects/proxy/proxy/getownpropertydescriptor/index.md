---
title: handler.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Proxy
browser-compat: javascript.builtins.Proxy.handler.getOwnPropertyDescriptor
---
{{JSRef}}

The **`handler.getOwnPropertyDescriptor()`** method is a trap for {{jsxref("Object.getOwnPropertyDescriptor()")}}.

{{EmbedInteractiveExample("pages/js/proxyhandler-getownpropertydescriptor.html", "taller")}}

## Syntax

```js
new Proxy(target, {
  getOwnPropertyDescriptor(target, prop) {
  }
});
```

### Parameters

The following parameters are passed to the `getOwnPropertyDescriptor()` method. `this` is bound to the handler.

- `target`
  - : The target object.
- `prop`
  - : The name of the property whose description should be retrieved.

### Return value

The `getOwnPropertyDescriptor()` method must return an object or `undefined`.

## Description

The **`handler.getOwnPropertyDescriptor()`** method is a trap for {{jsxref("Object.getOwnPropertyDescriptor()")}}.

### Interceptions

This trap can intercept these operations:

- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}

### Invariants

If the following invariants are violated, the proxy will throw a {{jsxref("TypeError")}}:

- `getOwnPropertyDescriptor()` must return an object or `undefined`.
- A property cannot be reported as non-existent, if it exists as a non-configurable own property of the target object.
- A property cannot be reported as non-existent, if it exists as an own property of the target object and the target object is not extensible.
- A property cannot be reported as existent, if it does not exists as an own property of the target object and the target object is not extensible.
- A property cannot be reported as non-configurable, if it does not exists as an own property of the target object or if it exists as a configurable own property of the target object.
- The result of `Object.getOwnPropertyDescriptor(target)` can be applied to the target object using `Object.defineProperty()` and will not throw an exception.

## Examples

### Trapping of getOwnPropertyDescriptor

The following code traps {{jsxref("Object.getOwnPropertyDescriptor()")}}.

```js
const p = new Proxy({ a: 20}, {
  getOwnPropertyDescriptor(target, prop) {
    console.log(`called: ${prop}`);
    return { configurable: true, enumerable: true, value: 10 };
  },
});

console.log(Object.getOwnPropertyDescriptor(p, 'a').value); // "called: a"
                                                            // 10
```

The following code violates an invariant.

```js example-bad
const obj = { a: 10 };
Object.preventExtensions(obj);
const p = new Proxy(obj, {
  getOwnPropertyDescriptor(target, prop) {
    return undefined;
  },
});

Object.getOwnPropertyDescriptor(p, 'a'); // TypeError is thrown
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
- [`Proxy()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
