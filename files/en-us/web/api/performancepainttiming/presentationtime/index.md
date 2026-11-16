---
title: "PerformancePaintTiming: presentationTime property"
short-title: presentationTime
slug: Web/API/PerformancePaintTiming/presentationTime
page-type: web-api-instance-property
browser-compat: api.PerformancePaintTiming.presentationTime
---

{{APIRef("Performance API")}}

The **`presentationTime`** read-only property of the {{domxref("PerformancePaintTiming")}} interface returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the painted pixels were actually drawn on the screen.

The `presentationTime` value is nullable: the underlying timestamp is implementation-defined, so browsers that don't populate it return `null` instead.
Because {{domxref("PerformancePaintTiming.paintTime")}} is always populated the same way across implementations, it's the more reliable value to use for metrics that need to be comparable across browsers.

## Value

A {{domxref("DOMHighResTimeStamp")}} or {{jsxref("null")}} if the value is not exposed.

## Examples

See [Getting separate paint and presentation timings](/en-US/docs/Web/API/PerformancePaintTiming#getting_separate_paint_and_presentation_timings).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformancePaintTiming.paintTime")}}
