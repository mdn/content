---
title: "RTCInboundRtpStreamStats: insertedSamplesForDeceleration property"
short-title: insertedSamplesForDeceleration
slug: Web/API/RTCInboundRtpStreamStats/insertedSamplesForDeceleration
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.insertedSamplesForDeceleration
---

{{APIRef("WebRTC")}}

The **`insertedSamplesForDeceleration`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary accumulates the difference between the number of samples received and the number of samples played out of the {{glossary("jitter","jitter buffer")}} while audio playout is slowed down.

The WebRTC jitter buffer sets a target playout delay level such that the inflow and outflow of the jitter buffer should be approximately the same.
If the jitter buffer empties too quickly the audio sample that is next in line to be output may be "ahead of schedule", and the jitter buffer may slow down playout.
If the jitter buffer slows down the playout of the sample by inserting additional audio samples, this property indicates the accumulated number of such added samples.

You might track `insertedSamplesForDeceleration` over the duration of the connection.
Consistently high and increasing values suggests that playout is consistently running too fast relative to the incoming audio stream.

`insertedSamplesForDeceleration` can be correlated with {{domxref("RTCInboundRtpStreamStats/totalSamplesReceived","totalSamplesReceived")}} to get a relative measure of deceleration.

> [!NOTE]
> The value is undefined for video streams.

## Value

A positive integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCInboundRtpStreamStats.removedSamplesForAcceleration")}}
- [The better way](https://webrtchacks.com/how-webrtcs-neteq-jitter-buffer-provides-smooth-audio/#post-4560-_mv3ivinthkf5) in "How WebRTC's NetEQ Jitter Buffer Provides Smooth Audio" (webrtchacks.com, June 2025)
