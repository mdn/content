---
title: RTCInboundRtpStreamStats.trackId
slug: Web/API/RTCInboundRtpStreamStats/trackId
tags:
  - API
  - Audio
  - Media
  - MediaStreamTrack
  - Property
  - RTCInboundRtpStreamStats
  - RTP
  - Reference
  - Statistics
  - Stats
  - Video
  - WebRTC
  - WebRTC API
  - trackId
browser-compat: api.RTCInboundRtpStreamStats.trackId
---
{{APIRef("WebRTC")}}

The **`trackId`** property of the
{{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the
{{domxref("RTCStats.id", "id")}} of the
{{domxref("RTCReceiverAudioTrackAttachmentStats")}} or
{{domxref("RTCReceiverVideoTrackAttachmentStats")}} object representing the
{{domxref("MediaStreamTrack")}} which is receiving the incoming media.

## Syntax

```js
var trackStatsId = rtcInboundRtpStreamStats.trackId;
```

### Value

A {{domxref("DOMString")}} containing the ID of the
{{domxref("RTCReceiverAudioTrackAttachmentStats")}} or
{{domxref("RTCReceiverVideoTrackAttachmentStats")}} object representing the track which
is receiving the media from this RTP session.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
