---
title: CropTarget
slug: Web/API/CropTarget
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CropTarget
---

{{APIRef("Screen Capture extensions")}}{{SeeCompatTable}}

The **`CropTarget`** interface of the {{domxref("Screen Capture extensions", "Screen Capture extensions", "", "nocode")}} provides a static method, {{domxref("CropTarget.fromElement_static", "fromElement()")}}, which returns a `CropTarget` instance that can be used to crop a captured video track to the area in which a specified element is rendered.

{{InheritanceDiagram}}

## Static methods

- {{domxref("CropTarget.fromElement_static", "fromElement()")}} {{Experimental_Inline}}
  - : Returns a `CropTarget` instance that can be used to crop a captured video track to the area in which a specified element is rendered.

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

// Broadcast cropped stream in <video> element
videoElem.srcObject = stream;
```

See [Using the Element Capture and Region Capture APIs](/en-US/docs/Web/API/Screen_Capture_extensions/Element_Region_Capture) for in-context example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture extensions](/en-US/docs/Web/API/Screen_Capture_extensions)
- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)