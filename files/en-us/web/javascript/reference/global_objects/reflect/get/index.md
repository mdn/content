---
title: Reflect.get()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/get
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - Reflect
  - Polyfill
browser-compat: javascript.builtins.Reflect.get
---
{{JSRef}}

The static **`Reflect.get()`** method works like getting a
property from an object (`target[propertyKey]`) as a function.

{{EmbedInteractiveExample("pages/js/reflect-get.html")}}

## Syntax

```js
Reflect.get(target, propertyKey)
Reflect.get(target, propertyKey, receiver)
```

### Parameters

- `target`
  - : The target object on which to get the property.
- `propertyKey`
  - : The name of the property to get.
- `receiver` {{optional_inline}}
  - : The value of `this` provided for the call to
    `target` if a getter is encountered. When used with
    {{jsxref("Proxy")}}, it can be an object that inherits from
    `target`.

### Return value

The value of the property.

### Exceptions

A {{jsxref("TypeError")}}, if `target` is not an
{{jsxref("Object")}}.

## Description

The `Reflect.get` method allows you to get a property on an object. It is like the
[property accessor](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors) syntax as a function.

## Examples

### Using `Reflect.get()`

```js
// Object
let obj = { x: 1, y: 2 }
Reflect.get(obj, 'x')  // 1

// Array
Reflect.get(['zero', 'one'], 1)  // "one"

// Proxy with a get handler
let x = {p: 1};

let obj = new Proxy(x, {
  get(t, k, r) {
    return k + 'bar'
  }
})
Reflect.get(obj, 'foo')  // "foobar"

//Proxy with get handler and receiver
let x = {p: 1, foo: 2};
let y = {foo: 3};

let obj = new Proxy(x, {
  get(t, prop, receiver) {
    return receiver[prop] + 'bar'
  }
})
Reflect.get(obj, 'foo', y) // "3bar"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Reflect.get` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- [Property accessors](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
