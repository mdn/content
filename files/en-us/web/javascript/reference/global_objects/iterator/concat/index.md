---
title: Iterator.concat()
short-title: concat()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/concat
page-type: javascript-static-method
browser-compat: javascript.builtins.Iterator.concat
sidebar: jsref
---

The **`Iterator.concat()`** static method creates a new {{jsxref("Iterator")}} object from a list of iterable objects. The new iterator yields the values from each of the input iterables in sequence.

## Syntax

```js-nolint
Iterator.concat(it)
Iterator.concat(it1, it2)
Iterator.concat(it1, it2, /* …, */ itN)
```

### Parameters

- `it1`, `it2`, …, `itN`
  - : An object that implements the [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) protocol. [Iterators](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) which are not also iterable cannot be passed directly to this method; they must first be wrapped using {{jsxref("Iterator.from()")}}.

### Return value

A new {{jsxref("Iterator")}} object that yields the values from each of the input iterables in sequence.

## Description

The `Iterator.concat()` method is conceptually similar to `Array`'s [`concat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) method, but it operates on any kind of iterable, and returns an iterator instead of an array. This means that the iterables can be lazily iterated, avoiding unnecessarily allocation or computation. It also means that, technically, you can [concatenate _infinite iterables_](#concatenating_infinite_iterables), but results from iterables after the first infinite iterable will never be reached.

While each iterable can be infinite, the list of iterables must be finite—and quite limited in number because engines impose a very low limit on the number of function arguments. If you need to concatenate a large—even infinite—number of iterables, use {{jsxref("Iterator.prototype.flatMap()")}} instead.

```js
function* infiniteIterables() {
  for (let i = 1; ; i++) {
    yield Array(i).fill(i);
  }
}

// BAD:
// Iterator.concat(...infiniteIterables());
// The spread operator never finishes

// GOOD:
const it = infiniteIterables().flatMap((x) => x);
// Infinite sequence of numbers: 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, ...
```

This method is similar in functionality to the following function, which uses the [`yield*`](/en-US/docs/Web/JavaScript/Reference/Operators/yield*) operator to yield values from each of the input iterables in sequence:

```js
function* concat(...iterables) {
  for (const iterable of iterables) {
    yield* iterable;
  }
}
```

Like `yield*`, `Iterator.concat()` doesn't support arguments that are not iterable (i.e., doesn't have the `[Symbol.iterator]()` method). This is because `Iterator.concat()` always takes ownership over its iterators and [closes](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#returnvalue) open iterators when the method exits. With iterable arguments, `Iterator.concat()` acquires iterators one-by-one and just closes the current iterator when the iteration is stopped. With iterator arguments, it's not clear whether the caller or `Iterator.concat()` should be responsible for closing the iterators, especially the ones that `Iterator.concat()` hasn't reached, so the method simply disallows non-iterable arguments.

## Examples

### Combining maps

In this example, we create a new {{jsxref("Map")}} that's the union of three other maps. The {{jsxref("Map/Map", "Map()")}} constructor accepts an iterable of key-value pairs, while the [Map iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator) yields key-value pairs from the map, so just using `Iterator.concat()` on the maps is sufficient to create the new map.

```js
const map1 = new Map([
  ["a", 1],
  ["b", 2],
]);
const map2 = new Map([
  ["c", 3],
  ["d", 4],
]);
const map3 = new Map([
  ["a", 5],
  ["e", 6],
]);

const map = new Map(Iterator.concat(map1, map2, map3));
console.log(map);
// Map(5) {'a' => 5, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 6}
```

Note that the value of key `"a"` in the resulting map is `5`. This is because the `Map` constructor uses the last value for each key.

### Concatenating infinite iterables

When any of the input iterables is infinite, the resulting iterator will also be infinite. This isn't immediately a problem because iterators can be consumed lazily and closed at any time, but it does mean that iterables after the first infinite iterable will never be reached.

```js
function* it1() {
  yield 1;
  yield 2;
}

function* it2() {
  let i = 3;
  while (true) {
    yield i++;
  }
}

function* it3() {
  yield "done";
}

const it = Iterator.concat(it1(), it2(), it3());
for (const value of it.take(10)) {
  console.log(value); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}
// "done" is never reached
```

### Concatenating iterables of different types

You can concatenate iterables of different types.

```js
const array = [1, 2, 3];
const set = new Set([4, 5, 6]);
function* gen() {
  yield 7;
  yield 8;
  yield 9;
}

const it = Iterator.concat(array, set, gen());
console.log([...it]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

The elements of each iterable can also be of different types, just like arrays.

```js
const array = [1, "two", 3];
const set = new Set([true, {}]);

const it = Iterator.concat(array, set);
console.log([...it]); // [1, "two", 3, true, {}]
```

### Concatenating non-iterable objects

Non-iterable objects throw a `TypeError` when passed to `Iterator.concat()` because they don't have the `[Symbol.iterator]()` method.

```js
const nonIterable = {
  next() {
    return { done: true };
  },
};

const it = Iterator.concat(nonIterable); // TypeError: object is not iterable
```

Because all built-in iterators extend the {{jsxref("Iterator")}} class, they are all iterable and can be passed to `Iterator.concat()`.

```js
const arrayIterator = [1, 2, 3][Symbol.iterator]();

const it = Iterator.concat(arrayIterator); // No error
```

To pass an iterator that isn't also iterable, you can wrap it using {{jsxref("Iterator.from()")}}.

```js
const nonIterable = {
  next() {
    return { done: true };
  },
};

const it = Iterator.concat(Iterator.from(nonIterable)); // No error
```

Another option is to use {{jsxref("Iterator.prototype.flatMap()")}} instead, which automatically calls `Iterator.from()`. But be careful: you need to call `flatMap()` on an iterator, not on an array, because {{jsxref("Array.prototype.flatMap()")}} only supports array return values.

```js
const nonIterable = {
  next() {
    return { done: true };
  },
};

const it = [nonIterable].values().flatMap((x) => x); // No error
```

When implementing your own iterators, consider making them iterable by or [subclassing `Iterator`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Iterator#subclassing_iterator) or adding a `[Symbol.iterator]()` method that returns `this`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Iterator.concat` in `core-js`](https://github.com/zloirock/core-js#iterator-sequencing)
- [es-shims polyfill of `Iterator.concat`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.from()")}}
- {{jsxref("Array.prototype.concat()")}}
