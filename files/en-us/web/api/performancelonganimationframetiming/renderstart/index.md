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

The **`renderStart`** read-only property of the {{domxref("PerformanceLongAnimationFrameTiming")}} interface returns a {{domxref("DOMHighResTimeStamp")}} indicating the start time of the rendering cycle, which includes {{domxref("Window.requestAnimationFrame()")}} callbacks, style and layout calculation, {{domxref("ResizeObserver")}} callbacks, and {{domxref("IntersectionObserver")}} callbacks.

## Value

A {{domxref("DOMHighResTimeStamp")}}.

## Examples

See [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) for examples related to the Long Animation Frames API.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceScriptTiming")}}
