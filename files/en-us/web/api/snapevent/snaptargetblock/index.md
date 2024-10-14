---
title: "SnapEvent: snapTargetBlock property"
short-title: snapTargetBlock
slug: Web/API/SnapEvent/snapTargetBlock
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.SnapEvent.snapTargetBlock
---

{{APIRef("Snap Events")}}{{SeeCompatTable}}

The **`snapTargetBlock`** read-only property of the
{{domxref("SnapEvent")}} interface returns a reference to the element snapped to in the block direction when the event fired.

Specifically:

- In the case of the {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} event, this refers to a pending block-direction snap target (i.e. it will be selected when the current scroll gesture ends).
- In the case of the {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} event, this refers to a newly-selected block-direction snap target.

The property values available on `SnapEvent` correspond directly to the value of the {{cssxref("scroll-snap-type")}} CSS property set on the scroll container. `snapTargetBlock` only returns an element reference if the snap axis is specified as `block` (or a physical axis value that equates to `block` in the current writing mode) or `both`.

## Value

A {{domxref("Node")}} representing the snapped element, or `null` if scroll snapping only occurs in the inline direction so no element is snapped to in the block direction.

If the snapped element was a pseudo-element, the returned `Node` will be the owning element of that pseudo-element.

## Examples

See the main {{domxref("SnapEvent")}} page for brief examples, and our [Using scroll snap events](/en-US/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events) guide for full examples and explanation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} event
- {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} event
- [CSS scroll snap module](/en-US/docs/Web/CSS/CSS_scroll_snap)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) on developer.chrome.com (2024)
