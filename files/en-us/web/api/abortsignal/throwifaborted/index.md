---
title: AbortSignal.throwIfAborted()
slug: Web/API/AbortSignal/throwIfAborted
page-type: web-api-instance-method
tags:
  - API
  - AbortSignal
  - throwIfAborted
  - method
  - Reference
  - reason
browser-compat: api.AbortSignal.throwIfAborted
---
{{APIRef("DOM")}}

The **`throwIfAborted()`** method throws the signal's abort {{domxref("AbortSignal.reason", "reason")}} if the signal has been aborted; otherwise it does nothing.

An API that needs to support aborting can accept an {{domxref("AbortSignal")}} object and use `throwIfAborted()` to test and throw when the [`abort`](/en-US/docs/Web/API/AbortSignal/abort_event) event is signalled.

This method can also be used to abort operations at particular points in code, rather than passing to functions that take a signal.

## Syntax

```js
throwIfAborted()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The examples below come from the specification.

### Aborting a polling operation

This example demonstrates how you can use `throwIfAborted()` to abort a polling operation.

Consider an asynchronous `waitForCondition()` function that is called with another asynchronous function `func`, a target value `targetValue`, and an `AbortSignal`.
The method compares the result of `func` with `targetValue` in a loop, returning when they match.

```js
async function waitForCondition(func, targetValue, { signal } = {}) {
  while (true) {
    signal?.throwIfAborted();

    const result = await func();
    if (result === targetValue) {
      return;
    }
  }
}
```

On each iteration of the loop, we use `throwIfAborted()` to throw the signal's `reason` if the operation has been aborted (and otherwise do nothing).
If the signal is aborted, this will cause the `waitForCondition()` promise to be rejected .

### Implementing an abortable API

An API that needs to support aborting can accept an `AbortSignal` object, and use its state to trigger abort signal handling when needed.

A {{jsxref("Promise")}}-based API should respond to the abort signal by rejecting any unsettled promise with the `AbortSignal` abort {{domxref("AbortSignal.reason", "reason")}}.
For example, consider the following `myCoolPromiseAPI`, which takes a signal and returns a promise.
The promise is rejected immediately if the signal is already aborted, or if the abort event is detected.
Otherwise it completes normally and then resolves the promise.

```js
function myCoolPromiseAPI(/* … ,*/ {signal}) {
  return new Promise((resolve, reject) => {
    // If the signal is already aborted, immediately throw in order to reject the promise.
    if (signal.aborted) {
      reject(signal.reason);
    }

    // Perform the main purpose of the API
    // Call resolve(result) when done.

    // Watch for 'abort' signals
    signal.addEventListener('abort', () => {
      // Stop the main operation
      // Reject the promise wth the abort reason.
      reject(signal.reason);
    });
  });
}
```

The API might then be used as shown.
Note that {{domxref("AbortController.abort()")}} is called to abort the operation.

```js
const controller = new AbortController();
const signal = controller.signal;

startSpinner();

myCoolPromiseAPI({ /* … ,*/ signal })
  .then((result) => { })
  .catch((err) => {
    if (err.name === 'AbortError') return;
    showUserErrorMessage();
  })
  .then(() => stopSpinner());

controller.abort();
```

APIs that do not return promises might react in a similar manner.
In some cases it may make sense to absorb the signal.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
