---
title: "RTCInboundRtpStreamStats: jitterBufferTargetDelay property"
short-title: jitterBufferTargetDelay
slug: Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.jitterBufferTargetDelay
---

{{APIRef("WebRTC")}}

The **`jitterBufferTargetDelay`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the accumulated target {{glossary("jitter","jitter buffer")}} delay, in seconds.

The target jitter buffer delay is the playout delay that the jitter buffer estimates that it needs to maintain in order to compensate for jitter and ensure smooth playback.
The estimate is affected by network variability and latency as well as mechanisms such as AV synchronization. Developers can influence it by setting the {{domxref("RTCRtpReceiver.jitterBufferTarget")}} property.

The property is updated when {{domxref("RTCInboundRtpStreamStats.jitterBufferEmittedCount", "jitterBufferEmittedCount")}} is updated.
The average target jitter buffer delay is `jitterBufferTargetDelay / jitterBufferEmittedCount`.

The property can be compared to the average of the {{domxref("RTCInboundRtpStreamStats.jitterBufferMinimumDelay", "jitterBufferMinimumDelay")}} to determine the effects of external factors on the target, such as the configured `jitterBufferTarget` hint.

## Value

A positive number, in seconds.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCInboundRtpStreamStats.jitterBufferEmittedCount", "jitterBufferEmittedCount")}}
- {{domxref("RTCInboundRtpStreamStats.jitterBufferMinimumDelay", "jitterBufferMinimumDelay")}}
- {{domxref("RTCInboundRtpStreamStats.jitterBufferDelay", "jitterBufferDelay")}}
