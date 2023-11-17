---
title: "TaskSignal: any() static method"
short-title: any()
slug: Web/API/TaskSignal/any_static
page-type: web-api-static-method
browser-compat: api.TaskSignal.any_static
---

{{APIRef("Prioritized Task Scheduling API")}}{{SeeCompatTable}}

The **`TaskSignal.any()`** static method takes an iterable of task signals and returns a {{domxref("TaskSignal")}}. The returned abort signal is aborted when any of the task signals is aborted. The {{domxref("AbortSignal.reason", "reason")}} property will be set to the reason of the first signal that is aborted. The {{domxref("TaskSignal.priority" "priority")}} property will be determined by the specific `priority` parameter, which can either be a fixed `TaskPriority` or a {{domxref("TaskSignal")}}, in which case the new signal's `priority` will change along with this signal.

## Syntax

```js-nolint
TaskSignal.any(signals)
TaskSignal.any(signals, init)
```

### Parameters

- `signals`
  - : An [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (such as an {{jsxref("Array")}}) of task signals.
- `init` {{optional_inline}}
  - : Contains optional configuration parameters. Currently only one property is defined:
    - `priority` {{optional_inline}}
      - : A string which is one of `user-blocking`, `user-visible` and `background`, or an {{domxref("AbortSignal")}} (since {{domxref("TaskSignal")}} inherits from {{domxref("AbortSignal")}}, so a {{domxref("TaskSignal")}} is also available).

### Return value

A `TaskSignal` instance.

## Examples

### Using `TaskSignal.any()`

This example demonstrates combining both a signal from an {{domxref("TaskController")}}, and a timeout signal from {{domxref("AbortSignal.timeout_static", "TaskSignal.timeout()")}}.

```js
const cancelDownloadButton = document.getElementById("cancelDownloadButton");

const userCancelController = new TaskController({
  priority: "user-visible",
});

cancelDownloadButton.addEventListener("click", () => {
  userCancelController.abort();
});

// Timeout after 5 minutes
const timeoutSignal = TaskSignal.timeout(1_000 * 60 * 5);

// This signal will abort when either the user clicks the cancel button or 5 minutes is up whichever is sooner
const combinedSignal = TaskSignal.any([
  userCancelController.signal,
  timeoutSignal,
]);

try {
  const res = await fetch(someUrlToDownload, {
    // Stop the fetch when any of the
    signal: combinedSignal,
  });
  const body = await res.blob();
  // Do something with downloaded content
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
