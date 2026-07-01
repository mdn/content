---
title: "RTCInboundRtpStreamStats: totalSamplesDuration property"
short-title: totalSamplesDuration
slug: Web/API/RTCInboundRtpStreamStats/totalSamplesDuration
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.totalSamplesDuration
---

{{APIRef("WebRTC")}}

The **`totalSamplesDuration`** property of the {{domxref("RTCRemoteInboundRtpStreamStats")}} dictionary indicates the total duration of all audio samples that have been received.
In other words, the current duration of the track.

This can be used with {{domxref("RTCInboundRtpStreamStats/totalAudioEnergy","totalAudioEnergy")}} to compute an average audio level over different intervals.

> [!NOTE]
> The value is undefined for video streams.

## Value

A positive number, in seconds.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCAudioSourceStats.totalSamplesDuration")}} for the audio duration of sent samples.
- {{domxref("RTCInboundRtpStreamStats/totalSamplesReceived","totalSamplesReceived")}}
