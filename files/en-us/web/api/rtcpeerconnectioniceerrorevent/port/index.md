---
title: "RTCPeerConnectionIceErrorEvent: port property"
short-title: port
slug: Web/API/RTCPeerConnectionIceErrorEvent/port
page-type: web-api-instance-property
browser-compat: api.RTCPeerConnectionIceErrorEvent.port
---

{{APIRef("WebRTC")}}

The **`port`** property of the {{domxref("RTCPeerConnectionIceErrorEvent")}} interface represents the port number over which communication with the {{Glossary("STUN")}} or {{Glossary("TURN")}} server is taking place.

This is `null` if the connection hasn't been established ({{domxref("RTCPeerConnectionIceErrorEvent/address","address")}} is `null`).

## Value

A positive integer.

`null` if the connection hasn't been established (that is, if `address` is `null`).

## Examples

### Basic usage

This example creates a handler for {{domxref("RTCPeerConnection.icecandidateerror_event", "icecandidateerror")}} events, which creates human-readable messages describing the local network interface for the connection and the ICE server used to attempt the connection.
It then calls a function to display those messages and the value of the event's {{domxref("RTCPeerConnectionIceErrorEvent.errorText", "errorText")}} property.

```js
pc.addEventListener("icecandidateerror", (event) => {
  const networkInfo = `[Local interface: ${event.address}:${event.port}]`;
  const iceServerInfo = `[ICE server: ${event.url}]`;

  showMessage(event.errorText, iceServerInfo, networkInfo);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
