---
title: Generator.prototype.throw()
slug: Web/JavaScript/Reference/Global_Objects/Generator/throw
page-type: javascript-instance-method
browser-compat: javascript.builtins.Generator.throw
---

{{JSRef}}

The **`throw()`** method of {{jsxref("Generator")}} instances acts as if a `throw` statement is inserted in the generator's body at the current suspended position, which informs the generator of an error condition and allows it to handle the error, or perform cleanup and close itself.

## Syntax

<!-- We don't usually add the "generatorObject" subject for methods. However, it is necessary here, because "throw" is a keyword, so otherwise it's invalid syntax. -->

```js-nolint
generatorObject.throw(exception)
```

### Parameters

- `exception`
  - : The exception to throw. For debugging purposes, it is useful to make it an `instanceof` {{jsxref("Error")}}.

### Return value

If the thrown exception is caught by a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) and the generator resumes to yield more values, it will return an {{jsxref("Global_Objects/Object", "Object")}} with two properties:

- `done`
  - : A boolean value:
    - `true` if the generator function's control flow has reached the end.
    - `false` if the generator function is able to produce more values.
- `value`
  - : The value yielded from the next `yield` expression.

### Exceptions

If the thrown exception is not caught by a `try...catch`, the `exception` passed to `throw()` will be thrown out from the generator function.

## Description

The `throw()` method, when called, can be seen as if a `throw exception;` statement is inserted in the generator's body at the current suspended position, where `exception` is the exception passed to the `throw()` method. Therefore, in a typical flow, calling `throw(exception)` will cause the generator to throw. However, if the `yield` expression is wrapped in a `try...catch` block, the error may be caught and control flow can either resume after error handling, or exit gracefully.

## Examples

### Using throw()

The following example shows a simple generator and an error that is thrown using the `throw` method. An error can be caught by a {{jsxref("Statements/try...catch", "try...catch")}} block as usual.

```js
function* gen() {
  while (true) {
    try {
      yield 42;
    } catch (e) {
      console.log("Error caught!");
    }
  }
}

const g = gen();
g.next();
// { value: 42, done: false }
g.throw(new Error("Something went wrong"));
// "Error caught!"
// { value: 42, done: false }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/function*", "function*")}}
