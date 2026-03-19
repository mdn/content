---
title: "PerformanceLongAnimationFrameTiming: presentationTime property"
short-title: presentationTime
slug: Web/API/PerformanceLongAnimationFrameTiming/presentationTime
page-type: web-api-instance-property
browser-compat: api.PerformanceLongAnimationFrameTiming.presentationTime
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`presentationTime`** read-only property of the {{domxref("PerformanceLongAnimationFrameTiming")}} interface returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the element was actually drawn on the screen.

The `presentationTime` is implementation-dependant, therefore the value may differ across browsers.

## Value

A {{domxref("DOMHighResTimeStamp")}}.

## Examples

See [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) for examples related to the Long Animation Frames API.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceLongAnimationFrameTiming.paintTime")}}
