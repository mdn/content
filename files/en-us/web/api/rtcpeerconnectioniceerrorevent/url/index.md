---
title: "RTCPeerConnectionIceErrorEvent: url property"
short-title: url
slug: Web/API/RTCPeerConnectionIceErrorEvent/url
page-type: web-api-instance-property
browser-compat: api.RTCPeerConnectionIceErrorEvent.url
---

{{APIRef("WebRTC")}}

The **`url`** property of the {{domxref("RTCPeerConnectionIceErrorEvent")}} interface is a string indicating the URL of the {{Glossary("STUN")}} or {{Glossary("TURN")}} server with which the error occurred.

## Value

A string.

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
