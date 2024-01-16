---
title: "RTCRtpTransceiver: direction property"
short-title: direction
slug: Web/API/RTCRtpTransceiver/direction
page-type: web-api-instance-property
browser-compat: api.RTCRtpTransceiver.direction
---

{{APIRef("WebRTC")}}

The {{domxref("RTCRtpTransceiver")}} property **`direction`** is a string that indicates the transceiver's _preferred_ directionality.

The directionality indicates whether the transceiver will offer to send and/or receive {{Glossary("RTP")}} data, or whether it is inactive or stopped (terminated).
When setting the transceiver's direction, the value is not applied immediately.
The _current_ direction is indicated by the {{domxref("RTCRtpTransceiver.currentDirection", "currentDirection")}} property.

## Value

A string with one of the following values:

- `"sendrecv"`
  - : Transceiver offers to send and receive RTP data:
    - `RTCRtpSender`: Offers to send RTP data, and will do so if the remote peer accepts the connection and at least one of the sender's encodings is active.
    - `RTCRtpReceiver`: Offers to receive RTP data, and does so if the remote peer accepts.
- `"sendonly"`
  - : Transceiver offers to send but not receive RTP data:
    - `RTCRtpSender`: Offers to send RTP data, and will do so if the remote peer accepts the connection and at least one of the sender's encodings is active.
    - `RTCRtpReceiver`: Does _not_ offer to receive RTP data and will not do so.
- `"recvonly"`
  - : Transceiver offers to receive but not set RTP data:
    - `RTCRtpSender`: Does _not_ offer to send RTP data, and will not do so.
    - `RTCRtpReceiver`: Offers to receive RTP data, and will do so if the remote peer offers.
- `"inactive"`
  - : Transceiver is inactive:
    - `RTCRtpSender`: Does _not_ offer to send RTP data, and will not do so.
    - `RTCRtpReceiver`: Does _not_ offer to receive RTP data and will not do so.
- `"stopped"`
  - : This is the terminal state of the transceiver.
    The transceiver is stopped and will not send or receive RTP data or offer to do so.
    Setting this value when the transceiver is not already stopped raises a `TypeError`.
    - `RTCRtpSender`: Does _not_ offer to send RTP data, and will not do so.
    - `RTCRtpReceiver`: Does _not_ offer to receive RTP data and will not do so.

### Exceptions

When setting the value of `direction`, the following exception can occur:

- `InvalidStateError` {{domxref("DOMException")}}
  - : The receiver's {{domxref("RTCPeerConnection")}} is closed or the {{domxref("RTCRtpReceiver")}} is stopped.
- `TypeError`
  - : The value is being set to `stopped` when the current value is anything other than `stopped`.

## Description

The **`direction`** property can be used to set or get the transceiver's _preferred_ directionality.

Updating the directionality does not take effect immediately.
If the new value of `direction` is different from the existing value, renegotiation of the connection is required, so a {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} event is sent to the {{domxref("RTCPeerConnection")}}.
A `direction` value (other than `stopped`) is then used by {{domxref("RTCPeerConnection.createOffer()")}} or {{domxref("RTCPeerConnection.createAnswer()")}} in order to generate the {{glossary("SDP")}} message created those methods.
For example, if the `direction` is specified as `"sendrecv"`, the corresponding SDP a-line indicates the directionality:

```plain
a=sendrecv
```

The new directionality takes effect once the negotiation process is completed and the new session description is successfully applied.

The transceiver's _current_ direction is indicated by the {{domxref("RTCRtpTransceiver.currentDirection", "currentDirection")}} property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCRtpTransceiver.currentDirection")}}
