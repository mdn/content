---
title: Iteration protocols
slug: Web/JavaScript/Reference/Iteration_protocols
page-type: guide
spec-urls: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-iteration
---

{{jsSidebar("More")}}

**Iteration protocols** aren't new built-ins or syntax, but _protocols_. These protocols can be implemented by any object by following some conventions.

There are two protocols: The [iterable protocol](#the_iterable_protocol) and the [iterator protocol](#the_iterator_protocol).

## The iterable protocol

**The iterable protocol** allows JavaScript objects to define or customize their iteration behavior, such as what values are looped over in a {{jsxref("Statements/for...of", "for...of")}} construct. Some built-in types are [built-in iterables](#built-in_iterables) with a default iteration behavior, such as {{jsxref("Array")}} or {{jsxref("Map")}}, while other types (such as {{jsxref("Object")}}) are not.

In order to be **iterable**, an object must implement the **`@@iterator`** method, meaning that the object (or one of the objects up its [prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)) must have a property with a `@@iterator` key which is available via constant {{jsxref("Symbol.iterator")}}:

- `[Symbol.iterator]`
  - : A zero-argument function that returns an object, conforming to the [iterator protocol](#the_iterator_protocol).

Whenever an object needs to be iterated (such as at the beginning of a {{jsxref("Statements/for...of", "for...of")}} loop), its `@@iterator` method is called with no arguments, and the returned **iterator** is used to obtain the values to be iterated.

Note that when this zero-argument function is called, it is invoked as a method on the iterable object. Therefore inside of the function, the `this` keyword can be used to access the properties of the iterable object, to decide what to provide during the iteration.

This function can be an ordinary function, or it can be a generator function, so that when invoked, an iterator object is returned. Inside of this generator function, each entry can be provided by using `yield`.

## The iterator protocol

**The iterator protocol** defines a standard way to produce a sequence of values (either finite or infinite), and potentially a return value when all values have been generated.

An object is an iterator when it implements a **`next()`** method with the following semantics:

- `next()`
  - : A function that accepts zero or one argument and returns an object conforming to the `IteratorResult` interface (see below). If a non-object value gets returned (such as `false` or `undefined`) when a built-in language feature (such as `for...of`) is using the iterator, a {{jsxref("TypeError")}} (`"iterator.next() returned a non-object value"`) will be thrown.

All iterator protocol methods (`next()`, `return()`, and `throw()`) are expected to return an object implementing the `IteratorResult` interface. It must have the following properties:

- `done` {{optional_inline}}

  - : A boolean that's `false` if the iterator was able to produce the next value in the sequence. (This is equivalent to not specifying the `done` property altogether.)

    Has the value `true` if the iterator has completed its sequence. In this case, `value` optionally specifies the return value of the iterator.

- `value` {{optional_inline}}
  - : Any JavaScript value returned by the iterator. Can be omitted when `done` is `true`.

In practice, neither property is strictly required; if an object without either property is returned, it's effectively equivalent to `{ done: false, value: undefined }`.

If an iterator returns a result with `done: true`, any subsequent calls to `next()` are expected to return `done: true` as well, although this is not enforced on the language level.

The `next` method can receive a value which will be made available to the method body. No built-in language feature will pass any value. The value passed to the `next` method of [generators](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) will become the value of the corresponding `yield` expression.

Optionally, the iterator can also implement the **`return(value)`** and **`throw(exception)`** methods, which, when called, tells the iterator that the caller is done with iterating it and can perform any necessary cleanup (such as closing database connection).

- `return(value)` {{optional_inline}}
  - : A function that accepts zero or one argument and returns an object conforming to the `IteratorResult` interface, typically with `value` equal to the `value` passed in and `done` equal to `true`. Calling this method tells the iterator that the caller does not intend to make any more `next()` calls and can perform any cleanup actions.
- `throw(exception)` {{optional_inline}}
  - : A function that accepts zero or one argument and returns an object conforming to the `IteratorResult` interface, typically with `done` equal to `true`. Calling this method tells the iterator that the caller detects an error condition, and `exception` is typically an {{jsxref("Error")}} instance.

> **Note:** It is not possible to know reflectively (i.e. without actually calling `next()` and validating the returned result) whether a particular object implements the iterator protocol.

It is very easy to make an iterator also iterable: just implement an `[@@iterator]()` method that returns `this`.

```js
// Satisfies both the Iterator Protocol and Iterable
const myIterator = {
  next() {
    // ...
  },
  [Symbol.iterator]() {
    return this;
  },
};
```

Such object is called an _iterable iterator_. Doing so allows an iterator to be consumed by the various syntaxes expecting iterables — therefore, it is seldom useful to implement the Iterator Protocol without also implementing Iterable. (In fact, almost all syntaxes and APIs expect _iterables_, not _iterators_.) The [generator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) is an example:

```js
const aGeneratorObject = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

console.log(typeof aGeneratorObject.next);
// "function" — it has a next method (which returns the right result), so it's an iterator

console.log(typeof aGeneratorObject[Symbol.iterator]);
// "function" — it has an @@iterator method (which returns the right iterator), so it's an iterable

console.log(aGeneratorObject[Symbol.iterator]() === aGeneratorObject);
// true — its @@iterator method returns itself (an iterator), so it's an iterable iterator
```

All built-in iterators inherit from {{jsxref("Iterator", "Iterator.prototype")}}, which implements the `[@@iterator]()` method as returning `this`, so that built-in iterators are also iterable.

However, when possible, it's better for `iterable[Symbol.iterator]` to return different iterators that always start from the beginning, like [`Set.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator) does.

## The async iterator and async iterable protocols

There are another pair of protocols used for async iteration, named **async iterator** and **async iterable** protocols. They have very similar interfaces compared to the iterable and iterator protocols, except that each return value from the calls to the iterator methods is wrapped in a promise.

An object implements the async iterable protocol when it implements the following methods:

- [`[Symbol.asyncIterator]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : A zero-argument function that returns an object, conforming to the async iterator protocol.

An object implements the async iterator protocol when it implements the following methods:

- `next()`
  - : A function that accepts zero or one argument and returns a promise. The promise fulfills to an object conforming to the `IteratorResult` interface, and the properties have the same semantics as those of the sync iterator's.
- `return(value)` {{optional_inline}}
  - : A function that accepts zero or one argument and returns a promise. The promise fulfills to an object conforming to the `IteratorResult` interface, and the properties have the same semantics as those of the sync iterator's.
- `throw(exception)` {{optional_inline}}
  - : A function that accepts zero or one argument and returns a promise. The promise fulfills to an object conforming to the `IteratorResult` interface, and the properties have the same semantics as those of the sync iterator's.

## Interactions between the language and iteration protocols

The language specifies APIs that either produce or consume iterables and iterators.

### Built-in iterables

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, and [`Segments`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) (returned by [`Intl.Segmenter.prototype.segment()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)) are all built-in iterables, because each of their `prototype` objects implements an `@@iterator` method. In addition, the [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object and some DOM collection types such as {{domxref("NodeList")}} are also iterables.
[`ReadableStream`](/en-US/docs/Web/API/ReadableStream) is the only built-in async iterable at the time of writing.

[Generator functions](/en-US/docs/Web/JavaScript/Reference/Statements/function*) return [generator objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator), which are iterable iterators. [Async generator functions](/en-US/docs/Web/JavaScript/Reference/Statements/async_function*) return [async generator objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator), which are async iterable iterators.

The iterators returned from built-in iterables actually all inherit from a common class {{jsxref("Iterator")}} (currently unexposed), which implements the aforementioned `[Symbol.iterator]() { return this; }` method, making them all iterable iterators. In the future, these built-in iterators may have additional [helper methods](https://github.com/tc39/proposal-iterator-helpers) in addition to the `next()` method required by the iterator protocol. You can inspect an iterator's prototype chain by logging it in a graphical console.

```
console.log([][Symbol.iterator]());

Array Iterator {}
  [[Prototype]]: Array Iterator     ==> This is the prototype shared by all array iterators
    next: ƒ next()
    Symbol(Symbol.toStringTag): "Array Iterator"
    [[Prototype]]: Object           ==> This is the prototype shared by all built-in iterators
      Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
      [[Prototype]]: Object         ==> This is Object.prototype
```

### Built-in APIs accepting iterables

There are many APIs that accept iterables. Some examples include:

- {{jsxref("Map/Map", "Map()")}}
- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
- {{jsxref("Set/Set", "Set()")}}
- {{jsxref("WeakSet/WeakSet", "WeakSet()")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.allSettled()")}}
- {{jsxref("Promise.race()")}}
- {{jsxref("Promise.any()")}}
- {{jsxref("Array.from()")}}

```js
const myObj = {};

new WeakSet(
  (function* () {
    yield {};
    yield myObj;
    yield {};
  })(),
).has(myObj); // true
```

### Syntaxes expecting iterables

Some statements and expressions expect iterables, for example the {{jsxref("Statements/for...of", "for...of")}} loops, [array and parameter spreading](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), {{jsxref("Operators/yield*", "yield*")}}, and [array destructuring](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment):

```js
for (const value of ["a", "b", "c"]) {
  console.log(value);
}
// "a"
// "b"
// "c"

console.log([..."abc"]); // ["a", "b", "c"]

function* gen() {
  yield* ["a", "b", "c"];
}

console.log(gen().next()); // { value: "a", done: false }

[a, b, c] = new Set(["a", "b", "c"]);
console.log(a); // "a"
```

When built-in syntaxes are iterating an iterator, and the last result's `done` is `false` (i.e. the iterator is able to produce more values) but no more values are needed, the `return` method will get called if present. This can happen, for example, if a `break` or `return` is encountered in a `for...of` loop, or if all identifiers are already bound in an array destructuring.

```js
const obj = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        i++;
        console.log("Returning", i);
        if (i === 3) return { done: true, value: i };
        return { done: false, value: i };
      },
      return() {
        console.log("Closing");
        return { done: true };
      },
    };
  },
};

const [b] = obj;
// Returning 1
// Closing

const [a, b, c] = obj;
// Returning 1
// Returning 2
// Returning 3
// Already reached the end (the last call returned `done: true`),
// so `return` is not called

for (const b of obj) {
  break;
}
// Returning 1
// Closing
```

The [`for await...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) loop and [`yield*`](/en-US/docs/Web/JavaScript/Reference/Operators/yield*) in [async generator functions](/en-US/docs/Web/JavaScript/Reference/Statements/async_function*) (but not [sync generator functions](/en-US/docs/Web/JavaScript/Reference/Statements/function*)) are the only ways to interact with async iterables. Using `for...of`, array spreading, etc. on an async iterable that's not also a sync iterable (i.e. it has `[@@asyncIterator]()` but no `[@@iterator]()`) will throw a TypeError: x is not iterable.

### Non-well-formed iterables

If an iterable's `@@iterator` method doesn't return an iterator object, then it's considered a _non-well-formed_ iterable.

Using one is likely to result in runtime errors or buggy behavior:

```js example-bad
const nonWellFormedIterable = {};
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
```

## Examples

### User-defined iterables

You can make your own iterables like this:

```js
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

console.log([...myIterable]); // [1, 2, 3]
```

### Simple iterator

Iterators are stateful by nature. If you don't define it as a [generator function](/en-US/docs/Web/JavaScript/Reference/Statements/function*) (as the example above shows), you would likely want to encapsulate the state in a closure.

```js
function makeIterator(array) {
  let nextIndex = 0;
  return {
    next() {
      return nextIndex < array.length
        ? {
            value: array[nextIndex++],
            done: false,
          }
        : {
            done: true,
          };
    },
  };
}

const it = makeIterator(["yo", "ya"]);

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done); // true
```

### Infinite iterator

```js
function idMaker() {
  let index = 0;
  return {
    next() {
      return {
        value: index++,
        done: false,
      };
    },
  };
}

const it = idMaker();

console.log(it.next().value); // 0
console.log(it.next().value); // 1
console.log(it.next().value); // 2
// ...
```

### Defining an iterable with a generator

```js
function* makeSimpleGenerator(array) {
  let nextIndex = 0;
  while (nextIndex < array.length) {
    yield array[nextIndex++];
  }
}

const gen = makeSimpleGenerator(["yo", "ya"]);

console.log(gen.next().value); // 'yo'
console.log(gen.next().value); // 'ya'
console.log(gen.next().done); // true

function* idMaker() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const it = idMaker();

console.log(it.next().value); // 0
console.log(it.next().value); // 1
console.log(it.next().value); // 2
// ...
```

### Defining an iterable with a class

State encapsulation can be done with [private properties](/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields) as well.

```js
class SimpleClass {
  #data;

  constructor(data) {
    this.#data = data;
  }

  [Symbol.iterator]() {
    // Use a new index for each iterator. This makes multiple
    // iterations over the iterable safe for non-trivial cases,
    // such as use of break or nested looping over the same iterable.
    let index = 0;

    return {
      // Note: using an arrow function allows `this` to point to the
      // one of `[@@iterator]()` instead of `next()`
      next: () => {
        if (index < this.#data.length) {
          return { value: this.#data[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

const simple = new SimpleClass([1, 2, 3, 4, 5]);

for (const val of simple) {
  console.log(val); // 1 2 3 4 5
}
```

### Overriding built-in iterables

For example, a {{jsxref("String")}} is a built-in iterable object:

```js
const someString = "hi";
console.log(typeof someString[Symbol.iterator]); // "function"
```

`String`'s [default iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator) returns the string's code points one by one:

```js
const iterator = someString[Symbol.iterator]();
console.log(`${iterator}`); // "[object String Iterator]"

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

You can redefine the iteration behavior by supplying our own `@@iterator`:

```js
// need to construct a String object explicitly to avoid auto-boxing
const someString = new String("hi");

someString[Symbol.iterator] = function () {
  return {
    // this is the iterator object, returning a single element (the string "bye")
    next() {
      return this._first
        ? { value: "bye", done: (this._first = false) }
        : { done: true };
    },
    _first: true,
  };
};
```

Notice how redefining `@@iterator` affects the behavior of built-in constructs that use the iteration protocol:

```js
console.log([...someString]); // ["bye"]
console.log(`${someString}`); // "hi"
```

## Specifications

{{Specifications}}

## See also

- [Iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Symbol.iterator")}}
- {{jsxref("Iterator")}}
