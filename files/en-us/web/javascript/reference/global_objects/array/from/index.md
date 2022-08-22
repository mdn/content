---
title: Array.from()
slug: Web/JavaScript/Reference/Global_Objects/Array/from
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.from
---
{{JSRef}}

The **`Array.from()`** static method creates a new, shallow-copied `Array` instance from an iterable or array-like object.

{{EmbedInteractiveExample("pages/js/array-from.html","shorter")}}

## Syntax

```js
// Arrow function
Array.from(arrayLike, (element) => { /* … */ } )
Array.from(arrayLike, (element, index) => { /* … */ } )

// Mapping function
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)

// Inline mapping function
Array.from(arrayLike, function mapFn(element) { /* … */ })
Array.from(arrayLike, function mapFn(element, index) { /* … */ })
Array.from(arrayLike, function mapFn(element) { /* … */ }, thisArg)
Array.from(arrayLike, function mapFn(element, index) { /* … */ }, thisArg)
```

### Parameters

- `arrayLike`
  - : An iterable or array-like object to convert to an array.
- `mapFn` {{Optional_inline}}
  - : Map function to call on every element of the array.
- `thisArg` {{Optional_inline}}
  - : Value to use as `this` when executing `mapFn`.

### Return value

A new {{jsxref("Array")}} instance.

## Description

`Array.from()` lets you create `Array`s from:

- [iterable objects](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) (objects such as {{jsxref("Map")}} and {{jsxref("Set")}}); or, if the object is not iterable,
- array-like objects (objects with a `length` property and indexed elements).

`Array.from()` has an optional parameter `mapFn`, which allows you to execute a {{jsxref("Array.prototype.map()", "map()")}} function on each element of the array being created.

More clearly, `Array.from(obj, mapFn, thisArg)` has the same result as `Array.from(obj).map(mapFn, thisArg)`, except that it does not create an intermediate array, and _mapFn_ only receives two arguments (_element_, _index_) without the whole array, because the array is still under construction.

> **Note:** This is especially important for certain array subclasses, like [typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays), since the intermediate array would necessarily have values truncated to fit into the appropriate type.

The `length` property of the `from()` method is `1`.

The [class](/en-US/docs/Web/JavaScript/Reference/Classes) syntax allows sub-classing of both built-in and user-defined classes. As a result, static methods such as `Array.from()` are "inherited" by subclasses of `Array`, and create new instances _of the subclass_, not `Array`. The `Array.from()` method is also defined generically and can be defined on any constructor that accepts a single number argument.

## Examples

### Array from a String

```js
Array.from('foo');
// [ "f", "o", "o" ]
```

### Array from a Set

```js
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);
// [ "foo", "bar", "baz" ]
```

### Array from a Map

```js
const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
```

### Array from a NodeList

```js
// Create an array based on a property of DOM Elements
const images = document.getElementsByTagName('img');
const sources = Array.from(images, (image) => image.src);
const insecureSources = sources.filter((link) => link.startsWith('http://'));
```

### Array from an Array-like object (arguments)

```js
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [ 1, 2, 3 ]
```

### Using arrow functions and Array.from()

```js
// Using an arrow function as the map function to
// manipulate the elements
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]
```

### Sequence generator (range)

```js
// Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP, etc.)
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

// Generate numbers range 0..4
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// Generate numbers range 1..10 with step of 2
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Generate the alphabet using Array.from making use of it being ordered as a sequence
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map((x) => String.fromCharCode(x));
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.from` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array")}}
- {{jsxref("Array.of()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("TypedArray.from()")}}
