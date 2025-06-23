---
title: "IntersectionObserver: trackVisibility property"
short-title: trackVisibility
slug: Web/API/IntersectionObserver/trackVisibility
page-type: web-api-instance-property
browser-compat: api.IntersectionObserver.trackVisibility
---

{{APIRef("Intersection Observer API")}}

The **`trackVisibility`** read-only property of the {{domxref("IntersectionObserver")}} interface indicates whether the observer is tracking target visibility in addition to element intersections.

## Value

`true` if visibility is being tracked for intersection calculations, and `false` otherwise.

The value is set using the [`option.trackVisibility`](/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#trackvisibility) argument to the `IntersectionObserver()` constructor.

## Description

When not tracking visibility, the observer provides notifications when the element is scrolled into the window's viewport.
However this doesn't tell you if the element is actually visible: it might be scrolled out of view inside a scrollable container or behind another element, or it might be "effectively invisible" due to an opacity change, filter, transform, or other modification.

When tracking visibility, only elements that the browser considers to be visible are shown as intersecting.
The algorithm is conservative, and may omit elements that are technically be visible, such as those with only a slight opacity reduction.

Note that the calculation of visibility is computationally expensive.
To avoid the operation running too often, a {{domxref("IntersectionObserver/delay","delay")}} is used to limit the minimum reporting period.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Timing element visibility with the Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
