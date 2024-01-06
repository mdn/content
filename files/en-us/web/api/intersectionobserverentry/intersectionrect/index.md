---
title: "IntersectionObserverEntry: intersectionRect property"
short-title: intersectionRect
slug: Web/API/IntersectionObserverEntry/intersectionRect
page-type: web-api-instance-property
browser-compat: api.IntersectionObserverEntry.intersectionRect
---

{{APIRef("Intersection Observer API")}}

The {{domxref("IntersectionObserverEntry")}} interface's
read-only **`intersectionRect`** property is a
{{domxref("DOMRectReadOnly")}} object which describes the smallest rectangle that
contains the entire portion of the target element which is currently visible within
the intersection root.

## Value

A {{domxref("DOMRectReadOnly")}} which describes the part of the target element that's
currently visible within the root's intersection rectangle.

This rectangle is computed by taking the intersection of
{{domxref("IntersectionObserverEntry", "boundingClientRect")}} with each of the
{{domxref("IntersectionObserverEntry.target", "target")}}'s ancestors' clip rectangles,
with the exception of the intersection {{domxref("IntersectionObserver.root", "root")}}
itself.

## Examples

In this simple example, an intersection callback stores the intersection rectangle for
later use by the code that draws the target elements' contents, so that only the visible
area is redrawn.

```js
function intersectionCallback(entries) {
  entries.forEach((entry) => {
    refreshZones.push({
      element: entry.target,
      rect: entry.intersectionRect,
    });
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
