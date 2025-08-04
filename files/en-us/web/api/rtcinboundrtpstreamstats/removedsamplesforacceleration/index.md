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

Speeding up or slowing down the audio (as tracked with {{domxref("RTCInboundRtpStreamStats.insertedSamplesForDeceleration","insertedSamplesForDeceleration")}}) may result in audible warbling or other distortion.
The totals at the end of the call also give you some indication of how many samples or seconds were impacted, and `removedSamplesForAcceleration` can be correlated with {{domxref("RTCInboundRtpStreamStats/totalSamplesReceived","totalSamplesReceived")}} to get a relative measure of acceleration.
Logging `insertedSamplesForDeceleration` and `removedSamplesForAcceleration` in timeslices can be helpful for isolating the times at which the problem occurred and you can then correlate other metrics in the same timeslice to determine likely causes.

> [!NOTE]
> The value is undefined for video streams.

## Value

A positive integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCInboundRtpStreamStats.insertedSamplesForDeceleration","insertedSamplesForDeceleration")}}
- [The better way](https://webrtchacks.com/how-webrtcs-neteq-jitter-buffer-provides-smooth-audio/#post-4560-_mv3ivinthkf5) in "How WebRTC's NetEQ Jitter Buffer Provides Smooth Audio" (webrtchacks.com, June 2025)
