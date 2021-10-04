---
title: Reflect.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - Reflect
  - Polyfill
browser-compat: javascript.builtins.Reflect.setPrototypeOf
---

{{JSRef}}

The static
**`Reflect.setPrototypeOf()`** method is the same method as
{{jsxref("Object.setPrototypeOf()")}}, except for its return type. It sets the
prototype (i.e., the internal `[[Prototype]]` property) of a specified
object to another object or to {{jsxref("null")}}, and returns `true` if
the operation was successful, or `false` otherwise.

{{EmbedInteractiveExample("pages/js/reflect-setprototypeof.html")}}

## Syntax

```js
Reflect.setPrototypeOf(target, prototype);
```

### Parameters

- `target`
  - : The target object of which to set the prototype.
- `prototype`
  - : The object's new prototype (an object or {{jsxref("null")}}).

### Return value

A {{jsxref("Boolean")}} indicating whether or not the prototype was successfully set.

### Exceptions

A {{jsxref("TypeError")}}, if `target` is not an
{{jsxref("Object")}} or if `prototype` is neither an object nor
{{jsxref("null")}}.

## Description

The `Reflect.setPrototypeOf` method changes the prototype (i.e. the value of
the internal `[[Prototype]]` property) of the specified object.

## Examples

### Using Reflect.setPrototypeOf()

```js
Reflect.setPrototypeOf({}, Object.prototype); // true

// It can change an object's [[Prototype]] to null.
Reflect.setPrototypeOf({}, null); // true

// Returns false if target is not extensible.
Reflect.setPrototypeOf(Object.freeze({}), null); // false

// Returns false if it cause a prototype chain cycle.
let target = {};
let proto = Object.create(target);
Reflect.setPrototypeOf(target, proto); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `Reflect.setPrototypeOf` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.setPrototypeOf()")}}
