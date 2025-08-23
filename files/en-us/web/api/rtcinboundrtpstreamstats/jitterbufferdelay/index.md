---
title: "RTCInboundRtpStreamStats: jitterBufferDelay property"
short-title: jitterBufferDelay
slug: Web/API/RTCInboundRtpStreamStats/jitterBufferDelay
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.jitterBufferDelay
---

{{APIRef("WebRTC")}}

The **`jitterBufferDelay`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the accumulated time that all audio samples and complete video frames have spent in the {{glossary("jitter","jitter buffer")}}.

For an audio sample the time is calculated from the time that the sample is received by the jitter buffer ("ingest timestamp"), until the time that the sample is emitted ("exit timestamp").
For a video frame, the ingest time is when the first packet in the frame was ingested until the time at which the whole frame exits the buffer.
Note that several audio samples in an RTP packet will have the same ingest timestamp but different exit timestamps, while a video frame might be split across a number of RTP packets.

`jitterBufferDelay` is incremented, along with {{domxref("RTCInboundRtpStreamStats.jitterBufferEmittedCount", "jitterBufferEmittedCount")}}, when samples or frames exit the buffer.
The average jitter buffer delay is `jitterBufferDelay / jitterBufferEmittedCount`.

The jitter buffer may hold samples/frames for a longer (or shorter) delay, allowing samples to build up in the buffer so that it can provide a more smooth and continuous playout.
A low and relatively constant `jitterBufferDelay` is desirable, as it indicates the buffer does not need to hold as many frames/samples, and the network is stable.
Higher values might indicate that the network is less reliable or predictable.

Similarly, a steady average delay indicates a more stable network, while a rising average delay indicates growing latency.

## Value

A positive number, in seconds.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCInboundRtpStreamStats.jitterBufferEmittedCount", "jitterBufferEmittedCount")}}
- {{domxref("RTCInboundRtpStreamStats.jitterBufferMinimumDelay", "jitterBufferMinimumDelay")}}
- {{domxref("RTCInboundRtpStreamStats.jitterBufferTargetDelay", "jitterBufferTargetDelay")}}
