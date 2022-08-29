---
title: Object.prototype.__defineSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__
tags:
  - Deprecated
  - JavaScript
  - Method
  - Object
  - Prototype
  - Polyfill
browser-compat: javascript.builtins.Object.defineSetter
---
{{JSRef}}{{Deprecated_Header}}

> **Warning:** This feature is deprecated in favor of defining setters using the
> [object initializer syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
> or the {{jsxref("Object.defineProperty()")}} API.
>
> However, as it is widely implemented and used on the Web, it is very unlikely that
> browsers will stop implementing it.

The **`__defineSetter__`** method binds an object's property to
a function to be called when an attempt is made to set that property.

## Syntax

```js
__defineSetter__(prop, fun)
```

### Parameters

- `prop`
  - : A string containing the name of the property to be bound to the given function.
- `fun`
  - : A function to be called when there is an attempt to set the specified property. This
    function receives the following parameter:
    - `val`
      - : An alias for the variable that holds the value attempted to be assigned to `prop`.

### Return value

{{jsxref("undefined")}}.

## Description

The `__defineSetter__` method allows a {{jsxref("Functions/set", "setter",
  "", 1)}} to be defined on a pre-existing object.

## Examples

### Non-standard and deprecated way

```js
const o = {};
o.__defineSetter__('value', function (val) {
  this.anotherValue = val;
});
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

### Standard-compliant ways

```js
// Using the set operator
const o = { set value(val) { this.anotherValue = val; } };
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

```js
// Using Object.defineProperty
const o = {};
Object.defineProperty(o, 'value', {
  set(val) {
    this.anotherValue = val;
  },
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
- {{jsxref("Functions/set", "set")}} operator
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__lookupGetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- [`Object.prototype.__lookupSetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- [JS Guide: Defining Getters and Setters](/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters)
- [\[Blog Post\] Deprecation of \_\_defineGetter\_\_ and \_\_defineSetter\_\_](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/)
- {{bug(647423)}}
