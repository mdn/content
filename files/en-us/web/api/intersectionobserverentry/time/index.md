---
title: "IntersectionObserverEntry: time property"
short-title: time
slug: Web/API/IntersectionObserverEntry/time
page-type: web-api-instance-property
browser-compat: api.IntersectionObserverEntry.time
---

{{APIRef("Intersection Observer API")}}

The {{domxref("IntersectionObserverEntry")}} interface's
read-only **`time`** property is a
{{domxref("DOMHighResTimeStamp")}} that indicates the time at which the intersection
change occurred relative to the time at which the document was created.

## Value

A {{domxref("DOMHighResTimeStamp")}} which indicates the time at which the
{{domxref("IntersectionObserverEntry.target", "target")}} element experienced the
intersection change described by the `IntersectionObserverEntry`. The time is
specified in milliseconds since the creation of the containing document.

## Examples

See [Timing element visibility with the Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) for a complete example which
uses the `time` property to track how long elements are visible to the user.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
