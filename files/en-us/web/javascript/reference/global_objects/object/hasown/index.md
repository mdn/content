---
title: Object.hasOwn()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwn
tags:
  - JavaScript
  - Method
  - Object
  - hasOwn
  - Experimental
  - Polyfill
browser-compat: javascript.builtins.Object.hasOwn
---
{{JSRef}}{{SeeCompatTable}}

The **`Object.hasOwn()`** static method returns `true` if the specified object has the indicated property as its _own_ property.
If the property is inherited, or does not exist, the method returns `false`.


> **Note:** `Object.hasOwn()` is intended as a replacement for {{jsxref("Object.hasOwnProperty()")}}.

{{EmbedInteractiveExample("pages/js/object-hasown.html")}}

## Syntax

```js
Object.hasOwn(instance,prop)
```

### Parameters

- _instance_
  - : The JavaScript object instance to test.
- _prop_
  - : The {{jsxref("String")}} name or {{Glossary("Symbol")}} of
    the property to test.

### Return value

`true` if the specified object has directly defined the specified property.
Otherwise `false`

## Description

The **`Object.hasOwn()`** method returns `true` if the specified property is a
direct property of the object — even if the property value is `null` or `undefined`.
The method returns `false` if the property is inherited, or has not been declared at all.
Unlike the {{jsxref("Operators/in", "in")}} operator, this
method does not check for the specified property in the object's prototype chain.

It is recommended over {{jsxref("Object.hasOwnProperty()")}} because
it works for objects created using `Object.create(null)` and with objects that
have overridden the inherited `hasOwnProperty()` method. While it is possible to
workaround these problems by calling `Object.prototype.hasOwnProperty()` on an
external object, `Object.hasOwn()` is more intuitive.

## Examples

### Using hasOwn to test for a property's existence 

The following code shows how to determine whether the `example` object contains a property named `prop`.
 
```js
let example = {};
Object.hasOwn(example, 'prop');   // false = 'prop' has not been defined

example.prop = 'exists';
Object.hasOwn(example, 'prop');   // true - 'prop' has been defined

example.prop = null;
Object.hasOwn(example, 'prop');   // true - own property exists with value of null

example.prop = undefined;
Object.hasOwn(example, 'prop');   // true - own property exists with value of undefined
```

### Direct vs. inherited properties

The following example differentiates between direct properties and properties inherited through the prototype chain:

```js
let example = {}
example.prop = 'exists';

// `hasOwn` will only return true for direct properties:
Object.hasOwn(example, 'prop');             // returns true
Object.hasOwn(example, 'toString');         // returns false
Object.hasOwn(example, 'hasOwnProperty');   // returns false

// The `in` operator will return true for direct or inherited properties:
'prop' in example;                          // returns true
'toString' in example;                      // returns true
'hasOwnProperty' in example;                // returns true
```

### Iterating over the properties of an object

To iterate over the enumerable properties of an object, you _should_ use:

```js
let example = { foo: true, bar: true };
for (let name of Object.keys(example)) {
  // ...
}
```

But if you need to use `for..in`, you can use `Object.hasOwn()` to skip the inherited properties:

```js
let example = { foo: true, bar: true };
for (let name in example) {
  if (Object.hasOwn(example, name)) {
    // ...
  }
}
```

### Checking if an Array index exists

The elements of an {{jsxref("Array")}} are defined as direct properties, so
you can use `hasOwn()` method to check whether a particular index exists:

```js
let fruits = ['Apple', 'Banana','Watermelon', 'Orange'];
Object.hasOwn(fruits, 3);   // true ('Orange')
Object.hasOwn(fruits, 4);   // false - not defined
    
```

### Problematic cases for hasOwnProperty

This section demonstrate that `hasOwn()` is immune to the problems that affect
`hasOwnProperty`. Firstly, it can be used with objects that have reimplemented
`hasOwnProperty()`:

```js
let foo = {
  hasOwnProperty: function() {
    return false;
  },
  bar: 'The dragons be out of office'
};

if (Object.hasOwn(foo, 'bar')) {
  console.log(foo.bar); //true - remplementation of hasOwnProperty() does not affect Object
}
```

It can also be used to test objects created using
{{jsxref("Object.create()","Object.create(null)")}}. These do
not inherit from `Object.prototype`, and so `hasOwnProperty()` is inaccessible.

```js
let foo = Object.create(null);
foo.prop = 'exists';
if (Object.hasOwn(foo, 'prop')) {
  console.log(foo.prop); //true - works irrespective of how the object is created.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `Object.hasOwn` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.hasOwnProperty()")}}
- [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [JavaScript Guide: Inheritance revisited](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
