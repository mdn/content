---
title: "PerformancePaintTiming: paintTime property"
short-title: paintTime
slug: Web/API/PerformancePaintTiming/paintTime
page-type: web-api-instance-property
browser-compat: api.PerformancePaintTiming.paintTime
---

{{APIRef("Performance API")}}

The **`paintTime`** read-only property of the {{domxref("PerformancePaintTiming")}} interface returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the rendering phase ended and the paint phase started.

The `paintTime` is broadly interoperable: The value should be the same across different implementations.

## Value

A {{domxref("DOMHighResTimeStamp")}}.

## Examples

See [Getting separate paint and presentation timings](/en-US/docs/Web/API/PerformancePaintTiming#getting_separate_paint_and_presentation_timings).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformancePaintTiming.presentationTime")}}
