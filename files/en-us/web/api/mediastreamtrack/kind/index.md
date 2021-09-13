---
title: MediaStreamTrack.kind
slug: Web/API/MediaStreamTrack/kind
tags:
  - Media Capture and Streams
  - MediaStreamTrack
  - NeedsExample
  - Property
  - Read-only
  - Reference
  - WebRTC
browser-compat: api.MediaStreamTrack.kind
---
{{APIRef("Media Capture and Streams")}}

The **`MediaStreamTrack.kind`**
read-only property returns a {{domxref("DOMString")}} set to `"audio"` if
the track is an audio track and to `"video"`, if it is a video
track. It doesn't change if the track is deassociated from its source.

## Syntax

```js
const type = track.kind
```

### Value

The possible values are a {{domxref("DOMString")}} with on of the following values:

- `"audio"`: the track is an audio track.
- `"video"`: the track is a video track.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
