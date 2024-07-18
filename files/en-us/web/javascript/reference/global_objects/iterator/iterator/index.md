---
title: Iterator() constructor
slug: Web/JavaScript/Reference/Global_Objects/Iterator/Iterator
page-type: javascript-constructor
status:
  - experimental
browser-compat: javascript.builtins.Iterator.Iterator
---

{{JSRef}}{{SeeCompatTable}}

The **`Iterator()`** constructor is intended to be used as the [superclass](/en-US/docs/Web/JavaScript/Reference/Classes/extends) of other classes that create iterators. It throws an error when constructed by itself.

## Syntax

```js-nolint
new Iterator()
```

> **Note:** `Iterator()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}. In addition, `Iterator()` cannot actually be constructed itself — it's usually implicitly constructed through [`super()`](/en-US/docs/Web/JavaScript/Reference/Operators/super) calls inside the constructor of a subclass.

### Parameters

None.

### Return value

A new {{jsxref("Iterator")}} object.

### Exceptions

- {{jsxref("TypeError")}}
  - : When [`new.target`](/en-US/docs/Web/JavaScript/Reference/Operators/new.target) is the `Iterator` function itself, i.e. when the `Iterator` constructor itself is constructed.

## Description

`Iterator` represents an _abstract class_ — a class that provides common utilities for its subclasses, but is not intended to be instantiated itself. It is the superclass of all other iterator classes, and is used to create subclasses that implement specific iteration algorithms — namely, all subclasses of `Iterator` must implement a `next()` method as required by the [iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol). Because `Iterator` doesn't actually provide the `next()` method, it doesn't make sense to construct an `Iterator` directly.

You can also use {{jsxref("Iterator.from()")}} to create an `Iterator` instance from an existing iterable or iterator object.

## Examples

### Subclassing Iterator

The following example defines a custom data structure, `Range`, which allows iteration. The simplest way to make an object iterable is to provide an [`[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) method in the form of a generator function:

```js
class Range {
  #start;
  #end;
  #step;

  constructor(start, end, step = 1) {
    this.#start = start;
    this.#end = end;
    this.#step = step;
  }

  *[Symbol.iterator]() {
    for (let value = this.#start; value <= this.#end; value += this.#step) {
      yield value;
    }
  }
}

const range = new Range(1, 5);
for (const num of range) {
  console.log(num);
}
```

This works, but it isn't as nice as how built-in iterators work. There are two problems:

- The returned iterator inherits from {{jsxref("Generator")}}, which means modifications to `Generator.prototype` are going to affect the returned iterator, which is a leak of abstraction.
- The returned iterator does not inherit from a custom prototype, which makes it harder if we intend to add extra methods to the iterator.

We can mimic the implementation of built-in iterators, such as [map iterators](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator), by subclassing `Iterator`. This enables us to define extra properties, such as [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag), while making the iterator helper methods available on the returned iterator.

```js
class Range {
  #start;
  #end;
  #step;

  constructor(start, end, step = 1) {
    this.#start = start;
    this.#end = end;
    this.#step = step;
  }

  static #RangeIterator = class extends Iterator {
    #cur;
    #s;
    #e;
    constructor(range) {
      super();
      this.#cur = range.#start;
      this.#s = range.#step;
      this.#e = range.#end;
    }
    static {
      Object.defineProperty(this.prototype, Symbol.toStringTag, {
        value: "Range Iterator",
        configurable: true,
        enumerable: false,
        writable: false,
      });

      // Avoid #RangeIterator from being accessible outside
      delete this.prototype.constructor;
    }
    next() {
      if (this.#cur > this.#e) {
        return { value: undefined, done: true };
      }
      const res = { value: this.#cur, done: false };
      this.#cur += this.#s;
      return res;
    }
  };

  [Symbol.iterator]() {
    return new Range.#RangeIterator(this);
  }
}

const range = new Range(1, 5);
for (const num of range) {
  console.log(num);
}
```

The subclassing pattern is useful if you want to create many custom iterators. If you have an existing iterable or iterator object which doesn't inherit from `Iterator`, and you just want to call iterator helper methods on it, you can use {{jsxref("Iterator.from()")}} to create a one-time `Iterator` instance.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Iterator` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.from()")}}
