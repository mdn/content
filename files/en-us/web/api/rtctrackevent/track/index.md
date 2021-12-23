---
title: RTCTrackEvent.track
slug: Web/API/RTCTrackEvent/track
tags:
  - API
  - Media
  - Property
  - RTCTrackEvent
  - RTP
  - Read-only
  - Reference
  - Streams
  - WebRTC
  - WebRTC API
  - events
  - track
browser-compat: api.RTCTrackEvent.track
---
{{APIRef("WebRTC")}}

The [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
interface {{domxref("RTCTrackEvent")}}'s read-only **`track`**
property specifies the {{domxref("MediaStreamTrack")}} that has been added to the
{{domxref("RTCPeerConnection")}}.

## Syntax

```js
var track = trackEvent.track;
```

### Value

A {{domxref("MediaStreamTrack")}} indicating the track which has been added to the
{{domxref("RTCPeerConnection")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
