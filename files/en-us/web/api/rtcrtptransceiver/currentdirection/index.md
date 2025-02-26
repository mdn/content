---
title: "RTCRtpTransceiver: currentDirection property"
short-title: currentDirection
slug: Web/API/RTCRtpTransceiver/currentDirection
page-type: web-api-instance-property
browser-compat: api.RTCRtpTransceiver.currentDirection
---

{{APIRef("WebRTC")}}

The read-only {{domxref("RTCRtpTransceiver")}} property **`currentDirection`** is a string which indicates the current negotiated directionality of the transceiver.

The directionality indicates whether the transceiver will offer to send and/or receive {{Glossary("RTP")}} data, or whether it is inactive or stopped and won't send or receive data.

The transceiver's preferred directionality can be set and read using the {{domxref("RTCRtpTransceiver.direction", "direction")}} property.
Changing the `direction` triggers a renegotiation, which may eventually result in the `currentDirection` also changing.

## Value

The value is initially `null`, prior to negotiation using an offer/answer.

After negotiation the value is a string with one of the following values:

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
    - `RTCRtpSender`: Does _not_ offer to send RTP data, and will not do so.
    - `RTCRtpReceiver`: Does _not_ offer to receive RTP data and will not do so.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCRtpTransceiver.direction")}}
