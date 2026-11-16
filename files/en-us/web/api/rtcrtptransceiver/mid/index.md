---
title: "RTCRtpTransceiver: mid property"
short-title: mid
slug: Web/API/RTCRtpTransceiver/mid
page-type: web-api-instance-property
browser-compat: api.RTCRtpTransceiver.mid
---

{{APIRef("WebRTC")}}

The read-only {{domxref("RTCRtpTransceiver")}} interface's **`mid`** property specifies the media ID (`mid`) which uniquely identifies the stream's pairing of sender and receiver.

## Value

A string which uniquely identifies the pairing of source and destination of the transceiver's stream. Its value is taken from the media ID of the SDP m-line. This value is `null` before a local or remote description containing the corresponding m-line is applied, or if a rollback undoes that association.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Introduction to the Real-time Transport Protocol (RTP)](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP)
