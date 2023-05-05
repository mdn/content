---
title: "WebTransport: draining property"
short-title: draining
slug: Web/API/WebTransport/draining
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.WebTransport.draining
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}

The **`draining`** read-only property of the {{domxref("WebTransport")}} interface returns a promise that resolves if a server indicates that it wants the client to gracefully close the connection.

The promise indicates that the server plans to close down the session in the near future.
The client should close the transport as soon as possible, but can continue to use it until if finds a safe/sensible point to stop receiving data.

{{AvailableInWorkers}}

## Value

A {{jsxref("Promise")}} that resolves to `undefined`.

## Examples

The following asynchronous function shows how you might monitor for indication that the server wants to close the connection gracefully, and then handle the request.

```js
async function safelyCloseTransport(transport) {
  await transport.draining;

  // Complete any important outstanding tasks
  // ...

  transport.close({
    closeCode: 022,
    reason: "ServerRequestedSafeTermination",
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
