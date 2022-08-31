---
title: Object.prototype.__lookupSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__
tags:
  - Deprecated
  - JavaScript
  - Method
  - Object
  - Prototype
  - Polyfill
browser-compat: javascript.builtins.Object.lookupSetter
---
{{JSRef}} {{deprecated_header}}

The **`__lookupSetter__`** method returns the function bound as
a setter to the specified property.

## Syntax

```js
__lookupSetter__(sprop)
```

### Parameters

- `sprop`
  - : A string containing the name of the property whose setter should be returned.

### Return value

The function bound as a setter to the specified property.

## Description

If a setter has been defined for an object's property, it was not possible to reference
the setter function through that property, because that property refers to the return
value of that function. `__lookupSetter__` can be used to obtain a reference
to the setter function.

It is now possible to do this in a standardized way using
{{jsxref("Object.getOwnPropertyDescriptor()")}}.

## Examples

### Standard-compliant and non-standard ways to get a property setter

```js
const obj = {
  set foo(value) {
    this.bar = value;
  }
};

// Non-standard and deprecated way
obj.__lookupSetter__('foo');
// function foo(value)

// Standard-compliant way
Object.getOwnPropertyDescriptor(obj, 'foo').set;
// function foo(value)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Object.prototype.__lookupSetter__` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [`Object.prototype.__lookupGetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- {{jsxref("Functions/set", "set")}} operator
- {{jsxref("Object.getOwnPropertyDescriptor()")}} and
  {{jsxref("Object.getPrototypeOf()")}}
- [`Object.prototype.__defineGetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [JS Guide: Defining Getters and Setters](/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters)
