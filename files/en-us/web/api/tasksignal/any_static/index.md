---
title: "TaskSignal: any() static method"
short-title: any()
slug: Web/API/TaskSignal/any_static
page-type: web-api-static-method
browser-compat: api.TaskSignal.any_static
---

{{APIRef("Prioritized Task Scheduling API")}}

The **`TaskSignal.any()`** static method takes an iterable of task signals and returns an {{domxref("TaskSignal")}}. The returned abort signal is aborted when any of the input iterable task signals are aborted. The {{domxref("AbortSignal.reason", "abort reason","","true")}} will be set to the reason of the first signal that is aborted. The signal's `priority` will be determined by init's `priority`, which can either be a fixed `TaskPriority` or a `TaskSignal`, in which case the new signal's priority will change along with this signal.

## Syntax

```js-nolint
TaskSignal.any(signals)
TaskSignal.any(signals, init)
```

### Parameters

- `signals`
  - : An [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (such as an {{jsxref("Array")}}) of abort signals.
- `init` {{optional_inline}}
  - : Contains optional configuration parameters. Currently only one property is defined:
    - `priority` {{optional_inline}}
      - : An string which is one of `user-blocking`, `user-visible` and `background`, or an {{domxref("TaskSignal")}}.

### Return value

An `TaskSignal` instance with the {{domxref("AbortSignal.aborted", "TaskSignal.aborted")}} property set to `true`, and {{domxref("AbortSignal.reason", "TaskSignal.reason")}} set to the specified or default reason value.

## Examples

### Using TaskSignal.any()

This example demonstrates combining both a signal from an {{domxref("AbortController")}}, and a timeout signal from {{domxref("AbortSignal.timeout")}}.

```js
const button = document.getElementById("cancelDownloadButton");

const userCancelController = new AbortController();
cancelDownloadButton.addEventListener("click", () => {
  userCancelController.abort();
});

// Timeout after 5 minutes
const timeoutSignal = AbortSignal.timeout(1_000 * 60 * 5);

// This signal will abort when either the user clicks the cancel button or 5 minutes is up
// whichever is sooner
const combinedSignal = AbortSignal.any([
  userCancelController.signal,
  timeoutSignal,
]);

try {
  const res = await fetch(someUrlToDownload, {
    // Stop the fetch when any of the
    signal: combinedSignal,
  });
  const body = await res.blob();
  // do something with downloaded content
} catch (e) {
  if (e.name === "AbortError") {
    // Cancelled by the user
  } else if (e.name === "TimeoutError") {
    // Show user that download timed out
  } else {
    // Other error, e.g. network error
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
