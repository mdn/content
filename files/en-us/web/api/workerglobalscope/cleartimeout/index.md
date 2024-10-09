---
title: "WorkerGlobalScope: clearTimeout() method"
short-title: clearTimeout()
slug: Web/API/WorkerGlobalScope/clearTimeout
page-type: web-api-instance-method
browser-compat: api.clearTimeout
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

The **`clearTimeout()`** method of the {{domxref("WorkerGlobalScope")}} interface cancels a timeout previously established by calling {{domxref("WorkerGlobalScope.setTimeout()")}}.

If the parameter provided does not identify a previously established action,
this method does nothing.

## Syntax

```js-nolint
clearTimeout(timeoutID)
```

### Parameters

- `timeoutID`
  - : The identifier of the timeout you want to cancel. This ID was returned by the
    corresponding call to `setTimeout()`.

It's worth noting that the pool of IDs used by {{domxref("WorkerGlobalScope.setTimeout", "setTimeout()")}} and {{domxref("WorkerGlobalScope.setInterval", "setInterval()")}} are shared, which means you can technically use `clearTimeout()` and {{domxref("WorkerGlobalScope.clearInterval", "clearInterval()")}} interchangeably. However, for clarity, you should avoid doing so.

### Return value

None ({{jsxref("undefined")}}).

## Examples

See {{domxref("Window.clearTimeout()")}} for examples.

## Notes

Passing an invalid ID to `clearTimeout()` silently does nothing; no
exception is thrown.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.clearTimeout()")}}
- {{domxref("WorkerGlobalScope.setTimeout()")}}
- {{domxref("WorkerGlobalScope.clearInterval()")}}
- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()")}}
