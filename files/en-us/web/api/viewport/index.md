---
title: Viewport
slug: Web/API/Viewport
page-type: web-api-interface
status:
  - experimental
browser-compat: api.Viewport
---

{{APIRef("Viewport Segments API")}}{{SeeCompatTable}}

The **`Viewport`** interface of the {{domxref("Viewport Segments API", "Viewport Segments API", "", "nocode")}} represents the device's {{glossary("viewport")}}.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("Viewport.segments", "segments")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an array of {{domxref("DOMRect")}} objects representing the position and dimensions of each viewport segment within the overall display.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Viewport Segments API](/en-US/docs/Web/API/Viewport_segments_API/Using)
- [Viewport Segments API](/en-US/docs/Web/API/Viewport_segments_API)
- [Visual Viewport API](/en-US/docs/Web/API/Visual_Viewport_API)
- [Device Posture API](/en-US/docs/Web/API/Device_Posture_API)
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) via developer.chrome.com (2024)
