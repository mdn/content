---
title: Object.prototype.__defineGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__
tags:
  - Deprecated
  - JavaScript
  - Method
  - Object
  - Prototype
  - Polyfill
browser-compat: javascript.builtins.Object.defineGetter
---
{{JSRef}}

> **Warning:** This feature is deprecated in favor of defining getters using the [object
> initializer syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) or the {{jsxref("Object.defineProperty()")}} API. While this
> feature is widely implemented, it is only described in the [ECMAScript
> specification](https://tc39.github.io/ecma262/#sec-additional-ecmascript-features-for-web-browsers) because of legacy usage. This method should not be used since
> better alternatives exist.

The **`__defineGetter__`** method binds an object's property to
a function to be called when that property is looked up.

## Syntax

```js
__defineGetter__(prop, func)
```

### Parameters

- `prop`
  - : A string containing the name of the property to bind to the given function.
- `func`
  - : A function to be bound to a lookup of the specified property.

### Return value

{{jsxref("undefined")}}.

## Description

The `__defineGetter__` allows a {{jsxref("Functions/get", "getter", "", 1)}}
to be defined on a pre-existing object.

## Examples

### Non-standard and deprecated way

```js
var o = {};
o.__defineGetter__('gimmeFive', function() { return 5; });
console.log(o.gimmeFive); // 5
```

### Standard-compliant ways

```js
// Using the get operator
var o = { get gimmeFive() { return 5; } };
console.log(o.gimmeFive); // 5

// Using Object.defineProperty
var o = {};
Object.defineProperty(o, 'gimmeFive', {
  get: function() {
    return 5;
  }
});
console.log(o.gimmeFive); // 5
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `Object.prototype.__defineGetter__` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.prototype.__defineSetter__()")}}
- {{jsxref("Functions/get", "get")}} operator
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.prototype.__lookupGetter__()")}}
- {{jsxref("Object.prototype.__lookupSetter__()")}}
- [JS
  Guide: Defining Getters and Setters](/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters)
- [\[Blog
  Post\] Deprecation of \_\_defineGetter\_\_ and \_\_defineSetter\_\_](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/)
- {{bug(647423)}}
