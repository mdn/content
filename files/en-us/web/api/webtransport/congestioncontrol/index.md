---
title: "WebTransport: congestionControl property"
short-title: congestionControl
slug: Web/API/WebTransport/congestionControl
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.WebTransport.congestionControl
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`congestionControl`** read-only property of the {{domxref("WebTransport")}} interface indicates the application's preference for either high throughput or low-latency when sending data.

The value is set in the [`WebTransport()` constructor options](/en-US/docs/Web/API/WebTransport/WebTransport#congestioncontrol).

## Value

A string with one of the following values:

- `default`
  - : The default congestion control tuning for the transport.
    This is the default.
- `throughput`
  - : The application prefers congestion control to be tuned for throughput.
- `low-latency`
  - : The application prefers congestion control to be tuned for low-latency.

## Examples

This example shows how to get the `congestionControl` preference.
As this is not explicitly set in the constructor, the result is `default`.

```js
const url = "https://example.com:4999/wt";
const transport = new WebTransport(url);
console.log(transport.congestionControl); // default
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
