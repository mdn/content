---
title: "AbortSignal: timeout() static method"
short-title: timeout()
slug: Web/API/AbortSignal/timeout_static
page-type: web-api-static-method
browser-compat: api.AbortSignal.timeout_static
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

The **`AbortSignal.timeout()`** static method returns an {{domxref("AbortSignal")}} that will automatically abort after a specified time.

The signal aborts with a `TimeoutError` {{domxref("DOMException")}} on timeout.

The timeout is based on active rather than elapsed time, and will effectively be paused if the code is running in a suspended worker, or while the document is in a back-forward cache ("[bfcache](https://web.dev/articles/bfcache)").

To combine multiple signals, you can use {{domxref("AbortSignal/any_static", "AbortSignal.any()")}}, for example, to directly abort a download using either a timeout signal or by calling {{domxref("AbortController.abort()")}}.

## Syntax

```js-nolint
AbortSignal.timeout(time)
```

### Parameters

- `time`
  - : The "active" time in milliseconds before the returned {{domxref("AbortSignal")}} will abort.
    The value must be within range of 0 and {{jsxref("Number.MAX_SAFE_INTEGER")}}.

### Return value

An {{domxref("AbortSignal")}}.

The signal will abort with its {{domxref("AbortSignal.reason")}} property set to a `TimeoutError` {{domxref("DOMException")}} on timeout, or an `AbortError` {{domxref("DOMException")}} if the operation was user-triggered.

## Examples

Below is an example showing a fetch operation that will timeout if unsuccessful after 5 seconds.
Note that this may also fail if the method is not supported, if a browser "stop" button is pressed, or for another reason.

```js
const url = "https://path_to_large_file.mp4";

try {
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  const result = await res.blob();
  // …
} catch (err) {
  if (err.name === "TimeoutError") {
    // This exception is from the abort signal
    console.error("Timeout: It took more than 5 seconds to get the result!");
  } else if (err.name === "AbortError") {
    // This exception is from the fetch itself
    console.error(
      "Fetch aborted by user action (browser stop button, closing tab, etc.",
    );
  } else if (err.name === "TypeError") {
    console.error("AbortSignal.timeout() method is not supported");
  } else {
    // A network error, or some other problem.
    console.error(`Error: type: ${err.name}, message: ${err.message}`);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
