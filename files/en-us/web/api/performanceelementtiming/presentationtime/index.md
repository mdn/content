---
title: "PerformanceElementTiming: presentationTime property"
short-title: presentationTime
slug: Web/API/PerformanceElementTiming/presentationTime
page-type: web-api-instance-property
browser-compat: api.PerformanceElementTiming.presentationTime
---

{{APIRef("Performance API")}}

The **`presentationTime`** read-only property of the {{domxref("PerformanceElementTiming")}} interface returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the element was actually drawn on the screen.

The `presentationTime` is optional — some browsers may choose always to return `0` or not to expose the value at all. The value is also implementation-dependent — it may differ across browsers that choose to expose it.

## Value

A {{domxref("DOMHighResTimeStamp")}} or {{jsxref("Operators/null", "null")}} if the value is not exposed.

## Examples

See [Observing separate paint and presentation timings](/en-US/docs/Web/API/PerformanceElementTiming#observing_separate_paint_and_presentation_timings).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceElementTiming.paintTime")}}
