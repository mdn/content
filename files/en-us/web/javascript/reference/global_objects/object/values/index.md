---
title: Object.values()
slug: Web/JavaScript/Reference/Global_Objects/Object/values
page-type: javascript-static-method
browser-compat: javascript.builtins.Object.values
---

{{JSRef}}

The **`Object.values()`** static method returns an array of a given object's own enumerable string-keyed property values.

{{EmbedInteractiveExample("pages/js/object-values.html")}}

## Syntax

```js-nolint
Object.values(obj)
```

### Parameters

- `obj`
  - : An object.

### Return value

An array containing the given object's own enumerable string-keyed property values.

## Description

`Object.values()` returns an array whose elements are values of enumerable string-keyed properties found directly upon `object`. This is the same as iterating with a {{jsxref("Statements/for...in", "for...in")}} loop, except that a `for...in` loop enumerates properties in the prototype chain as well. The order of the array returned by `Object.values()` is the same as that provided by a {{jsxref("Statements/for...in", "for...in")}} loop.

If you need the property keys, use {{jsxref("Object.keys()")}} instead. If you need both the property keys and values, use {{jsxref("Object.entries()")}} instead.

## Examples

### Using Object.values()

```js
const obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// Array-like object
const arrayLikeObj1 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(arrayLikeObj1)); // ['a', 'b', 'c']

// Array-like object with random key ordering
// When using numeric keys, the values are returned in the keys' numerical order
const arrayLikeObj2 = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(arrayLikeObj2)); // ['b', 'c', 'a']

// getFoo is a non-enumerable property
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = "bar";
console.log(Object.values(myObj)); // ['bar']
```

### Using Object.values() on primitives

Non-object arguments are [coerced to objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). Only strings may have own enumerable properties, while all other primitives return an empty array.

```js
// Strings have indices as enumerable own properties
console.log(Object.values("foo")); // ['f', 'o', 'o']

// Other primitives have no own properties
console.log(Object.values(100)); // []
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
- {{jsxref("Map.prototype.values()")}}
