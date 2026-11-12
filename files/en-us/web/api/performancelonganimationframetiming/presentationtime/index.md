---
title: "PerformanceLongAnimationFrameTiming: presentationTime property"
short-title: presentationTime
slug: Web/API/PerformanceLongAnimationFrameTiming/presentationTime
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceLongAnimationFrameTiming.presentationTime
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`presentationTime`** read-only property of the {{domxref("PerformanceLongAnimationFrameTiming")}} interface returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the UI update was actually drawn on the screen.

The `presentationTime` value is nullable: the underlying timestamp is implementation-defined, so browsers that don't populate it return `null` instead.
Because {{domxref("PerformanceLongAnimationFrameTiming.paintTime")}} is always populated the same way across implementations, it's the more reliable value to use for metrics that need to be comparable across browsers.

## Value

A {{domxref("DOMHighResTimeStamp")}} or {{jsxref("null")}} if the value is not exposed.

## Examples

See [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) for examples related to the Long Animation Frames API.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceLongAnimationFrameTiming.paintTime")}}
