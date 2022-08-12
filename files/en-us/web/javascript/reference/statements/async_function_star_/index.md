---
title: async function*
slug: Web/JavaScript/Reference/Statements/async_function*
tags:
  - Function
  - Iterator
  - JavaScript
  - Language feature
  - Statement
browser-compat: javascript.statements.async_generator_function
---
{{jsSidebar("Statements")}}

The **`async function*`** declaration defines an _async generator function_, which returns an {{jsxref("Global_Objects/AsyncGenerator","AsyncGenerator")}} object.

{{EmbedInteractiveExample("pages/js/expressions-async-function-asterisk.html", "taller")}}

You can also define async generator functions using the {{jsxref("AsyncGeneratorFunction")}} constructor or the [`async function*` expression](/en-US/docs/Web/JavaScript/Reference/Operators/async_function*) syntax.

## Syntax

```js
async function* name(param0) {
  statements
}
async function* name(param0, param1) {
  statements
}
async function* name(param0, param1, /* … ,*/ paramN) {
  statements
}
```

> **Note:** Async generator functions do not have arrow function counterparts.

### Parameters

- `name`
  - : The function name.
- `param` {{optional_inline}}
  - : The name of a formal parameter for the function.
- `statements` {{optional_inline}}
  - : The statements comprising the body of the function.

## Description

An async generator function combines the features of [async functions](/en-US/docs/Web/JavaScript/Reference/Statements/async_function) and [generator functions](/en-US/docs/Web/JavaScript/Reference/Statements/function*). You can use both the [`await`](/en-US/docs/Web/JavaScript/Reference/Operators/await) and [`yield`](/en-US/docs/Web/JavaScript/Reference/Operators/yield) keywords within the function body. This empowers you to handle asynchronous tasks ergonomically with `await`, while leveraging the lazy nature of generator functions.

Unlike normal generator functions declared with `function*`, an async generator function return an {{jsxref("Global_Objects/AsyncGenerator","AsyncGenerator")}} object, which conforms to the [async iterable protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols). Every call to `next()` returns a {{jsxref("Promise")}} that resolves to the iterator result object.

When a promise is yielded from an async generator, the iterator result promise's eventual state will match that of the yielded promise. For example:

```js
async function* foo() {
  yield Promise.reject(1);
}

foo().next().catch((e) => console.error(e));
```

`1` will be logged, because if the yielded promise rejects, the iterator result will reject as well. The `value` property of an async generator's resolved result will not be another promise.

## Examples

### Declaring an async generator function

Async generator functions always produce promises of results — even when each `yield` step is synchronous.

```js
async function* myGenerator(step) {
  await new Promise((resolve) => setTimeout(resolve, 10));
  yield 0;
  yield step;
  yield step * 2;
}

const gen = myGenerator(2);
gen.next()
  .then((res) => {
    console.log(res); // { value: 0, done: false }
    return gen.next();
  })
  .then((res) => {
    console.log(res); // { value: 2, done: false }
    return gen.next();
  })
  .then((res) => {
    console.log(res); // { value: 4, done: false }
    return gen.next();
  })
  .then((res) => {
    console.log(res); // { value: undefined, done: true }
    return gen.next();
  });
```

### Using an async generator function to read a series of files

In this example, we read a series of files and only access its content when requested, using Node's [`fs/promises`](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html) module.

```js
async function* readFiles(directory) {
  const files = await fs.readdir(directory);
  for (const file of files) {
    const stats = await fs.stat(file);
    if (stats.isFile()) {
      yield {
        name: file,
        content: await fs.readFile(file, 'utf8'),
      };
    }
  }
}

const files = readFiles('.');
console.log((await files.next()).value);
// Possible output: { name: 'file1.txt', content: '...' }
console.log((await files.next()).value);
// Possible output: { name: 'file2.txt', content: '...' }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Operators/async_function*", "async function*")}} expression
- {{jsxref("AsyncGeneratorFunction")}} object
- [The Iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("GeneratorFunction")}} object
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Function")}} object
- {{jsxref("Functions", "Functions", "", 1)}}
