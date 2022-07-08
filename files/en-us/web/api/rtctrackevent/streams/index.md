---
title: RTCTrackEvent.streams
slug: Web/API/RTCTrackEvent/streams
page-type: web-api-instance-property
tags:
  - API
  - Media
  - Property
  - RTCTrackEvent
  - Read-only
  - Reference
  - Streams
  - WebRTC
  - WebRTC API
  - events
  - track
browser-compat: api.RTCTrackEvent.streams
---
{{APIRef("WebRTC")}}

The [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
interface {{domxref("RTCTrackEvent")}}'s read-only
**`streams`** property specifies an array of
{{domxref("MediaStream")}} objects, one for each of the streams that comprise the
track being added to the {{domxref("RTCPeerConnection")}}.

## Value

An {{jsxref("Array")}} of {{domxref("MediaStream")}} objects, one for each stream that
make up the new track.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
