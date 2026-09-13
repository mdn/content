---
title: "PerformanceContainerTiming: paintTime property"
short-title: paintTime
slug: Web/API/PerformanceContainerTiming/paintTime
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceContainerTiming.paintTime
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`paintTime`** read-only property of the {{domxref("PerformanceContainerTiming")}} interface returns a timestamp that represents when the rendering phase ended and the paint phase started.

This property is a broadly interoperable metric for indicating the time to paint, and can therefore be used when comparing behavior across browsers.
For single-browser testing you can {{domxref("PerformanceContainerTiming.presentationTime", "presentationTime")}} instead.

## Value

A {{domxref("DOMHighResTimeStamp")}}.

## Examples

See [Observing separate paint and presentation timings](/en-US/docs/Web/API/PerformanceContainerTiming#observing_separate_paint_and_presentation_timings) in {{domxref("PerformanceContainerTiming")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceContainerTiming.presentationTime")}}
