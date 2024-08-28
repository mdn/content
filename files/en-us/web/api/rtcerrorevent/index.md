---
title: RTCErrorEvent
slug: Web/API/RTCErrorEvent
page-type: web-api-interface
browser-compat: api.RTCErrorEvent
---

{{APIRef("WebRTC")}}

The WebRTC API's **`RTCErrorEvent`** interface represents an error sent to a WebRTC object. It's based on the standard {{domxref("Event")}} interface, but adds RTC-specific information describing the error, as shown below.

{{InheritanceDiagram}}

## Constructor

- {{domxref("RTCErrorEvent.RTCErrorEvent", "RTCErrorEvent()")}}
  - : Creates and returns a new `RTCErrorEvent` object.

## Instance properties

_In addition to the standard properties available on the {{domxref("Event")}} interface, `RTCErrorEvent` also includes the following:_

- {{domxref("RTCErrorEvent.error", "error")}} {{ReadOnlyInline}}
  - : An {{domxref("RTCError")}} object specifying the error which occurred; this object includes the type of error that occurred, information about where the error occurred (such as which line number in the {{Glossary("SDP")}} or what {{Glossary("SCTP")}} cause code was at issue).

## Instance methods

_No additional methods are provided beyond any found on the parent interface, {{domxref("Event")}}._

## Description

There are other data types used for error events in WebRTC, as needed for errors with special information sharing requirements. The most common of these is probably {{domxref("RTCPeerConnectionIceErrorEvent")}}, used by the {{domxref("RTCPeerConnection.icecandidateerror_event", "icecandidateerror")}} event, which signals an error that has occurred while gathering ICE candidates during connection negotiation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- WebRTC API
- {{domxref("RTCError")}}
- The `error` event occurs on the following interfaces: {{domxref("RTCDataChannel")}} and {{domxref("RTCDtlsTransport")}}
- {{domxref("RTCPeerConnectionIceErrorEvent")}}
