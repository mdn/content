---
title: "RTCPeerConnectionIceErrorEvent: errorCode property"
short-title: errorCode
slug: Web/API/RTCPeerConnectionIceErrorEvent/errorCode
page-type: web-api-instance-property
browser-compat: api.RTCPeerConnectionIceErrorEvent.errorCode
---

{{APIRef("WebRTC")}}

The **`errorCode`** property of the {{domxref("RTCPeerConnectionIceErrorEvent")}} interface represents the [STUN error code](https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6) returned by the {{Glossary("STUN")}} or {{Glossary("TURN")}} server if there was an error during ICE negotiation.

## Value

A positive integer value stating the numeric [STUN error code](https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6) returned by the STUN or TURN server.

If no host candidate can reach the server, this property is set to the number 701, which is outside the range of valid STUN error codes.
This value is reported only once per server URL, and only while the {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} is `gathering`.

## Examples

### Basic usage

This example creates a handler for {{domxref("RTCPeerConnection.icecandidateerror_event", "icecandidateerror")}} events, which creates human-readable messages describing the local network interface for the connection and the ICE server used to attempt the connection.
It then calls a function to display those messages and the value of the event's {{domxref("RTCPeerConnectionIceErrorEvent.errorCode", "errorCode")}} property.

```js
pc.addEventListener("icecandidateerror", (event) => {
  const networkInfo = `[Local interface: ${event.address}:${event.port}]`;
  const iceServerInfo = `[ICE server: ${event.url}]`;

  showMessage(event.errorCode, iceServerInfo, networkInfo);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
