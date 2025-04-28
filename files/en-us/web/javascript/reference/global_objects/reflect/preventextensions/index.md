---
title: Reflect.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions
page-type: javascript-static-method
browser-compat: javascript.builtins.Reflect.preventExtensions
---

{{JSRef}}

The **`Reflect.preventExtensions()`** static method is like {{jsxref("Object.preventExtensions()")}}. It prevents new properties from ever being added to an object (i.e., prevents future extensions to the object).

{{InteractiveExample("JavaScript Demo: Reflect.preventExtensions()")}}

```js interactive-example
const object1 = {};

console.log(Reflect.isExtensible(object1));
// Expected output: true

Reflect.preventExtensions(object1);

console.log(Reflect.isExtensible(object1));
// Expected output: false
```

## Syntax

```js-nolint
Reflect.preventExtensions(target)
```

### Parameters

- `target`
  - : The target object on which to prevent extensions.

### Return value

A {{jsxref("Boolean")}} indicating whether or not the target was successfully set to prevent extensions.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `target` is not an object.

## Description

`Reflect.preventExtensions()` provides the reflective semantic of preventing extensions of an object. The differences with {{jsxref("Object.preventExtensions()")}} are:

- `Reflect.preventExtensions()` throws a {{jsxref("TypeError")}} if the target is not an object, while `Object.preventExtensions()` always returns non-object targets as-is.
- `Reflect.preventExtensions()` returns a {{jsxref("Boolean")}} indicating whether or not the target was successfully set to prevent extensions, while `Object.preventExtensions()` returns the target object.

`Reflect.preventExtensions()` invokes the `[[PreventExtensions]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) of `target`.

## Examples

### Using Reflect.preventExtensions()

See also {{jsxref("Object.preventExtensions()")}}.

```js
// Objects are extensible by default.
const empty = {};
Reflect.isExtensible(empty); // true

// … but that can be changed.
Reflect.preventExtensions(empty);
Reflect.isExtensible(empty); // false
```

### Difference with Object.preventExtensions()

If the `target` argument to this method is not an object (a primitive), then it will cause a {{jsxref("TypeError")}}. With {{jsxref("Object.preventExtensions()")}}, a non-object `target` will be returned as-is without any errors.

```js
Reflect.preventExtensions(1);
// TypeError: 1 is not an object

Object.preventExtensions(1);
// 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Reflect.preventExtensions` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.preventExtensions()")}}
- [`handler.preventExtensions()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions)
