---
title: RTCRtpTransceiver.mid
slug: Web/API/RTCRtpTransceiver/mid
page-type: web-api-instance-property
tags:
  - API
  - Media
  - Media ID
  - Property
  - RTCRtpTransceiver
  - RTP
  - Read-only
  - Reference
  - SDP
  - WebRTC
  - mid
browser-compat: api.RTCRtpTransceiver.mid
---
{{APIRef("WebRTC")}}

The read-only {{domxref("RTCRtpTransceiver")}} interface's
**`mid`** property specifies the negotiated media ID
(`mid`) which the local and remote peers have agreed upon to uniquely
identify the stream's pairing of sender and receiver.

## Value

A string which uniquely identifies the pairing of source and
destination of the transceiver's stream. Its value is taken from the media ID of the SDP
m-line. This value is `null` if negotiation has not completed.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Introduction to the Real-time Transport Protocol (RTP)](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP)
