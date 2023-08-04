---
title: IntersectionObserver
slug: Web/API/IntersectionObserver
page-type: web-api-interface
browser-compat: api.IntersectionObserver
---

{{APIRef("Intersection Observer API")}}

The **`IntersectionObserver`** interface of the [Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API) provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's {{Glossary('viewport')}}. The ancestor element or viewport is referred to as the root.

When an `IntersectionObserver` is created, it's configured to watch for given ratios of visibility within the root. The configuration cannot be changed once the `IntersectionObserver` is created, so a given observer object is only useful for watching for specific changes in degree of visibility; however, you can watch multiple target elements with the same observer.

## Constructor

- {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}}
  - : Creates a new `IntersectionObserver` object which will execute a specified callback function when it detects that a target element's visibility has crossed one or more thresholds.

## Instance properties

- {{domxref("IntersectionObserver.root")}} {{ReadOnlyInline}}
  - : The {{domxref("Element")}} or {{domxref("Document")}} whose bounds are used as the bounding box when testing for intersection. If no `root` value was passed to the constructor or its value is `null`, the top-level document's viewport is used.
- {{domxref("IntersectionObserver.rootMargin")}} {{ReadOnlyInline}}
  - : An offset rectangle applied to the root's {{Glossary('bounding box')}} when calculating intersections, effectively shrinking or growing the root for calculation purposes. The value returned by this property may not be the same as the one specified when calling the constructor as it may be changed to match internal requirements. Each offset can be expressed in pixels (`px`) or as a percentage (`%`). The default is "0px 0px 0px 0px".
- {{domxref("IntersectionObserver.thresholds")}} {{ReadOnlyInline}}
  - : A list of thresholds, sorted in increasing numeric order, where each threshold is a ratio of intersection area to bounding box area of an observed target. Notifications for a target are generated when any of the thresholds are crossed for that target. If no value was passed to the constructor, 0 is used.

## Instance methods

- {{domxref("IntersectionObserver.disconnect()")}}
  - : Stops the `IntersectionObserver` object from observing any target.
- {{domxref("IntersectionObserver.observe()")}}
  - : Tells the `IntersectionObserver` a target element to observe.
- {{domxref("IntersectionObserver.takeRecords()")}}
  - : Returns an array of {{domxref("IntersectionObserverEntry")}} objects for all observed targets.
- {{domxref("IntersectionObserver.unobserve()")}}
  - : Tells the `IntersectionObserver` to stop observing a particular target element.

## Examples

```js
const intersectionObserver = new IntersectionObserver((entries) => {
  // If intersectionRatio is 0, the target is out of view
  // and we do not need to do anything.
  if (entries[0].intersectionRatio <= 0) return;

  loadItems(10);
  console.log("Loaded new items");
});
// start observing
intersectionObserver.observe(document.querySelector(".scrollerFooter"));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('MutationObserver')}}
- {{domxref('PerformanceObserver')}}
- {{domxref('ResizeObserver')}}
