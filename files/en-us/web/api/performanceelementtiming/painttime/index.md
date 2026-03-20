---
title: "PerformanceElementTiming: paintTime property"
short-title: paintTime
slug: Web/API/PerformanceElementTiming/paintTime
page-type: web-api-instance-property
browser-compat: api.PerformanceElementTiming.paintTime
---

{{APIRef("Performance API")}}

The **`paintTime`** read-only property of the {{domxref("PerformanceElementTiming")}} interface returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the rendering phase ended and the paint phase started.

The `paintTime` is broadly interoperable: The value should be the same across different implementations.

## Value

A {{domxref("DOMHighResTimeStamp")}}.

## Examples

See [Observing separate paint and presentation timings](/en-US/docs/Web/API/PerformanceElementTiming#observing_separate_paint_and_presentation_timings).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceElementTiming.presentationTime")}}
