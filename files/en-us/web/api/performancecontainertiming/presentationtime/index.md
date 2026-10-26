---
title: "PerformanceContainerTiming: presentationTime property"
short-title: presentationTime
slug: Web/API/PerformanceContainerTiming/presentationTime
page-type: web-api-instance-property
browser-compat: api.PerformanceContainerTiming.presentationTime
---

{{APIRef("Performance API")}}

The **`presentationTime`** read-only property of the {{domxref("PerformanceContainerTiming")}} interface returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the container's newly painted content was actually drawn on the screen.

The `presentationTime` value is nullable: the underlying timestamp is implementation-defined, so browsers that don't populate it return `null` instead.
Because {{domxref("PerformanceContainerTiming.paintTime")}} is always populated the same way across implementations, it's the more reliable value to use for metrics that need to be comparable across browsers.

## Value

A {{domxref("DOMHighResTimeStamp")}}, or {{jsxref("null")}} if the value is not exposed.

## Examples

See [Observing how entries change as a container grows](/en-US/docs/Web/API/PerformanceContainerTiming#observing_how_entries_change_as_a_container_grows).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceContainerTiming.paintTime")}}
