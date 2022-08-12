---
title: AudioTrack.sourceBuffer
slug: Web/API/AudioTrack/sourceBuffer
page-type: web-api-instance-property
tags:
  - API
  - Audio
  - AudioTrack
  - HTML DOM
  - MSE
  - Media
  - Media Source Extensions
  - Property
  - Read-only
  - Reference
  - SourceBuffer
  - track
browser-compat: api.AudioTrack.sourceBuffer
---
{{APIRef("HTML DOM")}}

The read-only **{{domxref("AudioTrack")}}**
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
