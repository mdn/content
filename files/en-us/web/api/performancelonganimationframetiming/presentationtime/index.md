---
title: "PerformanceLongAnimationFrameTiming: presentationTime property"
short-title: presentationTime
slug: Web/API/PerformanceLongAnimationFrameTiming/presentationTime
page-type: web-api-instance-property
browser-compat: api.PerformanceLongAnimationFrameTiming.presentationTime
---

{{APIRef("Performance API")}}

The **`presentationTime`** read-only property of the {{domxref("PerformanceLongAnimationFrameTiming")}} interface returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the UI update was actually drawn on the screen.

The `presentationTime` is optional — some browsers may choose always to return `0` or not to expose the value at all. The value is also implementation-dependent — it may differ across browsers that choose to expose it.

## Value

A {{domxref("DOMHighResTimeStamp")}} or {{jsxref("Operators/null", "null")}} if the value is not exposed.

## Examples

See [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) for examples related to the Long Animation Frames API.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceLongAnimationFrameTiming.paintTime")}}
