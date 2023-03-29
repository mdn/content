---
title: Object.fromEntries()
slug: Web/JavaScript/Reference/Global_Objects/Object/fromEntries
page-type: javascript-static-method
browser-compat: javascript.builtins.Object.fromEntries
---

{{JSRef}}

The **`Object.fromEntries()`** static method transforms a list of key-value pairs into an object.

{{EmbedInteractiveExample("pages/js/object-fromentries.html")}}

## Syntax

```js-nolint
Object.fromEntries(iterable)
```

### Parameters

- `iterable`

  - : An [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), such as an {{jsxref("Array")}} or {{jsxref("Map")}}, containing a list of objects. Each object should have two properties:

    - `0`
      - : A string or [symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) representing the property key.
    - `1`
      - : The property value.

    Typically, this object is implemented as a two-element array, with the first element being the property key and the second element being the property value.

### Return value

A new object whose properties are given by the entries of the iterable.

## Description

The `Object.fromEntries()` method takes a list of key-value pairs and returns a new object whose properties are given by those entries. The `iterable` argument is expected to be an object that implements an `@@iterator` method. The method returns an iterator object that produces two-element array-like objects. The first element is a value that will be used as a property key, and the second element is the value to associate with that property key.

`Object.fromEntries()` performs the reverse of {{jsxref("Object.entries()")}}, except that `Object.entries()` only returns string-keyed properties, while `Object.fromEntries()` can also create symbol-keyed properties.

> **Note:** Unlike {{jsxref("Array.from()")}}, `Object.fromEntries()` does not use the value of `this`, so calling it on another constructor does not create objects of that type.

## Examples

### Converting a Map to an Object

With `Object.fromEntries`, you can convert from {{jsxref("Map")}} to {{jsxref("Object")}}:

```js
const map = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }
```

### Converting an Array to an Object

With `Object.fromEntries`, you can convert from {{jsxref("Array")}} to {{jsxref("Object")}}:

```js
const arr = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }
```

### Object transformations

With `Object.fromEntries`, its reverse method {{jsxref("Object.entries()")}}, and [array manipulation methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods), you are able to transform objects like this:

```js
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1).map(([key, val]) => [key, val * 2]),
);

console.log(object2);
// { a: 2, b: 4, c: 6 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Object.fromEntries` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
