---
title: Object.fromEntries()
slug: Web/JavaScript/Reference/Global_Objects/Object/fromEntries
tags:
  - JavaScript
  - Method
  - Object
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Object.fromEntries
---
{{JSRef}}

The **`Object.fromEntries()`** method transforms a list of
key-value pairs into an object.

{{EmbedInteractiveExample("pages/js/object-fromentries.html")}}

## Syntax

```js
Object.fromEntries(iterable);
```

### Parameters

- `iterable`
  - : An iterable such as {{jsxref("Array")}} or {{jsxref("Map")}} or other objects
    implementing the [iterable protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

### Return value

A new object whose properties are given by the entries of the iterable.

## Description

The `Object.fromEntries()` method takes a list of key-value pairs and
returns a new object whose properties are given by those entries. The
_iterable_ argument is expected to be an object that implements an
`@@iterator` method, that returns an iterator object, that produces a two
element array-like object, whose first element is a value that will be used as a
property key, and whose second element is the value to associate with that property key.

`Object.fromEntries()` performs the reverse of
{{jsxref("Object.entries()")}}.

## Examples

### Converting a Map to an Object

With `Object.fromEntries`, you can convert from {{jsxref("Map")}} to
{{jsxref("Object")}}:

```js
const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }
```

### Converting an Array to an Object

With `Object.fromEntries`, you can convert from {{jsxref("Array")}} to
{{jsxref("Object")}}:

```js
const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }
```

### Object transformations

With `Object.fromEntries`, its reverse method
{{jsxref("Object.entries()")}},
and [array manipulation methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#methods_2), you are able to transform objects like this:

```js
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1)
  .map(([ key, val ]) => [ key, val * 2 ])
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
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
