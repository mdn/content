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

The **`sourceCharPosition`** readonly property of the {{domxref("PerformanceScriptTiming")}} interface returns a number representing the script character position of the script feature that contributed to the long animation frame (LoAF).

## Value

A number. Rreturns `-1` if the script character position was not found.

## Examples

See [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing) for Long Animation Frames API examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceLongAnimationFrameTiming")}}
