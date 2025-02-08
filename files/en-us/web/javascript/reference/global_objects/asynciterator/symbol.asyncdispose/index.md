---
title: AsyncIterator.prototype[Symbol.asyncDispose]()
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncDispose
page-type: javascript-instance-method
browser-compat: javascript.builtins.AsyncIterator.@@asyncDispose
---

{{JSRef}}

The **`[Symbol.asyncDispose]()`** method of {{jsxref("AsyncIterator")}} instances implements the _async disposable protocol_ and allows it to be disposed when used with {{jsxref("Statements/await_using", "await using")}}. It calls and awaits the `return()` method of `this`, if it exists.

## Syntax

```js-nolint
asyncIterator[Symbol.asyncDispose]()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Declaring an async iterator with `await using`

The `Symbol.asyncDispose` method is intended to be automatically called in an `await using` declaration. This is useful if you have an async iterator that you manually iterate over by calling its `next()` method; if you iterate it with {{jsxref("Statements/for-await...of", "for await...of")}} or something similar, then error handling and cleanup is done automatically.

```js
async function* generateNumbers() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } finally {
    console.log("Cleaning up");
  }
}

async function doSomething() {
  await using numbers = generateNumbers();
  const res1 = await numbers.next();
  // Not iterating the rest of the numbers
  // Before the function exists, the async iterator is disposed
  // Logs "Cleaning up"
}

doSomething();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.asyncDispose")}}
- {{jsxref("Statements/await_using", "await using")}}
