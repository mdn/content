---
title: Reflect
slug: Web/JavaScript/Reference/Global_Objects/Reflect
page-type: javascript-namespace
tags:
  - ECMAScript 2015
  - JavaScript
  - Namespace
  - Overview
  - Reflect
browser-compat: javascript.builtins.Reflect
---

{{JSRef}}

**`Reflect`** is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of [proxy handlers](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy). `Reflect` is not a function object, so it's not constructible.

## Description

Unlike most global objects, `Reflect` is not a constructor. You cannot use it with a [`new` operator](/en-US/docs/Web/JavaScript/Reference/Operators/new) or invoke the `Reflect` object as a function. All properties and methods of `Reflect` are static (just like the {{jsxref("Math")}} object).

The `Reflect` object provides the following static functions which have the same names as the [proxy handler methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy).

Some of these methods are also the same as corresponding methods on {{jsxref("Object")}}, although they do have [some subtle differences](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods) between them.

## Static properties

- `Reflect[@@toStringTag]`
  - : The initial value of the [`@@toStringTag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Reflect"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Static methods

- {{jsxref("Reflect.apply()")}}
  - : Calls a `target` function with arguments as specified by the `argumentsList` parameter. See also {{jsxref("Function.prototype.apply()")}}.
- {{jsxref("Reflect.construct()")}}
  - : The [`new` operator](/en-US/docs/Web/JavaScript/Reference/Operators/new) as a function. Equivalent to calling `new target(...argumentsList)`. Also provides the option to specify a different prototype.
- {{jsxref("Reflect.defineProperty()")}}
  - : Similar to {{jsxref("Object.defineProperty()")}}. Returns a boolean that is `true` if the property was successfully defined.
- {{jsxref("Reflect.deleteProperty()")}}
  - : The [`delete` operator](/en-US/docs/Web/JavaScript/Reference/Operators/delete) as a function. Equivalent to calling `delete target[propertyKey]`.
- {{jsxref("Reflect.get()")}}
  - : Returns the value of the property. Works like getting a property from an object (`target[propertyKey]`) as a function.
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
  - : Similar to {{jsxref("Object.getOwnPropertyDescriptor()")}}. Returns a property descriptor of the given property if it exists on the object, {{jsxref("undefined")}} otherwise.
- {{jsxref("Reflect.getPrototypeOf()")}}
  - : Same as {{jsxref("Object.getPrototypeOf()")}}.
- {{jsxref("Reflect.has()")}}
  - : Returns a boolean indicating whether the target has the property. Either as own or inherited. Works like the [`in` operator](/en-US/docs/Web/JavaScript/Reference/Operators/in) as a function.
- {{jsxref("Reflect.isExtensible()")}}
  - : Same as {{jsxref("Object.isExtensible()")}}. Returns a boolean that is `true` if the target is extensible.
- {{jsxref("Reflect.ownKeys()")}}
  - : Returns an array of the target object's own (not inherited) property keys.
- {{jsxref("Reflect.preventExtensions()")}}
  - : Similar to {{jsxref("Object.preventExtensions()")}}. Returns a boolean that is `true` if the update was successful.
- {{jsxref("Reflect.set()")}}
  - : A function that assigns values to properties. Returns a boolean that is `true` if the update was successful.
- {{jsxref("Reflect.setPrototypeOf()")}}
  - : A function that sets the prototype of an object. Returns a boolean that is `true` if the update was successful.

## Examples

### Detecting whether an object contains certain properties

```js
const duck = {
  name: "Maurice",
  color: "white",
  greeting() {
    console.log(`Quaaaack! My name is ${this.name}`);
  },
};

Reflect.has(duck, "color");
// true
Reflect.has(duck, "haircut");
// false
```

### Returning the object's own keys

```js
Reflect.ownKeys(duck);
// [ "name", "color", "greeting" ]
```

### Adding a new property to the object

```js
Reflect.set(duck, "eyes", "black");
// returns "true" if successful
// "duck" now contains the property "eyes: 'black'"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{jsxref("Proxy")}} global object
- The [`Proxy()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
