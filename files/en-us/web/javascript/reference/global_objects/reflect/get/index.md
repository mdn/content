---
title: Reflect.get()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/get
page-type: javascript-static-method
browser-compat: javascript.builtins.Reflect.get
---

{{JSRef}}

The **`Reflect.get()`** static method is like the [property accessor](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors) syntax, but as a function.

{{EmbedInteractiveExample("pages/js/reflect-get.html")}}

## Syntax

```js-nolint
Reflect.get(target, propertyKey)
Reflect.get(target, propertyKey, receiver)
```

### Parameters

- `target`
  - : The target object on which to get the property.
- `propertyKey`
  - : The name of the property to get.
- `receiver` {{optional_inline}}
  - : The value of `this` provided for the call to `target` if a getter is encountered.

### Return value

The value of the property.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `target` is not an object.

## Description

`Reflect.get()` provides the reflective semantic of a [property access](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors). That is, `Reflect.get(target, propertyKey, receiver)` is semantically equivalent to:

```js
target[propertyKey];
```

Note that in a normal property access, `target` and `receiver` would observably be the same object.

`Reflect.get()` invokes the `[[Get]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) of `target`.

## Examples

### Using Reflect.get()

```js
// Object
const obj1 = { x: 1, y: 2 };
Reflect.get(obj1, "x"); // 1

// Array
Reflect.get(["zero", "one"], 1); // "one"

// Proxy with a get handler
const obj2 = new Proxy(
  { p: 1 },
  {
    get(t, k, r) {
      return k + "bar";
    },
  },
);
Reflect.get(obj2, "foo"); // "foobar"

// Proxy with get handler and receiver
const obj3 = new Proxy(
  { p: 1, foo: 2 },
  {
    get(t, prop, receiver) {
      return receiver[prop] + "bar";
    },
  },
);
Reflect.get(obj3, "foo", { foo: 3 }); // "3bar"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Reflect.get` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- [Property accessors](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [`Proxy`'s `get` handler](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get)
