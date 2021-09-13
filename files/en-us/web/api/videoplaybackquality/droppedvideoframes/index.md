---
title: VideoPlaybackQuality.droppedVideoFrames
slug: Web/API/VideoPlaybackQuality/droppedVideoFrames
tags:
  - API
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
  - droppedVideoFrames
browser-compat: api.VideoPlaybackQuality.droppedVideoFrames
---
{{APIRef("HTML DOM")}}

The read-only **`droppedVideoFrames`**
property of the {{domxref("VideoPlaybackQuality")}} interface returns the number of
video frames which have been dropped rather than being displayed since the last time
the media was loaded into the {{domxref("HTMLVideoElement")}}.

## Syntax

```js
value = videoPlaybackQuality.droppedVideoFrames;
```

### Value

An unsigned 64-bit value indicating the number of frames that have been dropped since
the last time the media in the {{HTMLElement("video")}} element was loaded or reloaded.
This information can be used to determine whether or not to downgrade the video stream
to avoid dropping frames.

Frames are typically dropped either before or after decoding them, when it's determined
that it will not be possible to draw them to the screen at the correct time.

## Example

This example calls {{domxref("HTMLVideoElement.getVideoPlaybackQuality",
  "getVideoPlaybackQuality()")}} to obtain a {{domxref("VideoPlaybackQuality")}} object,
then determines what percentage of frames have been dropped. That value is then
presented in an element for the user's reference.

```js
var videoElem = document.getElementById("my_vid");
var percentElem = document.getElementById("percent");
var quality = videoElem.getVideoPlaybackQuality();

var dropPercent = (quality.droppedVideoFrames/quality.totalVideoFrames)*100;
percentElem.innerText = Math.trunc(dropPercent).toString(10);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}} method, which creates
  and returns `VideoPlaybackQuality` objects
