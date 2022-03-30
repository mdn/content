---
title: Reflect.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - Reflect
  - Polyfill
browser-compat: javascript.builtins.Reflect.getOwnPropertyDescriptor
---
{{JSRef}}

The static
**`Reflect.getOwnPropertyDescriptor()`** method is similar to
{{jsxref("Object.getOwnPropertyDescriptor()")}}. It returns a property descriptor of
the given property if it exists on the object, {{jsxref("undefined")}}
otherwise.

{{EmbedInteractiveExample("pages/js/reflect-getownpropertydescriptor.html")}}

## Syntax

```js
Reflect.getOwnPropertyDescriptor(target, propertyKey)
```

### Parameters

- `target`
  - : The target object in which to look for the property.
- `propertyKey`
  - : The name of the property to get an own property descriptor for.

### Return value

A property descriptor object if the property exists in `target`
object; otherwise, {{jsxref("undefined")}}.

### Exceptions

A {{jsxref("TypeError")}}, if `target` is not an
{{jsxref("Object")}}.

## Description

The `Reflect.getOwnPropertyDescriptor` method returns a property descriptor
of the given property if it exists in the `target` object,
{{jsxref("undefined")}} otherwise. The only difference to
{{jsxref("Object.getOwnPropertyDescriptor()")}} is how non-object targets are handled.

## Examples

### Using Reflect.getOwnPropertyDescriptor()

```js
Reflect.getOwnPropertyDescriptor({x: 'hello'}, 'x')
// {value: "hello", writable: true, enumerable: true, configurable: true}

Reflect.getOwnPropertyDescriptor({x: 'hello'}, 'y')
// undefined

Reflect.getOwnPropertyDescriptor([], 'length')
// {value: 0, writable: true, enumerable: false, configurable: false}
```

### Difference to Object.getOwnPropertyDescriptor()

If the `target` argument to this method is not an object (a
primitive), then it will cause a {{jsxref("TypeError")}}. With
{{jsxref("Object.getOwnPropertyDescriptor")}}, a non-object first argument will be
coerced to an object at first.

```js
Reflect.getOwnPropertyDescriptor('foo', 0)
// TypeError: "foo" is not non-null object

Object.getOwnPropertyDescriptor('foo', 0)
// { value: "f", writable: false, enumerable: true, configurable: false }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Reflect.getOwnPropertyDescriptor` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
