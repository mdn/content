---
title: Reflect.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions
page-type: javascript-static-method
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - Reflect
  - Polyfill
browser-compat: javascript.builtins.Reflect.preventExtensions
---

{{JSRef}}

The **`Reflect.preventExtensions()`** static method prevents new properties from ever being added to an object (i.e., prevents future extensions to the object). It is similar to {{jsxref("Object.preventExtensions()")}}, but with [some differences](#difference_with_object.preventextensions).

{{EmbedInteractiveExample("pages/js/reflect-preventextensions.html")}}

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

A {{jsxref("TypeError")}}, if `target` is not an {{jsxref("Object")}}.

## Examples

### Using Reflect.preventExtensions()

See also {{jsxref("Object.preventExtensions()")}}.

```js
// Objects are extensible by default.
const empty = {};
Reflect.isExtensible(empty); // true

// ...but that can be changed.
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
- {{jsxref("Object.isExtensible()")}}
