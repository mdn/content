---
title: "IntersectionObserverEntry: boundingClientRect property"
short-title: boundingClientRect
slug: Web/API/IntersectionObserverEntry/boundingClientRect
page-type: web-api-instance-property
browser-compat: api.IntersectionObserverEntry.boundingClientRect
---

{{APIRef("Intersection Observer API")}}

The {{domxref("IntersectionObserverEntry")}} interface's read-only
**`boundingClientRect`** property returns a
{{domxref("DOMRectReadOnly")}} which in essence describes a rectangle describing the
smallest rectangle that contains the entire target element.

## Value

A {{domxref("DOMRectReadOnly")}} which describes the smallest rectangle that contains
every part of the target element whose intersection change is being described. This
value is obtained using the same algorithm as
{{domxref("Element.getBoundingClientRect()")}}, so refer to that article for details on
precisely what is done to obtain this rectangle and what is and is not included within
its bounds.

In the general case, however, it's safe to think of this as the bounds rectangle of the
target element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
