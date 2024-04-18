---
title: "PerformanceScriptTiming: forcedStyleAndLayoutDuration property"
short-title: forcedStyleAndLayoutDuration
slug: Web/API/PerformanceScriptTiming/forcedStyleAndLayoutDuration
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceScriptTiming.forcedStyleAndLayoutDuration
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`forcedStyleAndLayoutDuration`** read-only property of the {{domxref("PerformanceScriptTiming")}} interface returns a {{domxref("DOMHighResTimeStamp")}} indicating the total time spent, in milliseconds, by the script processing forced layout/style. See [Avoid layout thrashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing) to understand what causes this.

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
- {{domxref("PerformanceLongAnimationFrameTiming")}}
