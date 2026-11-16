---
title: "Request: signal property"
short-title: signal
slug: Web/API/Request/signal
page-type: web-api-instance-property
browser-compat: api.Request.signal
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The read-only **`signal`** property of the {{DOMxRef("Request")}} interface returns the {{domxref("AbortSignal")}} associated with the request.

## Value

An {{DOMxRef("AbortSignal")}} object.

## Examples

```js
// Create a new abort controller
const controller = new AbortController();

// Create a request with this controller's AbortSignal object
const req = new Request("/", { signal: controller.signal });

// Add an event handler logging a message in case of abort
req.signal.addEventListener("abort", () => {
  console.log("abort");
});

// In case of abort, log the AbortSignal reason, if any
fetch(req).catch(() => {
  if (req.signal.aborted) {
    if (req.signal.reason) {
      console.log(`Request aborted with reason: ${req.signal.reason}`);
    } else {
      console.log("Request aborted but no reason was given.");
    }
  } else {
    console.log("Request not aborted, but terminated abnormally.");
  }
});

// Actually abort the request
controller.abort();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
