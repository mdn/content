---
title: "RTCAudioSourceStats: totalSamplesDuration property"
short-title: totalSamplesDuration
slug: Web/API/RTCAudioSourceStats/totalSamplesDuration
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_media-source.totalSamplesDuration
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`totalSamplesDuration`** property of the {{domxref("RTCAudioSourceStats")}} dictionary represents the combined duration of all samples produced by the media source over the lifetime of this stats object, in seconds.
It does not include samples dropped before reaching this media source. <!-- Dropped samples in `droppedSamplesDuration`; not implemented -->

This can be used with {{domxref("RTCAudioSourceStats.totalAudioEnergy", "totalAudioEnergy")}} to compute an [average audio level over different intervals](/en-US/docs/Web/API/RTCAudioSourceStats#description).

> [!NOTE]
> For audio duration of remotely sourced tracks, see {{domxref("RTCInboundRtpStreamStats.totalSamplesDuration")}}.

## Value

A number indicating the total duration of all samples produced by this source over the lifetime this stats object, in seconds.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
