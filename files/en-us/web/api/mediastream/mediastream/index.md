---
title: MediaStream()
slug: Web/API/MediaStream/MediaStream
tags:
  - API
  - Audio
  - Constructor
  - Media
  - Media Capture and Streams
  - Media Capture and Streams API
  - MediaStream
  - Reference
  - Streams
  - Tracks
  - Video
  - WebRTC
  - streaming
browser-compat: api.MediaStream.MediaStream
---
{{APIRef("Media Capture and Streams")}}

The **`MediaStream()`** constructor
returns a newly-created {{domxref("MediaStream")}}, which serves as a collection of
media tracks, each represented by a {{domxref("MediaStreamTrack")}} object.

If
any parameters are given, the specified tracks are added to the new stream. Otherwise,
the stream has no tracks.

## Syntax

```js
new MediaStream();
new MediaStream(stream);
new MediaStream(tracks);
```

### Parameters

- `stream`
  - : A different {{domxref("MediaStream")}} object whose tracks are added to the
    newly-created stream automatically. The tracks are not removed from the original
    stream, so they're shared by the two streams.
- `tracks`
  - : An {{jsxref("Array")}} of {{domxref("MediaStreamTrack")}} objects, one for each
    track to add to the stream.

### Return value

A newly-created {{domxref("MediaStream")}} object, either empty, or containing the
tracks provided, if any.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaStream")}}
