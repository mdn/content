---
title: Reflect.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - Reflect
  - Polyfill
browser-compat: javascript.builtins.Reflect.getPrototypeOf
---
{{JSRef}}

The static **`Reflect.getPrototypeOf()`** method is almost the
same method as {{jsxref("Object.getPrototypeOf()")}}. It returns the prototype (i.e. the
value of the internal `[[Prototype]]` property) of the specified object.

{{EmbedInteractiveExample("pages/js/reflect-getprototypeof.html")}}

## Syntax

```js
Reflect.getPrototypeOf(target)
```

### Parameters

- `target`
  - : The target object of which to get the prototype.

### Return value

The prototype of the given object. If there are no inherited properties,
[`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) is returned.

### Exceptions

A {{jsxref("TypeError")}}, if `target` is not an
{{jsxref("Object")}}.

## Description

The `Reflect.getPrototypeOf` method returns the prototype (i.e. the value of
the internal `[[Prototype]]` property) of the specified object.

## Examples

### Using Reflect.getPrototypeOf()

```js
Reflect.getPrototypeOf({})                  // Object.prototype
Reflect.getPrototypeOf(Object.prototype)    // null
Reflect.getPrototypeOf(Object.create(null)) // null
```

### Compared to Object.getPrototypeOf()

```js
// Same result for Objects
Object.getPrototypeOf({})   // Object.prototype
Reflect.getPrototypeOf({})  // Object.prototype

// Both throw in ES5 for non-Objects
Object.getPrototypeOf('foo')   // Throws TypeError
Reflect.getPrototypeOf('foo')  // Throws TypeError

// In ES2015 only Reflect throws, Object coerces non-Objects
Object.getPrototypeOf('foo')   // String.prototype
Reflect.getPrototypeOf('foo')  // Throws TypeError

// To mimic the Object ES2015 behavior you need to coerce
Reflect.getPrototypeOf(Object('foo'))  // String.prototype
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Reflect.getPrototypeOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.getPrototypeOf()")}}
