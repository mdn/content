---
title: RTCRtpStreamStats.trackId
slug: Web/API/RTCRtpStreamStats/trackId
tags:
  - API
  - Property
  - RTCRtpStreamStats
  - RTP
  - Reference
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - id
  - rtc
  - track
  - trackId
browser-compat: api.RTCRtpStreamStats.trackId
---
{{APIRef("WebRTC")}}

The {{domxref("RTCRtpStreamStats")}} dictionary's
**`trackId`** property is a string which uniquely identifies
the {{domxref("RTCMediaStreamTrackStats")}} object which contains the track statistics
for the {{domxref("MediaStreamTrack")}} for which statistics are provided in this
object.

## Syntax

```js
var trackID = RTCRtpStreamStats.trackId;
```

### Value

A {{domxref("DOMString")}} which uniquely identifies the
{{domxref("RTCMediaStreamTrackStats")}} object that provides statistics for the track
for which statistics are being collected by this {{domxref("RTCStatsReport")}}.

> **Note:** This value is _not_ the same as the value of
> {{domxref("MediaStramTrack.id")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
