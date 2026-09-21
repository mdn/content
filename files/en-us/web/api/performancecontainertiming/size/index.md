---
title: "PerformanceContainerTiming: size property"
short-title: size
slug: Web/API/PerformanceContainerTiming/size
page-type: web-api-instance-property
browser-compat: api.PerformanceContainerTiming.size
---

{{APIRef("Performance API")}}

The **`size`** read-only property of the {{domxref("PerformanceContainerTiming")}} interface returns the total area of the container's accumulated painted region, calculated since the container root was registered.

## Value

An integer representing a cumulative area in square CSS pixels.

## Description

The **`size`** represents the total area, in square CSS pixels, of the container's accumulated painted region, calculated since the container root was registered.

`size` reflects only the actual painted area within the container, and may omit regions that were painted while outside the viewport.
This differs from {{domxref("PerformanceContainerTiming.intersectionRect", "intersectionRect")}}, which is a single bounding rectangle and so can include gaps where no painting has occurred.
Paired with `intersectionRect`, `size` provides a useful _indication_ of how much of a container has rendered and become visible so far.
It can also be used during debugging to confirm whether a container's content is painting inside the viewport.

For more information see [When are entries generated](/en-US/docs/Web/API/PerformanceContainerTiming#when_are_entries_generated) in `PerformanceContainerTiming`.

## Examples

See [Observing that only visible paints are counted](/en-US/docs/Web/API/PerformanceContainerTiming/intersectionRect#observing_that_only_visible_paints_are_counted) in {{domxref("PerformanceContainerTiming.intersectionRect")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceContainerTiming.intersectionRect")}}
- {{domxref("PerformanceContainerTiming.firstRenderTime")}}
