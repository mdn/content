---
title: Screen Capture extensions
slug: Web/API/Screen_Capture_extensions
page-type: web-api-overview
status:
  - experimental
browser-compat:
  - api.CropTarget
  - api.RestrictionTarget
spec-urls:
  - https://screen-share.github.io/element-capture/
  - https://w3c.github.io/mediacapture-region/
---

{{SeeCompatTable}}

{{DefaultAPISidebar("Screen Capture extensions")}}{{securecontext_header}}

The [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API) allows the user to capture their screen (or a specific window or tab) as a media stream, which can then be shared and broadcast. This section documents APIs that extend the Screen Capture API functionality with additional functionality, for example to limit the part of the screen captured in the stream to a particular crop or element.

## Concepts and usage

The Screen Capture API was created specifically to allow apps to capture the user's screen — or a particular window or tab — and then do something with the resulting stream (such as transmit it to multiple peers via [WebRTC](/en-US/docs/Web/API/WebRTC_API)). The main use case is video conferencing apps, where a user might wish to share a demo running on their local machine with other participants.

The following snippet (which must be run under [transient activation](/en-US/docs/Glossary/Transient_activation), for example by clicking a button) uses {{domxref("MediaDevices.getDisplayMedia()")}} to prompt the user to choose a screen, window or tab, captures their choice in a video stream, and displays that stream in a {{htmlelement("video")}} element:

```js
const stream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
videoElem.srcObject = stream;
```

The problem with the Screen Capture API is that, by default, it only allows you to broadcast the entire window, screen or tab selected by the user. Often it would be preferrable to share only a limited region to cut down on unnecessary bandwidth or screen space required to show the capture, or for privacy reasons (you might not want to show other participants your message notifications, or background settings required to run the demo you are sharing).

The following Screen Capture API extensions provide mechanisms to limit the region captured in the stream.

### The Element Capture API

The Element Capture API restricts the captured region to a specified rendered DOM element — to do this, you first specify a DOM element as a restriction target using {{domxref("RestrictionTarget.fromElement()")}}:

```js
const someDOMElement = document.querySelector("#my-element");
const restrictionTarget = await RestrictionTarget.fromElement(someDOMElement);
```

You then grab the media stream, isolate the video track from the stream using {{domxref("MediaStream.getVideoTracks()")}}, then apply the restriction by calling {{domxref("BrowserCaptureMediaStreamTrack.restrictTo()")}} on the track:

```js
const stream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
const [track] = stream.getVideoTracks();
await track.restrictTo(restrictionTarget);

videoElem.srcObject = stream;
```

See [Using the Element Capture API](/en-US/docs/Web/API/Screen_Capture_extensions/Element_Capture) to learn more.

### Region Capture API

The Region Capture API crops the captured region to the area of the screen in which a specified DOM element is rendered. To do this, you first specify a DOM element as a crop target using {{domxref("CropTarget.fromElement()")}}:

```js
const someDOMElement = document.querySelector("#my-element");
const cropTarget = await CropTarget.fromElement(someDOMElement);
```

You then grab the media stream, isolate the video track from the stream using {{domxref("MediaStream.getVideoTracks()")}}, then apply the cropping by calling {{domxref("BrowserCaptureMediaStreamTrack.cropTo()")}} on the track:

```js
const stream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
const [track] = stream.getVideoTracks();
await track.cropTo(restrictionTarget);

videoElem.srcObject = stream;
```

See [Using the Region Capture API](/en-US/docs/Web/API/Screen_Capture_extensions/Region_Capture) to learn more.

### Element Capture versus Region Capture

The Element Capture API and the Region Capture API have similar purposes, so what is the difference?

Element Capture captures the element itself, whereas Region Capture captures the area of the screen the element is rendered in. This means that Element Capture will always show the entire captured element, even if other DOM content overlaps it, whereas Region Capture can result in overlapping content being shown over the top of the content you intended to capture.

As a result, it is generally recommended that you use the newer Element Capture API over the older Region Capture API, unless you need to support older browser versions that do not support Element Capture.

## Interfaces

- {{domxref("BrowserCaptureMediaStreamTrack")}}
  - : Represents a single media stream track; extends the {{domxref("MediaStreamTrack")}} class with methods to limit the part of the stream captured.
- {{domxref("CropTarget")}}
  - : Provides a static method, {{domxref("CropTarget.fromElement()")}}, which returns a {{domxref("CropTarget")}} instance that can be used to crop the stream to the area in which a specified element is rendered.
- {{domxref("RestrictionTarget")}}
  - : Provides a static method, {{domxref("RestrictionTarget.fromElement()")}}, which returns a {{domxref("RestrictionTarget")}} instance that can be used to crop the stream to a specified element.

## Examples

See [Using the Region Capture API](/en-US/docs/Web/API/Screen_Capture_extensions/Region_Capture) and [Using the Element Capture API](/en-US/docs/Web/API/Screen_Capture_extensions/Element_Capture) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Capture a video stream from any element](https://developer.chrome.com/docs/web-platform/element-capture) on developer.chrome.com (2025)
- [Better tab sharing with Region Capture](https://developer.chrome.com/docs/web-platform/region-capture) on developer.chrome.com (2023)
