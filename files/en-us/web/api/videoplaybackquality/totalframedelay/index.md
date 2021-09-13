---
title: VideoPlaybackQuality.totalFrameDelay
slug: Web/API/VideoPlaybackQuality/totalFrameDelay
tags:
  - API
  - Experimental
  - Media Source Extensions
  - Deprecated
  - Property
  - Reference
  - Video
  - VideoPlaybackQuality
  - totalFrameDelay
browser-compat: api.VideoPlaybackQuality.totalFrameDelay
---
{{APIRef("Media Source Extensions")}}{{deprecated_header}}

The **`VideoPlaybackQuality.totalFrameDelay`** read-only
property returns a `double` containing the sum of the frame delay since the
creation of the associated {{domxref("HTMLVideoElement")}}. The frame delay is the
difference between a frame's theoretical presentation time and its effective display
time.

## Syntax

```js
value = videoPlaybackQuality.totalFrameDelay;
```

## Example

```js
var videoElt = document.getElementById('my_vid');
var quality = videoElt.getVideoPlaybackQuality();

alert(quality.totalFrameDelay);
```

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}} method for
  constructing and returning this interface.
- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
