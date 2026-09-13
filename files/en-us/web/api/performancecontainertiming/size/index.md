---
title: "PerformanceContainerTiming: size property"
short-title: size
slug: Web/API/PerformanceContainerTiming/size
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceContainerTiming.size
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`size`** read-only property of the {{domxref("PerformanceContainerTiming")}} interface returns the total area, in square CSS pixels, of the container's accumulated painted region, calculated since the container root was registered.

`size` reflects only the actual painted area within the container, and may omit regions that were painted while outside the viewport.
This differs from {{domxref("PerformanceContainerTiming.intersectionRect", "intersectionRect")}}, which is a single bounding rectangle and so can include gaps where no painting has occurred.
Paired with `intersectionRect`, `size` provides a useful _indication_ of how much of a container has rendered and become visible so far.
It can also be used during debugging to confirm whether a container's content is painting inside the viewport.

## Value

An integer representing a cumulative area in square CSS pixels.

## Description

The browser maintains a record referred to as the "accumulated painted region" that is used for tracking whether painting an element triggers a container timing performance entry (this is different and independent of the rendering pipeline).
The first time an element in a container is rendered, the browser clips the painted area to the visual viewport, and updates the "accumulated painted region" to include it.
If the operation causes the accumulated painted region to increase (i.e., a new area is painted), this causes a container timing entry to be added.

Changes that do not cause the accumulated painted region to increase do not trigger a new entry.
This includes:

- A paint that's fully clipped away
- An element that repaints an area that is already in the region
- A repaint of an element after its first paint
- Scrolling an element into view that was outside the viewport when it was first rendered

This last point means that the accumulated painted region may not precisely reflect all parts of the container, and that you will not get entries for elements in the container even though they later become visible on screen.
You may however get entries if you add an element in the container to a previously clipped area.

## Examples

See [Observing that only visible paints are counted](/en-US/docs/Web/API/PerformanceContainerTiming/intersectionRect#observing_that_only_visible_paints_are_counted) in {{domxref("PerformanceContainerTiming.intersectionRect")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceContainerTiming.intersectionRect")}}
- {{domxref("PerformanceContainerTiming.firstRenderTime")}}
