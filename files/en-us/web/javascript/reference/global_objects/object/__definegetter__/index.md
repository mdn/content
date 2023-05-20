---
title: Object.prototype.__defineGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.Object.defineGetter
---

{{JSRef}}{{Deprecated_Header}}

> **Note:** This feature is deprecated in favor of defining [getters](/en-US/docs/Web/JavaScript/Reference/Functions/get) using the [object initializer syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) or the {{jsxref("Object.defineProperty()")}} API. This method's behavior is only specified for web compatibility, and is not required to be implemented in any platform. It may not work everywhere.

The **`__defineGetter__()`** method binds an object's property to a function to be called when that property is looked up.

## Syntax

```js-nolint
__defineGetter__(prop, func)
```

### Parameters

- `prop`
  - : A string containing the name of the property that the getter `func` is bound to.
- `func`
  - : A function to be bound to a lookup of the specified property.

### Return value

{{jsxref("undefined")}}.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `func` is not a function.

## Description

All objects that inherit from `Object.prototype` (that is, all except [`null`-prototype objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)) inherit the `__defineGetter__()` method. This method allows a [getter](/en-US/docs/Web/JavaScript/Reference/Functions/get) to be defined on a pre-existing object. This is equivalent to [`Object.defineProperty(obj, prop, { get: func, configurable: true, enumerable: true })`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), which means the property is enumerable and configurable, and any existing setter, if present, is preserved.

`__defineGetter__()` is defined in the spec as "normative optional", which means no implementation is required to implement this. However, all major browsers implement it, and due to its continued usage, it's unlikely to be removed. If a browser implements `__defineGetter__()`, it also needs to implement the [`__lookupGetter__()`](Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), [`__lookupSetter__()`](Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__), and [`__defineSetter__()`](Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) methods.

## Examples

### Using \_\_defineGetter\_\_()

```js
const o = {};
o.__defineGetter__("gimmeFive", function () {
  return 5;
});
console.log(o.gimmeFive); // 5
```

### Defining a getter property in standard ways

You can use the `get` syntax to define a getter when the object is first initialized.

```js
const o = {
  get gimmeFive() {
    return 5;
  },
};
console.log(o.gimmeFive); // 5
```

You may also use {{jsxref("Object.defineProperty()")}} to define a getter on an object after it's been created. Compared to `__defineGetter__()`, this method allows you to control the getter's enumerability and configurability, as well as defining [symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) properties. The `Object.defineProperty()` method also works with [`null`-prototype objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), which don't inherit from `Object.prototype` and therefore don't have the `__defineGetter__()` method.

```js
const o = {};
Object.defineProperty(o, "gimmeFive", {
  get() {
    return 5;
  },
  configurable: true,
  enumerable: true,
});
console.log(o.gimmeFive); // 5
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Object.prototype.__defineGetter__` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [`Object.prototype.__defineSetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- {{jsxref("Functions/get", "get")}} syntax
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__lookupGetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- [`Object.prototype.__lookupSetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- [JS Guide: Defining Getters and Setters](/en-US/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters)
- [\[Blog Post\] Deprecation of \_\_defineGetter\_\_ and \_\_defineSetter\_\_](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/)
- [Firefox bug 647423](https://bugzil.la/647423)
