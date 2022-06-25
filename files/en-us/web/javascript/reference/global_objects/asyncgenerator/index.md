---
title: AsyncGenerator
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator
tags:
  - Class
  - ECMAScript 2018
  - Generator
  - JavaScript
  - Async Generator
  - Async Iterator
  - Reference
browser-compat: javascript.builtins.AsyncGenerator
---
{{JSRef}}

The **`AsyncGenerator`** object is returned by an {{jsxref("Statements/async_function*", "async generator function", "", 1)}} and it conforms to both the [async iterable protocol and the async iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols).

Async generators always yield a {{jsxref("Promise")}} object.

## Constructor

This object cannot be instantiated directly. Instead, an `AsyncGenerator` instance can be returned from an {{jsxref("Statements/async_function*", "async generator function", "", "1")}}.

```js
async function* createAsyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}
const asyncGen = createAsyncGenerator();
asyncGen.next()
  .then(res => console.log(res.value)); // 1
asyncGen.next()
  .then(res => console.log(res.value)); // 2
asyncGen.next()
  .then(res => console.log(res.value)); // 3
```

## Instance methods

- {{jsxref("AsyncGenerator.prototype.next()")}}
  - : Returns a {{jsxref("Promise")}} which will be resolved with the given value yielded by the {{jsxref("Operators/yield", "yield")}} expression.
- {{jsxref("AsyncGenerator.prototype.return()")}}
  - : Returns a {{jsxref("Promise")}} which will be resolved with the given value yielded by the {{jsxref("Operators/yield", "yield")}} expression and finishes the generator.
- {{jsxref("AsyncGenerator.prototype.throw()")}}
  - : Returns a {{jsxref("Promise")}} that is rejected with an exception thrown from (or uncaught from) within the async generator function and finishes the generator unless the exception is caught within that generator.

## Examples

### Async generator iteration

The following example iterates over an async generator logging values 1 - 6 to the console, at decreasing time intervals.

```js
function waitFor(time, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), time);
  });
}
async function* generate() {
  yield await waitFor(1000, 1);
  yield await waitFor(2000, 2);
  yield await waitFor(400, 3);
  yield await waitFor(800, 4);
  yield await waitFor(150, 5);
  yield await waitFor(50, 6);
  console.log('All done!');
}
async function main() {
  for await (const value of generate()) {
    console.log('value', value);
  }
}
main()
  .catch((e) => console.error('error', e));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/function*", "function*", "", 1)}}
- {{jsxref("Statements/async_function*", "async function*", "", 1)}}
- {{jsxref("Operators/function*", '<code>function*</code> expression', "", 1)}}
- {{jsxref("GeneratorFunction", "Generator Function", "", 1)}}
- {{jsxref("AsyncGeneratorFunction", "Async Generator Function", "", 1)}}
- [Iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators)
