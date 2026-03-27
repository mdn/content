---
title: "PerformancePaintTiming: presentationTime property"
short-title: presentationTime
slug: Web/API/PerformancePaintTiming/presentationTime
page-type: web-api-instance-property
browser-compat: api.PerformancePaintTiming.presentationTime
---

{{APIRef("Performance API")}}

The **`presentationTime`** read-only property of the {{domxref("PerformancePaintTiming")}} interface returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the painted pixels were actually drawn on the screen.

The `presentationTime` is optional — some browsers may choose always to return `0` or not to expose the value at all. The value is also implementation-dependent — it may differ across browsers that choose to expose it.

## Value

A {{domxref("DOMHighResTimeStamp")}} or {{jsxref("Operators/null", "null")}} if the value is not exposed.

## Examples

See [Getting separate paint and presentation timings](/en-US/docs/Web/API/PerformancePaintTiming#getting_separate_paint_and_presentation_timings).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformancePaintTiming.paintTime")}}
