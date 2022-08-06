---
title: Reflect
slug: Web/JavaScript/Reference/Global_Objects/Reflect
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

## Static methods

- {{jsxref("Reflect.apply()", "Reflect.apply(<var>target</var>, <var>thisArgument</var>, <var>argumentsList</var>)")}}
  - : Calls a `target` function with arguments as specified by the `argumentsList` parameter. See also {{jsxref("Function.prototype.apply()")}}.
- {{jsxref("Reflect.construct()", "Reflect.construct(<var>target</var>, <var>argumentsList</var>[, <var>newTarget</var>])")}}
  - : The [`new` operator](/en-US/docs/Web/JavaScript/Reference/Operators/new) as a function. Equivalent to calling `new target(...argumentsList)`. Also provides the option to specify a different prototype.
- {{jsxref("Reflect.defineProperty()", "Reflect.defineProperty(<var>target</var>, <var>propertyKey</var>, <var>attributes</var>)")}}
  - : Similar to {{jsxref("Object.defineProperty()")}}. Returns a boolean that is `true` if the property was successfully defined.
- {{jsxref("Reflect.deleteProperty()", "Reflect.deleteProperty(<var>target</var>, <var>propertyKey</var>)")}}
  - : The [`delete` operator](/en-US/docs/Web/JavaScript/Reference/Operators/delete) as a function. Equivalent to calling `delete target[propertyKey]`.
- {{jsxref("Reflect.get()", "Reflect.get(<var>target</var>, <var>propertyKey</var>[, <var>receiver</var>])")}}
  - : Returns the value of the property. Works like getting a property from an object (`target[propertyKey]`) as a function.
- {{jsxref("Reflect.getOwnPropertyDescriptor()", "Reflect.getOwnPropertyDescriptor(<var>target</var>, <var>propertyKey</var>)")}}
  - : Similar to {{jsxref("Object.getOwnPropertyDescriptor()")}}. Returns a property descriptor of the given property if it exists on the object,  {{jsxref("undefined")}} otherwise.
- {{jsxref("Reflect.getPrototypeOf()", "Reflect.getPrototypeOf(<var>target</var>)")}}
  - : Same as {{jsxref("Object.getPrototypeOf()")}}.
- {{jsxref("Reflect.has()", "Reflect.has(<var>target, propertyKey</var>)")}}
  - : Returns a boolean indicating whether the target has the property. Either as own or inherited. Works like the [`in` operator](/en-US/docs/Web/JavaScript/Reference/Operators/in) as a function.
- {{jsxref("Reflect.isExtensible()", "Reflect.isExtensible(<var>target</var>)")}}
  - : Same as {{jsxref("Object.isExtensible()")}}. Returns a boolean that is `true` if the target is extensible.
- {{jsxref("Reflect.ownKeys()", "Reflect.ownKeys(<var>target</var>)")}}
  - : Returns an array of the target object's own (not inherited) property keys.
- {{jsxref("Reflect.preventExtensions()", "Reflect.preventExtensions(<var>target</var>)")}}
  - : Similar to {{jsxref("Object.preventExtensions()")}}. Returns a boolean that is `true` if the update was successful.
- {{jsxref("Reflect.set()", "Reflect.set(<var>target</var>, <var>propertyKey</var>, <var>value</var>[, <var>receiver</var>])")}}
  - : A function that assigns values to properties. Returns a boolean that is `true` if the update was successful.
- {{jsxref("Reflect.setPrototypeOf()", "Reflect.setPrototypeOf(<var>target</var>, <var>prototype</var>)")}}
  - : A function that sets the prototype of an object. Returns a boolean that is `true` if the update was successful.

## Examples

### Detecting whether an object contains certain properties

```js
const duck = {
  name: 'Maurice',
  color: 'white',
  greeting() {
    console.log(`Quaaaack! My name is ${this.name}`);
  }
}

Reflect.has(duck, 'color');
// true
Reflect.has(duck, 'haircut');
// false
```

### Returning the object's own keys

```js
Reflect.ownKeys(duck);
// [ "name", "color", "greeting" ]
```

### Adding a new property to the object

```js
Reflect.set(duck, 'eyes', 'black');
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
