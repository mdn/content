---
title: "RTCInboundRtpStreamStats: removedSamplesForAcceleration property"
short-title: removedSamplesForAcceleration
slug: Web/API/RTCInboundRtpStreamStats/removedSamplesForAcceleration
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.removedSamplesForAcceleration
---

{{APIRef("WebRTC")}}

The **`removedSamplesForAcceleration`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary accumulates the difference between the number of samples played out of the {{glossary("jitter","jitter buffer")}} and the number of samples received while audio playout is sped up.

The WebRTC jitter buffer sets a target playout delay level such that the inflow and outflow of the jitter buffer should be approximately the same.
If the jitter buffer empties too slowly the audio sample that is next in line to be output may be "behind schedule", and the engine may speed up playout to catch up.
If the engine speeds up playout by removing some audio samples, this property indicates the accumulated number of such removed samples.

You might track `removedSamplesForAcceleration` over the duration of the connection.
Consistently high and increasing values suggests that playout is consistently running too slow relative to the incoming audio stream.
This might lead to an accumulation of samples in the jitter buffer, increasing latency.

`removedSamplesForAcceleration` can be correlated with {{domxref("RTCInboundRtpStreamStats/totalSamplesReceived","totalSamplesReceived")}} to get a relative measure of deceleration.

> [!NOTE]
> The value is undefined for video streams.

You might track `insertedSamplesForDeceleration` over the duration of the connection.
Consistently high and increasing values suggests that playout is consistently running too fast relative to the incoming audio stream.

`insertedSamplesForDeceleration` can be correlated with {{domxref("RTCInboundRtpStreamStats/totalSamplesReceived","totalSamplesReceived")}} to get a relative measure of deceleration.

## Value

A positive integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCInboundRtpStreamStats.insertedSamplesForDeceleration")}}
- [The better way](https://webrtchacks.com/how-webrtcs-neteq-jitter-buffer-provides-smooth-audio/#post-4560-_mv3ivinthkf5) in "How WebRTC's NetEQ Jitter Buffer Provides Smooth Audio" (webrtchacks.com, June 2025)
