---
title: RTCTrackEventInit.streams
slug: Web/API/RTCTrackEventInit/streams
tags:
  - API
  - Media
  - Property
  - RTCTrackEvent
  - Reference
  - Streams
  - WebRTC
  - WebRTC API
  - events
  - track
browser-compat: api.RTCTrackEventInit.streams
---
{{APIRef("WebAPI")}}

The {{domxref("RTCTrackEventInit")}} dictionary's optional
**`streams`** property provides an array containing a
{{domxref("MediaStream")}} object for each of the streams associated with the event's
track.

## Syntax

```js
var trackEventInit = {
  receiver: rtpReceiver,
  track: mediaStreamTrack,
  streams: [videoStream],
  transceiver: rtpTransceiver
};

var streamList = trackEventInit.streams;
```

### Value

An array of {{domxref("MediaStream")}} objects, one for each stream which make up the
track.

If `streams` is not specified, its default value is an empty array.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
