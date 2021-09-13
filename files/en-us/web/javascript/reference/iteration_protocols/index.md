---
title: Iteration protocols
slug: Web/JavaScript/Reference/Iteration_protocols
tags:
  - ECMAScript 2015
  - Guide
  - Intermediate
  - Iterable
  - Iterator
  - JavaScript
  - Protocols
---
{{jsSidebar("More")}}

As a couple of additions to ECMAScript 2015, **Iteration protocols** aren't new built-ins or syntax, but _protocols_. These protocols can be implemented by any object by following some conventions.

There are two protocols: The [iterable protocol](#the_iterable_protocol) and the [iterator protocol](#the_iterator_protocol).

## The iterable protocol

**The iterable protocol** allows JavaScript objects to define or customize their iteration behavior, such as what values are looped over in a {{jsxref("Statements/for...of", "for...of")}} construct. Some built-in types are [built-in iterables](#built-in_iterables) with a default iteration behavior, such as {{jsxref("Array")}} or {{jsxref("Map")}}, while other types (such as {{jsxref("Object")}}) are not.

In order to be **iterable**, an object must implement the **`@@iterator`** method, meaning that the object (or one of the objects up its [prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)) must have a property with a `@@iterator` key which is available via constant {{jsxref("Symbol.iterator")}}:

| Property            | Value                                                                                                           |
| ------------------- | --------------------------------------------------------------------------------------------------------------- |
| `[Symbol.iterator]` | A zero-argument function that returns an object, conforming to the [iterator protocol](#the_iterator_protocol). |

Whenever an object needs to be iterated (such as at the beginning of a {{jsxref("Statements/for...of", "for...of")}} loop), its `@@iterator` method is called with no arguments, and the returned **iterator** is used to obtain the values to be iterated.

Note that when this zero-argument function is called, it is invoked as a method on the iterable object. Therefore inside of the function, the `this` keyword can be used to access the properties of the iterable object, to decide what to provide during the iteration.

This function can be an ordinary function, or it can be a generator function, so that when invoked, an iterator object is returned. Inside of this generator function, each entry can be provided by using `yield`.

## The iterator protocol

**The iterator protocol** defines a standard way to produce a sequence of values (either finite or infinite), and potentially a return value when all values have been generated.

An object is an iterator when it implements a **`next()`** method with the following semantics:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Property</th>
      <th scope="col">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>next()</code></td>
      <td>
        <p>
          A function, with either zero arguments or one argument, that returns
          an object with at least the following two properties. If the
          <code>next()</code> method is called with one argument, that argument
          will be available to the <code>next()</code> method being invoked.
        </p>
        <dl>
          <dt><code>done</code> (boolean)</dt>
          <dd>
            <p>
              Has the value <code>false</code> if the iterator was able to
              produce the next value in the sequence. (This is equivalent to not
              specifying the <code>done</code> property altogether.)
            </p>
            <p>
              Has the value <code>true</code> if the iterator has completed its
              sequence. In this case, <code>value</code> optionally specifies
              the return value of the iterator.
            </p>
          </dd>
          <dt><code>value</code></dt>
          <dd>
            Any JavaScript value returned by the iterator. Can be omitted when
            <code>done</code> is <code>true</code>.
          </dd>
        </dl>
        <p>
          The <code>next()</code> method must always return an object with
          appropriate properties including <code>done</code> and
          <code>value</code>. If a non-object value gets returned (such as
          <code>false</code> or <code>undefined</code>), a
          {{jsxref("TypeError")}} (<code
            >"iterator.next() returned a non-object value"</code
          >) will be thrown.
        </p>
      </td>
    </tr>
  </tbody>
</table>

> **Note:** It is not possible to know reflectively whether a particular object implements the iterator protocol. However, it is easy to create an object that satisfies _both_ the iterator and iterable protocols (as shown in the example below).
>
> Doing so allows an iterator to be consumed by the various syntaxes expecting iterables. Thus, it is seldom useful to implement the Iterator Protocol without also implementing Iterable.
>
> ```js
> // Satisfies both the Iterator Protocol and Iterable
> const myIterator = {
>     next: function() {
>         // ...
>     },
>     [Symbol.iterator]: function() { return this; }
> };
> ```
>
> However, when possible, it's better for `iterable[Symbol.iterator]` to return different iterators that always start from the beginning, like [`Set.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator) does.

## Examples using the iteration protocols

A {{jsxref("String")}} is an example of a built-in iterable object:

```js
const someString = 'hi';
console.log(typeof someString[Symbol.iterator]); // "function"
```

`String`'s {{jsxref("String/@@iterator", "default iterator", "", 1)}} returns the string's code points one by one:

```js
const iterator = someString[Symbol.iterator]();
console.log(iterator + ''); // "[object String Iterator]"

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

Some built-in constructs—such as the {{jsxref("Operators/Spread_syntax", "spread syntax", "", 1)}}—use the same iteration protocol under the hood:

```js
console.log([...someString]); // ["h", "i"]
```

You can redefine the iteration behavior by supplying our own `@@iterator`:

```js
// need to construct a String object explicitly to avoid auto-boxing
const someString = new String('hi');

someString[Symbol.iterator] = function () {
  return {
    // this is the iterator object, returning a single element (the string "bye")
    next: function () {
      return this._first ? {
        value: 'bye',
        done: (this._first = false)
      } : {
        done: true
      }
    },
    _first: true
  };
};
```

Notice how redefining `@@iterator` affects the behavior of built-in constructs that use the iteration protocol:

```js
console.log([...someString]); // ["bye"]
console.log(someString + ''); // "hi"
```

## Iterable examples

### Built-in iterables

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, and {{jsxref("Set")}} are all built-in iterables, because each of their prototype objects implements an `@@iterator` method.

### User-defined iterables

You can make your own iterables like this:

```js
const myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
console.log([...myIterable]); // [1, 2, 3]
```

### Built-in APIs accepting iterables

There are many APIs that accept iterables. Some examples include:

- {{jsxref("Map", "new Map([<var>iterable</var>])")}}
- {{jsxref("WeakMap", "new WeakMap([<var>iterable</var>])")}}
- {{jsxref("Set", "new Set([<var>iterable</var>])")}}
- {{jsxref("WeakSet", "new WeakSet([<var>iterable</var>])")}}

```js
new Map([[1, 'a'], [2, 'b'], [3, 'c']]).get(2); // "b"

const myObj = {};

new WeakMap([
    [{}, 'a'],
    [myObj, 'b'],
    [{}, 'c']
]).get(myObj);             // "b"

new Set([1, 2, 3]).has(3); // true
new Set('123').has('2');   // true

new WeakSet(function* () {
    yield {}
    yield myObj
    yield {}
}()).has(myObj);           // true
```

#### See also

- {{jsxref("Promise.all()", "Promise.all(<var>iterable</var>)")}}
- {{jsxref("Promise.race()", "Promise.race(<var>iterable</var>)")}}
- {{jsxref("Array.from()", "Array.from(<var>iterable</var>)")}}

### Syntaxes expecting iterables

Some statements and expressions expect iterables, for example the {{jsxref("Statements/for...of", "for...of")}} loops, the {{jsxref("Operators/Spread_syntax", "spread operator", "", 1)}}), {{jsxref("Operators/yield*", "yield*")}}, and {{jsxref("Operators/Destructuring_assignment", "destructuring assignment")}}:

```js
for (const value of ['a', 'b', 'c']) {
    console.log(value);
}
// "a"
// "b"
// "c"

console.log([...'abc']);   // ["a", "b", "c"]

function* gen() {
  yield* ['a', 'b', 'c'];
}

console.log(gen().next()); // { value: "a", done: false }

[a, b, c] = new Set(['a', 'b', 'c']);
console.log(a);            // "a"
```

### Non-well-formed iterables

If an iterable's `@@iterator` method doesn't return an iterator object, then it's considered a _non-well-formed_ iterable.

Using one is likely to result in runtime errors or buggy behavior:

```js example-bad
const nonWellFormedIterable = {};
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [] is not a function
```

## Iterator examples

### Simple iterator

```js
function makeIterator(array) {
  let nextIndex = 0
  return {
    next: function() {
      return nextIndex < array.length ? {
        value: array[nextIndex++],
        done: false
      } : {
        done: true
      };
    }
  };
}

const it = makeIterator(['yo', 'ya']);

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true
```

### Infinite iterator

```js
function idMaker() {
  let index = 0;
  return {
    next: function() {
      return {
        value: index++,
        done: false
      };
    }
  };
}

const it = idMaker();

console.log(it.next().value); // '0'
console.log(it.next().value); // '1'
console.log(it.next().value); // '2'
// ...
```

### With a generator

```js
function* makeSimpleGenerator(array) {
  let nextIndex = 0;
  while (nextIndex < array.length) {
    yield array[nextIndex++];
  }
}

const gen = makeSimpleGenerator(['yo', 'ya']);

console.log(gen.next().value); // 'yo'
console.log(gen.next().value); // 'ya'
console.log(gen.next().done);  // true

function* idMaker() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const it = idMaker()

console.log(it.next().value); // '0'
console.log(it.next().value); // '1'
console.log(it.next().value); // '2'
// ...
```

### With ES2015 class

```js
class SimpleClass {
  constructor(data) {
    this.data = data;
  }

  [Symbol.iterator]() {
    // Use a new index for each iterator. This makes multiple
    // iterations over the iterable safe for non-trivial cases,
    // such as use of break or nested looping over the same iterable.
    let index = 0;

    return {
      next: () => {
        if (index < this.data.length) {
          return {value: this.data[index++], done: false}
        } else {
          return {done: true}
        }
      }
    }
  }
}

const simple = new SimpleClass([1,2,3,4,5]);

for (const val of simple) {
  console.log(val); // '1' '2' '3' '4' '5'
}
```

## Is a generator object an iterator or an iterable?

A {{jsxref("Generator", "generator object", "", 1)}} is _both_ iterator and iterable:

```js
const aGeneratorObject = function* () {
  yield 1;
  yield 2;
  yield 3;
}();

console.log(typeof aGeneratorObject.next);
// "function", because it has a next method, so it's an iterator

console.log(typeof aGeneratorObject[Symbol.iterator]);
// "function", because it has an @@iterator method, so it's an iterable

console.log(aGeneratorObject[Symbol.iterator]() === aGeneratorObject);
// true, because its @@iterator method returns itself (an iterator), so it's an well-formed iterable

console.log([...aGeneratorObject]);
// [1, 2, 3]

console.log(Symbol.iterator in aGeneratorObject)
// true, because @@iterator method is a property of aGeneratorObject
```

## See also

- {{jsxref("Statements/function*", "the <code>function*</code> documentation", "", 1)}}
- [Iteration in the ECMAScript specification](https://tc39.es/ecma262/#sec-iteration)
