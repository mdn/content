---
title: "WebTransport: ready property"
short-title: ready
slug: Web/API/WebTransport/ready
page-type: web-api-instance-property
browser-compat: api.WebTransport.ready
---

{{APIRef("WebTransport API")}}

The **`ready`** read-only property of the {{domxref("WebTransport")}} interface returns a promise that resolves when the transport is ready to use.

{{AvailableInWorkers}}

## Value

A {{jsxref("Promise")}} that resolves to `undefined`.

## Examples

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;

  // ...
}

// ...

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

- [Using WebTransport](https://web.dev/webtransport/)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
