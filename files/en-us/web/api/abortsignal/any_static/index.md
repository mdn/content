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

`AbortSignal.any()` does not provide a method to unsubscribe the returned signal from its input signals. Aborting the returned signal does not abort the other input signals.

Internally, each input signal maintains a link to the combined signal to abort it. This link is a [weak reference](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef), so the combined signal can still be garbage collected if it becomes unreachable, even when the input signals haven't aborted. However, a non-aborted combined signal is kept alive while it still has source signals and either registered `abort` event listeners or internal abort steps registered by an API. Completing an operation does not automatically remove event listeners added by your code. This can lead to retained abort signals.

For example, the following function combines application-wide cancellation with a signal supplied by the caller for an individual operation. It adds a listener to log cancellation, but relies on `{ once: true }` to remove it:

```js
const globalController = new AbortController();

async function doOperation(url, localSignal) {
  const signal = AbortSignal.any([globalController.signal, localSignal]);
  signal.addEventListener("abort", () => console.log(`Aborted: ${url}`), {
    once: true,
  });

  const response = await fetch(url, { signal });
  return response.text();
}
```

`{ once: true }` only removes the listener when the event fires. If neither input signal aborts, the listener remains even after the response body has been read. Repeated calls can therefore retain combined signals and their listeners for as long as the global signal remains reachable and the combined signals remain non-aborted. Discarding the combined signal does not remove the listener, and `fetch()` does not clean up listeners added by your code.

Instead, remove the listener when the operation finishes, whether it succeeds or fails. Use a named listener so you can remove it in a {{jsxref("Statements/try...catch", "finally")}} block:

```js
async function doOperation(url, localSignal) {
  const signal = AbortSignal.any([globalController.signal, localSignal]);
  const onAbort = () => console.log(`Aborted: ${url}`);
  signal.addEventListener("abort", onAbort, { once: true });

  try {
    const response = await fetch(url, { signal });
    return await response.text();
  } finally {
    signal.removeEventListener("abort", onAbort);
  }
}
```

The `await` on `response.text()` ensures the listener remains registered until the response body has been read. This cleanup is for the listener added by the example, not for `fetch()`'s internal abort handling. If an operation only needs application-wide cancellation, pass `globalController.signal` directly instead of creating a combined signal.

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
