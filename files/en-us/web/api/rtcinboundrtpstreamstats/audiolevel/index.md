---
title: "RTCInboundRtpStreamStats: audioLevel property"
short-title: audioLevel
slug: Web/API/RTCInboundRtpStreamStats/audioLevel
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.audioLevel
---

{{APIRef("WebRTC")}}

The **`audioLevel`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the audio level of the received (remote) track.

The `audioLevel` is averaged over some small interval, using the algorithm described under {{domxref("RTCInboundRtpStreamStats.totalAudioEnergy","totalAudioEnergy")}}.
The interval used is implementation dependent.

> [!NOTE]
> The value is undefined for video streams.

## Value

A real number.

The value is between 0..1 (linear), where 1.0 represents 0 dBov, 0 represents silence, and 0.5 represents approximately 6 dBSPL change in the sound pressure level from 0 dBov.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCAudioSourceStats.audioLevel")}} for audio levels of local tracks (that are being sent)
