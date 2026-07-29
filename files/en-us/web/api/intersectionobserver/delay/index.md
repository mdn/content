---
title: "IntersectionObserver: delay property"
short-title: delay
slug: Web/API/IntersectionObserver/delay
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.IntersectionObserver.delay
---

{{APIRef("Intersection Observer API")}}{{SeeCompatTable}}

The **`delay`** read-only property of the {{domxref("IntersectionObserver")}} interface indicates the minimum delay between notifications from this observer.

The delay is used to limit the rate at which notifications should be provided when [tracking visibility](/en-US/docs/Web/API/IntersectionObserver/trackVisibility), as this is a computationally intensive operation.
The recommendation when tracking visibility is that you set the delay to the largest tolerable value.

## Value

A positive number in milliseconds.

The value is set using the [`option.delay`](/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#delay) argument to the `IntersectionObserver()` constructor.
The value is clamped to 100 or greater if {{domxref("IntersectionObserver/trackVisibility","trackVisibility")}} is `true`, but otherwise defaults to 0.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Timing element visibility with the Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
