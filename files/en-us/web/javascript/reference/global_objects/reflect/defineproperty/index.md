---
title: Reflect.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - Reflect
  - Polyfill
browser-compat: javascript.builtins.Reflect.defineProperty
---
{{JSRef}}

The static **`Reflect.defineProperty()`** method is like
{{jsxref("Object.defineProperty()")}} but returns a {{jsxref("Boolean")}}.

{{EmbedInteractiveExample("pages/js/reflect-defineproperty.html")}}

## Syntax

```js
Reflect.defineProperty(target, propertyKey, attributes)
```

### Parameters

- `target`
  - : The target object on which to define the property.
- `propertyKey`
  - : The name of the property to be defined or modified.
- `attributes`
  - : The attributes for the property being defined or modified.

### Return value

A {{jsxref("Boolean")}} indicating whether or not the property was successfully
defined.

### Exceptions

A {{jsxref("TypeError")}}, if `target` is not an
{{jsxref("Object")}}.

## Description

The `Reflect.defineProperty` method allows precise addition to or
modification of a property on an object. For more details, see the
{{jsxref("Object.defineProperty")}} which is similar.

> **Note:** `Object.defineProperty` returns the
> object or throws a {{jsxref("TypeError")}} if the property has not been successfully
> defined. `Reflect.defineProperty`, however, returns a {{jsxref("Boolean")}}
> indicating whether or not the property was successfully defined.

## Examples

### Using Reflect.defineProperty()

```js
const obj = {};
Reflect.defineProperty(obj, 'x', { value: 7 }); // true
console.log(obj.x); // 7
```

### Checking if property definition has been successful

With {{jsxref("Object.defineProperty")}}, which returns an object if successful, or
throws a {{jsxref("TypeError")}} otherwise, you would use a
[`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
block to catch any error that occurred while defining a property.

Because `Reflect.defineProperty` returns a Boolean success status, you can
just use an
[`if...else`](/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
block here:

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Reflect.defineProperty` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.defineProperty()")}}
