---
title: RTCPeerConnectionIceErrorEvent
slug: Web/API/RTCPeerConnectionIceErrorEvent
page-type: web-api-interface
browser-compat: api.RTCPeerConnectionIceErrorEvent
---

{{APIRef("WebRTC")}}

The **`RTCPeerConnectionIceErrorEvent`** interface—based upon the {{domxref("Event")}} interface—provides details pertaining to an {{Glossary("ICE")}} error announced by sending an {{domxref("RTCPeerConnection.icecandidateerror_event", "icecandidateerror")}} event to the {{domxref("RTCPeerConnection")}} object.

{{InheritanceDiagram}}

## Constructor

- {{domxref("RTCPeerConnectionIceErrorEvent.RTCPeerConnectionIceErrorEvent", "RTCPeerConnectionIceErrorEvent()")}}
  - : Creates and returns a new `RTCPeerConnectionIceErrorEvent` object, with its `type` and other properties initialized as specified in the parameters. You will not normally create an object of this type yourself.

## Instance properties

_The `RTCPeerConnectionIceErrorEvent` interface includes the properties found on the {{domxref("Event")}} interface, as well as the following properties:_

- {{domxref("RTCPeerConnectionIceErrorEvent.address", "address")}} {{ReadOnlyInline}}
  - : A string providing the local IP address used to communicate with the {{Glossary("STUN")}} or {{Glossary("TURN")}} server being used to negotiate the connection, or `null` if the local IP address has not yet been exposed as part of a local ICE candidate.
- {{domxref("RTCPeerConnectionIceErrorEvent.errorCode", "errorCode")}} {{ReadOnlyInline}}
  - : An unsigned integer value stating the numeric [STUN error code](https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6) returned by the STUN or TURN server. If no host candidate can reach the server, this property is set to the number 701, which is outside the range of valid STUN error codes. The 701 error is fired only once per server URL, and only while the {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} is `gathering`.
- {{domxref("RTCPeerConnectionIceErrorEvent.errorText", "errorText")}} {{ReadOnlyInline}}
  - : A string containing the STUN reason text returned by the STUN or TURN server. If communication with the STUN or TURN server couldn't be established at all, this string will be a browser-specific string explaining the error.
- {{domxref("RTCPeerConnectionIceErrorEvent.port", "port")}} {{ReadOnlyInline}}
  - : An unsigned integer value giving the port number over which communication with the STUN or TURN server is taking place, using the IP address given in `address`. `null` if the connection hasn't been established (that is, if `address` is `null`).
- {{domxref("RTCPeerConnectionIceErrorEvent.url", "url")}} {{ReadOnlyInline}}
  - : A string indicating the URL of the STUN or TURN server with which the error occurred.

## Instance methods

_`RTCPeerConnectionIceErrorEvent` has no methods other than any provided by the parent interface, {{domxref("Event")}}._

## Examples

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
