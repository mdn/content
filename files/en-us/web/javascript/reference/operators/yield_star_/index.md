---
title: yield*
slug: Web/JavaScript/Reference/Operators/yield*
page-type: javascript-operator
browser-compat: javascript.operators.yield_star
---

{{jsSidebar("Operators")}}

The **`yield*`** operator is used to delegate to another [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) object, such as a {{jsxref("Generator")}}.

{{EmbedInteractiveExample("pages/js/expressions-yieldasterisk.html")}}

## Syntax

```js-nolint
yield* expression
```

### Parameters

- `expression` {{optional_inline}}
  - : An iterable object.

### Return value

Returns the value returned by that iterator when it's closed (when `done` is `true`).

## Description

The `yield*` expression iterates over the operand and yields each value returned by it. It delegates iteration of the current generator to an underlying iterator — which we will refer to as "generator" and "iterator", respectively. `yield*` first gets the iterator from the operand by calling the latter's [`[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) method. Then, each time the `next()` method of the generator is called, `yield*` calls the iterator's `next()` method, passing the argument received by the generator's `next()` method (always `undefined` for the first call), and yielding the same result object as what's returned from the iterator's `next()` method. If the iterator result has `done: true`, then the `yield*` expression stops executing and returns the `value` of that result.

The `yield*` operator forwards the current generator's {{jsxref("Generator/throw", "throw()")}} and {{jsxref("Generator/return", "return()")}} methods to the underlying iterator as well. If the current generator is prematurely closed through one of these methods, the underlying iterator will be notified. If the generator's `throw()`/`return()` method is called, the `throw()`/`return()` method of the underlying iterator is called with the same argument. The return value of `throw()`/`return()` is handled like the `next()` method's result, and if the method throws, the exception is propagated from the `yield*` expression.

If the underlying iterator doesn't have a `return()` method, the `yield*` expression turns into a {{jsxref("Statements/return", "return")}} statement, just like calling `return()` on a suspended {{jsxref("Operators/yield", "yield")}} expression.

If the underlying iterator doesn't have a `throw()` method, this causes `yield*` to throw a {{jsxref("TypeError")}} – but before throwing the error, the underlying iterator's `return()` method is called if one exists.

## Examples

### Delegating to another generator

In following code, values yielded by `g1()` are returned from
`next()` calls just like those which are yielded by `g2()`.

```js
function* g1() {
  yield 2;
  yield 3;
  yield 4;
}

function* g2() {
  yield 1;
  yield* g1();
  yield 5;
}

const gen = g2();

console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: 3, done: false}
console.log(gen.next()); // {value: 4, done: false}
console.log(gen.next()); // {value: 5, done: false}
console.log(gen.next()); // {value: undefined, done: true}
```

### Other Iterable objects

Besides generator objects, `yield*` can also `yield` other kinds
of iterables (e.g., arrays, strings, or {{jsxref("Functions/arguments", "arguments")}}
objects).

```js
function* g3(...args) {
  yield* [1, 2];
  yield* "34";
  yield* args;
}

const gen = g3(5, 6);

console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: "3", done: false}
console.log(gen.next()); // {value: "4", done: false}
console.log(gen.next()); // {value: 5, done: false}
console.log(gen.next()); // {value: 6, done: false}
console.log(gen.next()); // {value: undefined, done: true}
```

### The value of yield\* expression itself

`yield*` is an expression, not a statement, so it evaluates to a value.

```js
function* g4() {
  yield* [1, 2, 3];
  return "foo";
}

function* g5() {
  const g4ReturnValue = yield* g4();
  console.log(g4ReturnValue); // 'foo'
  return g4ReturnValue;
}

const gen = g5();

console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: 3, done: false} done is false because g5 generator isn't finished, only g4
console.log(gen.next()); // {value: 'foo', done: true}
```

### Method forwarding

The `next()`, `throw()`, and `return()` methods of the current generator are all forwarded to the underlying iterator.

```js
const iterable = {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next(v) {
        console.log("next called with", v);
        count++;
        return { value: count, done: false };
      },
      return(v) {
        console.log("return called with", v);
        return { value: "iterable return value", done: true };
      },
      throw(v) {
        console.log("throw called with", v);
        return { value: "iterable thrown value", done: true };
      },
    };
  },
};

function* gf() {
  yield* iterable;
  return "gf return value";
}

const gen = gf();
console.log(gen.next(10));
// next called with undefined; the argument of the first next() call is always ignored
// { value: 1, done: false }
console.log(gen.next(20));
// next called with 20
// { value: 2, done: false }
console.log(gen.return(30));
// return called with 30
// { value: 'iterable return value', done: true }
console.log(gen.next(40));
// { value: undefined, done: true }; gen is already closed

const gen2 = gf();
console.log(gen2.next(10));
// next called with undefined
// { value: 1, done: false }
console.log(gen2.throw(50));
// throw called with 50
// { value: 'gf return value', done: true }
console.log(gen.next(60));
// { value: undefined, done: true }; gen is already closed
```

If the `return()`/`throw()` method of the underlying iterator returns `done: false`, the current generator continues executing and `yield*` continues to delegate to the underlying iterator.

```js
const iterable = {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next(v) {
        console.log("next called with", v);
        count++;
        return { value: count, done: false };
      },
      return(v) {
        console.log("return called with", v);
        return { value: "iterable return value", done: false };
      },
    };
  },
};

function* gf() {
  yield* iterable;
  return "gf return value";
}

const gen = gf();
console.log(gen.next(10));
// next called with undefined
// { value: 1, done: false }
console.log(gen.return(20));
// return called with 20
// { value: 'iterable return value', done: false }
console.log(gen.next(30));
// { value: 2, done: false }; gen is not closed
```

If the underlying iterator doesn't have a `throw()` method and the generator's `throw()` is called, `yield*` throws an error.

```js
const iterable = {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next(v) {
        count++;
        return { value: count, done: false };
      },
    };
  },
};

function* gf() {
  yield* iterable;
  return "gf return value";
}

const gen = gf();
gen.next(); // First next() starts the yield* expression
gen.throw(20); // TypeError: The iterator does not provide a 'throw' method.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/function*", "function*")}}
- [`function*` expression](/en-US/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Operators/yield", "yield")}}
