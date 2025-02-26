---
title: Object.prototype.__defineSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.Object.defineSetter
---

{{JSRef}}{{Deprecated_Header}}

> [!NOTE]
> This feature is deprecated in favor of defining [setters](/en-US/docs/Web/JavaScript/Reference/Functions/set) using the [object initializer syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) or the {{jsxref("Object.defineProperty()")}} API. This method's behavior is only specified for web compatibility, and is not required to be implemented in any platform. It may not work everywhere.

The **`__defineSetter__()`** method of {{jsxref("Object")}} instances binds an object's property to a function to be called when an attempt is made to set that property.

## Syntax

```js-nolint
__defineSetter__(prop, func)
```

### Parameters

- `prop`
  - : A string containing the name of the property that the setter `func` is bound to.
- `func`
  - : A function to be called when there is an attempt to set the specified property. This function receives the following parameter:
    - `val`
      - : The value attempted to be assigned to `prop`.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `func` is not a function.

## Description

All objects that inherit from `Object.prototype` (that is, all except [`null`-prototype objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)) inherit the `__defineSetter__()` method. This method allows a [setter](/en-US/docs/Web/JavaScript/Reference/Functions/set) to be defined on a pre-existing object. This is equivalent to [`Object.defineProperty(obj, prop, { set: func, configurable: true, enumerable: true })`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), which means the property is enumerable and configurable, and any existing getter, if present, is preserved.

`__defineSetter__()` is defined in the spec as "normative optional", which means no implementation is required to implement this. However, all major browsers implement it, and due to its continued usage, it's unlikely to be removed. If a browser implements `__defineSetter__()`, it also needs to implement the [`__lookupGetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), [`__lookupSetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__), and [`__defineGetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) methods.

## Examples

### Using \_\_defineSetter\_\_()

```js
const o = {};
o.__defineSetter__("value", function (val) {
  this.anotherValue = val;
});
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

### Defining a setter property in standard ways

You can use the `set` syntax to define a setter when the object is first initialized.

```js
const o = {
  set value(val) {
    this.anotherValue = val;
  },
};
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

You may also use {{jsxref("Object.defineProperty()")}} to define a setter on an object after it's been created. Compared to `__defineSetter__()`, this method allows you to control the setter's enumerability and configurability, as well as defining [symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) properties. The `Object.defineProperty()` method also works with [`null`-prototype objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), which don't inherit from `Object.prototype` and therefore don't have the `__defineSetter__()` method.

```js
const o = {};
Object.defineProperty(o, "value", {
  set(val) {
    this.anotherValue = val;
  },
  configurable: true,
  enumerable: true,
});
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Object.prototype.__defineSetter__` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [`Object.prototype.__defineGetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- {{jsxref("Functions/set", "set")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__lookupGetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- [`Object.prototype.__lookupSetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- [JS Guide: Defining Getters and Setters](/en-US/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters)
- [Firefox bug 647423](https://bugzil.la/647423)
