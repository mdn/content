---
title: "RTCPeerConnectionIceErrorEvent: errorText property"
short-title: errorText
slug: Web/API/RTCPeerConnectionIceErrorEvent/errorText
page-type: web-api-instance-property
browser-compat: api.RTCPeerConnectionIceErrorEvent.errorText
---

{{APIRef("WebRTC")}}

The **`errorText`** property of the {{domxref("RTCPeerConnectionIceErrorEvent")}} interface represents the STUN error reason text returned by the {{Glossary("STUN")}} or {{Glossary("TURN")}} server if there was an error during ICE negotiation.

If communication with the STUN or TURN server couldn't be established at all, this will be a browser-specific string explaining the error.

## Value

A string returned by the STUN or TURN server, or a browser-specific string explaining why communication with the server could not be established.

## Examples

### Basic usage

This example creates a handler for {{domxref("RTCPeerConnection.icecandidateerror_event", "icecandidateerror")}} events, which creates human-readable messages describing the local network interface for the connection and the ICE server used to attempt the connection.
It then calls a function to display those messages and the value of the event's `errorText` property.

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
