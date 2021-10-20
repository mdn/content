---
title: for await...of
slug: Web/JavaScript/Reference/Statements/for-await...of
tags:
  - Iterate
  - Iteration
  - JavaScript
  - Language feature
  - Reference
  - Statement
  - asynchronous
  - await
browser-compat: javascript.statements.for_await_of
---
{{jsSidebar("Statements")}}

The **`for await...of` statement** creates a loop iterating over async iterable objects as well as on sync iterables, including: built-in {{jsxref("String")}}, {{jsxref("Array")}}, `Array`-like objects (e.g., {{jsxref("Functions/arguments", "arguments")}} or {{DOMxRef("NodeList")}}), {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, and user-defined async/sync iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object. This statement can only be used inside an {{jsxref("Statements/async_function", "async function", "", 1)}}.

> **Note:** `for await...of` doesn't work with async iterators that are not async
> iterables.

## Syntax

```js
for await (const variable of iterable) {
  statement
}
```

- `variable`
  - : On each iteration a value of a different property is assigned to
    `variable`. `variable` may be declared
    with `const`, `let`, or `var`.
- `iterable`
  - : Object whose iterable properties are to be iterated over.

## Examples

### Iterating over async iterables

You can also iterate over an object that explicitly implements async iterable protocol:

```js
const asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return Promise.resolve({ value: this.i++, done: false });
        }

        return Promise.resolve({ done: true });
      }
    };
  }
};

(async function() {
   for await (let num of asyncIterable) {
     console.log(num);
   }
})();

// 0
// 1
// 2
```

### Iterating over async generators

Since the return values of async generators conform to the async iterable protocol,
they can be looped using `for await...of`.

```js
async function* asyncGenerator() {
  let i = 0;
  while (i < 3) {
    yield i++;
  }
}

(async function() {
  for await (let num of asyncGenerator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
```

For a more concrete example of iterating over an async generator using
`for await...of`, consider iterating over data from an API.

This example first creates an async iterable for a stream of data, then uses it to find
the size of the response from the API.

```js
async function* streamAsyncIterable(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        return;
      }
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}
// Fetches data from url and calculates response size using the async generator.
async function getResponseSize(url) {
  const response = await fetch(url);
  // Will hold the size of the response, in bytes.
  let responseSize = 0;
  // The for-await-of loop. Async iterates over each portion of the response.
  for await (const chunk of streamAsyncIterable(response.body)) {
    // Incrementing the total response length.
    responseSize += chunk.length;
  }

  console.log(`Response Size: ${responseSize} bytes`);
  // expected output: "Response Size: 1071472"
  return responseSize;
}
getResponseSize('https://jsonplaceholder.typicode.com/photos');
```

### Iterating over sync iterables and generators

`for await...of` loop also consumes sync iterables and generators. In that
case it internally awaits emitted values before assign them to the loop control
variable.

```js
function* generator() {
  yield 0;
  yield 1;
  yield Promise.resolve(2);
  yield Promise.resolve(3);
  yield 4;
}

(async function() {
  for await (let num of generator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
// 3
// 4

// compare with for-of loop:

for (let numOrPromise of generator()) {
  console.log(numOrPromise);
}
// 0
// 1
// Promise { 2 }
// Promise { 3 }
// 4
```

> **Note:** Be aware of yielding rejected promises from sync generator. In
> such case `for await...of` throws when consuming rejected promise and
> DOESN'T CALL `finally` blocks within that generator. This can be
> undesirable if you need to free some allocated resources with
> `try/finally`.

```js
function* generatorWithRejectedPromises() {
  try {
    yield 0;
    yield 1;
    yield Promise.resolve(2);
    yield Promise.reject(3);
    yield 4;
    throw 5;
  } finally {
    console.log('called finally')
  }
}

(async function() {
  try {
    for await (let num of generatorWithRejectedPromises()) {
      console.log(num);
    }
  } catch (e) {
    console.log('caught', e)
  }
})();
// 0
// 1
// 2
// caught 3

// compare with for-of loop:

try {
  for (let numOrPromise of generatorWithRejectedPromises()) {
    console.log(numOrPromise);
  }
} catch (e) {
  console.log('caught', e)
}
// 0
// 1
// Promise { 2 }
// Promise { <rejected> 3 }
// 4
// caught 5
// called finally
```

To make  `finally` blocks of a sync generator to be always called use
appropriate form of the loop, `for await...of` for the async generator and
`for...of` for the sync one and await yielded promises explicitly inside the
loop.

```js
(async function() {
  try {
    for (let numOrPromise of generatorWithRejectedPromises()) {
      console.log(await numOrPromise);
    }
  } catch (e) {
    console.log('caught', e)
  }
})()
// 0
// 1
// 2
// caught 3
// called finally
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Global_Objects/Symbol/asyncIterator", "Symbol.asyncIterator")}}
- {{jsxref("Statements/for...of", "for...of")}}
