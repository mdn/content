---
title: "WebTransport: reliability property"
short-title: reliability
slug: Web/API/WebTransport/reliability
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.WebTransport.reliability
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`reliability`** read-only property of the {{domxref("WebTransport")}} interface indicates whether the connection supports reliable transports only, or whether it also supports unreliable transports (such as UDP).

## Value

A string with one of the following values:

- `pending`
  - : The connection has not yet been established.
    The reliability is not yet known.
- `reliable-only`
  - : The connection only supports reliable transports.
- `supports-unreliable`
  - : The connection supports both unreliable and reliable transports.

## Examples

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // Once ready fulfils the connection can be used
  // Prior to this the reliability is "pending"
  await transport.ready;

  if (transport.reliability == "reliable-only") {
    // Use connection only with reliable transports
  } else {
    // Use connection with either reliable or unreliable transports.
  }
  // …
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
