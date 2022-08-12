---
title: Reflect.deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - Reflect
  - Polyfill
browser-compat: javascript.builtins.Reflect.deleteProperty
---
{{JSRef}}

The static
**`Reflect.deleteProperty()`**
method allows to delete properties. It is like the
[`delete` operator](/en-US/docs/Web/JavaScript/Reference/Operators/delete)
as a function.

{{EmbedInteractiveExample("pages/js/reflect-deleteproperty.html", "taller")}}

## Syntax

```js
Reflect.deleteProperty(target, propertyKey)
```

### Parameters

- `target`
  - : The target object on which to delete the property.
- `propertyKey`
  - : The name of the property to be deleted.

### Return value

A {{jsxref("Boolean")}} indicating whether or not the property was successfully
deleted.

### Exceptions

A {{jsxref("TypeError")}}, if `target` is not an
{{jsxref("Object")}}.

## Description

The `Reflect.deleteProperty` method allows you to delete a property on an
object. It returns a {{jsxref("Boolean")}} indicating whether or not the property was
successfully deleted. It is almost identical to the non-strict
[`delete` operator](/en-US/docs/Web/JavaScript/Reference/Operators/delete).

## Examples

### Using Reflect.deleteProperty()

```js
const obj = { x: 1, y: 2 };
Reflect.deleteProperty(obj, 'x'); // true
console.log(obj); // { y: 2 }

const arr = [1, 2, 3, 4, 5];
Reflect.deleteProperty(arr, '3'); // true
console.log(arr); // [1, 2, 3, undefined, 5]

// Returns true if no such property exists
Reflect.deleteProperty({}, 'foo'); // true

// Returns false if a property is unconfigurable
Reflect.deleteProperty(Object.freeze({ foo: 1 }), 'foo'); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Reflect.deleteProperty` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- [`delete` operator](/en-US/docs/Web/JavaScript/Reference/Operators/delete)
