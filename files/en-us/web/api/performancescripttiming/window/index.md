---
title: "PerformanceScriptTiming: window property"
short-title: window
slug: Web/API/PerformanceScriptTiming/window
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceScriptTiming.window
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`window`** read-only property of the {{domxref("PerformanceScriptTiming")}} interface returns a reference to a {{domxref("Window")}} object representing the `window` of the container (i.e., either the top-level document or an {{htmlelement("iframe")}}) in which the long animation frame (LoAF)-causing script was executed.

## Value

A {{domxref("Window")}} object, or `null` if the window is no longer active (the object reference is a [`WeakRef`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)).

## Examples

See [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) for examples related to the Long Animation Frames API.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceLongAnimationFrameTiming")}}
