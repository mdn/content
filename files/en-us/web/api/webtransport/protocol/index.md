---
title: "WebTransport: protocol property"
short-title: protocol
slug: Web/API/WebTransport/protocol
page-type: web-api-instance-property
browser-compat: api.WebTransport.protocol
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`protocol`** read-only property of the {{domxref("WebTransport")}} interface returns the application-specific protocol selected by the server.

The value is selected from those offered in the [`protocols`](/en-US/docs/Web/API/WebTransport/WebTransport#protocols) constructor option.
Note that the value is set once the {{domxref("WebTransport.ready", "ready")}} promise fulfills.
It is the empty string if `protocols` was not used, or if the server chose not to select one of the offered protocols.

## Value

A string.
Defaults to `""`.

## Examples

### Requesting and reading a negotiated protocol

This example shows how to request a set of candidate protocols and read back the one the server selected.

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  const transport = new WebTransport(url, {
    protocols: ["chat", "file-transfer"],
  });

  try {
    // The connection can be used once ready fulfills
    await transport.ready;
    console.log(transport.protocol); // e.g. "chat", or "" if none was selected
    return transport;
  } catch (error) {
    // Ready may reject if the offered protocols aren't supported
    console.error(`Connection failed: ${error}`);
  }
}

initTransport(url);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
