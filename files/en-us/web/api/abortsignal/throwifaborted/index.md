---
title: "AbortSignal: throwIfAborted() method"
short-title: throwIfAborted()
slug: Web/API/AbortSignal/throwIfAborted
page-type: web-api-instance-method
browser-compat: api.AbortSignal.throwIfAborted
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

The **`throwIfAborted()`** method throws the signal's abort {{domxref("AbortSignal.reason", "reason")}} if the signal has been aborted; otherwise it does nothing.

An API that needs to support aborting can accept an {{domxref("AbortSignal")}} object and use `throwIfAborted()` to test and throw when the [`abort`](/en-US/docs/Web/API/AbortSignal/abort_event) event is signalled.

This method can also be used to abort operations at particular points in code, rather than passing to functions that take a signal.

## Syntax

```js-nolint
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
If the signal is aborted, this will cause the `waitForCondition()` promise to be rejected.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
