---
title: "Viewport: segments property"
short-title: segments
slug: Web/API/Viewport/segments
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Viewport.segments
---

{{APIRef("Viewport Segments API")}}{{SeeCompatTable}}

The **`segments`** read-only property of the {{domxref("Viewport")}} interface returns an array of {{domxref("DOMRect")}} objects representing the position and dimensions of each viewport segment within the overall display.

## Value

An array of {{domxref("DOMRect")}} objects.

## Examples

### Basic `Viewport.segments` usage

This snippet will loop through each segment in the viewport, and log a string to the console detailing the index number, width, and height.

```js
const segments = window.viewport.segments;

segments.forEach((segment) =>
  console.log(
    `Segment ${segments.indexOf(segment)} is ${segment.width}px x ${segment.height}px`,
  ),
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Viewport Segments API](/en-US/docs/Web/API/Viewport_segments_API)
- [CSSOM view API](/en-US/docs/Web/API/CSSOM_view_API)
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) via developer.chrome.com (2024)
