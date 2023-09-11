---
title: "IntersectionObserverEntry: intersectionRatio property"
short-title: intersectionRatio
slug: Web/API/IntersectionObserverEntry/intersectionRatio
page-type: web-api-instance-property
browser-compat: api.IntersectionObserverEntry.intersectionRatio
---

{{APIRef("Intersection Observer API")}}

The {{domxref("IntersectionObserverEntry")}} interface's
read-only **`intersectionRatio`** property tells you how much
of the target element is currently visible within the root's intersection ratio, as a
value between 0.0 and 1.0.

## Value

A number between 0.0 and 1.0 which indicates how much of the target element is actually
visible within the root's intersection rectangle. More precisely, this value is the
ratio of the area of the intersection rectangle
({{domxref("IntersectionObserverEntry.intersectionRect", "intersectionRect")}}) to the
area of the target's bounds rectangle
({{domxref("IntersectionObserverEntry.boundingClientRect", "boundingClientRect")}}).

If the area of the target's bounds rectangle is zero, the returned value is 1 if
{{domxref("IntersectionObserverEntry.isIntersecting", "isIntersecting")}} is
`true` or 0 if not.

## Examples

In this simple example, an intersection callback sets each target element's
{{cssxref("opacity")}} to the intersection ratio of that element with the root.

```js
function intersectionCallback(entries) {
  entries.forEach((entry) => {
    entry.target.style.opacity = entry.intersectionRatio;
  });
}
```

To see a more concrete example, take a look at
[Handling intersection changes](/en-US/docs/Web/API/Intersection_Observer_API/Timing_element_visibility#handling_intersection_changes).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
