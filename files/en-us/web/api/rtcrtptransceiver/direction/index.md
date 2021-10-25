---
title: RTCRtpTransceiver.direction
slug: Web/API/RTCRtpTransceiver/direction
tags:
  - API
  - Media
  - Property
  - RTCRtpTransceiver
  - RTP
  - Reference
  - Transceiver
  - Transceiver Direction
  - WebRTC
  - direction
browser-compat: api.RTCRtpTransceiver.direction
---
{{APIRef("WebRTC")}}

The {{domxref("RTCRtpTransceiver")}} property
**`direction`** is a string which indicates the transceiver's
preferred directionality.

Its value must be one of the strings defined by the
{{domxref("RTCRtpTransceiverDirection")}} enumeration.

The transceiver's _current_ direction is indicated by the
{{domxref("RTCRtpTransceiver.currentDirection", "currentDirection")}} property.

## Syntax

```js
var direction = RTCRtpTransceiver.direction
```

### Value

A {{domxref("DOMString")}} whose value is one of the strings which are a member of the
`RTCRtpTransceiverDirection` enumerated type, indicating the transceiver's
preferred direction. {{page("/en-US/docs/Web/API/RTCRtpTransceiverDirection",
  "Values")}}

### Exceptions

When setting the value of `direction`, the following exception can occur:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if either the receiver's {{domxref("RTCPeerConnection")}} is closed or the
    {{domxref("RTCRtpReceiver")}} is stopped.

## Usage notes

### Setting the direction

When you change the value of `direction`, an `InvalidStateError`
exception will occur if the connection is closed or the receiver is stopped.

If the new value of `direction` is in fact different from the existing
value, renegotiation of the connection is required, so a {{event("negotiationneeded")}}
event is sent to the {{domxref("RTCPeerConnection")}}.

### Effect on offers and answers

The value of `direction` is used by
{{domxref("RTCPeerConnection.createOffer()")}} or
{{domxref("RTCPeerConnection.createAnswer()")}} in order to generate the SDP generated
by each of those methods. The SDP contains an a-line which specifies the directionality.
For example, if the `direction` is specified as `"sendrecv"`, the
corresponding SDP a-line is:

    a=sendrecv

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCRtpTransceiver.currentDirection")}}
