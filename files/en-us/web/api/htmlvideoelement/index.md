---
title: HTMLVideoElement
slug: Web/API/HTMLVideoElement
page-type: web-api-interface
browser-compat: api.HTMLVideoElement
---

{{APIRef("HTML DOM")}}

Implemented by the {{HTMLElement("video")}} element, the **`HTMLVideoElement`** interface provides special properties and methods for manipulating video objects. It also inherits properties and methods of {{domxref("HTMLMediaElement")}} and {{domxref("HTMLElement")}}.

The list of [supported media formats](/en-US/docs/Web/Media/Guides/Formats) varies from one browser to the other. You should either provide your video in a single format that all the relevant browsers supports, or provide multiple video sources in enough different formats that all the browsers you need to support are covered.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent interface, {{domxref("HTMLMediaElement")}}, and {{domxref("HTMLElement")}}._

- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
  - : Indicates if the user agent should suggest the picture-in-picture to users, or not.
- {{domxref("HTMLVideoElement.height")}}
  - : A string that reflects the [`height`](/en-US/docs/Web/HTML/Element/video#height) HTML attribute, which specifies the height of the display area, in CSS pixels.
- {{domxref("HTMLVideoElement.poster")}}
  - : A string that reflects the [`poster`](/en-US/docs/Web/HTML/Element/video#poster) HTML attribute, which specifies an image to show while no video data is available.
- {{domxref("HTMLVideoElement.videoHeight")}} {{ReadOnlyInline}}
  - : Returns an unsigned integer value indicating the intrinsic height of the resource in CSS pixels, or 0 if no media is available yet.
- {{domxref("HTMLVideoElement.videoWidth")}} {{ReadOnlyInline}}
  - : Returns an unsigned integer value indicating the intrinsic width of the resource in CSS pixels, or 0 if no media is available yet.
- {{domxref("HTMLVideoElement.width")}}
  - : A string that reflects the [`width`](/en-US/docs/Web/HTML/Element/video#width) HTML attribute, which specifies the width of the display area, in CSS pixels.

### Firefox-specific properties

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

## Instance methods

_Inherits methods from its parent interface, {{domxref("HTMLMediaElement")}}, and {{domxref("HTMLElement")}}._

- {{DOMxRef("HTMLVideoElement.cancelVideoFrameCallback()")}}
  - : Cancels a previously-registered video frame callback (see {{DOMxRef("HTMLVideoElement.requestVideoFrameCallback", "requestVideoFrameCallback()")}}).
- {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}}
  - : Returns a {{domxref("VideoPlaybackQuality")}} object that contains the current playback metrics. This information includes things like the number of dropped or corrupted frames, as well as the total number of frames.
- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
  - : Requests that the user agent enters the video into picture-in-picture mode.
- {{DOMxRef("HTMLVideoElement.requestVideoFrameCallback()")}}
  - : Registers a callback function that runs when a new video frame is sent to the compositor. This enables developers to perform efficient operations on each video frame.

## Events

_Inherits events from its parent interface, {{domxref("HTMLMediaElement")}}, and {{domxref("HTMLElement")}}._

Listen to these events using {{domxref("EventTarget.addEventListener", "addEventListener()")}} or by assigning an event listener to the `oneventname` property of this interface.

- {{DOMxRef("HTMLVideoElement.enterpictureinpicture_event", "enterpictureinpicture")}}
  - : Fired when the `HTMLVideoElement` enters picture-in-picture mode successfully.
- {{DOMxRef("HTMLVideoElement.leavepictureinpicture_event", "leavepictureinpicture")}}
  - : Fired when the `HTMLVideoElement` leaves picture-in-picture mode successfully.
- {{DOMxRef("HTMLVideoElement.resize_event", "resize")}}
  - : Fires when one or both of the {{domxref("HTMLVideoElement.videoWidth", "videoWidth")}} and {{domxref("HTMLVideoElement.videoHeight", "videoHeight")}} properties have just been updated.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML element implementing this interface: {{HTMLElement("video")}}.
- [Supported media formats](/en-US/docs/Web/Media/Guides/Formats)
