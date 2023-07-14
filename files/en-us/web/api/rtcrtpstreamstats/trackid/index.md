---
title: "RTCRtpStreamStats: trackId property"
short-title: trackId
slug: Web/API/RTCRtpStreamStats/trackId
page-type: web-api-instance-property
browser-compat: api.RTCRtpStreamStats.trackId
---

{{APIRef("WebRTC")}}

The {{domxref("RTCRtpStreamStats")}} dictionary's
**`trackId`** property is a string which uniquely identifies
the {{domxref("RTCMediaStreamTrackStats")}} object which contains the track statistics
for the {{domxref("MediaStreamTrack")}} for which statistics are provided in this
object.

## Value

A string which uniquely identifies the
{{domxref("RTCMediaStreamTrackStats")}} object that provides statistics for the track
for which statistics are being collected by this {{domxref("RTCStatsReport")}}.

> **Note:** This value is _not_ the same as the value of
> {{domxref("MediaStreamTrack.id")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
