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

In order to be **iterable**, an object must implement the **`[Symbol.iterator]()`** method, meaning that the object (or one of the objects up its [prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)) must have a property with a `[Symbol.iterator]` key which is available via constant {{jsxref("Symbol.iterator")}}:

- `[Symbol.iterator]()`
  - : A zero-argument function that returns an object, conforming to the [iterator protocol](#the_iterator_protocol).

Whenever an object needs to be iterated (such as at the beginning of a {{jsxref("Statements/for...of", "for...of")}} loop), its `[Symbol.iterator]()` method is called with no arguments, and the returned **iterator** is used to obtain the values to be iterated.

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
  - : A function that accepts zero or one argument and returns an object conforming to the `IteratorResult` interface, typically with `value` equal to the `value` passed in and `done` equal to `true`. Calling this method tells the iterator that the caller does not intend to make any more `next()` calls and can perform any cleanup actions. When built-in language features call `return()` for cleanup, `value` is always `undefined`.
- `throw(exception)` {{optional_inline}}
  - : A function that accepts zero or one argument and returns an object conforming to the `IteratorResult` interface, typically with `done` equal to `true`. Calling this method tells the iterator that the caller detects an error condition, and `exception` is typically an {{jsxref("Error")}} instance. No built-in language feature calls `throw()` for cleanup purposes — it's a special feature of generators for the symmetry of `return`/`throw`.

> [!NOTE]
> It is not possible to know reflectively (i.e. without actually calling `next()` and validating the returned result) whether a particular object implements the iterator protocol.

It is very easy to make an iterator also iterable: just implement an `[Symbol.iterator]()` method that returns `this`.

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
// "function" — it has an [Symbol.iterator] method (which returns the right iterator), so it's an iterable

console.log(aGeneratorObject[Symbol.iterator]() === aGeneratorObject);
// true — its [Symbol.iterator] method returns itself (an iterator), so it's an iterable iterator
```

All built-in iterators inherit from {{jsxref("Iterator", "Iterator.prototype")}}, which implements the `[Symbol.iterator]()` method as returning `this`, so that built-in iterators are also iterable.

However, when possible, it's better for `iterable[Symbol.iterator]()` to return different iterators that always start from the beginning, like [`Set.prototype[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) does.

## The async iterator and async iterable protocols

There are another pair of protocols used for async iteration, named **async iterator** and **async iterable** protocols. They have very similar interfaces compared to the iterable and iterator protocols, except that each return value from the calls to the iterator methods is wrapped in a promise.

An object implements the async iterable protocol when it implements the following methods:

- [`[Symbol.asyncIterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
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

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, and [`Segments`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) (returned by [`Intl.Segmenter.prototype.segment()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)) are all built-in iterables, because each of their `prototype` objects implements an `[Symbol.iterator]()` method. In addition, the [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object and some DOM collection types such as {{domxref("NodeList")}} are also iterables.
There is no object in the core JavaScript language that is async iterable. Some web APIs, such as {{domxref("ReadableStream")}}, have the `Symbol.asyncIterator` method set by default.

[Generator functions](/en-US/docs/Web/JavaScript/Reference/Statements/function*) return [generator objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator), which are iterable iterators. [Async generator functions](/en-US/docs/Web/JavaScript/Reference/Statements/async_function*) return [async generator objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator), which are async iterable iterators.

The iterators returned from built-in iterables actually all inherit from a common class {{jsxref("Iterator")}}, which implements the aforementioned `[Symbol.iterator]() { return this; }` method, making them all iterable iterators. The `Iterator` class also provides additional [helper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) in addition to the `next()` method required by the iterator protocol. You can inspect an iterator's prototype chain by logging it in a graphical console.

```plain
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
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}

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

const [a] = obj;
// Returning 1
// Closing

const [b, c, d] = obj;
// Returning 1
// Returning 2
// Returning 3
// Already reached the end (the last call returned `done: true`),
// so `return` is not called
console.log([b, c, d]); // [1, 2, undefined]; the value associated with `done: true` is not reachable

for (const b of obj) {
  break;
}
// Returning 1
// Closing
```

The [`for await...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) loop and [`yield*`](/en-US/docs/Web/JavaScript/Reference/Operators/yield*) in [async generator functions](/en-US/docs/Web/JavaScript/Reference/Statements/async_function*) (but not [sync generator functions](/en-US/docs/Web/JavaScript/Reference/Statements/function*)) are the only ways to interact with async iterables. Using `for...of`, array spreading, etc. on an async iterable that's not also a sync iterable (i.e. it has `[Symbol.asyncIterator]()` but no `[Symbol.iterator]()`) will throw a TypeError: x is not iterable.

## Error handling

Because iteration involves transferring control back and forth between the iterator and the consumer, error handling happens in both ways: how the consumer handles errors thrown by the iterator, and how the iterator handles errors thrown by the consumer. When you are using one of the built-in ways of iteration, the language may also throw errors because the iterable breaks certain invariants. We will describe how built-in syntaxes generate and handle errors, which can be used as a guideline for your own code if you are manually stepping the iterator.

### Non-well-formed iterables

Errors may happen when acquiring the iterator from the iterable. The language invariant enforced here is that the iterable must produce a valid iterator:

- It has a callable `[Symbol.iterator]()` method.
- The `[Symbol.iterator]()` method returns an object.
- The object returned by `[Symbol.iterator]()` has a callable `next()` method.

When using built-in syntax to initiate iteration on a non-well-formed iterable, a TypeError is thrown.

```js example-bad
const nonWellFormedIterable = { [Symbol.iterator]: 1 };
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable is not iterable
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
nonWellFormedIterable[Symbol.iterator] = () => ({});
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable[Symbol.iterator]().next is not a function
```

For async iterables, if its `[Symbol.asyncIterator]()` property has value `undefined` or `null`, JavaScript falls back to using the `[Symbol.iterator]` property instead (and wraps the resulting iterator into an async iterator by [forwarding](#forwarding_errors) the methods). Otherwise, the `[Symbol.asyncIterator]` property must conform to the above invariants too.

This type of errors can be prevented by first validating the iterable before attempting to iterate it. However, it's fairly rare because usually you know the type of the object you are iterating over. If you are receiving this iterable from some other code, you should just let the error propagate to the caller so they know an invalid input was provided.

### Errors during iteration

Most errors happen when stepping the iterator (calling `next()`). The language invariant enforced here is that the `next()` method must return an object (for async iterators, an object after awaiting). Otherwise, a TypeError is thrown.

If the invariant is broken or the `next()` method throws an error (for async iterators, it may also return a rejected promise), the error is propagated to the caller. For built-in syntaxes, the iteration in progress is aborted without retrying or cleanup (with the assumption that if the `next()` method threw the error, then it has cleaned up already). If you are manually calling `next()`, you may catch the error and retry calling `next()`, but in general you should assume the iterator is already closed.

If the caller decides to exit iteration for any reason other than the errors in the previous paragraph, such as when it enters an error state in its own code (for example, while handling an invalid value produced by the iterator), it should call the `return()` method on the iterator, if one exists. This allows the iterator to perform any cleanup. The `return()` method is only called for premature exits—if `next()` returns `done: true`, the `return()` method is not called, with the assumption that the iterator has already cleaned up.

The `return()` method might be invalid too! The language also enforces that the `return()` method must return an object and throws a TypeError otherwise. If the `return()` method throws an error, the error is propagated to the caller. However, if the `return()` method is called because the caller encountered an error in its own code, then this error overrides the error thrown by the `return()` method.

Usually, the caller implements error handling like this:

```js
try {
  for (const value of iterable) {
    // ...
  }
} catch (e) {
  // Handle the error
}
```

The `catch` will be able to catch errors thrown when `iterable` is not a valid iterable, when `next()` throws an error, when `return()` throws an error (if the `for` loop exits early), and when the `for` loop body throws an error.

Most iterators are implemented with generator functions, so we will demonstrate how generator functions typically handle errors:

```js
function* gen() {
  try {
    yield doSomething();
    yield doSomethingElse();
  } finally {
    cleanup();
  }
}
```

The lack of `catch` here causes errors thrown by `doSomething()` or `doSomethingElse()` to propagate to the caller of `gen`. If these errors are caught within the generator function (which is equally advisable), the generator function can decide to continue yielding values or to exit early. However, the `finally` block is necessary for generators that keep open resources. The `finally` block is guaranteed to run, either when the last `next()` is called or when `return()` is called.

### Forwarding errors

Some built-in syntaxes wrap an iterator into another iterator. They include the iterator produced by {{jsxref("Iterator.from()")}}, [iterator helper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) (`map()`, `filter()`, `take()`, `drop()`, and `flatMap()`), [`yield*`](/en-US/docs/Web/JavaScript/Reference/Operators/yield*), and a hidden wrapper when you use async iteration (`for await...of`, `Array.fromAsync`) on sync iterators. The wrapped iterator is then responsible for forwarding errors between the inner iterator and the caller.

- All wrapper iterators directly forward the `next()` method of the inner iterator, including its return value and thrown errors.
- Wrapper iterators generally directly forward the `return()` method of the inner iterator. If the `return()` method doesn't exist on the inner iterator, it returns `{ done: true, value: undefined }` instead. In the case of iterator helpers: if the iterator helper's `next()` method has not been called, after trying to call `return()` on the inner iterator, the current iterator always returns `{ done: true, value: undefined }`. This is consistent with generator functions where execution hasn't entered the `yield*` expression yet.
- `yield*` is the only built-in syntax that forwards the `throw()` method of the inner iterator. For information on how [`yield*`](/en-US/docs/Web/JavaScript/Reference/Operators/yield*) forwards the `return()` and `throw()` methods, see its own reference.

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

### Basic iterator

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
function* makeGenerator(array) {
  let nextIndex = 0;
  while (nextIndex < array.length) {
    yield array[nextIndex++];
  }
}

const gen = makeGenerator(["yo", "ya"]);

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

State encapsulation can be done with [private properties](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties) as well.

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
      // one of `[Symbol.iterator]()` instead of `next()`
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

`String`'s [default iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) returns the string's code points one by one:

```js
const iterator = someString[Symbol.iterator]();
console.log(`${iterator}`); // "[object String Iterator]"

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

You can redefine the iteration behavior by supplying our own `[Symbol.iterator]()`:

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

Notice how redefining `[Symbol.iterator]()` affects the behavior of built-in constructs that use the iteration protocol:

```js
console.log([...someString]); // ["bye"]
console.log(`${someString}`); // "hi"
```

### Concurrent modifications when iterating

Almost all iterables have the same underlying semantic: they don't copy the data at the time when iteration starts. Rather, they keep a pointer and move it around. Therefore, if you add, delete, or modify elements in the collection while iterating over the collection, you may inadvertently change whether other _unchanged_ elements in the collection are visited. This is very similar to how [iterative array methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#mutating_initial_array_in_iterative_methods) work.

Consider the following case using a {{domxref("URLSearchParams")}}:

```js
const searchParams = new URLSearchParams(
  "deleteme1=value1&key2=value2&key3=value3",
);

// Delete unwanted keys
for (const [key, value] of searchParams) {
  console.log(key);
  if (key.startsWith("deleteme")) {
    searchParams.delete(key);
  }
}

// Output:
// deleteme1
// key3
```

Note how it never logs `key2`. This is because a `URLSearchParams` is underlyingly a list of key-value pairs. When `deleteme1` is visited and deleted, all other entries are shifted to the left by one, so `key2` occupies the position that `deleteme1` used to be in, and when the pointer moves to the next key, it lands on `key3`.

Certain iterable implementations avoid this problem by setting "tombstone" values to avoid shifting the remaining values. Consider the similar code using a `Map`:

```js
const myMap = new Map([
  ["deleteme1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);

for (const [key, value] of myMap) {
  console.log(key);
  if (key.startsWith("deleteme")) {
    myMap.delete(key);
  }
}

// Output:
// deleteme1
// key2
// key3
```

Note how it logs all keys. This is because `Map` doesn't shift the remaining keys when one is deleted. If you want to implement something similar, here's how it may look:

```js
const tombstone = Symbol("tombstone");

class MyIterable {
  #data;
  constructor(data) {
    this.#data = data;
  }
  delete(deletedKey) {
    for (let i = 0; i < this.#data.length; i++) {
      if (this.#data[i][0] === deletedKey) {
        this.#data[i] = tombstone;
        return true;
      }
    }
    return false;
  }
  *[Symbol.iterator]() {
    for (let i = 0; i < this.#data.length; i++) {
      if (this.#data[i] !== tombstone) {
        yield this.#data[i];
      }
    }
  }
}

const myIterable = new MyIterable([
  ["deleteme1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);
for (const [key, value] of myIterable) {
  console.log(key);
  if (key.startsWith("deleteme")) {
    myIterable.delete(key);
  }
}
```

> [!WARNING]
> Concurrent modifications, in general, are very bug-prone and confusing. Unless you know precisely how the iterable is implemented, it's best to avoid modifying the collection while iterating over it.

## Specifications

{{Specifications}}

## See also

- [Iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators) guide
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Symbol.iterator")}}
- {{jsxref("Iterator")}}
