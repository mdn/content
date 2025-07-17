---
title: "WebSocket: protocol property"
short-title: protocol
slug: Web/API/WebSocket/protocol
page-type: web-api-instance-property
browser-compat: api.WebSocket.protocol
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

The **`WebSocket.protocol`** read-only property returns the name of the [sub-protocol](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) the server selected; this will be one of the strings specified in the [`protocols`](/en-US/docs/Web/API/WebSocket/WebSocket#protocols) parameter when creating the {{domxref("WebSocket")}} object, or the empty string if no connection is established.

## Value

A string.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{httpheader("Sec-WebSocket-Protocol")}}
