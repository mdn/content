---
title: Object.keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
page-type: javascript-static-method
browser-compat: javascript.builtins.Object.keys
---

{{JSRef}}

The **`Object.keys()`** static method returns an array of a given object's own enumerable string-keyed property names.

{{InteractiveExample("JavaScript Demo: Object.keys()")}}

```js interactive-example
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
// Expected output: Array ["a", "b", "c"]
```

## Syntax

```js-nolint
Object.keys(obj)
```

### Parameters

- `obj`
  - : An object.

### Return value

An array of strings representing the given object's own enumerable string-keyed property keys.

## Description

`Object.keys()` returns an array whose elements are strings corresponding to the enumerable string-keyed property names found directly upon `object`. This is the same as iterating with a {{jsxref("Statements/for...in", "for...in")}} loop, except that a `for...in` loop enumerates properties in the prototype chain as well. The order of the array returned by `Object.keys()` is the same as that provided by a {{jsxref("Statements/for...in", "for...in")}} loop.

If you need the property values, use {{jsxref("Object.values()")}} instead. If you need both the property keys and values, use {{jsxref("Object.entries()")}} instead.

## Examples

### Using Object.keys()

```js
// Basic array
const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // ['0', '1', '2']

// Array-like object
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // ['0', '1', '2']

// Array-like object with random key ordering
const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObj)); // ['2', '7', '100']

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
myObj.foo = 1;
console.log(Object.keys(myObj)); // ['foo']
```

If you want _all_ string-keyed own properties, including non-enumerable ones, see {{jsxref("Object.getOwnPropertyNames()")}}.

### Using Object.keys() on primitives

Non-object arguments are [coerced to objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). [`undefined`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) and [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) cannot be coerced to objects and throw a {{jsxref("TypeError")}} upfront. Only strings may have own enumerable properties, while all other primitives return an empty array.

```js
// Strings have indices as enumerable own properties
console.log(Object.keys("foo")); // ['0', '1', '2']

// Other primitives except undefined and null have no own properties
console.log(Object.keys(100)); // []
```

> [!NOTE]
> In ES5, passing a non-object to `Object.keys()` threw a {{jsxref("TypeError")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Object.keys` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.keys()")}}
