---
title: "LargestContentfulPaint: presentationTime property"
short-title: presentationTime
slug: Web/API/LargestContentfulPaint/presentationTime
page-type: web-api-instance-property
browser-compat: api.LargestContentfulPaint.presentationTime
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`presentationTime`** read-only property of the {{domxref("LargestContentfulPaint")}} interface returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the painted pixels were actually drawn on the screen.

The `presentationTime` is implementation-dependant, therefore the value may differ across browsers.

## Value

A {{domxref("DOMHighResTimeStamp")}}.

## Examples

See [Observing separate paint and presentation timings](/en-US/docs/Web/API/LargestContentfulPaint#observing_separate_paint_and_presentation_timings).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LargestContentfulPaint.paintTime")}}
