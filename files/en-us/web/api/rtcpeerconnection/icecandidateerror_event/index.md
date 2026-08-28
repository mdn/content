---
title: "RTCPeerConnection: icecandidateerror event"
short-title: icecandidateerror
slug: Web/API/RTCPeerConnection/icecandidateerror_event
page-type: web-api-event
browser-compat: api.RTCPeerConnection.icecandidateerror_event
---

{{APIRef("WebRTC")}}

The **`icecandidateerror`** event is sent to an {{domxref("RTCPeerConnection")}} if an error occurs while performing ICE negotiation through a {{Glossary("STUN")}} or {{Glossary("TURN")}} server.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("icecandidateerror", (event) => { })

onicecandidateerror = (event) => { }
```

## Event type

An {{domxref("RTCPeerConnectionIceErrorEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("RTCPeerConnectionIceErrorEvent")}}

## Examples

### Basic usage

The following example establishes a handler for `icecandidateerror` events that occur on the {{domxref("RTCPeerConnection")}} `pc`. This handler looks specifically for 701 errors that indicate that candidates couldn't reach the STUN or TURN server.

When this happens, the server URL and the error message are passed to a function called `reportConnectFail()` to log or output the connection failure.

```js
pc.addEventListener("icecandidateerror", (event) => {
  if (event.errorCode === 701) {
    reportConnectFail(event.url, event.errorText);
  }
});
```

Note that if multiple STUN and/or TURN servers are provided when creating the connection, this error may happen more than once, if more than one of those servers fails. Each provided server is tried until a connection is established.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
