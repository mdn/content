---
title: "WebTransport: closed property"
short-title: closed
slug: Web/API/WebTransport/closed
page-type: web-api-instance-property
browser-compat: api.WebTransport.closed
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`closed`** read-only property of the {{domxref("WebTransport")}} interface returns a promise that resolves when the transport is closed.

This promise is created when the `WebTransport` object is created and is resolved when the transport is closed in any way, such as by calling the {{domxref("WebTransport.close", "close()")}} method, when the connection failed, or when the connection is closed by the server. Accessing or awaiting this promise does not trigger any action; it only allows actions to be taken when the transport is closed, similar to listening to an event.

## Value

A {{jsxref("Promise")}} that resolves to an object containing the following properties:

- `closeCode`
  - : A number representing the error code for the error.
- `reason`
  - : A string representing the reason for closing the `WebTransport`.

Or, in the case of an unexpected closure, such as network failure, the promise rejects with an error.

## Examples

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;

  // …
}

// …

async function closeTransport(transport) {
  // Respond to connection closing
  try {
    await transport.closed;
    console.log(`The HTTP/3 connection to ${url} closed gracefully.`);
  } catch (error) {
    console.error(`The HTTP/3 connection to ${url} closed due to ${error}.`);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
