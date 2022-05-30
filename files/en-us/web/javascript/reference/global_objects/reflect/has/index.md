---
title: Reflect.has()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/has
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - Reflect
  - Polyfill
browser-compat: javascript.builtins.Reflect.has
---
{{JSRef}}

The static **`Reflect.has()`** method works like the [`in` operator](/en-US/docs/Web/JavaScript/Reference/Operators/in)
as a function.

{{EmbedInteractiveExample("pages/js/reflect-has.html")}}

## Syntax

```js
Reflect.has(target, propertyKey)
```

### Parameters

- `target`
  - : The target object in which to look for the property.
- `propertyKey`
  - : The name of the property to check.

### Return value

A {{jsxref("Boolean")}} indicating whether or not the `target`
has the property.

### Exceptions

A {{jsxref("TypeError")}}, if `target` is not an
{{jsxref("Object")}}.

## Description

The `Reflect.has` method allows you to check if a property is in an object.
It works like the [`in` operator](/en-US/docs/Web/JavaScript/Reference/Operators/in)
as a function.

## Examples

### Using Reflect.has()

```js
Reflect.has({x: 0}, 'x')  // true
Reflect.has({x: 0}, 'y')  // false

// returns true for properties in the prototype chain
Reflect.has({x: 0}, 'toString')

// Proxy with .has() handler method
obj = new Proxy({}, {
  has(t, k) { return k.startsWith('door')  }
});
Reflect.has(obj, 'doorbell')  // true
Reflect.has(obj, 'dormitory')  // false
```

`Reflect.has` returns `true` for any inherited properties, like
the [`in` operator](/en-US/docs/Web/JavaScript/Reference/Operators/in):

```js
const a = {foo: 123}
const b = {__proto__: a}
const c = {__proto__: b}
// The prototype chain is: c -> b -> a
Reflect.has(c, 'foo') // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Reflect.has` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- [`in` operator](/en-US/docs/Web/JavaScript/Reference/Operators/in)
