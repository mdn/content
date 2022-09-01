---
title: Object.prototype.__lookupGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__
tags:
  - Deprecated
  - JavaScript
  - Method
  - Object
  - Prototype
  - Polyfill
browser-compat: javascript.builtins.Object.lookupGetter
---
{{JSRef}} {{deprecated_header}}

The **`__lookupGetter__`** method returns the function bound as
a getter to the specified property.

## Syntax

```js
__lookupGetter__(sprop)
```

### Parameters

- `sprop`
  - : A string containing the name of the property whose getter should be returned.

### Return value

The function bound as a getter to the specified property.

## Description

If a getter has been defined for an object's property, it's not possible to reference
the getter function through that property, because that property refers to the return
value of that function. `__lookupGetter__` can be used to obtain a reference
to the getter function.

It is now possible to do this in a standardized way using
{{jsxref("Object.getOwnPropertyDescriptor()")}} and
{{jsxref("Object.getPrototypeOf()")}}.

## Examples

### Standard-compliant and non-standard ways to get a property getter

```js
const obj = {
  get foo() {
    return Math.random() > 0.5 ? 'foo' : 'bar';
  }
};

// Non-standard and deprecated way
obj.__lookupGetter__('foo');
// [Function: get foo]

// Standard-compliant way
Object.getOwnPropertyDescriptor(obj, "foo").get;
// [Function: get foo]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Object.prototype.__lookupGetter__` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [`Object.prototype.__lookupSetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- {{jsxref("Functions/get", "get")}} operator
- {{jsxref("Object.getOwnPropertyDescriptor()")}} and
  {{jsxref("Object.getPrototypeOf()")}}
- [`Object.prototype.__defineGetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [JS Guide: Defining Getters and Setters](/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters)
