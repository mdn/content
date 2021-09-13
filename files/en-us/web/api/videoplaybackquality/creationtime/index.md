---
title: VideoPlaybackQuality.creationTime
slug: Web/API/VideoPlaybackQuality/creationTime
tags:
  - API
  - Experimental
  - Media
  - Media Playback Quality
  - Media Playback Quality API
  - Property
  - Quality
  - Reference
  - Video
  - VideoPlaybackQuality
  - creationTime
browser-compat: api.VideoPlaybackQuality.creationTime
---
{{APIRef("HTML DOM")}}

The read-only **`creationTime`** property on the
{{domxref("VideoPlaybackQuality")}} interface reports the number of milliseconds since
the browsing context was created this quality sample was recorded.

## Syntax

```js
value = videoPlaybackQuality.creationTime;
```

### Value

A {{domxref("DOMHighResTimeStamp")}} object which indicates the number of milliseconds
that elapased between the time the browsing context was created and the time at which
this sample of the video quality was obtained.

For details on how the time is determined, see {{domxref("Performance.now()")}}.

## Example

This example calls `getVideoPlaybackQuality()` to obtain a
{{domxref("VideoPlaybackQuality")}} object, then determines what percentage of frames
have been lost by either corruption or being dropped. If that exceeds 10% (0.1), a
function called `lostFramesThresholdExceeded()` is called to, perhaps,
update a quality indicator to show an increase in frame loss.

```js
var videoElem = document.getElementById("my_vid");
var quality = videoElem.getVideoPlaybackQuality();

if ((quality.corruptedVideoFrames + quality.droppedVideoFrames)/quality.totalVideoFrames > 0.1) {
  lostFramesThresholdExceeded();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}} method, which
  returns `VideoPlaybackQuality` objects
