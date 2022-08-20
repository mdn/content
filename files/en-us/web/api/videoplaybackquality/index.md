---
title: VideoPlaybackQuality
slug: Web/API/VideoPlaybackQuality
page-type: web-api-interface
tags:
  - API
  - Frames
  - HTML DOM
  - Interface
  - Media
  - Media Playback Quality
  - Media Playback Quality API
  - Playback
  - Quality
  - Reference
  - Video
  - VideoPlaybackQuality
browser-compat: api.VideoPlaybackQuality
---
{{APIRef("HTML DOM")}}

A **`VideoPlaybackQuality`** object is returned by the {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}} method and contains metrics that can be used to determine the playback quality of a video.

## Properties

_The `VideoPlaybackQuality` interface doesn't inherit properties from any other interfaces._

- {{domxref("VideoPlaybackQuality.creationTime", "creationTime")}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} containing the time in milliseconds between the start of the navigation and the creation of the object.
- {{domxref("VideoPlaybackQuality.droppedVideoFrames", "droppedVideoFrames")}} {{ReadOnlyInline}}
  - : An `unsigned long` giving the number of video frames dropped since the creation of the associated {{domxref("HTMLVideoElement")}}.
- {{domxref("VideoPlaybackQuality.totalVideoFrames", "totalVideoFrames")}} {{ReadOnlyInline}}
  - : An `unsigned long` giving the number of video frames created and dropped since the creation of the associated {{domxref("HTMLVideoElement")}}.

### Obsolete properties

- {{domxref("VideoPlaybackQuality.corruptedVideoFrames", "corruptedVideoFrames")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : An `unsigned long` giving the number of video frames corrupted since the creation of the associated {{domxref("HTMLVideoElement")}}. A corrupted frame may be created or dropped.
- {{domxref("VideoPlaybackQuality.totalFrameDelay", "totalFrameDelay")}} {{ReadOnlyInline}} {{deprecated_inline}} {{Non-standard_Inline}}
  - : A `double` containing the sum of the frame delay since the creation of the associated {{domxref("HTMLVideoElement")}}. The frame delay is the difference between a frame's theoretical presentation time and its effective display time.

## Methods

_The `VideoPlaybackQuality` interface has no methods, and does not inherit any._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}} method to get a `VideoPlaybackQuality` object
- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
