---
title: "BrowserCaptureMediaStreamTrack: clone() method"
short-title: clone()
slug: Web/API/BrowserCaptureMediaStreamTrack/clone
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.BrowserCaptureMediaStreamTrack.clone
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`clone()`** method of the {{domxref("BrowserCaptureMediaStreamTrack")}} interface returns a clone of the original `BrowserCaptureMediaStreamTrack`.

This method is functionally identical to {{domxref("MediaStreamTrack.clone()")}}, except that it handles cases where cropping or restriction have been applied to the track. The returned clone is identical to the original `BrowserCaptureMediaStreamTrack`, but with any cropping or restriction removed.

> [!NOTE]
> In Chromium, if a track has clones, its {{domxref("BrowserCaptureMediaStreamTrack.cropTo", "cropTo()")}} and {{domxref("BrowserCaptureMediaStreamTrack.restrictTo", "restrictTo()")}} methods will reject (see [Chrome issue 41482026](https://issues.chromium.org/issues/41482026)).

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
// Options for getDisplayMedia()
const displayMediaOptions = {
  preferCurrentTab: true,
};

// Create crop target from DOM element
const demoElem = document.querySelector("#demo");
const cropTarget = await CropTarget.fromElement(demoElem);

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

- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- [Using the Element Capture and Region Capture APIs](/en-US/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
