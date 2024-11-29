---
title: RestrictionTarget
slug: Web/API/RestrictionTarget
page-type: web-api-interface
status:
  - experimental
browser-compat: api.RestrictionTarget
---

{{APIRef("Screen Capture extensions")}}{{SeeCompatTable}}

The **`RestrictionTarget`** interface of the {{domxref("Screen Capture extensions", "Screen Capture extensions", "", "nocode")}} provides a static method, {{domxref("RestrictionTarget.fromElement_static", "fromElement()")}}, which returns a `RestrictionTarget` instance that can be used to restrict a captured video track to a specified DOM element.

{{InheritanceDiagram}}

## Static methods

- {{domxref("RestrictionTarget.fromElement_static", "fromElement()")}} {{Experimental_Inline}}
  - : Returns a `RestrictionTarget` instance that can be used to crop a captured video track to a specified DOM element.

## Examples

```js
// Options for getDisplayMedia()
const displayMediaOptions = {
  preferCurrentTab: true,
};

// Create restriction target from DOM element
const demoElem = document.querySelector("#demo");
const restrictionTarget = await RestrictionTarget.fromElement(demoElem);

// Capture video stream from user's webcam and isolate video track
const stream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
const [track] = stream.getVideoTracks();

// Restrict video track
await track.restrictTo(restrictionTarget);

// Broadcast restricted stream in <video> element
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
