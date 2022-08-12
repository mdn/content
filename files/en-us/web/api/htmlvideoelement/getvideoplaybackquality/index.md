---
title: HTMLVideoElement.getVideoPlaybackQuality()
slug: Web/API/HTMLVideoElement/getVideoPlaybackQuality
page-type: web-api-instance-method
tags:
  - API
  - Frames
  - HTML DOM
  - HTMLVideoElement
  - Media
  - Media Playback Quality
  - Media Playback Quality API
  - Method
  - Playback
  - Quality
  - Reference
  - Time
  - Video
  - getVideoPlaybackQuality
browser-compat: api.HTMLVideoElement.getVideoPlaybackQuality
---
{{ APIRef("HTML DOM") }}

The **{{domxref("HTMLVideoElement")}}** method
**`getVideoPlaybackQuality()`** creates and returns a
{{domxref("VideoPlaybackQuality")}} object containing metrics including how many
frames have been lost.

The data returned can be used to evaluate the quality of the video stream.

## Syntax

```js
getVideoPlaybackQuality()
```

### Parameters

None.

### Return value

A {{domxref("VideoPlaybackQuality")}} object providing information about the video
element's current playback quality.

## Examples

This example updates an element to indicate the total number of video frames that have
elapsed so far in the playback process. This value includes any dropped or corrupted
frames, so it's not the same as "total number of frames played."

```js
const videoElem = document.getElementById("my_vid");
const counterElem = document.getElementById("counter");
const quality = videoElem.getVideoPlaybackQuality();

counterElem.innerText = quality.totalVideoFrames;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("video")}} element
- The {{domxref("VideoPlaybackQuality")}} interface.
