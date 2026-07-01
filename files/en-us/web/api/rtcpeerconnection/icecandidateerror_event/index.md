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

## Event properties

_The `RTCPeerConnectionIceErrorEvent` interface includes the properties found on the {{domxref("Event")}} interface, as well as the following properties:_

- {{domxref("RTCPeerConnectionIceErrorEvent.address", "address")}} {{ReadOnlyInline}}
  - : A string providing the local IP address used to communicate with the {{Glossary("STUN")}} or {{Glossary("TURN")}} server being used to negotiate the connection, or `null` if the local IP address has not yet been exposed as part of a local ICE candidate.
- {{domxref("RTCPeerConnectionIceErrorEvent.errorCode", "errorCode")}} {{ReadOnlyInline}}
  - : A positive integer value stating the numeric [STUN error code](https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6) returned by the STUN or TURN server. If no host candidate can reach the server, this property is set to the number 701, which is outside the range of valid STUN error codes. This value is reported only once per server URL, and only while the {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} is `gathering`.
- {{domxref("RTCPeerConnectionIceErrorEvent.errorText", "errorText")}} {{ReadOnlyInline}}
  - : A string containing the STUN reason text returned by the STUN or TURN server. If communication with the STUN or TURN server couldn't be established at all, this string will be a browser-specific string explaining the error.
- {{domxref("RTCPeerConnectionIceErrorEvent.port", "port")}} {{ReadOnlyInline}}
  - : A positive integer value giving the port number over which communication with the STUN or TURN server is taking place, using the IP address given in [`address`](#address).
    This is `null` if the connection hasn't been established (that is, if `address` is `null`).
- {{domxref("RTCPeerConnectionIceErrorEvent.url", "url")}} {{ReadOnlyInline}}
  - : A string indicating the URL of the STUN or TURN server with which the error occurred.

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
