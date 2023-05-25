---
title: "RTCAudioSourceStats: audioLevel property"
short-title: audioLevel
slug: Web/API/RTCAudioSourceStats/audioLevel
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_media-source.audioLevel
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The {{domxref("RTCAudioSourceStats")}} dictionary's **`audioLevel`** property represents the audio level of the media source.

The level is averaged over some small implementation-dependent interval.
Users can alternatively calculate the average audio level over some arbitrary duration using the algorithm described in the [`RTCAudioSourceStats` description](/en-US/docs/Web/API/RTCAudioSourceStats#description).

> **Note:** For audio levels of remotely sourced tracks, see {{domxref("RTCInboundRtpStreamStats.audioLevel")}}.

## Value

A number between 0 and 1 (linear), where 1.0 represents 0 dBov ([decibels relative to full scale (DBFS)](https://en.wikipedia.org/wiki/DBFS)), 0 represents silence, and 0.5 represents approximately 6 dB SPL change in the [sound pressure level](https://en.wikipedia.org/wiki/Sound_pressure#Sound_pressure_level) from 0 dBov.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
