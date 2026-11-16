---
title: "Window: viewport property"
short-title: viewport
slug: Web/API/Window/viewport
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Window.viewport
---

{{APIRef("Viewport Segments API")}}{{SeeCompatTable}}

The `viewport` read-only property of the {{domxref("Window")}} interface returns a {{domxref("Viewport")}} object instance, which provides information about the current state of the device's viewport.

See the {{domxref("Viewport")}} API for all available properties.

## Value

A {{domxref("Viewport")}} object instance.

## Examples

### Basic `viewport` usage

```js
const currentViewport = window.viewport;
const segments = window.viewport.segments;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Viewport.segments")}} property
- {{domxref("Viewport")}} interface
- {{domxref("VisualViewport")}} interface
- [Viewport Segments API](/en-US/docs/Web/API/Viewport_segments_API)
- [CSSOM view API](/en-US/docs/Web/API/CSSOM_view_API)
- [Viewport concepts](/en-US/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
- [CSS viewport](/en-US/docs/Web/CSS/Guides/Viewport) module
- [CSSOM view](/en-US/docs/Web/CSS/Guides/CSSOM_view) module
