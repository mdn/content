---
title: "TypeError: already executing generator"
slug: Web/JavaScript/Reference/Errors/Already_executing_generator
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "TypeError: already executing generator" occurs when a [generator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) is continued using one of its methods (such as {{jsxref("Generator/next", "next()")}}) while executing the generator function's body itself.

## Message

```plain
TypeError: Generator is already running (V8-based)
TypeError: already executing generator (Firefox)
TypeError: Generator is executing (Safari)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

The generator's methods, {{jsxref("Generator/next", "next()")}}, {{jsxref("Generator/return", "return()")}}, and {{jsxref("Generator/throw", "throw()")}}, are meant to continue the execution of a generator function when it's paused after a `yield` expression or before the first statement. If a call to one of these methods is made while executing the generator function, the error is thrown. If you want to return or throw within the generator function, use the {{jsxref("Statements/return", "return")}} statement or the {{jsxref("Statements/throw", "throw")}} statement, respectively.

## Examples

```js example-bad
let it;
function* getNumbers(times) {
  if (times <= 0) {
    it.throw(new Error("times must be greater than 0"));
  }
  for (let i = 0; i < times; i++) {
    yield i;
  }
}
it = getNumbers(3);
it.next();
```

```js example-good
let it;
function* getNumbers(times) {
  if (times <= 0) {
    throw new Error("times must be greater than 0");
  }
  for (let i = 0; i < times; i++) {
    yield i;
  }
}
it = getNumbers(3);
it.next(); // { value: 0, done: false }
```

## See also

- [Iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators)
- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Generator")}}
