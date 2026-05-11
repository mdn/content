---
title: "RTCPeerConnectionIceErrorEvent: url property"
short-title: url
slug: Web/API/RTCPeerConnectionIceErrorEvent/url
page-type: web-api-instance-property
browser-compat: api.RTCPeerConnectionIceErrorEvent.url
---

{{APIRef("WebRTC")}}

The **`url`** property of the {{domxref("RTCPeerConnectionIceErrorEvent")}} interface is a string which indicates the URL of the {{Glossary("STUN")}} or {{Glossary("TURN")}} server with which the error occurred.

## Value

A string which indicates the URL of the ICE server with which negotiations were occurring when the error occurred.

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
