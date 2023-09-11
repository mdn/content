---
title: "VideoPlaybackQuality: totalFrameDelay property"
short-title: totalFrameDelay
slug: Web/API/VideoPlaybackQuality/totalFrameDelay
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.VideoPlaybackQuality.totalFrameDelay
---

{{APIRef("Media Source Extensions")}}{{deprecated_header}}{{Non-standard_header}}

The **`VideoPlaybackQuality.totalFrameDelay`** read-only
property returns a `double` containing the sum of the frame delay since the
creation of the associated {{domxref("HTMLVideoElement")}}. The frame delay is the
difference between a frame's theoretical presentation time and its effective display
time.

## Value

A number.

## Examples

```js
const videoElt = document.getElementById("my_vid");
const quality = videoElt.getVideoPlaybackQuality();

alert(quality.totalFrameDelay);
```

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}} method for
  constructing and returning this interface.
- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
