---
title: "PerformanceLongAnimationFrameTiming: renderStart property"
short-title: renderStart
slug: Web/API/PerformanceLongAnimationFrameTiming/renderStart
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceLongAnimationFrameTiming.renderStart
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`renderStart`** readonly property of the {{domxref("PerformanceLongAnimationFrameTiming")}} interface returns a {{domxref("DOMHighResTimeStamp")}} indicating the start time of the rendering cycle in milliseconds, which includes {{domxref("Window.requestAnimationFrame()")}} callbacks, style and layout calculation, {{domxref("ResizeObserver")}} callbacks, and {{domxref("IntersectionObserver")}} callbacks.

## Value

A {{domxref("DOMHighResTimeStamp")}}.

## Examples

See [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing) for Long Animation Frames API examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceScriptTiming")}}
