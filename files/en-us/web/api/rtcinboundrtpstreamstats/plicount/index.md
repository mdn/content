---
title: "RTCInboundRtpStreamStats: pliCount property"
short-title: pliCount
slug: Web/API/RTCInboundRtpStreamStats/pliCount
page-type: web-api-instance-property
browser-compat: api.RTCInboundRtpStreamStats.pliCount
---

{{APIRef("WebRTC")}}

The **`pliCount`** property of the
{{domxref("RTCInboundRtpStreamStats")}} dictionary states the number of times the
{{domxref("RTCRtpReceiver")}} described by these statistics sent a **Picture
Loss Indication** (**PLI**) packet to the sender.

A PLI
packet indicates that some amount of encoded video data has been lost for one or more
frames.

## Value

An integer value indicating the number of times a PLI packet was sent by the
{{domxref("RTCRtpReceiver")}} to the sender. These are sent by the receiver's decoder to
notify the encoder (the sender) that an undefined amount of coded video data, which may
span frame boundaries, has been lost. This information is only available for video
streams.

This may trigger the sender to send a full frame in order to allow the receiver to
re-synchronize, since lost data may be an irrecoverable situation for decoding media.
However, the primary purpose of this message is to allow the sender to consider
techniques to mitigate network performance issues. This is often achieved by methods
such as increasing the compression, lowering resolution, or finding other ways to reduce
the bit rate of the stream.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{RFC(4585, "", "6.3.1")}}: Definition of "PLI messages" in the document _Extended
  RTP Profile for Real-time Transport Control Protocol (RTCP)-Based Feedback
  (RTP/AVPF)_.
