---
title: "BrowserCaptureMediaStreamTrack: cropTo() method"
short-title: cropTo()
slug: Web/API/BrowserCaptureMediaStreamTrack/cropTo
page-type: web-api-instance-method
browser-compat: api.BrowserCaptureMediaStreamTrack.cropTo
---

{{APIRef("Screen Capture extensions")}}{{SeeCompatTable}}{{securecontext_header}}

The **`cropTo()`** method of the {{domxref("BrowserCaptureMediaStreamTrack")}} interface crops a self-capture stream to the area in which a specified crop target element is rendered.

## Syntax

```js-nolint
cropTo(cropTarget)
```

### Parameters

- `cropTarget`
  - : A {{domxref("CropTarget")}} instance representing the element rendering area the stream should be cropped to, or `null`/`undefined`, in which case any previously-set cropping is removed from the track.

### Return value

A {{jsxref("Promise")}} that resolves to {{jsxref("undefined")}}.

The promise will reject if:

- The track [`kind`](/en-US/docs/Web/API/MediaStreamTrack/kind) is not `"video"`, or its [`readyState`](/en-US/docs/Web/API/MediaStreamTrack/readyState) is not `"live"`.
- The crop target element no longer exists.
- The track being cropped has clones or is not a track captured from the user's screen.
- `CropTarget` is not one of the values specified above.
- `CropTarget` was created in a tab other than the one being captured.

## Examples

### Basic cropping example

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

// Broadcast cropped stream in <video> element
videoElem.srcObject = stream;
```

See [Using the Element Capture and Region Capture APIs](/en-US/docs/Web/API/Screen_Capture_extensions/Element_Region_Capture) for in-context example code.

### Stopping the cropping

You can stop the cropping by making a call to `cropTo()` on a previously-cropped track, passing an argument of `null` to it:

```js
// Stop cropping
await track.cropTo(null);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture extensions](/en-US/docs/Web/API/Screen_Capture_extensions)
- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
