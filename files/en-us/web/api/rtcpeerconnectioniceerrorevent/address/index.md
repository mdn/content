---
title: "RTCPeerConnectionIceErrorEvent: address property"
short-title: address
slug: Web/API/RTCPeerConnectionIceErrorEvent/address
page-type: web-api-instance-property
browser-compat: api.RTCPeerConnectionIceErrorEvent.address
---

{{APIRef("WebRTC")}}

The **`address`** property of the {{domxref("RTCPeerConnectionIceErrorEvent")}} interface is a string that indicates the local IP address being used to communicate with the {{Glossary("STUN")}} or {{Glossary("TURN")}} server during negotiations.
The error which occurred involved this address.

## Value

A string which specifies the local IP address of the network connection to the ICE server with which negotiations were occurring when the error occurred.
This address identifies the network interface on the local device which is being used to attempt to establish the connection to the remote peer.

This can be useful on multi-homed systems—devices with more than one network connection—to determine which network interface is being used.
For example, on a mobile phone, there are typically at least two network interfaces available: the cellular connection and a Wi-Fi connection.

If the local IP address isn't exposed as part of a local candidate, the value of `address` is `null`.

## Examples

### Basic usage

This example creates a handler for {{domxref("RTCPeerConnection.icecandidateerror_event", "icecandidateerror")}} events which creates human-readable messages describing the local network interface for the connection as well as the ICE server that was being used to try to open the connection.
It then calls a function to display the messages as well as the event's {{domxref("RTCPeerConnectionIceErrorEvent.errorText", "errorText")}} property's contents.

```js
pc.addEventListener("icecandidateerror", (event) => {
  let networkInfo = `[Local interface: ${event.address}:${event.port}]`;
  let iceServerInfo = `[ICE server: ${event.url}]`;

  showMessage(event.errorText, iceServerInfo, networkInfo);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
