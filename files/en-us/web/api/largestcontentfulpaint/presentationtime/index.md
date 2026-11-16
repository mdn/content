---
title: "LargestContentfulPaint: presentationTime property"
short-title: presentationTime
slug: Web/API/LargestContentfulPaint/presentationTime
page-type: web-api-instance-property
browser-compat: api.LargestContentfulPaint.presentationTime
---

{{APIRef("Performance API")}}

The **`presentationTime`** read-only property of the {{domxref("LargestContentfulPaint")}} interface returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the painted pixels were actually drawn on the screen.

The `presentationTime` value is nullable: the underlying timestamp is implementation-defined, so browsers that don't populate it return `null` instead.
Because {{domxref("LargestContentfulPaint.paintTime")}} is always populated the same way across implementations, it's the more reliable value to use for metrics that need to be comparable across browsers.

## Value

A {{domxref("DOMHighResTimeStamp")}} or {{jsxref("null")}} if the value is not exposed.

## Examples

See [Observing separate paint and presentation timings](/en-US/docs/Web/API/LargestContentfulPaint#observing_separate_paint_and_presentation_timings).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LargestContentfulPaint.paintTime")}}
