---
title: Object.hasOwn()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwn
page-type: javascript-static-method
browser-compat: javascript.builtins.Object.hasOwn
---

{{JSRef}}

The **`Object.hasOwn()`** static method returns `true` if the specified object has the indicated property as its _own_ property.
If the property is inherited, or does not exist, the method returns `false`.

> **Note:** `Object.hasOwn()` is intended as a replacement for {{jsxref("Object.prototype.hasOwnProperty()")}}.

{{InteractiveExample("JavaScript Demo: Object.hasOwn()")}}

```js interactive-example
const object1 = {
  prop: "exists",
};

console.log(Object.hasOwn(object1, "prop"));
// Expected output: true

console.log(Object.hasOwn(object1, "toString"));
// Expected output: false

console.log(Object.hasOwn(object1, "undeclaredPropertyValue"));
// Expected output: false
```

## Syntax

```js-nolint
Object.hasOwn(obj, prop)
```

### Parameters

- `obj`
  - : The JavaScript object instance to test.
- `prop`
  - : The {{jsxref("String")}} name or [Symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) of the property to test.

### Return value

`true` if the specified object has directly defined the specified property.
Otherwise `false`

## Description

The **`Object.hasOwn()`** method returns `true` if the specified property is a
direct property of the object — even if the property value is `null` or `undefined`.
The method returns `false` if the property is inherited, or has not been declared at all.
Unlike the {{jsxref("Operators/in", "in")}} operator, this
method does not check for the specified property in the object's prototype chain.

It is recommended over {{jsxref("Object.prototype.hasOwnProperty()")}} because
it works for [`null`-prototype objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) and with objects that
have overridden the inherited `hasOwnProperty()` method. While it is possible to
workaround these problems by calling `Object.prototype.hasOwnProperty()` on an
external object, `Object.hasOwn()` is more intuitive.

## Examples

### Using hasOwn to test for a property's existence

The following code shows how to determine whether the `example` object contains a property named `prop`.

```js
const example = {};
Object.hasOwn(example, "prop"); // false - 'prop' has not been defined

example.prop = "exists";
Object.hasOwn(example, "prop"); // true - 'prop' has been defined

example.prop = null;
Object.hasOwn(example, "prop"); // true - own property exists with value of null

example.prop = undefined;
Object.hasOwn(example, "prop"); // true - own property exists with value of undefined
```

### Direct vs. inherited properties

The following example differentiates between direct properties and properties inherited through the prototype chain:

```js
const example = {};
example.prop = "exists";

// `hasOwn` will only return true for direct properties:
Object.hasOwn(example, "prop"); // true
Object.hasOwn(example, "toString"); // false
Object.hasOwn(example, "hasOwnProperty"); // false

// The `in` operator will return true for direct or inherited properties:
"prop" in example; // true
"toString" in example; // true
"hasOwnProperty" in example; // true
```

### Iterating over the properties of an object

To iterate over the enumerable properties of an object, you _should_ use:

```js
const example = { foo: true, bar: true };
for (const name of Object.keys(example)) {
  // …
}
```

But if you need to use `for...in`, you can use `Object.hasOwn()` to skip the inherited properties:

```js
const example = { foo: true, bar: true };
for (const name in example) {
  if (Object.hasOwn(example, name)) {
    // …
  }
}
```

### Checking if an Array index exists

The elements of an {{jsxref("Array")}} are defined as direct properties, so
you can use `hasOwn()` method to check whether a particular index exists:

```js
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
Object.hasOwn(fruits, 3); // true ('Orange')
Object.hasOwn(fruits, 4); // false - not defined
```

### Problematic cases for hasOwnProperty

This section demonstrates that `hasOwn()` is immune to the problems that affect
`hasOwnProperty`. Firstly, it can be used with objects that have reimplemented
`hasOwnProperty()`:

```js
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: "The dragons be out of office",
};

if (Object.hasOwn(foo, "bar")) {
  console.log(foo.bar); // true - re-implementation of hasOwnProperty() does not affect Object
}
```

It can also be used with [`null`-prototype objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). These do
not inherit from `Object.prototype`, and so `hasOwnProperty()` is inaccessible.

```js
const foo = Object.create(null);
foo.prop = "exists";
if (Object.hasOwn(foo, "prop")) {
  console.log(foo.prop); // true - works irrespective of how the object is created.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Object.hasOwn` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
