---
title: Reflect
slug: Web/JavaScript/Reference/Global_Objects/Reflect
page-type: javascript-namespace
browser-compat: javascript.builtins.Reflect
---

{{JSRef}}

The **`Reflect`** namespace object contains static methods for invoking interceptable JavaScript object internal methods. The methods are the same as those of [proxy handlers](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy).

## Description

Unlike most global objects, `Reflect` is not a constructor. You cannot use it with the [`new` operator](/en-US/docs/Web/JavaScript/Reference/Operators/new) or invoke the `Reflect` object as a function. All properties and methods of `Reflect` are static (just like the {{jsxref("Math")}} object).

The `Reflect` object provides a collection of static functions which have the same names as the [proxy handler methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy).

The major use case of `Reflect` is to provide default forwarding behavior in `Proxy` handler traps. A [trap](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#terminology) is used to intercept an operation on an object — it provides a custom implementation for an [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods). The `Reflect` API is used to invoke the corresponding internal method. For example, the code below creates a proxy `p` with a [`deleteProperty`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty) trap that intercepts the `[[Delete]]` internal method. `Reflect.deleteProperty()` is used to invoke the default `[[Delete]]` behavior on `targetObject` directly. You can replace it with [`delete`](/en-US/docs/Web/JavaScript/Reference/Operators/delete), but using `Reflect` saves you from having to remember the syntax that each internal method corresponds to.

```js
const p = new Proxy(
  {},
  {
    deleteProperty(targetObject, property) {
      // Custom functionality: log the deletion
      console.log("Deleting property:", property);

      // Execute the default introspection behavior
      return Reflect.deleteProperty(targetObject, property);
    },
  },
);
```

The `Reflect` methods also allow finer control of how the internal method is invoked. For example, {{jsxref("Reflect.construct()")}} is the only way to construct a target function with a specific [`new.target`](/en-US/docs/Web/JavaScript/Reference/Operators/new.target) value. If you use the [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new) operator to invoke a function, the `new.target` value is always the function itself. This has important effects with [subclassing](/en-US/docs/Web/JavaScript/Reference/Operators/new.target#new.target_using_reflect.construct). For another example, {{jsxref("Reflect.get()")}} allows you to run a [getter](/en-US/docs/Web/JavaScript/Reference/Functions/get) with a custom `this` value, while [property accessors](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors) always use the current object as the `this` value.

Nearly every `Reflect` method's behavior can be done with some other syntax or method. Some of these methods have corresponding static methods of the same name on {{jsxref("Object")}}, although they do have some subtle differences. For the exact differences, see the description for each `Reflect` method.

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
