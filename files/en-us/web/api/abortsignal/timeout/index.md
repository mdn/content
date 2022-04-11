---
title: AbortSignal.timeout()
slug: Web/API/AbortSignal/timeout
tags:
  - API
  - AbortSignal
  - Method
  - Reference
  - timeout
browser-compat: api.AbortSignal.timout
---
{{APIRef("DOM")}}

The static **`AbortSignal.timeout()`** method returns an {{domxref("AbortSignal")}} that will automatically abort after a specified time.

The timeout is based on active rather than elapsed time, and will effectively be paused if the code is running in a suspended worker, or while the document is in a back-forward cache ("[bfcache](https://web.dev/bfcache/)").

The signal aborts with a reason of `TimeoutError` {{domxref("DOMException")}}. 
This allow UIs to differentiate these from user-triggered aborts which that have the abort reason `AbortError`, and which unlike timeouts typically don't require user notification.

> **Note:** This method can only be used for use cases where the associated operation either succeeds or aborts with a timeout.
> At time of writing there is no way to combine it with other signals, such that the operation can be aborted by _either_ a command or a timeout.


## Syntax

```js
AbortSignal.timeout(time)
```

### Parameters

- `time`
  - : The "active" time in milliseconds before the returned {{domxref("AbortSignal")}} will abort.

### Return value

An {{domxref("AbortSignal")}}.
The signal will abort with its {{domxref("AbortSignal.reason")}} property set to a `TimeoutError` {{domxref("DOMException")}}.

## Examples

A simple example showing a fetch operation that will timeout if unsuccessful after 5 seconds, is shown below.
Note that this may also fail if the method is not supported or for some other reason.

```js
url = "https://path_to_large_file.mp4";

try {
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  const result = await res.blob();
  // ...
} catch (e) {
    if (e.name === "TimeoutError") {
      // It took more than 5 seconds to get the result!
    } else if (e.name === "TypeError") {
      // AbortSignal.timeout() method is not support 
    } else {
      // A network error, or some other problem.
      console.log(`Type: ${e.name}, Message: ${e.message}`)
    }
}
```


## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
