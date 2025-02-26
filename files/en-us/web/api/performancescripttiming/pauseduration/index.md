---
title: "PerformanceScriptTiming: pauseDuration property"
short-title: pauseDuration
slug: Web/API/PerformanceScriptTiming/pauseDuration
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceScriptTiming.pauseDuration
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`pauseDuration`** read-only property of the {{domxref("PerformanceScriptTiming")}} interface returns a {{domxref("DOMHighResTimeStamp")}} indicating the total time, in milliseconds, spent by the script on "pausing" synchronous operations (for example, {{domxref("Window.alert()")}} calls or synchronous {{domxref("XMLHttpRequest")}}s).

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
