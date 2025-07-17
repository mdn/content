---
title: BrowserCaptureMediaStreamTrack
slug: Web/API/BrowserCaptureMediaStreamTrack
page-type: web-api-interface
status:
  - experimental
browser-compat: api.BrowserCaptureMediaStreamTrack
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}

The **`BrowserCaptureMediaStreamTrack`** interface of the {{domxref("Screen Capture API", "Screen Capture API", "", "nocode")}} represents a single video track. It extends the {{domxref("MediaStreamTrack")}} class with methods to limit the part of a self-capture stream (for example, a user's screen or window) that is captured.

{{InheritanceDiagram}}

## Instance methods

- {{domxref("BrowserCaptureMediaStreamTrack.clone", "clone()")}} {{Experimental_Inline}}
  - : Returns an uncropped, unrestricted clone of the original `BrowserCaptureMediaStreamTrack`.
- {{domxref("BrowserCaptureMediaStreamTrack.cropTo", "cropTo()")}} {{Experimental_Inline}}
  - : Crops a self-capture stream to the area in which a specified DOM element is rendered.
- {{domxref("BrowserCaptureMediaStreamTrack.restrictTo", "restrictTo()")}} {{Experimental_Inline}}
  - : Restricts a self-capture stream to a specific DOM element.

## Examples

See [Using the Element Capture and Region Capture APIs](/en-US/docs/Web/API/Screen_Capture_API/Element_Region_Capture) for in-context example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- [Using the Element Capture and Region Capture APIs](/en-US/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
