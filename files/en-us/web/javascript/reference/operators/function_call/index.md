---
title: Function call expression
slug: Web/JavaScript/Reference/Operators/Function_call
page-type: javascript-operator
browser-compat: javascript.operators.function_call
sidebar: jssidebar
---

The **function call** expression syntax evaluates a function's body using the given arguments and returns the result.

{{InteractiveExample("JavaScript Demo: Function call expression", "shorter")}}

```js interactive-example
function getRectArea(width, height) {
  return width * height;
}

console.log(getRectArea(3, 4));
// Expected output: 12
```

## Syntax

```js-nolint
fn()
fn(arg1)
fn(arg1, arg2)
fn(arg1, arg2, /* …, */ argN)
```

### Parameters

- `fn`
  - : An expression with [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) 17 (access and call) or above. The result must be a callable function. Usually an identifier, a [property access](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors), or a function literal expression (the {{glossary("IIFE")}} pattern).
- `arg1`, …, `argN` {{optional_inline}}
  - : Each argument can be a [spread argument](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) or an expression with [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) 2 (assignment) or above.

### Return value

- If the function is a normal function, its whole body is evaluated. The call expression evaluates to its return value, or {{jsxref("undefined")}} if the end of the function body is reached without encountering a {{jsxref("Statements/return", "return")}} statement.
- If the function is an [async function](/en-US/docs/Web/JavaScript/Reference/Statements/async_function), its body is evaluated up to the first {{jsxref("Operators/await", "await")}} expression or the function's completion. The call expression evaluates to a pending {{jsxref("Promise")}} if an `await` is encountered, or a promise [resolved](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#description) to the return value if the function exits without encountering `await`.
- If the function is a [generator function](/en-US/docs/Web/JavaScript/Reference/Statements/function*), the call expression evaluates to a new {{jsxref("Generator")}} object. The function body starts executing on the first call to the generator's {{jsxref("Generator/next", "next()")}} method.
- If the function is an [async generator function](/en-US/docs/Web/JavaScript/Reference/Statements/async_function*), the call expression evaluates to a new {{jsxref("AsyncGenerator")}} object. The function body starts executing on the first call to the generator's {{jsxref("AsyncGenerator/next", "next()")}} method, which returns a promise for the next iterator result.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `fn` is not callable, which includes cases where it isn't a function (`typeof fn !== "function"`), it's a [class](/en-US/docs/Web/JavaScript/Reference/Classes), or it throws unconditionally when called (like {{jsxref("Map/Map", "Map()")}}, which must be constructed with {{jsxref("Operators/new", "new")}} instead).

The call expression also propagates uncaught errors from evaluating the function body:

- If the function is a normal function, uncaught errors thrown from the function body become errors of the call expression.
- If the function is an async function, uncaught errors cause the returned promise to reject.
- If the function is a generator function, uncaught errors become errors of the `next()` method.
- If the function is an async generator function, uncaught errors cause the promise returned by the `next()` method to reject.

## Description

When evaluating a function call, the `fn` expression is evaluated first, and then each argument expression in order, expanding spread arguments as they are encountered. Only when all expressions are evaluated does it check whether `fn` is callable. For example:

```js
1(console.log("Hi")); // Logs "Hi"
// Uncaught TypeError: 1 is not a function
```

Although `1` is not callable, the side effect of the argument is still generated.

This contrasts with [optional chaining](/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining), which does not evaluate the arguments if `fn` is already `null` or `undefined`.

```js
null?.(console.log("Hi")); // Nothing logged
```

The arguments list may not match the [parameters](/en-US/docs/Web/JavaScript/Reference/Functions#function_parameters) the function has declared to accept. If fewer arguments are provided than the function expects, those parameters get the value `undefined`. If more arguments are provided, they are still evaluated and are accessible inside the function via the {{jsxref("Functions/arguments", "arguments")}} object.

Arguments are always [_passed by value_](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_value) and never [_passed by reference_](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_reference). This means that if a function reassigns a parameter, the value won't change outside the function. More precisely, object arguments are [_passed by sharing_](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_sharing), which means if the object's properties are mutated, the change will impact the outside of the function. See the [functions guide](/en-US/docs/Web/JavaScript/Reference/Functions#passing_arguments) for more information.

The call expression supplies the {{jsxref("Operators/this", "this")}} context to the function body. The `this` context is established by using a (possibly parenthesized) [property accessor](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors). For example, in `[].push(1);`, `[].push` is the function value that gets called, while `[]` is the `this` value.

## Examples

### Calling a normal function

Normal functions return JavaScript values directly (which may be `undefined`).

```js
function completes(a, b) {
  console.log(a, b);
}

function returns(a, b) {
  return a + b;
}

function throws(a, b) {
  throw new Error(`${a} and ${b}`);
}

console.log(completes(1, 2)); // Logs 1 2; returns undefined
console.log(returns(3, 4)); // 7
console.log(throws(5, 6)); // Error: 5 and 6
```

### Calling an async function

Async functions return {{jsxref("Promise")}} objects.

```js
async function awaits(a, b) {
  console.log("awaits() starts");
  await new Promise((resolve) => setTimeout(resolve, 10));
  return a + b;
}

async function returns(a, b) {
  console.log("returns() starts");
  return a + b;
}

async function throws(a, b) {
  console.log("throws() starts");
  throw new Error(`${a} and ${b}`);
}

awaits(1, 2).then(console.log);
returns(3, 4).then(console.log);
throws(5, 6).catch(console.error);
Promise.resolve().then(() => console.log("Promise.resolve"));
console.log("All functions called");
```

This outputs:

```plain
awaits() starts
returns() starts
throws() starts
All functions called
7
Error: 5 and 6
Promise.resolve
3
```

As you can see, all functions start executing synchronously. The promises returned by `returns(3, 4)` and `throws(5, 6)` settle as soon as they return because they contain no `await`, so the output is logged before `Promise.resolve`. The settled result of `awaits()` is only received after the `setTimeout` finishes after 10ms.

### Calling a generator function

Generator functions return {{jsxref("Generator")}} objects. The function execution is suspended until `next()` is called.

```js
function* yieldTwo(a, b) {
  yield a;
  yield b;
  return "done";
}

const gen = yieldTwo(1, 2);
console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: "done", done: true}
```

See the [Iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators) guide for more information about how they work.

### Calling an async generator function

Async generator functions return {{jsxref("AsyncGenerator")}} objects. The function execution is suspended until `next()` is called.

```js
async function* yieldTwo(a, b) {
  await new Promise((resolve) => setTimeout(resolve, 10));
  yield a;
  await new Promise((resolve) => setTimeout(resolve, 10));
  yield b;
  await new Promise((resolve) => setTimeout(resolve, 10));
  return "done";
}

const gen = yieldTwo(1, 2);
console.log(await gen.next()); // {value: 1, done: false}
console.log(await gen.next()); // {value: 2, done: false}
console.log(await gen.next()); // {value: "done", done: true}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Functions](/en-US/docs/Web/JavaScript/Guide/Functions) guide
- [Functions](/en-US/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Operators/new", "new")}}
