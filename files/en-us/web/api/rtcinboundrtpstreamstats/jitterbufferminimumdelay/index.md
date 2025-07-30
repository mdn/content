---
title: "RTCInboundRtpStreamStats: jitterBufferMinimumDelay property"
short-title: jitterBufferMinimumDelay
slug: Web/API/RTCInboundRtpStreamStats/jitterBufferMinimumDelay
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.jitterBufferMinimumDelay
---

{{APIRef("WebRTC")}}

The **`jitterBufferMinimumDelay`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the minimum {{glossary("jitter","jitter buffer")}} delay that might be achieved given only the network characteristics such as jitter and packet loss.

The jitter buffer delay may impacted by user settings such as {{domxref("RTCRtpReceiver.jitterBufferTarget")}}, and WebRTC mechanisms such as AV synchronization.
`jitterBufferMinimumDelay` can be compared to the {{domxref("RTCInboundRtpStreamStats.jitterBufferTargetDelay", "jitterBufferTargetDelay")}} to examine the effect of these external factors on the delay.

The property is updated when {{domxref("RTCInboundRtpStreamStats.jitterBufferEmittedCount", "jitterBufferEmittedCount")}} is updated.

## Value

A positive number, in seconds.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCInboundRtpStreamStats.jitterBufferEmittedCount", "jitterBufferEmittedCount")}}
- {{domxref("RTCInboundRtpStreamStats.jitterBufferDelay", "jitterBufferDelay")}}
- {{domxref("RTCInboundRtpStreamStats.jitterBufferTargetDelay", "jitterBufferTargetDelay")}}
