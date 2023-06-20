---
title: "AbortSignal: any() static method"
short-title: any()
slug: Web/API/AbortSignal/any_static
page-type: web-api-static-method
---

{{APIRef("DOM")}}

The **`AbortSignal.any()`** static method takes an iterable of abort signals and returns an {{domxref("AbortSignal")}}. The returned abort signal is aborted when any of the input iterable abort signals are aborted. The {{domxref("AbortSignal.reason", "abort reason","","true")}} will be set to the reason of the first signal that is aborted. If any of the the given abort signals are already aborted then so will be the returned {{domxref("AbortSignal")}}.

## Syntax

```js-nolint
AbortSignal.any(iterable)
```

### Parameters

- `iterable`
  - : An [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (such as an {{jsxref("Array")}}) of abort signals.

### Return value

An `AbortSignal` instance with the {{domxref("AbortSignal.aborted")}} property set to `true`, and {{domxref("AbortSignal.reason")}} set to the specified or default reason value.

## Examples

### Using AbortSignal.any()

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
const combinedSignal = AbortSignal.any([userCancelController.signal, timeoutSignal]);

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
