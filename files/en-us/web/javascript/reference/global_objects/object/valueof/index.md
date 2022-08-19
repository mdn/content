---
title: Object.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
tags:
  - JavaScript
  - Method
  - Object
  - Prototype
browser-compat: javascript.builtins.Object.valueOf
---
{{JSRef}}

The **`valueOf()`** method returns the primitive value of the
specified object.

{{EmbedInteractiveExample("pages/js/object-prototype-valueof.html")}}

## Syntax

```js
valueOf()
```

### Return value

The primitive value of the specified object.

> **Note:** A [(unary) plus sign](/en-US/docs/Web/JavaScript/Reference/Operators#unary_plus)
> can sometimes be used as a shorthand for `valueOf`, e.g. in
> `+new Number()`. Also see [Using unary plus](#using_unary_plus).

## Description

JavaScript calls the `valueOf` method to convert an object to a primitive
value. You rarely need to invoke the `valueOf` method yourself; JavaScript
automatically invokes it when encountering an object where a primitive value is
expected.

By default, the `valueOf` method is inherited by every object descended from
{{jsxref("Object")}}. Every built-in core object overrides this method to return an
appropriate value. If an object has no primitive value, `valueOf` returns the
object itself.

You can use `valueOf` within your own code to convert a built-in object into
a primitive value. When you create a custom object, you can override
`Object.prototype.valueOf()` to call a custom method instead of the default
{{jsxref("Object")}} method.

### Overriding valueOf for custom objects

You can create a function to be called in place of the default `valueOf`
method. Your function must take no arguments.

Suppose you have an object type `MyNumberType` and you want to create a
`valueOf` method for it. The following code assigns a user-defined function
to the object's `valueOf` method:

```js
MyNumberType.prototype.valueOf = function () {
  return customPrimitiveValue;
};
```

With the preceding code in place, any time an object of type `MyNumberType`
is used in a context where it is to be represented as a primitive value, JavaScript
automatically calls the function defined in the preceding code.

An object's `valueOf` method is usually invoked by JavaScript, but you can
invoke it yourself as follows:

```js
myNumberType.valueOf()
```

> **Note:** Objects in string contexts convert via the
> {{jsxref("Object.toString", "toString()")}} method, which is different from
> {{jsxref("String")}} objects converting to string primitives using
> `valueOf`. All objects have a string conversion, if only
> `"[object type]"`. But many objects do not convert to number,
> boolean, or function.

## Examples

### Using valueOf on custom types

```js
function MyNumberType(n) {
  this.number = n;
}

MyNumberType.prototype.valueOf = function () {
  return this.number;
};

const myObj = new MyNumberType(4);
myObj + 3; // 7
```

### Using unary plus

```js
+"5" // 5 (string to number)
+"" // 0 (string to number)
+"1 + 2" // NaN (doesn't evaluate)
+new Date() // same as (new Date()).getTime()
+"foo" // NaN (string to number)
+{} // NaN
+[] // 0 (toString() returns an empty string list)
+[1] // 1
+[1,2] // NaN
+new Set([1]) // NaN
+BigInt(1) // Uncaught TypeError: Cannot convert a BigInt value to a number
+undefined // NaN
+null // 0
+true // 1
+false // 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("parseInt", "parseInt()")}}
- {{jsxref("Symbol.toPrimitive")}}
