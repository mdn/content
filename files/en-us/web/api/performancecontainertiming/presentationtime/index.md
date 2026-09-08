---
title: "PerformanceContainerTiming: presentationTime property"
short-title: presentationTime
slug: Web/API/PerformanceContainerTiming/presentationTime
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceContainerTiming.presentationTime
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`presentationTime`** read-only property of the {{domxref("PerformanceContainerTiming")}} interface returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the container's newly-painted content was actually drawn on the screen.

The algorithm for getting the `presentationTime` timestamp is implementation-defined, and may return `null`.
Note that {{domxref("PerformanceContainerTiming.paintTime")}} is a more reliable property to use for metrics that need to be comparable across browsers.

## Value

A {{domxref("DOMHighResTimeStamp")}}, or {{jsxref("null")}} if the value is not exposed.

## Examples

See [Observing separate paint and presentation timings](/en-US/docs/Web/API/PerformanceContainerTiming#observing_separate_paint_and_presentation_timings).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceContainerTiming.paintTime")}}
