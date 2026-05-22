---
title: RTCPeerConnectionIceErrorEvent
slug: Web/API/RTCPeerConnectionIceErrorEvent
page-type: web-api-interface
browser-compat: api.RTCPeerConnectionIceErrorEvent
---

{{APIRef("WebRTC")}}

The **`RTCPeerConnectionIceErrorEvent`** interface of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) describes an error that occurred while handling {{Glossary("ICE")}} negotiation through a {{Glossary("STUN")}} or {{Glossary("TURN")}} server.

It inherits from the {{domxref("Event")}} interface, adding details that are relevant to errors in ICE negotiations.

The {{domxref("RTCPeerConnection.icecandidateerror_event", "icecandidateerror")}} event fired at {{domxref("RTCPeerConnection")}} is an instance of this object.

{{InheritanceDiagram}}

## Constructor

- {{domxref("RTCPeerConnectionIceErrorEvent.RTCPeerConnectionIceErrorEvent", "RTCPeerConnectionIceErrorEvent()")}}
  - : Creates and returns a new `RTCPeerConnectionIceErrorEvent` object, with its `type` and other properties initialized as specified in the parameters.
    You will not normally create an object of this type yourself.

## Instance properties

_The `RTCPeerConnectionIceErrorEvent` interface includes the properties found on the {{domxref("Event")}} interface, as well as the following properties:_

- {{domxref("RTCPeerConnectionIceErrorEvent.address", "address")}} {{ReadOnlyInline}}
  - : A string providing the local IP address used to communicate with the {{Glossary("STUN")}} or {{Glossary("TURN")}} server being used to negotiate the connection, or `null` if the local IP address has not yet been exposed as part of a local ICE candidate.
- {{domxref("RTCPeerConnectionIceErrorEvent.errorCode", "errorCode")}} {{ReadOnlyInline}}
  - : A positive integer value stating the numeric [STUN error code](https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6) returned by the STUN or TURN server, or 701 if no host candidate can reach the server.
- {{domxref("RTCPeerConnectionIceErrorEvent.errorText", "errorText")}} {{ReadOnlyInline}}
  - : A string containing the STUN reason text returned by the STUN or TURN server, or a browser-specific string explaining why communication with the server could not be established.
- {{domxref("RTCPeerConnectionIceErrorEvent.port", "port")}} {{ReadOnlyInline}}
  - : A positive integer value giving the port number over which communication with the STUN or TURN server is taking place, using the IP address given in [`address`](/en-US/docs/Web/API/RTCPeerConnectionIceErrorEvent/address).
    This is `null` if the connection hasn't been established (that is, if `address` is `null`).
- {{domxref("RTCPeerConnectionIceErrorEvent.url", "url")}} {{ReadOnlyInline}}
  - : A string indicating the URL of the STUN or TURN server with which the error occurred.

## Instance methods

_`RTCPeerConnectionIceErrorEvent` has no methods other than any provided by the parent interface, {{domxref("Event")}}._

## Examples

See [Examples](/en-US/docs/Web/API/RTCPeerConnection/icecandidateerror_event#examples) in {{domxref("RTCPeerConnection.icecandidateerror_event", "icecandidateerror")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
