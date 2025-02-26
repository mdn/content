---
title: Reflect.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf
page-type: javascript-static-method
browser-compat: javascript.builtins.Reflect.setPrototypeOf
---

{{JSRef}}

The **`Reflect.setPrototypeOf()`** static method is like {{jsxref("Object.setPrototypeOf()")}} but returns a {{jsxref("Boolean")}}. It sets the prototype (i.e., the internal `[[Prototype]]` property) of a specified object.

{{InteractiveExample("JavaScript Demo: Reflect.setPrototypeOf()")}}

```js interactive-example
const object1 = {};

console.log(Reflect.setPrototypeOf(object1, Object.prototype));
// Expected output: true

console.log(Reflect.setPrototypeOf(object1, null));
// Expected output: true

const object2 = {};

console.log(Reflect.setPrototypeOf(Object.freeze(object2), null));
// Expected output: false
```

## Syntax

```js-nolint
Reflect.setPrototypeOf(target, prototype)
```

### Parameters

- `target`
  - : The target object of which to set the prototype.
- `prototype`
  - : The object's new prototype (an object or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null)).

### Return value

A {{jsxref("Boolean")}} indicating whether or not the prototype was successfully set.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `target` is not an object or if `prototype` is neither an object nor [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null).

## Description

`Reflect.setPrototypeOf()` provides the reflective semantic of setting the prototype of an object. At the very low level, setting the prototype returns a boolean (as is the case with [the proxy handler](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf)). {{jsxref("Object.setPrototypeOf()")}} provides nearly the same semantic, but it throws a {{jsxref("TypeError")}} if the status is `false` (the operation was unsuccessful), while `Reflect.setPrototypeOf()` directly returns the status.

`Reflect.setPrototypeOf()` invokes the `[[SetPrototypeOf]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) of `target`.

## Examples

### Using Reflect.setPrototypeOf()

```js
Reflect.setPrototypeOf({}, Object.prototype); // true

// It can change an object's [[Prototype]] to null.
Reflect.setPrototypeOf({}, null); // true

// Returns false if target is not extensible.
Reflect.setPrototypeOf(Object.freeze({}), null); // false

// Returns false if it cause a prototype chain cycle.
const target = {};
const proto = Object.create(target);
Reflect.setPrototypeOf(target, proto); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Reflect.setPrototypeOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.setPrototypeOf()")}}
- [`handler.setPrototypeOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf)
