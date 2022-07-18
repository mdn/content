---
title: Generator.prototype.return()
slug: Web/JavaScript/Reference/Global_Objects/Generator/return
tags:
  - ECMAScript 2015
  - Generator
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Generator.return
---
{{JSRef}}

The **`return()`** method of a generator acts as if a `return` statement is inserted in the generator's body at the current suspended position, which finishes the generator and allows the generator to perform any cleanup tasks when combined with a [`try...finally`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally-block) block.

## Syntax

<!-- We don't usually add the "generatorObject" subject for methods. However, it is necessary here, because "return" is a keyword, so otherwise it's invalid syntax. -->
```js
generatorObject.return(value)
```

### Parameters

- `value`
  - : The value to return.

### Return value

An {{jsxref("Global_Objects/Object", "Object")}} with two properties:

- `done`
  - : A boolean value:
    - `true` if the generator function's control flow has reached the end.
    - `false` if the generator function's control flow hasn't reached the end and can produce more values. This can only happen if the `return` is captured in a [`try...finally`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally-block) and there are more `yield` expressions in the `finally` block.
- `value`
  - : The value that is given as an argument, or, if the `yield` expression is wrapped in a [`try...finally`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally-block), the value yielded/returned from the `finally` block.

## Description

The `return()` method, when called, can be seen as if a `return value;` statement is inserted in the generator's body at the current suspended position, where `value` is the value passed to the `return()` method. Therefore, in a typical flow, calling `return(value)` will return `{ done: true, value: value }`. However, if the `yield` expression is wrapped in a `try...finally` block, the control flow doesn't exit the function body, but proceeds to the `finally` block instead. In this case, the value returned may be different, and `done` may even be `false`, if there are more `yield` expressions within the `finally` block.

## Examples

### Using return()

The following example shows a simple generator and the `return` method.

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

g.next();        // { value: 1, done: false }
g.return('foo'); // { value: "foo", done: true }
g.next();        // { value: undefined, done: true }
```

If `return(value)` is called on a generator that is already in "completed" state, the generator will remain in "completed" state.

If no argument is provided, the `value` property of the returned object will be `undefined`. If an argument is provided, it will become the value of the `value` property of the returned object, unless the `yield` expression is wrapped in a `try...finally`.

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.next(); // { value: 3, done: false }
g.next(); // { value: undefined, done: true }
g.return(); // { value: undefined, done: true }
g.return(1); // { value: 1, done: true }
```

### Using return() with try...finally

The fact that the `return` method has been called can only be made known to the generator itself if the `yield` expression is wrapped in a `try...finally` block.

When the `return` method is called on a generator that is suspended within a `try` block, execution in the generator proceeds to the `finally` block — since the `finally` block of `try...finally` statements always executes.

```js
function* gen() {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield 'cleanup';
  }
}

const g1 = gen();
g1.next(); // { value: 1, done: false }

// Execution is suspended before the try...finally.
g1.return('early return'); // { value: 'early return', done: true }

const g2 = gen();
g2.next(); // { value: 1, done: false }
g2.next(); // { value: 2, done: false }

// Execution is suspended within the try...finally.
g2.return('early return'); // { value: 'cleanup', done: false }

// The completion value is preserved
g2.next(); // { value: 'early return', done: true }

// Generator is in the completed state
g2.return('not so early return'); // { value: 'not so early return', done: true }
```

The return value of the finally block can also become the `value` of the result returned from the `return` call.

```js
function* gen() {
  try {
    yield 1;
  } finally {
    return 'cleanup';
  }
}

const g1 = gen();
g1.next(); // { value: 1, done: false }
g1.return('early return'); // { value: 'cleanup', done: true }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/function*", "function*")}}
