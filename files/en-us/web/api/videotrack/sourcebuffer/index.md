---
title: VideoTrack.sourceBuffer
slug: Web/API/VideoTrack/sourceBuffer
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - MSE
  - Media
  - Media Source Extensions
  - Property
  - Read-only
  - Reference
  - SourceBuffer
  - Video
  - VideoTrack
  - track
browser-compat: api.VideoTrack.sourceBuffer
---
{{APIRef("HTML DOM")}}

The read-only **{{domxref("VideoTrack")}}**
property **`sourceBuffer`** returns the
{{domxref("SourceBuffer")}} that created the track, or null if the track was not
created by a {{domxref("SourceBuffer")}} or the {{domxref("SourceBuffer")}} has been
removed from the {{domxref("MediaSource.sourceBuffers")}} attribute of its parent
media source.

## Value

A {{domxref("SourceBuffer")}} or null.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
