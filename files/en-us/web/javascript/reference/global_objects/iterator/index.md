---
title: Iterator
slug: Web/JavaScript/Reference/Global_Objects/Iterator
page-type: javascript-class
browser-compat: javascript.builtins.Iterator
---

{{JSRef}}

An **`Iterator`** object is an object that conforms to the [iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) by providing a `next()` method that returns an iterator result object. All built-in iterators inherit from the `Iterator` class. The `Iterator` class provides a [`@@iterator`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/@@iterator) method that returns the iterator object itself, making the iterator also [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol). It also provides some helper methods for working with iterators.

## Description

The following are all built-in JavaScript iterators:

- The _Array Iterator_ returned by {{jsxref("Array.prototype.values()")}}, {{jsxref("Array.prototype.keys()")}}, {{jsxref("Array.prototype.entries()")}}, [`Array.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator), {{jsxref("TypedArray.prototype.values()")}}, {{jsxref("TypedArray.prototype.keys()")}}, {{jsxref("TypedArray.prototype.entries()")}}, [`TypedArray.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator), and [`arguments[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/@@iterator).
- The _String Iterator_ returned by [`String.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator).
- The _Map Iterator_ returned by {{jsxref("Map.prototype.values()")}}, {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.entries()")}}, and [`Map.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator).
- The _Set Iterator_ returned by {{jsxref("Set.prototype.values()")}}, {{jsxref("Set.prototype.keys()")}}, {{jsxref("Set.prototype.entries()")}}, and [`Set.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator).
- The _RegExp String Iterator_ returned by [`RegExp.prototype[@@matchAll]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll) and {{jsxref("String.prototype.matchAll()")}}.
- The {{jsxref("Generator")}} object returned by [generator functions](/en-US/docs/Web/JavaScript/Reference/Statements/function*).
- The _Segments Iterator_ returned by the [`[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/@@iterator) method of the [`Segments`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) object returned by [`Intl.Segmenter.prototype.segment()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment).
- The _Iterator Helper_ returned by iterator helper methods such as {{jsxref("Iterator.prototype.filter()")}} and {{jsxref("Iterator.prototype.map()")}}.

Each of these iterators have a distinct prototype object, which defines the `next()` method used by the particular iterator. For example, all string iterator objects inherit from a hidden object `StringIteratorPrototype`, which has a `next()` method that iterates this string by code points. `StringIteratorPrototype` also has a [`@@toStringTag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property whose initial value is the string `"String Iterator"`. This property is used in {{jsxref("Object.prototype.toString()")}}. Similarly, other iterator prototypes also have their own `@@toStringTag` values, which are the same as the names given above.

All of these prototype objects inherit from `Iterator.prototype`, which provides a [`@@iterator`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) method that returns the iterator object itself, making the iterator also [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

### Iterator helpers

> **Note:** These methods are _iterator_ helpers, not _iterable_ helpers, because the only requirement for an object to be iterable is just the presence of a `@@iterator` method. There is no shared prototype to install these methods on.

The `Iterator` class itself provides some helper methods for working with iterators. For example, you may be tempted to do the following:

```js
const nameToDeposit = new Map([
  ["Anne", 1000],
  ["Bert", 1500],
  ["Carl", 2000],
]);

const totalDeposit = [...nameToDeposit.values()].reduce((a, b) => a + b);
```

This first converts the iterator returned by {{jsxref("Map.prototype.values()")}} to an array, then uses the {{jsxref("Array.prototype.reduce()")}} method to calculate the sum. However, this both creates an intermediate array and iterates the array twice. Instead, you can use the `reduce()` method of the iterator itself:

```js
const totalDeposit = nameToDeposit.values().reduce((a, b) => a + b);
```

This method is more efficient, because it only iterates the iterator once, without memorizing any intermediate values. Iterator helper methods are necessary to work with infinite iterators:

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci();
const firstThreeDigitTerm = seq.find((n) => n >= 100);
```

You cannot convert `seq` to an array, because it is infinite. Instead, you can use the `find()` method of the iterator itself, which only iterates `seq` as far as necessary to find the first value that satisfies the condition.

You will find many iterator methods analogous to array methods, such as:

| Iterator method                            | Array method                            |
| ------------------------------------------ | --------------------------------------- |
| {{jsxref("Iterator.prototype.every()")}}   | {{jsxref("Array.prototype.every()")}}   |
| {{jsxref("Iterator.prototype.filter()")}}  | {{jsxref("Array.prototype.filter()")}}  |
| {{jsxref("Iterator.prototype.find()")}}    | {{jsxref("Array.prototype.find()")}}    |
| {{jsxref("Iterator.prototype.flatMap()")}} | {{jsxref("Array.prototype.flatMap()")}} |
| {{jsxref("Iterator.prototype.forEach()")}} | {{jsxref("Array.prototype.forEach()")}} |
| {{jsxref("Iterator.prototype.map()")}}     | {{jsxref("Array.prototype.map()")}}     |
| {{jsxref("Iterator.prototype.reduce()")}}  | {{jsxref("Array.prototype.reduce()")}}  |
| {{jsxref("Iterator.prototype.some()")}}    | {{jsxref("Array.prototype.some()")}}    |

{{jsxref("Iterator.prototype.drop()")}} and {{jsxref("Iterator.prototype.take()")}} combined are somewhat analogous to {{jsxref("Array.prototype.slice()")}}.

Among these methods, {{jsxref("Iterator/filter", "filter()")}}, {{jsxref("Iterator/flatMap", "flatMap()")}}, {{jsxref("Iterator/map", "map()")}}, {{jsxref("Iterator/drop", "drop()")}}, and {{jsxref("Iterator/take", "take()")}} return a new _Iterator Helper_ object. The iterator helper is also an `Iterator` instance, making the helper methods chainable. All iterator helper objects inherit from a common prototype object, which implements the iterator protocol:

- `next()`
  - : Calls the `next()` method of the underlying iterator, applies the helper method to the result, and returns the result.
- `return()`
  - : Calls the `return()` method of the underlying iterator, and returns the result.

The iterator helper shares the same data source as the underlying iterator, so iterating the iterator helper causes the underlying iterator to be iterated as well. There is no way to "fork" an iterator to allow it to be iterated multiple times.

```js
const it = [1, 2, 3].values();
const it2 = it.drop(0); // Essentially a copy
console.log(it.next().value); // 1
console.log(it2.next().value); // 2
console.log(it.next().value); // 3
```

### Proper iterators

There are two kinds of "iterators": objects that conform to the [iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) (which, at its minimum, only requires the presence of a `next()` method), and objects that inherit from the `Iterator` class, which enjoy the helper methods. They do not entail each other — objects that inherit from `Iterator` do not automatically become iterators, because the `Iterator` class does not define a `next()` method. Instead, the object needs to define a `next()` method itself. A _proper iterator_ is one that both conforms to the iterator protocol and inherits from `Iterator`, and most code expect iterators to be proper iterators and iterables to return proper iterators. To create proper iterators, define a class that extends {{jsxref("Iterator/Iterator", "Iterator")}}, or use the {{jsxref("Iterator.from()")}} method.

```js
class MyIterator extends Iterator {
  next() {
    // …
  }
}

const myIterator = Iterator.from({
  next() {
    // …
  },
});
```

## Constructor

- {{jsxref("Iterator/Iterator", "Iterator()")}} {{Experimental_Inline}}
  - : Intended to be [extended](/en-US/docs/Web/JavaScript/Reference/Classes/extends) by other classes that create iterators. Throws an error when constructed by itself.

## Static methods

- {{jsxref("Iterator.from()")}} {{Experimental_Inline}}
  - : Creates a new `Iterator` object from an iterator or iterable object.

## Instance properties

These properties are defined on `Iterator.prototype` and shared by all `Iterator` instances.

- {{jsxref("Object/constructor", "Iterator.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Iterator` instances, the initial value is the {{jsxref("Iterator/Iterator", "Iterator")}} constructor.
- `Iterator.prototype[@@toStringTag]`

  - : The initial value of the [`@@toStringTag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Iterator"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

    > **Note:** Unlike the `@@toStringTag` on most built-in classes, `Iterator.prototype[@@toStringTag]` is writable for web compatibility reasons.

## Instance methods

- {{jsxref("Iterator.prototype.drop()")}} {{Experimental_Inline}}
  - : Returns a new iterator helper that skips the given number of elements at the start of this iterator.
- {{jsxref("Iterator.prototype.every()")}} {{Experimental_Inline}}
  - : Tests whether all elements produced by the iterator pass the test implemented by the provided function.
- {{jsxref("Iterator.prototype.filter()")}} {{Experimental_Inline}}
  - : Returns a new iterator helper that yields only those elements of the iterator for which the provided callback function returns `true`.
- {{jsxref("Iterator.prototype.find()")}} {{Experimental_Inline}}
  - : Returns the first element produced by the iterator that satisfies the provided testing function. If no values satisfy the testing function, {{jsxref("undefined")}} is returned.
- {{jsxref("Iterator.prototype.flatMap()")}} {{Experimental_Inline}}
  - : Returns a new iterator helper that takes each element in the original iterator, runs it through a mapping function, and yields elements returned by the mapping function (which are contained in another iterator or iterable).
- {{jsxref("Iterator.prototype.forEach()")}} {{Experimental_Inline}}
  - : Executes a provided function once for each element produced by the iterator.
- {{jsxref("Iterator.prototype.map()")}} {{Experimental_Inline}}
  - : Returns a new iterator helper that yields elements of the iterator, each transformed by a mapping function.
- {{jsxref("Iterator.prototype.reduce()")}} {{Experimental_Inline}}
  - : Executes a user-supplied "reducer" callback function on each element produced by the iterator, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements is a single value.
- {{jsxref("Iterator.prototype.some()")}} {{Experimental_Inline}}
  - : Tests whether at least one element in the iterator passes the test implemented by the provided function. It returns a boolean value.
- {{jsxref("Iterator.prototype.take()")}} {{Experimental_Inline}}
  - : Returns a new iterator helper that yields the given number of elements in this iterator and then terminates.
- {{jsxref("Iterator.prototype.toArray()")}} {{Experimental_Inline}}
  - : Creates a new {{jsxref("Array")}} instance populated with the elements yielded from the iterator.
- [`Iterator.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/@@iterator)
  - : Returns the iterator object itself. This allows iterator objects to also be iterable.

## Examples

### Using an iterator as an iterable

All built-in iterators are also iterable, so you can use them in a `for...of` loop:

```js
const arrIterator = [1, 2, 3].values();
for (const value of arrIterator) {
  console.log(value);
}
// Logs: 1, 2, 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Iterator` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- {{JSxRef("Statements/function*", "function*")}}
- [The Iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
