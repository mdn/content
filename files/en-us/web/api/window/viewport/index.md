---
title: "Window: viewport property"
short-title: viewport
slug: Web/API/Window/viewport
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Window.viewport
---

{{APIRef("Viewport segments API")}}{{SeeCompatTable}}

The `viewport` read-only property of the {{domxref("Window")}} interface returns a {{domxref("Viewport")}} object instance, which provides information about the current state of the device's viewport.

This property can be considered the entry point to the [Viewport segments API](/en-US/docs/Web/API/Viewport_segments_API), which relies on viewport segment information returned by the {{domxref("Viewport.segments")}} property.

## Value

A {{domxref("Viewport")}} object instance.

## Examples

### Basic `viewport` usage

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

- [Viewport segments API](/en-US/docs/Web/API/Viewport_segments_API)
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) on developer.chrome.com (2024)
