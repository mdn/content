---
title: IntersectionObserverEntry
slug: Web/API/IntersectionObserverEntry
page-type: web-api-interface
browser-compat: api.IntersectionObserverEntry
---

{{APIRef("Intersection Observer API")}}

The **`IntersectionObserverEntry`** interface of the [Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API) describes the intersection between the target element and its root container at a specific moment of transition.

Instances of `IntersectionObserverEntry` are delivered to an {{domxref("IntersectionObserver")}} callback in its `entries` parameter; otherwise, these objects can only be obtained by calling {{domxref("IntersectionObserver.takeRecords()")}}.

## Instance properties

- {{domxref("IntersectionObserverEntry.boundingClientRect")}} {{ReadOnlyInline}}
  - : Returns the bounds rectangle of the target element as a {{domxref("DOMRectReadOnly")}}. The bounds are computed as described in the documentation for {{domxref("Element.getBoundingClientRect()")}}.
- {{domxref("IntersectionObserverEntry.intersectionRatio")}} {{ReadOnlyInline}}
  - : Returns the ratio of the `intersectionRect` to the `boundingClientRect`.
- {{domxref("IntersectionObserverEntry.intersectionRect")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("DOMRectReadOnly")}} representing the target's visible area.
- {{domxref("IntersectionObserverEntry.isIntersecting")}} {{ReadOnlyInline}}
  - : A Boolean value which is `true` if the target element intersects with the intersection observer's root. If this is `true`, then, the `IntersectionObserverEntry` describes a transition into a state of intersection; if it's `false`, then you know the transition is from intersecting to not-intersecting.
- {{domxref("IntersectionObserverEntry.rootBounds")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("DOMRectReadOnly")}} for the intersection observer's root.
- {{domxref("IntersectionObserverEntry.target")}} {{ReadOnlyInline}}
  - : The {{domxref("Element")}} whose intersection with the root changed.
- {{domxref("IntersectionObserverEntry.time")}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} indicating the time at which the intersection was recorded, relative to the `IntersectionObserver`'s [time origin](/en-US/docs/Web/API/DOMHighResTimeStamp#the_time_origin).

## Instance methods

_This interface has no methods._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
