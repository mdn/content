---
title: MediaRecorder.ignoreMutedMedia
slug: Web/API/MediaRecorder/ignoreMutedMedia
tags:
  - API
  - Audio
  - Media Recorder API
  - MediaRecorder
  - Property
  - Reference
  - Video
browser-compat: api.MediaRecorder.ignoreMutedMedia
---
{{deprecated_header}}{{APIRef("MediaStream Recording")}}

The **`ignoreMutedMedia`** property of
the {{domxref("MediaRecorder")}} interface indicates whether the
`MediaRecorder` instance will record input, when the input MediaStreamTrack
is muted.

If this attribute is `false`, MediaRecorder will record
silence for audio and black frames for video. The default is `false`.

## Syntax

```js
var boolean = MediaRecorder.ignoreMutedMedia
MediaRecorder.ignoreMutedMedia = boolean
```

### Value

A boolean value.

## Browser compatibility

{{Compat}}
