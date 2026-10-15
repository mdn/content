---
title: "RTCPeerConnectionIceErrorEvent: address property"
short-title: address
slug: Web/API/RTCPeerConnectionIceErrorEvent/address
page-type: web-api-instance-property
browser-compat: api.RTCPeerConnectionIceErrorEvent.address
---

{{APIRef("WebRTC")}}

The **`address`** property of the {{domxref("RTCPeerConnectionIceErrorEvent")}} interface is a string that indicates the local IP address used to communicate with the {{Glossary("STUN")}} or {{Glossary("TURN")}} server when the error occurred.

## Value

A string specifying the local IP address of the network connection to the ICE server with which negotiations were occurring when the error occurred.
This address identifies the network interface on the local device used to attempt to establish the connection to the remote peer.

This can be useful on multi-homed systems—devices with more than one network connection—to determine which network interface is being used.
For example, on a mobile phone, there are typically at least two network interfaces available: a cellular connection and a Wi-Fi connection.

If the local IP address isn't exposed as part of a local ICE candidate, the value of `address` is `null`.

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
