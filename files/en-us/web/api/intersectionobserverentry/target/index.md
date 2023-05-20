---
title: "IntersectionObserverEntry: target property"
short-title: target
slug: Web/API/IntersectionObserverEntry/target
page-type: web-api-instance-property
browser-compat: api.IntersectionObserverEntry.target
---

{{APIRef("Intersection Observer API")}}

The {{domxref("IntersectionObserverEntry")}} interface's
read-only **`target`** property indicates which targeted
{{domxref("Element")}} has changed its amount of intersection with the intersection
root.

## Value

The `IntersectionObserverEntry`'s `target` property specifies
which {{domxref("Element")}} previously targeted by calling
{{domxref("IntersectionObserver.observe()")}} experienced a change in intersection with
the root.

## Examples

In this simple example, each targeted element's {{cssxref("opacity")}} is set to its
{{domxref("IntersectionObserverEntry.intersectionRatio", "intersectionRatio")}}.

```js
function intersectionCallback(entries) {
  entries.forEach((entry) => {
    entry.target.opacity = entry.intersectionRatio;
  });
}
```

To see a more concrete example, take a look at
[Handling intersection changes](/en-US/docs/Web/API/Intersection_Observer_API/Timing_element_visibility#handling_intersection_changes).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
