---
title: "IntersectionObserver: trackVisibility property"
short-title: trackVisibility
slug: Web/API/IntersectionObserver/trackVisibility
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.IntersectionObserver.trackVisibility
---

{{APIRef("Intersection Observer API")}}{{SeeCompatTable}}

The **`trackVisibility`** read-only property of the {{domxref("IntersectionObserver")}} interface indicates whether the observer is tracking target visibility in addition to element intersections.

## Value

`true` if visibility is being tracked for intersection calculations, and `false` otherwise.

The value is set using the [`option.trackVisibility`](/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#trackvisibility) argument to the `IntersectionObserver()` constructor.

## Description

When not tracking visibility, the observer provides notifications when the target element is scrolled into the root element's viewport.
However this doesn't tell you if the target element has compromised visibility — it might be partially covered by another element, have reduced opacity, or be distorted by a filter, transform, or other modification.

When tracking visibility, only elements that the browser considers to be visible are shown as intersecting.
The algorithm is conservative, and may omit elements that are technically visible, such as those with only a slight opacity reduction.

Note that the calculation of visibility is computationally expensive.
To avoid the operation running too often, a {{domxref("IntersectionObserver/delay","delay")}} is used to limit the minimum reporting period.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Timing element visibility with the Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
