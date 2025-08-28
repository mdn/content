---
title: Viewport
slug: Web/API/Viewport
page-type: web-api-interface
status:
  - experimental
browser-compat: api.Viewport
---

{{APIRef("Viewport segments API")}}{{SeeCompatTable}}

The **`Viewport`** interface of the {{domxref("Viewport segments API", "Viewport segments API", "", "nocode")}} represents the device's viewport.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("Viewport.segments", "segments")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an array of {{domxref("DOMRect")}} objects representing the position and dimensions of each viewport segment within the overall display.

## Examples

### Basic `Viewport.segments` usage

This snippet will loop through each segment in the viewport, and log a string to the console detailing the index number, width, and height of each one.

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
