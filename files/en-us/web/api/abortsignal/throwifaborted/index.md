---
title: AbortSignal.throwIfAborted()
slug: Web/API/AbortSignal/throwIfAborted
tags:
  - API
  - AbortSignal
  - throwIfAborted
  - Experimental
  - method
  - Reference
  - reason
browser-compat: api.AbortSignal.throwIfAborted
---
{{APIRef("DOM")}} {{SeeCompatTable}}

The **`throwIfAborted()`** method throws the signal's abort {{domxref("AbortSignal.reason", "reason")}} if the signal has been aborted; otherwise it does nothing.

This can be used when you want to abort operations at particular points in your own code, rather than passing to functions that take a signal.

## Syntax

```js
throwIfAborted()
```

### Return value

{{jsxref('undefined')}}


## Examples

The example below comes from the specification.
It demonstrates how you can use `throwIfAborted()` to abort a polling operation.

Consider an aysnchronous `waitForCondition()` function that is called with another asynchronous function "`func`", a target value "`targetValue`, and an `AbortSignal`.
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


## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
