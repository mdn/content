---
title: "RTCInboundRtpStreamStats: jitterBufferEmittedCount property"
short-title: jitterBufferEmittedCount
slug: Web/API/RTCInboundRtpStreamStats/jitterBufferEmittedCount
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.jitterBufferEmittedCount
---

{{APIRef("WebRTC")}}

The **`jitterBufferEmittedCount`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the total number of audio samples and/or video frames that have come out of the {{glossary("jitter","jitter buffer")}}.

The {{domxref("RTCInboundRtpStreamStats.jitterBufferEmittedCount", "jitterBufferEmittedCount")}} and {{domxref("RTCInboundRtpStreamStats.jitterBufferDelay", "jitterBufferDelay")}} are incremented when samples or frames exit the buffer.
The average jitter buffer delay is `jitterBufferDelay / jitterBufferEmittedCount`.

## Value

A positive number, in seconds.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCInboundRtpStreamStats/jitterBufferDelay", "jitterBufferDelay")}}
