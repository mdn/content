---
title: yield*
slug: Web/JavaScript/Reference/Operators/yield*
tags:
  - ECMAScript 2015
  - Generators
  - Iterable
  - Iterator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.yield_star
---
{{jsSidebar("Operators")}}

The **`yield*` expression** is used to
delegate to another {{jsxref("Statements/function*", "generator")}} or iterable
object.

{{EmbedInteractiveExample("pages/js/expressions-yieldasterisk.html")}}

## Syntax

```js
yield* expression
```

- `expression`
  - : The expression which returns an iterable object.

## Description

The `yield*` expression iterates over the operand and `yield`s
each value returned by it.

The value of `yield*` expression itself is the value returned by that
iterator when it's closed (i.e., when `done` is `true`).

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

const iterator = g2();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: 4, done: false}
console.log(iterator.next()); // {value: 5, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
```

### Other Iterable objects

Besides generator objects, `yield*` can also `yield` other kinds
of iterables (e.g., arrays, strings, or {{jsxref("Functions/arguments", "arguments")}}
objects).

```js
function* g3(...args) {
  yield* [1, 2];
  yield* '34';
  yield* args;
}

const iterator = g3(5, 6);

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: "3", done: false}
console.log(iterator.next()); // {value: "4", done: false}
console.log(iterator.next()); // {value: 5, done: false}
console.log(iterator.next()); // {value: 6, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
```

### The value of yield* expression itself

`yield*` is an expression, not a statement—so it evaluates to a value.

```js
function* g4() {
  yield* [1, 2, 3];
  return 'foo';
}

function* g5() {
  const g4ReturnValue = yield* g4();
  console.log(g4ReturnValue) // 'foo'
  return g4ReturnValue;
}

const iterator = g5();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false} done is false because g5 generator isn't finished, only g4
console.log(iterator.next()); // {value: 'foo', done: true}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The Iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("Operators/yield", "yield")}}
