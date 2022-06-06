---
title: RTCOutboundRtpStreamStats.trackId
slug: Web/API/RTCOutboundRtpStreamStats/trackId
page-type: web-api-instance-property
tags:
  - API
  - Audio
  - Media
  - MediaStreamTrack
  - Property
  - RTCOutboundRtpStreamStats
  - RTCRtpSender
  - RTP
  - Reference
  - Statistics
  - Stats
  - Video
  - WebRTC
  - WebRTC API
  - id
  - stream
  - track
  - trackId
browser-compat: api.RTCOutboundRtpStreamStats.trackId
---
{{APIRef("WebRTC")}}

The **`trackId`** property of the
{{domxref("RTCOutboundRtpStreamStats")}} dictionary indicates the
{{domxref("RTCStats.id", "id")}} of the
{{domxref("RTCSenderAudioTrackAttachmentStats")}} or
{{domxref("RTCSenderVideoTrackAttachmentStats")}} object representing the
{{domxref("MediaStreamTrack")}} which is being sent on this stream.

## Value

A string containing the ID of the
{{domxref("RTCSenderAudioTrackAttachmentStats")}} or
{{domxref("RTCSenderVideoTrackAttachmentStats")}} object representing the track which is
the source of the media being sent on this stream.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
