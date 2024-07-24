---
title: "AggregateError: No Promise in Promise.any was resolved"
slug: Web/JavaScript/Reference/Errors/Promise_any_all_rejected
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "No Promise in Promise.any was resolved" occurs when all promises passed to {{jsxref("Promise.any()")}} are rejected. It is the only built-in usage of {{jsxref("AggregateError")}}.

## Message

```plain
AggregateError: All promises were rejected (V8-based)
AggregateError: No Promise in Promise.any was resolved (Firefox)
AggregateError (Safari)
```

## Error type

{{jsxref("AggregateError")}}

## What went wrong?

`Promise.any()` only rejects when all promises passed to it are rejected. You should access {{jsxref("AggregateError/errors", "errors")}} to get the array of rejection reasons. See [Using promises](/en-US/docs/Web/JavaScript/Guide/Using_promises#error_handling) for more information on how to handle asynchronously rejected promises. This error is also raised when `Promise.any()` receives an empty iterable.

## Examples

### Empty iterable

```js
Promise.any([]).catch((error) => {
  console.error(error); // AggregateError: No Promise in Promise.any was resolved
});
```

### Handling all rejections

```js
const promises = [
  fetch("/data-location1"),
  fetch("/data-location1"),
  fetch("/data-location1"),
];

Promise.any(promises)
  .then((value) => console.log(value))
  .catch((error) => {
    // None of the fetches were successful
    for (const e of error.errors) {
      console.error(e);
    }
  });

// Using await
async function fetchFirstSuccessful() {
  try {
    const value = await Promise.any(promises);
    console.log(value);
  } catch (error) {
    for (const e of error.errors) {
      console.error(e);
    }
  }
}
```

## See also

- {{jsxref("AggregateError")}}
- {{jsxref("Promise.any()")}}
