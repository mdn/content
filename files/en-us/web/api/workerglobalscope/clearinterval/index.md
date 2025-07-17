---
title: "WorkerGlobalScope: clearInterval() method"
short-title: clearInterval()
slug: Web/API/WorkerGlobalScope/clearInterval
page-type: web-api-instance-method
browser-compat: api.clearInterval
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

The **`clearInterval()`** method of the {{domxref("WorkerGlobalScope")}} interface cancels a timed, repeating action which was previously established by a call to {{domxref("WorkerGlobalScope.setInterval", "setInterval()")}}. If the parameter provided does not identify a previously established action, this method does nothing.

## Syntax

```js-nolint
clearInterval(intervalID)
```

### Parameters

- `intervalID`
  - : The identifier of the repeated action you want to cancel. This ID was returned by
    the corresponding call to `setInterval()`.

It's worth noting that the pool of IDs used by
{{domxref("WorkerGlobalScope.setInterval", "setInterval()")}} and
{{domxref("WorkerGlobalScope.setTimeout", "setTimeout()")}} are shared, which
means you can technically use `clearInterval()` and
{{domxref("WorkerGlobalScope.clearTimeout", "clearTimeout()")}} interchangeably.
However, for clarity, you should avoid doing so.

### Return value

None ({{jsxref("undefined")}}).

## Examples

See {{domxref("Window.setInterval", "setInterval()")}} for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.clearInterval()")}}
- {{domxref("WorkerGlobalScope.setInterval()")}}
- {{domxref("WorkerGlobalScope.clearTimeout()")}}
- {{domxref("DedicatedWorkerGlobalScope.cancelAnimationFrame()")}}
