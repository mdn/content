---
title: Object.prototype.__lookupSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.Object.lookupSetter
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> This feature is deprecated in favor of the {{jsxref("Object.getOwnPropertyDescriptor()")}} API. This method's behavior is only specified for web compatibility, and is not required to be implemented in any platform. It may not work everywhere.

The **`__lookupSetter__()`** method of {{jsxref("Object")}} instances returns the function bound as a setter to the specified property.

## Syntax

```js-nolint
__lookupSetter__(prop)
```

### Parameters

- `prop`
  - : A string containing the name of the property whose setter should be returned.

### Return value

The function bound as a setter to the specified property. Returns `undefined` if no such property is found, or the property is a [data property](/en-US/docs/Web/JavaScript/Data_structures#data_property).

## Description

All objects that inherit from `Object.prototype` (that is, all except [`null`-prototype objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)) inherit the `__lookupSetter__()` method. If a [setter](/en-US/docs/Web/JavaScript/Reference/Functions/get) has been defined for an object's property, it's not possible to reference the setter function through that property, because that property only calls the function when it's being set. `__lookupSetter__()` can be used to obtain a reference to the setter function.

`__lookupSetter__()` walks up the [prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) to find the specified property. If any object along the prototype chain has the specified [own property](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn), the `set` attribute of the [property descriptor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) for that property is returned. If that property is a data property, `undefined` is returned. If the property is not found along the entire prototype chain, `undefined` is also returned.

`__lookupSetter__()` is defined in the spec as "normative optional", which means no implementation is required to implement this. However, all major browsers implement it, and due to its continued usage, it's unlikely to be removed. If a browser implements `__lookupSetter__()`, it also needs to implement the [`__lookupGetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), [`__defineGetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), and [`__defineSetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) methods.

## Examples

### Using \_\_lookupSetter\_\_()

```js
const obj = {
  set foo(value) {
    this.bar = value;
  },
};

obj.__lookupSetter__("foo");
// [Function: set foo]
```

### Looking up a property's setter in the standard way

You should use the {{jsxref("Object.getOwnPropertyDescriptor()")}} API to look up a property's setter. Compared to `__lookupSetter__()`, this method allows looking up [symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) properties. The `Object.getOwnPropertyDescriptor()` method also works with [`null`-prototype objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), which don't inherit from `Object.prototype` and therefore don't have the `__lookupSetter__()` method. If `__lookupSetter__()`'s behavior of walking up the prototype chain is important, you may implement it yourself with {{jsxref("Object.getPrototypeOf()")}}.

```js
const obj = {
  set foo(value) {
    this.bar = value;
  },
};

Object.getOwnPropertyDescriptor(obj, "foo").set;
// [Function: set foo]
```

```js
const obj2 = {
  __proto__: {
    set foo(value) {
      this.bar = value;
    },
  },
};

function findSetter(obj, prop) {
  while (obj) {
    const desc = Object.getOwnPropertyDescriptor(obj, prop);
    if (desc) {
      return desc.set;
    }
    obj = Object.getPrototypeOf(obj);
  }
}

console.log(findSetter(obj2, "foo")); // [Function: set foo]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Object.prototype.__lookupSetter__` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [`Object.prototype.__lookupGetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- {{jsxref("Functions/set", "set")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- [`Object.prototype.__defineGetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [JS Guide: Defining Getters and Setters](/en-US/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters)
