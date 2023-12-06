---
title: "RTCOutboundRtpStreamStats: pliCount property"
short-title: pliCount
slug: Web/API/RTCOutboundRtpStreamStats/pliCount
page-type: web-api-instance-property
browser-compat: api.RTCOutboundRtpStreamStats.pliCount
---

{{APIRef("WebRTC")}}

The **`pliCount`** property of the
{{domxref("RTCOutboundRtpStreamStats")}} dictionary states the number of times the
remote peer's {{domxref("RTCRtpReceiver")}} sent a **Picture Loss
Indication** (**PLI**) packet to the {{domxref("RTCRtpSender")}}
for which this object provides statistics.

A PLI packet indicates that some
amount of encoded video data has been lost for one or more frames.

## Value

An integer value indicating the number of times a PLI packet was sent to this sender by
the remote peer's {{domxref("RTCRtpReceiver")}}. These are sent by the receiver's
decoder to notify the sender's encoder that an undefined amount of coded video data,
which may span frame boundaries, has been lost.

> **Note:** This property is only used for video streams.

## Usage notes

Upon receiving a PLI packet, the sender may have responded by sending a full frame to
the remote peer to allow it to re-synchronize with the media. However, the primary
purpose of a PLI packet is to allow the `RTCRtpSender` for which this
`RTCOutboundRtpStreamStats` object provides statistics to consider techniques
to mitigate network performance issues. This is often achieved by methods such as
increasing the compression or lowering resolution, although the mechanisms available to
reduce the bit rate of the stream vary from codec to codec.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{RFC(4585, "", "6.3.1")}}: Definition of "PLI messages" in the document _Extended
  RTP Profile for Real-time Transport Control Protocol (RTCP)-Based Feedback
  (RTP/AVPF)_.
