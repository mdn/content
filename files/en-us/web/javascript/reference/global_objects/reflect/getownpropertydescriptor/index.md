---
title: Reflect.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor
page-type: javascript-static-method
browser-compat: javascript.builtins.Reflect.getOwnPropertyDescriptor
---

{{JSRef}}

The **`Reflect.getOwnPropertyDescriptor()`** static method is like {{jsxref("Object.getOwnPropertyDescriptor()")}}. It returns a property descriptor of the given property if it exists on the object, {{jsxref("undefined")}} otherwise.

{{EmbedInteractiveExample("pages/js/reflect-getownpropertydescriptor.html")}}

## Syntax

```js-nolint
Reflect.getOwnPropertyDescriptor(target, propertyKey)
```

### Parameters

- `target`
  - : The target object in which to look for the property.
- `propertyKey`
  - : The name of the property to get an own property descriptor for.

### Return value

A property descriptor object if the property exists as an own property of `target`; otherwise, {{jsxref("undefined")}}.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `target` is not an object.

## Description

`Reflect.getOwnPropertyDescriptor()` provides the reflective semantic of retrieving the property descriptor of an object. The only difference with {{jsxref("Object.getOwnPropertyDescriptor()")}} is how non-object targets are handled. `Reflect.getOwnPropertyDescriptor()` throws a {{jsxref("TypeError")}} if the target is not an object, while `Object.getOwnPropertyDescriptor()` coerces it to an object.

`Reflect.getOwnPropertyDescriptor()` invokes the `[[GetOwnProperty]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) of `target`.

## Examples

### Using Reflect.getOwnPropertyDescriptor()

```js
Reflect.getOwnPropertyDescriptor({ x: "hello" }, "x");
// {value: "hello", writable: true, enumerable: true, configurable: true}

Reflect.getOwnPropertyDescriptor({ x: "hello" }, "y");
// undefined

Reflect.getOwnPropertyDescriptor([], "length");
// {value: 0, writable: true, enumerable: false, configurable: false}
```

### Difference with Object.getOwnPropertyDescriptor()

If the `target` argument to this method is not an object (a primitive), then it will cause a {{jsxref("TypeError")}}. With {{jsxref("Object.getOwnPropertyDescriptor")}}, a non-object first argument will be coerced to an object at first.

```js
Reflect.getOwnPropertyDescriptor("foo", 0);
// TypeError: "foo" is not non-null object

Object.getOwnPropertyDescriptor("foo", 0);
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
- [`Proxy`'s `getOwnPropertyDescriptor` handler](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor)
