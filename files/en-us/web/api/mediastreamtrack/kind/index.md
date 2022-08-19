---
title: MediaStreamTrack.kind
slug: Web/API/MediaStreamTrack/kind
page-type: web-api-instance-property
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

The **`MediaStreamTrack.kind`** read-only property returns a string set to `"audio"` if the track is an audio track and to `"video"`, if it is a video track.
It doesn't change if the track is disassociated from its source.

## Value

The possible values are a string with one of the following values:

- `"audio"`: the track is an audio track.
- `"video"`: the track is a video track.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
