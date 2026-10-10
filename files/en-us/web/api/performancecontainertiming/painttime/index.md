---
title: "PerformanceContainerTiming: paintTime property"
short-title: paintTime
slug: Web/API/PerformanceContainerTiming/paintTime
page-type: web-api-instance-property
browser-compat: api.PerformanceContainerTiming.paintTime
---

{{APIRef("Performance API")}}

The **`paintTime`** read-only property of the {{domxref("PerformanceContainerTiming")}} interface returns a timestamp that represents when the rendering phase ended and the paint phase started.

This property is a broadly interoperable metric for indicating the time to paint, and can therefore be used when comparing behavior across browsers.
For single-browser testing, you can use {{domxref("PerformanceContainerTiming.presentationTime", "presentationTime")}} instead.

## Value

A {{domxref("DOMHighResTimeStamp")}}.

## Examples

See [Observing how entries change as a container grows](/en-US/docs/Web/API/PerformanceContainerTiming#observing_how_entries_change_as_a_container_grows) in {{domxref("PerformanceContainerTiming")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceContainerTiming.presentationTime")}}
