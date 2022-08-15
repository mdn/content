---
title: Object.values()
slug: Web/JavaScript/Reference/Global_Objects/Object/values
tags:
  - JavaScript
  - Method
  - Object
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Object.values
---
{{JSRef}}

The **`Object.values()`** method
returns an array of a given object's own enumerable property values, in the same order
as that provided by a {{jsxref("Statements/for...in", "for...in")}} loop. (The only
difference is that a `for...in` loop enumerates properties in the prototype
chain as well.)

{{EmbedInteractiveExample("pages/js/object-values.html")}}

## Syntax

```js
Object.values(obj)
```

### Parameters

- `obj`
  - : The object whose enumerable own property values are to be returned.

### Return value

An array containing the given object's own enumerable property values.

## Description

`Object.values()` returns an array whose elements are the enumerable
property values found on the object. The ordering of the properties is the same as that
given by looping over the property values of the object manually.

## Examples

### Using Object.values

```js
const obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// Array-like object
const arrayLikeObj1 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(arrayLikeObj1 )); // ['a', 'b', 'c']

// Array-like object with random key ordering
// When using numeric keys, the values are returned in the keys' numerical order
const arrayLikeObj2 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(arrayLikeObj2 )); // ['b', 'c', 'a']

// getFoo is property which isn't enumerable
const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
myObj.foo = 'bar';
console.log(Object.values(myObj)); // ['bar']

// non-object argument will be coerced to an object
console.log(Object.values('foo')); // ['f', 'o', 'o']
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Object.values` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
