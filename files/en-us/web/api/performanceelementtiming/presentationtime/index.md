---
title: "PerformanceElementTiming: presentationTime property"
short-title: presentationTime
slug: Web/API/PerformanceElementTiming/presentationTime
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceElementTiming.presentationTime
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`presentationTime`** read-only property of the {{domxref("PerformanceElementTiming")}} interface returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the element was actually drawn on the screen.

The `presentationTime` value is nullable: the underlying timestamp is implementation-defined, so browsers that don't populate it return `null` instead.
Because {{domxref("PerformanceElementTiming.paintTime")}} is always populated the same way across implementations, it's the more reliable value to use for metrics that need to be comparable across browsers.

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
