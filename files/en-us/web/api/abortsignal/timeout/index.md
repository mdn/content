---
title: AbortSignal.timeout()
slug: Web/API/AbortSignal/timeout
page-type: web-api-static-method
tags:
  - API
  - AbortSignal
  - Method
  - Reference
  - timeout
browser-compat: api.AbortSignal.timeout
---
{{APIRef("DOM")}}

The static **`AbortSignal.timeout()`** method returns an {{domxref("AbortSignal")}} that will automatically abort after a specified time.

The signal aborts with a `TimeoutError` {{domxref("DOMException")}} on timeout, or with `AbortError` {{domxref("DOMException")}} due to pressing a browser stop button (or some other inbuilt "stop" operation).
This allow UIs to differentiate timeout errors, which typically require user notification, from user-triggered aborts that do not.

The timeout is based on active rather than elapsed time, and will effectively be paused if the code is running in a suspended worker, or while the document is in a back-forward cache ("[bfcache](https://web.dev/bfcache/)").

> **Note:** At time of writing there is no way to combine multiple signals.
> This means you that you can't directly abort a download using either a timeout signal or by calling {{domxref("AbortController.abort()")}}.

## Syntax

```js
timeout(time)
```

### Parameters

- `time`
  - : The "active" time in milliseconds before the returned {{domxref("AbortSignal")}} will abort.

### Return value

An {{domxref("AbortSignal")}}.

The signal will abort with its {{domxref("AbortSignal.reason")}} property set to a `TimeoutError` {{domxref("DOMException")}} on timeout, or an `AbortError` {{domxref("DOMException")}} if the operation was user-triggered.

## Examples

A simple example showing a fetch operation that will timeout if unsuccessful after 5 seconds, is shown below.
Note that this may also fail if the method is not supported, if a browser "stop" button is pressed, or for some other reason.

```js
const url = "https://path_to_large_file.mp4";

try {
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  const result = await res.blob();
  // …
} catch (err) {
  if (err.name === "TimeoutError") {
    console.error("Timeout: It took more than 5 seconds to get the result!");
  } else if (err.name === "AbortError") {
    console.error("Fetch aborted by user action (browser stop button, closing tab, etc.");
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
