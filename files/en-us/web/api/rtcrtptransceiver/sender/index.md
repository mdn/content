---
title: RTCRtpTransceiver.sender
slug: Web/API/RTCRtpTransceiver/sender
page-type: web-api-instance-property
tags:
  - API
  - Media
  - Property
  - RTCRtpSender
  - RTCRtpTransceiver
  - RTP
  - Reference
  - WebRTC
  - sender
browser-compat: api.RTCRtpTransceiver.sender
---
{{APIRef("WebRTC")}}

The read-only  **`sender`** property
of WebRTC's {{domxref("RTCRtpTransceiver")}} interface indicates the
{{domxref("RTCRtpSender")}} responsible for encoding and sending outgoing media data
for the transceiver's stream.

## Value

An {{domxref("RTCRtpSender")}} object used to encode and send media whose media ID
matches the current value of {{domxref("RTCRtpTransceiver.mid", "mid")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Introduction to the Real-time Transport Protocol (RTP)](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP)
- {{domxref("RTCRtpSender")}}
