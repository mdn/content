---
title: "CropTarget: fromElement() static method"
short-title: fromElement()
slug: Web/API/CropTarget/fromElement_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.CropTarget.fromElement_static
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`fromElement()`** static method of the {{domxref("CropTarget")}} interface returns a `CropTarget` instance that can be used to crop a captured video track to the area in which a specified element is rendered.

Because the Region Capture API crops to an area of the current browser tab rather than capturing a specific element, any content drawn on top of the cropped area will be shown in the capture.

## Syntax

```js-nolint
CropTarget.fromElement(element)
```

### Parameters

- `element`

  - : A reference to an {{domxref("Element")}} that you want to use as a crop target. For an element to be used as a crop target, it must be:

    - On-screen
    - Visible, that is, not hidden via `display: none` for example.

    In addition, the element will not be captured if the track being restricted has clones (that is, created by {{domxref("BrowserCaptureMediaStreamTrack.clone()")}}) or is captured from a different tab to the current user's tab (passed via {{domxref("Window.postMessage()")}}, for example).

### Return value

A {{jsxref("Promise")}} that resolves to a {{domxref("CropTarget")}} object instance, which can then be passed to {{domxref("BrowserCaptureMediaStreamTrack.CropTo()")}} to crop the video captured in the track to just the area the specified DOM element is rendered in.

`CropTarget` objects are serializable. They can be passed to another document using mechanisms such as {{domxref("Window.postMessage()")}}.

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

// Broadcast cropped stream in <video> element
videoElem.srcObject = stream;
```

See [Using the Element Capture and Region Capture APIs](/en-US/docs/Web/API/Screen_Capture_API/Element_Region_Capture) for in-context example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- [Using the Element Capture and Region Capture APIs](/en-US/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
