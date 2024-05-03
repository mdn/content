---
title: "WritableStreamDefaultController: signal property"
short-title: signal
slug: Web/API/WritableStreamDefaultController/signal
page-type: web-api-instance-property
browser-compat: api.WritableStreamDefaultController.signal
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

The read-only **`signal`** property of the {{domxref("WritableStreamDefaultController")}} interface returns the {{domxref("AbortSignal")}} associated with the controller.

## Value

An {{domxref("AbortSignal")}} object.

## Examples

### Aborting a long write operation

In this example, we simulate a slow operation using a local sink: We do nothing when some data is written but to wait for a second. This gives us enough time to call the `writer.abort()` method and to immediately reject the promise.

```js
const writingStream = new WritableStream({
  // Define the slow local sink to simulate a long operation
  write(chunk, controller) {
    return new Promise((resolve, reject) => {
      controller.signal.addEventListener("abort", () =>
        reject(controller.signal.reason),
      );

      // Do nothing but wait with the data: it is a local sink
      setTimeout(resolve, 1000); // Timeout to simulate a slow operation
    });
  },
});

// Perform the write
const writer = writingStream.getWriter();
writer.write("Lorem ipsum test data");

// Abort the write manually
await writer.abort("Manual abort!");
```

### Transferring the `AbortSignal` to the underlying layer

In this example, we use the [Fetch API](/en-US/docs/Web/API/Fetch_API) to actually send the message to a server. The Fetch API also support {{domxref("AbortSignal")}}: It is possible to use the same object for both the `fetch` method and the {{domxref("WritableStreamDefaultController")}}.

```js
const endpoint = "https://www.example.com/api"; // Fake URL for example purpose
const writingStream = new WritableStream({
  async write(chunk, controller) {
    // Write to the server using the Fetch API
    const response = await fetch(endpoint, {
      signal: controller.signal, // We use the same object for both fetch and controller
      method: "POST",
      body: chunk,
    });
    await response.text();
  },
});

// Perform the write
const writer = writingStream.getWriter();
writer.write("Lorem ipsum test data");

// Abort the write manually
await writer.abort("Manual abort!");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
