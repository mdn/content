---
title: IntersectionObserverEntry.isIntersecting
slug: Web/API/IntersectionObserverEntry/isIntersecting
page-type: web-api-instance-property
tags:
  - API
  - Intersection Observer
  - Intersection Observer API
  - IntersectionObserverEntry
  - Property
  - Reference
  - isIntersecting
browser-compat: api.IntersectionObserverEntry.isIntersecting
---
{{APIRef("Intersection Observer API")}}

The {{domxref("IntersectionObserverEntry")}} interface's
read-only **`isIntersecting`** property is a Boolean value
which is `true` if the target element intersects with the intersection
observer's root. If this is `true`, then, the
`IntersectionObserverEntry` describes a transition into a state of
intersection; if it's `false`, then you know the transition is from
intersecting to not-intersecting.

## Value

A Boolean value which indicates whether the
{{domxref("IntersectionObserverEntry.target", "target")}} element has transitioned into
a state of intersection (`true`) or out of a state of intersection
(`false`).

## Examples

In this simple example, an intersection callback is used to update a counter of how
many targeted elements are currently intersecting with the
{{domxref("IntersectionObserver.root", "intersection root", "", 1)}}.

```js
function intersectionCallback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      intersectingCount += 1;
    } else {
      intersectingCount -= 1;
    }
  });
}
```

To see a more concrete example, take a look at
{{SectionOnPage("/en-US/docs/Web/API/Intersection_Observer_API/Timing_element_visibility",
  "Handling intersection changes")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
