---
title: Object.entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
page-type: javascript-static-method
browser-compat: javascript.builtins.Object.entries
---

{{JSRef}}

The **`Object.entries()`** static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

{{InteractiveExample("JavaScript Demo: Object.entries()")}}

```js interactive-example
const object1 = {
  a: "somestring",
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// Expected output:
// "a: somestring"
// "b: 42"
```

## Syntax

```js-nolint
Object.entries(obj)
```

### Parameters

- `obj`
  - : An object.

### Return value

An array of the given object's own enumerable string-keyed property key-value pairs. Each key-value pair is an array with two elements: the first element is the property key (which is always a string), and the second element is the property value.

## Description

`Object.entries()` returns an array whose elements are arrays corresponding to the enumerable string-keyed property key-value pairs found directly upon `object`. This is the same as iterating with a {{jsxref("Statements/for...in", "for...in")}} loop, except that a `for...in` loop enumerates properties in the prototype chain as well. The order of the array returned by `Object.entries()` is the same as that provided by a {{jsxref("Statements/for...in", "for...in")}} loop.

If you only need the property keys, use {{jsxref("Object.keys()")}} instead. If you only need the property values, use {{jsxref("Object.values()")}} instead.

## Examples

### Using Object.entries()

```js
const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

const arrayLike = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(arrayLike)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

const randomKeyOrder = { 100: "a", 2: "b", 7: "c" };
console.log(Object.entries(randomKeyOrder)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

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
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]
```

### Using Object.entries() on primitives

Non-object arguments are [coerced to objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). [`undefined`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) and [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) cannot be coerced to objects and throw a {{jsxref("TypeError")}} upfront. Only strings may have own enumerable properties, while all other primitives return an empty array.

```js
// Strings have indices as enumerable own properties
console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// Other primitives except undefined and null have no own properties
console.log(Object.entries(100)); // []
```

### Converting an Object to a Map

The {{jsxref("Map/Map", "Map()")}} constructor accepts an iterable of `entries`. With `Object.entries`, you can easily convert from {{jsxref("Object")}} to {{jsxref("Map")}}:

```js
const obj = { foo: "bar", baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}
```

### Iterating through an Object

Using [array destructuring](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring), you can iterate through objects easily.

```js
// Using for...of loop
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Using array methods
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Object.entries` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.entries()")}}
