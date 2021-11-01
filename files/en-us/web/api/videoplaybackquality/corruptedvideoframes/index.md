---
title: VideoPlaybackQuality.corruptedVideoFrames
slug: Web/API/VideoPlaybackQuality/corruptedVideoFrames
tags:
  - API
  - Corruption
  - Data Loss
  - Experimental
  - Frames
  - Media
  - Media Playback Quality
  - Media Playback Quality API
  - Playback
  - Property
  - Quality
  - Reference
  - Video
  - VideoPlaybackQuality
  - corruptedVideoFrames
browser-compat: api.VideoPlaybackQuality.corruptedVideoFrames
---
{{APIRef("HTML DOM")}}{{deprecated_header}}

The {{domxref("VideoPlaybackQuality")}} interface's read-only
**`corruptedVideoFrames`** property the number of corrupted
video frames that have been received since the {{HTMLElement("video")}} element was
last loaded or reloaded.

## Syntax

```js
corruptFrameFount = videoPlaybackQuality.corruptedVideoFrames;
```

### Value

The number of corrupted video frames that have been received since the
{{HTMLElement("video")}} element was last loaded or reloaded.

It is up to the {{Glossary("user agent")}} to determine whether or not to display a
corrupted video frame. If a corrupted frame is dropped, then both
`corruptedVideoFrames` and
{{domxref("VideoPlaybackQuality.droppedVideoFrames", "droppedVideoFrames")}} are
incremented.

## Example

This example determines the percentage of frames which have been corrupted, and if the
value is greater than 5%, calls a funciton called `downgradeVideo()` that
would be implemented to switch to a different video that might tax the network less.

```js
var videoElem = document.getElementById("my_vid");
var quality = videoElem.getVideoPlaybackQuality();

if (quality.corruptedVideoFrames/quality.totalVideoFrames > 0.05) {
  downgradeVideo(videoElem);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}} method for
  constructing and returning this interface
