---
title: IntersectionObserverEntry.target
slug: Web/API/IntersectionObserverEntry/target
tags:
  - API
  - Element
  - Experimental
  - Intersection Observer
  - Intersection Observer API
  - IntersectionObserver
  - Property
  - Reference
  - target
browser-compat: api.IntersectionObserverEntry.target
---
{{APIRef("Intersection Observer API")}}{{SeeCompatTable}}

The {{domxref("IntersectionObserverEntry")}} interface's
read-only **`target`** property indicates which targeted
{{domxref("Element")}} has changed its amount of intersection with the intersection
root.

## Syntax

```js
var target = IntersectionObserverEntry.target;
```

### Value

The `IntersectionObserverEntry`'s `target` property specifies
which {{domxref("Element")}} previously targeted by calling
{{domxref("IntersectionObserver.observe()")}} experienced a change in intersection with
the root.

## Example

In this simple example, each targeted element's {{cssxref("opacity")}} is set to its
{{domxref("IntersectionObserverEntry.intersectionRatio", "intersectionRatio")}}.

```js
function intersectionCallback(entries) {
  entries.forEach(function(entry) {
    entry.target.opacity = entry.intersectionRatio;
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
