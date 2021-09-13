---
title: RTCTrackEventInit.track
slug: Web/API/RTCTrackEventInit/track
tags:
  - API
  - Media
  - Property
  - RTCTrackEventInit
  - Reference
  - WebRTC
  - WebRTC API
  - events
  - track
browser-compat: api.RTCTrackEventInit.track
---
{{APIRef("WebAPI")}}

The {{domxref("RTCTrackEventInit")}} dictionary's
**`track`** property specifies the
{{domxref("MediaStreamTrack")}} associated with the {{event("track")}} event.

## Syntax

```js
var trackEventInit = {
  receiver: rtpReceiver,
  track: mediaStreamTrack,
  streams: [videoStream],
  transceiver: rtpTransceiver
};

var track = trackEventInit.track;
```

### Value

A {{domxref("MediaStreamTrack")}} representing the track with which the event is
associated. This is the track that's being added to the
{{domxref("RTCPeerConnection")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
