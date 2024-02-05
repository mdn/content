---
title: "RTCOutboundRtpStreamStats: sliCount property"
short-title: sliCount
slug: Web/API/RTCOutboundRtpStreamStats/sliCount
page-type: web-api-instance-property
browser-compat: api.RTCOutboundRtpStreamStats.sliCount
---

{{APIRef("WebRTC")}}

The **`sliCount`** property of the
{{domxref("RTCOutboundRtpStreamStats")}} dictionary indicates how many **Slice
Loss Indication** (**SLI**) packets the
{{domxref("RTCRtpSender")}} received from the remote {{domxref("RTCRtpReceiver")}} for
the RTP stream described by this object.

An SLI packet is used by a decoder to let the encoder (the sender) know that it's
detected corruption of one or more consecutive macroblocks, in scan order, in the
received media. In general, what's usually of interest is that the higher this number is,
the more the stream data is becoming corrupted between the sender and the receiver,
causing the receiver to request retransmits or to drop frames entirely.

## Value

An unsigned integer indicating the number of SLI packets the sender received from the
receiver due to lost runs of macroblocks. A high value of `sliCount` may be
an indication of an unreliable network.

This is a very technical part of how video codecs work. For details, see {{RFC(4585,
  "6.3.2")}}.

> **Note:** This value is only present for video media.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{RFC(4585, "", "6.3.2")}}: Definition of "Slice Loss Indication" in the document
  _Extended RTP Profile for Real-time Transport Control Protocol (RTCP)-Based
  Feedback (RTP/AVPF)_.
