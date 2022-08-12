---
title: RTCRtpTransceiver.receiver
slug: Web/API/RTCRtpTransceiver/receiver
page-type: web-api-instance-property
tags:
  - API
  - Media
  - Property
  - RTCRtpTransceiver
  - RTP
  - Reference
  - WebRTC
  - receiver
browser-compat: api.RTCRtpTransceiver.receiver
---
{{APIRef("WebRTC")}}

The read-only  **`receiver`** property
of WebRTC's {{domxref("RTCRtpTransceiver")}} interface indicates the
{{domxref("RTCRtpReceiver")}} responsible for receiving and decoding incoming media
data for the transceiver's stream.

## Value

An {{domxref("RTCRtpReceiver")}} object which is responsible for receiving and decoding
incoming media data whose media ID is the same as the current value of
{{domxref("RTCRtpTransceiver.mid", "mid")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Introduction to the Real-time Transport Protocol (RTP)](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP)
- {{domxref("RTCRtpReceiver")}}
