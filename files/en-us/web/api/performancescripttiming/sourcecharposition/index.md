---
title: "PerformanceScriptTiming: sourceCharPosition property"
short-title: sourceCharPosition
slug: Web/API/PerformanceScriptTiming/sourceCharPosition
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceScriptTiming.sourceCharPosition
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`sourceCharPosition`** read-only property of the {{domxref("PerformanceScriptTiming")}} interface returns a number representing the script character position of the script feature that contributed to the long animation frame (LoAF).

It is important to note that the reported function location will be the "entry point" of the script, that is, the top level of the stack, not any specific slow sub-function. See {{domxref("PerformanceScriptTiming.sourceFunctionName")}} for more discussion around this.

## Value

A number. Returns `-1` if the script character position was not found.

## Examples

See [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) for examples related to the Long Animation Frames API.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceLongAnimationFrameTiming")}}
