---
title: HTMLVideoElement
slug: Web/API/HTMLVideoElement
page-type: web-api-interface
tags:
  - API
  - HTML DOM
  - HTMLVideoElement
  - Interface
  - Reference
  - Video
browser-compat: api.HTMLVideoElement
---
{{APIRef("HTML DOM")}}

The **`HTMLVideoElement`** interface provides special properties and methods for manipulating video objects. It also inherits properties and methods of {{domxref("HTMLMediaElement")}} and {{domxref("HTMLElement")}}.

The list of [supported media formats](/en-US/docs/Web/Media/Formats) varies from one browser to the other. You should either provide your video in a single format that all the relevant browsers supports, or provide multiple video sources in enough different formats that all the browsers you need to support are covered.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its ancestor interfaces, {{domxref("HTMLMediaElement")}}, and {{domxref("HTMLElement")}}._

- {{domxref("HTMLVideoElement.height")}}
  - : A string that reflects the {{htmlattrxref("height", "video")}} HTML attribute, which specifies the height of the display area, in CSS pixels.
- {{domxref("HTMLVideoElement.poster")}}
  - : A string that reflects the {{htmlattrxref("poster", "video")}} HTML attribute, which specifies an image to show while no video data is available.
- {{domxref("HTMLVideoElement.videoHeight")}} {{ReadOnlyInline}}
  - : Returns an unsigned integer value indicating the intrinsic height of the resource in CSS pixels, or 0 if no media is available yet.
- {{domxref("HTMLVideoElement.videoWidth")}} {{ReadOnlyInline}}
  - : Returns an unsigned integer value indicating the intrinsic width of the resource in CSS pixels, or 0 if no media is available yet.
- {{domxref("HTMLVideoElement.width")}}
  - : A string that reflects the {{htmlattrxref("width", "video")}} HTML attribute, which specifies the width of the display area, in CSS pixels.
- {{DOMxRef("HTMLVideoElement.autoPictureInPicture")}}
  - : The `autoPictureInPicture` attribute will automatically enter and leave the picture-in-picture mode for a video element when the user switches tab and/or applications
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
  - : The `disablePictureInPicture` property will hint the user agent to not suggest the picture-in-picture to users or to request it automatically

### Gecko-specific properties

- {{domxref("HTMLVideoElement.mozParsedFrames")}} {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Returns an `unsigned long` with the count of video frames that have been parsed from the media resource.
- {{domxref("HTMLVideoElement.mozDecodedFrames")}} {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Returns an `unsigned long` with the count of parsed video frames that have been decoded into images.
- {{domxref("HTMLVideoElement.mozPresentedFrames")}} {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Returns an `unsigned long` with the count of decoded frames that have been presented to the rendering pipeline for painting.
- {{domxref("HTMLVideoElement.mozPaintedFrames")}} {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Returns an `unsigned long` with the count of presented frames which were painted on the screen.
- {{domxref("HTMLVideoElement.mozFrameDelay")}} {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Returns an `double` with the time which the last painted video frame was late by, in seconds.
- {{domxref("HTMLVideoElement.mozHasAudio")}} {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Returns a boolean indicating if there is some audio associated with the video.

### Microsoft Extensions

- {{DOMxRef("HTMLVideoElement.msFrameStep()")}} {{Non-standard_Inline}}
  - : Steps the video by one frame forward or one frame backward.
- {{DOMxRef("HTMLVideoElement.msHorizontalMirror")}} {{Non-standard_Inline}}
  - : Gets or sets whether a video element is flipped horizontally in the display.
- {{DOMxRef("HTMLVideoElement.msInsertVideoEffect()")}} {{Non-standard_Inline}}
  - : Inserts the specified video effect into the media pipeline.
- {{DOMxRef("HTMLVideoElement.msIsLayoutOptimalForPlayback")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Indicates whether the video can be rendered more efficiently.
- {{DOMxRef("HTMLVideoElement.msIsStereo3D")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Determines whether the system considers the loaded video source to be stereo 3-D or not. Value set to true indicates source is stereo 3D.
- {{DOMxRef("HTMLVideoElement.msZoom")}} {{Non-standard_Inline}}
  - : Controls whether the video frame is trimmed to fit the video display.

## Methods

_Inherits methods from its parent, {{domxref("HTMLMediaElement")}}, and from its ancestor {{domxref("HTMLElement")}}._

- {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}}
  - : Returns a {{domxref("VideoPlaybackQuality")}} object that contains the current playback metrics. This information includes things like the number of dropped or corrupted frames, as well as the total number of frames.
- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
  - : Requests that the user agent make video enters picture-in-picture mode

## Events

_Inherits events from its parent, {{domxref("HTMLMediaElement")}}, and from its ancestor {{domxref("HTMLElement")}}._ Listen to these events using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface.

- {{DOMxRef("HTMLVideoElement.enterpictureinpicture_event", "enterpictureinpicture")}}
  - : Sent to a {{DOMxRef("HTMLVideoElement")}} when it enters Picture-in-Picture mode.
- {{DOMxRef("HTMLVideoElement.leavepictureinpicture_event", "leavepictureinpicture")}}
  - : Sent to a {{DOMxRef("HTMLVideoElement")}} when it leaves Picture-in-Picture mode.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML element implementing this interface: {{HTMLElement("video")}}.
- [Supported media formats](/en-US/docs/Web/Media/Formats)
