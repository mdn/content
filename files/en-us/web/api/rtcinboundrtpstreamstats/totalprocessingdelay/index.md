---
title: "RTCInboundRtpStreamStats: totalProcessingDelay property"
short-title: totalProcessingDelay
slug: Web/API/RTCInboundRtpStreamStats/totalProcessingDelay
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.totalProcessingDelay
---

{{APIRef("WebRTC")}}

The **`totalProcessingDelay`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the total accumulated time spent processing audio or video samples, in seconds.

The processing time for each audio or video sample is calculated from the time the first RTP packet is received (reception timestamp) to the time that the corresponding sample or frame is decoded (decoded timestamp).
At this point the audio sample or video frame is fully decoded by the decoder and is ready for playout by the {{domxref("MediaStreamTrack")}}.

For audio streams, an RTP packet may contain multiple audio samples: these will share the same reception timestamp.
For video streams, a complete frame may arrive in several RTP packets, and the reception timestamp is that of the first RTP packet that was received that contains data for the frame.
In both cases the decoded timestamp is the time at which the sample or frame is ready to play.

For video, the property only accumulates for decoded frames (not those that were dropped).
The average processing delay can be calculated by dividing the `totalProcessingDelay` with the {{domxref("RTCInboundRtpStreamStats.framesDecoded","framesDecoded")}}. <!-- audio samples can't get average - totalSamplesDecoded not in spec yet or implemented -->

## Value

A positive number, in seconds.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
