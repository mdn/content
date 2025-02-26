---
title: Object.prototype.propertyIsEnumerable()
slug: Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
page-type: javascript-instance-method
browser-compat: javascript.builtins.Object.propertyIsEnumerable
---

{{JSRef}}

The **`propertyIsEnumerable()`** method of {{jsxref("Object")}} instances returns a boolean indicating whether the specified property is this object's [enumerable own](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) property.

{{InteractiveExample("JavaScript Demo: Object.prototype.propertyIsEnumerable()", "taller")}}

```js interactive-example
const object1 = {};
const array1 = [];
object1.property1 = 42;
array1[0] = 42;

console.log(object1.propertyIsEnumerable("property1"));
// Expected output: true

console.log(array1.propertyIsEnumerable(0));
// Expected output: true

console.log(array1.propertyIsEnumerable("length"));
// Expected output: false
```

## Syntax

```js-nolint
propertyIsEnumerable(prop)
```

### Parameters

- `prop`
  - : The name of the property to test. Can be a string or a {{jsxref("Symbol")}}.

### Return value

A boolean value indicating whether the specified property is enumerable and is the object's own property.

## Description

All objects that inherit from `Object.prototype` (that is, all except [`null`-prototype objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)) inherit the `propertyIsEnumerable()` method. This method determines if the specified property, string or symbol, is an enumerable own property of the object. If the object does not have the specified property, this method returns `false`.

This method is equivalent to [`Object.getOwnPropertyDescriptor(obj, prop)?.enumerable ?? false`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor).

## Examples

### Using propertyIsEnumerable()

The following example shows the use of `propertyIsEnumerable()` on objects and arrays.

```js
const o = {};
const a = [];
o.prop = "is enumerable";
a[0] = "is enumerable";

o.propertyIsEnumerable("prop"); // true
a.propertyIsEnumerable(0); // true
```

### User-defined vs. built-in objects

Most built-in properties are non-enumerable by default, while user-created object properties are often enumerable, unless explicitly designated otherwise.

```js
const a = ["is enumerable"];

a.propertyIsEnumerable(0); // true
a.propertyIsEnumerable("length"); // false

Math.propertyIsEnumerable("random"); // false
globalThis.propertyIsEnumerable("Math"); // false
```

### Direct vs. inherited properties

Only enumerable own properties cause `propertyIsEnumerable()` to return `true`, although all enumerable properties, including inherited ones, are visited by the [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loop.

```js
const o1 = {
  enumerableInherited: "is enumerable",
};
Object.defineProperty(o1, "nonEnumerableInherited", {
  value: "is non-enumerable",
  enumerable: false,
});
const o2 = {
  // o1 is the prototype of o2
  __proto__: o1,
  enumerableOwn: "is enumerable",
};
Object.defineProperty(o2, "nonEnumerableOwn", {
  value: "is non-enumerable",
  enumerable: false,
});

o2.propertyIsEnumerable("enumerableInherited"); // false
o2.propertyIsEnumerable("nonEnumerableInherited"); // false
o2.propertyIsEnumerable("enumerableOwn"); // true
o2.propertyIsEnumerable("nonEnumerableOwn"); // false
```

### Testing symbol properties

{{jsxref("Symbol")}} properties are also supported by `propertyIsEnumerable()`. Note that most enumeration methods only visit string properties; enumerability of symbol properties is only useful when using {{jsxref("Object.assign()")}} or [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax). For more information, see [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties).

```js
const sym = Symbol("enumerable");
const sym2 = Symbol("non-enumerable");
const o = {
  [sym]: "is enumerable",
};
Object.defineProperty(o, sym2, {
  value: "is non-enumerable",
  enumerable: false,
});

o.propertyIsEnumerable(sym); // true
o.propertyIsEnumerable(sym2); // false
```

### Usage with null-prototype objects

Because `null`-prototype objects do not inherit from `Object.prototype`, they do not inherit the `propertyIsEnumerable()` method. You must call `Object.prototype.propertyIsEnumerable` with the object as `this` instead.

```js
const o = {
  __proto__: null,
  enumerableOwn: "is enumerable",
};

o.propertyIsEnumerable("enumerableOwn"); // TypeError: o.propertyIsEnumerable is not a function
Object.prototype.propertyIsEnumerable.call(o, "enumerableOwn"); // true
```

Alternatively, you may use {{jsxref("Object.getOwnPropertyDescriptor()")}} instead, which also helps to distinguish between non-existent properties and actually non-enumerable properties.

```js
const o = {
  __proto__: null,
  enumerableOwn: "is enumerable",
};

Object.getOwnPropertyDescriptor(o, "enumerableOwn")?.enumerable; // true
Object.getOwnPropertyDescriptor(o, "nonExistent")?.enumerable; // undefined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.defineProperty()")}}
