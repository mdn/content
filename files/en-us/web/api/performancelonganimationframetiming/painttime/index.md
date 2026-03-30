---
title: "PerformanceLongAnimationFrameTiming: paintTime property"
short-title: paintTime
slug: Web/API/PerformanceLongAnimationFrameTiming/paintTime
page-type: web-api-instance-property
browser-compat: api.PerformanceLongAnimationFrameTiming.paintTime
---

{{APIRef("Performance API")}}

The **`paintTime`** read-only property of the {{domxref("PerformanceLongAnimationFrameTiming")}} interface returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the rendering phase ended and the animation frame started.

The `paintTime` is broadly interoperable: The value should be the same across different implementations.

## Value

A {{domxref("DOMHighResTimeStamp")}}.

## Examples

See [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) for examples related to the Long Animation Frames API.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceLongAnimationFrameTiming.presentationTime")}}
