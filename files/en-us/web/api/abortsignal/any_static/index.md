---
title: "AbortSignal: any() static method"
short-title: any()
slug: Web/API/AbortSignal/any_static
page-type: web-api-static-method
browser-compat: api.AbortSignal.any_static
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

The **`AbortSignal.any()`** static method takes an iterable of abort signals and returns an {{domxref("AbortSignal")}}. The returned abort signal is aborted when any of the input iterable abort signals are aborted. The {{domxref("AbortSignal.reason", "abort reason","","true")}} will be set to the reason of the first signal that is aborted. If any of the given abort signals are already aborted then so will be the returned {{domxref("AbortSignal")}}.

## Syntax

```js-nolint
AbortSignal.any(iterable)
```

### Parameters

- `iterable`
  - : An [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (such as an {{jsxref("Array")}}) of abort signals.

### Return value

An {{domxref("AbortSignal")}} that is:

- **Already aborted**, if any of the abort signals given is already aborted. The returned {{domxref("AbortSignal")}}'s reason will be already set to the {{domxref("AbortSignal.reason", "reason")}} of the first abort signal that was already aborted.
- **Asynchronously aborted**, when any abort signal in `iterable` aborts. The {{domxref("AbortSignal.reason", "reason")}} will be set to the reason of the first abort signal that is aborted.

## Description

`AbortSignal.any()` does not provide a method to unsubscribe the returned signal from its input signals. Aborting the returned signal does not abort the other input signals or cancel their timeouts.

Internally, the combined signal and its source signals are linked through weak references. The combined signals aren't inherently blocked from garbage collection while the input signals remain active. However, a non-aborted combined signal is kept alive while it still has source signals and either registered `abort` event listeners or internal abort steps registered by an API.

If your code adds `abort` listeners to the combined signal, [remove them when the operation finishes](/en-US/docs/Web/API/AbortSignal#removing_the_abort_event_listener), just as you would for any other `AbortSignal`.

## Examples

### Using `AbortSignal.any()`

This example demonstrates combining both a signal from an {{domxref("AbortController")}}, and a timeout signal from {{domxref("AbortSignal/timeout_static", "AbortSignal.timeout")}}.

```js
const cancelDownloadButton = document.getElementById("cancelDownloadButton");

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
    // Stop the fetch when any of the signals aborts
    signal: combinedSignal,
  });
  const body = await res.blob();
  // Do something with downloaded content:
  // …
} catch (e) {
  if (e.name === "AbortError") {
    // Canceled by the user
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
