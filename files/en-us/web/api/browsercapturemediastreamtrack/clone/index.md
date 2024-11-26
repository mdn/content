---
title: "BrowserCaptureMediaStreamTrack: clone() method"
short-title: clone()
slug: Web/API/BrowserCaptureMediaStreamTrack/clone
page-type: web-api-instance-method
browser-compat: api.BrowserCaptureMediaStreamTrack.clone
---

{{APIRef("Screen Capture extensions")}}{{SeeCompatTable}}{{securecontext_header}}

The **`clone()`** method of the {{domxref("BrowserCaptureMediaStreamTrack")}} interface returns a clone of the original `BrowserCaptureMediaStreamTrack`.

This method is functionally identical to {{domxref("MediaStreamTrack.clone()")}}, except that it handles cases where cropping or restriction have been applied to the track. The returned clone is identical to the original `BrowserCaptureMediaStreamTrack`, but with any cropping or restriction removed.

## Syntax

```js-nolint
clone()
```

### Parameters

None.

### Return value

A {{domxref("BrowserCaptureMediaStreamTrack")}} instance.

## Examples

```js
// Create crop target from DOM element
const demoElem = document.querySelector("#demo");
const cropTarget = await CropTarget.fromElement(demoArea);

// Capture video stream from user's webcam and isolate video track
const stream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
const [track] = stream.getVideoTracks();

// Crop video track
await track.cropTo(cropTarget);

// Create uncropped clone of the track
const clonedTrack = track.clone();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture extensions](/en-US/docs/Web/API/Screen_Capture_extensions)
- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)