---
title: VideoPlaybackQuality.totalVideoFrames
slug: Web/API/VideoPlaybackQuality/totalVideoFrames
tags:
  - API
  - Experimental
  - Frames
  - HTML DOM
  - Media
  - Media Playback Quality
  - Media Playback Quality API
  - Playback
  - Property
  - Quality
  - Reference
  - Video
  - VideoPlaybackQuality
  - totalVideoFrames
browser-compat: api.VideoPlaybackQuality.totalVideoFrames
---
{{APIRef("HTML DOM")}}

The {{domxref("VideoPlaybackQuality")}} interface's
**`totalVideoFrames`** read-only property returns the total
number of video frames that have been displayed or dropped since the media was
loaded.

## Syntax

```js
value = videoPlaybackQuality.totalVideoFrames;
```

### Value

The total number of frames that the {{HTMLElement("video")}} element has displayed or
dropped since the media was loaded into it. Essentially, this is the number of frames
the element _would have presented_ had no problems occurred.

This value is reset when the media is reloaded or replaced.

## Example

This example calls {{domxref("HTMLVideoElement.getVideoPlaybackQuality",
  "getVideoPlaybackQuality()")}} to obtain a {{domxref("VideoPlaybackQuality")}} object,
then determines what percentage of frames have been lost by either corruption or being
dropped. If that exceeds 10% (0.1), a function called
`lostFramesThresholdExceeded()` is called to, perhaps, update a quality
indicator to show an increase in frame loss.

```js
var videoElem = document.getElementById("my_vid");
var quality = videoElem.getVideoPlaybackQuality();

if ((quality.corruptedVideoFrames + quality.droppedVideoFrames)/quality.totalVideoFrames > 0.1) {
  lostFramesThresholdExceeded();
}
```

A similar algorithm might be used to attempt to switch to a lower-resolution video that
requires less bandwidth, in order to avoid dropping frames.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}} method for
  constructing and returning this interface.
