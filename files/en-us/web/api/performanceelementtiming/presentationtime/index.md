---
title: "PerformanceElementTiming: presentationTime property"
short-title: presentationTime
slug: Web/API/PerformanceElementTiming/presentationTime
page-type: web-api-instance-property
browser-compat: api.PerformanceElementTiming.presentationTime
---

{{APIRef("Performance API")}}

The **`presentationTime`** read-only property of the {{domxref("PerformanceElementTiming")}} interface returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the element was actually drawn on the screen.

The `presentationTime` is implementation-dependent, therefore the value may differ across implementing browsers. Some browsers may choose to always return `0` or not to expose the value.

## Value

A {{domxref("DOMHighResTimeStamp")}} or {{jsxref("null")}} if the value is not exposed.

## Examples

See [Observing separate paint and presentation timings](/en-US/docs/Web/API/PerformanceElementTiming#observing_separate_paint_and_presentation_timings).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceElementTiming.paintTime")}}
