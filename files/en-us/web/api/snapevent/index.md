---
title: SnapEvent
slug: Web/API/SnapEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.SnapEvent
---

{{APIRef("Snap Events")}}{{SeeCompatTable}}

The **`SnapEvent`** interface defines the event object for the {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} and {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} events. Respectively, these fire on on a [scroll container](/en-US/docs/Glossary/Scroll_container) when the browser determines that a new scroll snap target is pending (will be selected when the current scroll gesture ends), and when a new snap target is selected.

These events can be used to run code in response to new elements being snapped to; `SnapEvent` exposes references to the element snapped to in the inline and/or block direction. The property values available on `SnapEvent` correspond directly to the value of the {{cssxref("scroll-snap-type")}} CSS property set on the scroll container:

- If the snap axis is specified as `block` (or a physical axis value that equates to `block` in the current writing mode), only {{domxref("SnapEvent.snapTargetBlock", "snapTargetBlock")}} returns an element reference.
- If the snap axis is specified as `inline` (or a physical axis value that equates to `inline` in the current writing mode), only {{domxref("SnapEvent.snapTargetInline", "snapTargetInline")}} returns an element reference.
- If the snap axis is specified as `both`, `snapTargetBlock` and `snapTargetInline` return an element reference.

{{InheritanceDiagram}}

## Constructor

- {{domxref("SnapEvent.SnapEvent", "SnapEvent()")}} {{Experimental_Inline}}
  - : Creates a new `SnapEvent` object instance.

## Instance properties

_Inherits properties from its parent, {{DOMxRef("Event")}}._

- {{domxref("SnapEvent.snapTargetBlock", "snapTargetBlock")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a reference to the element snapped to in the block direction when the event fired, or `null` if scroll snapping only occurs in the inline direction so no element is snapped to in the block direction.
- {{domxref("SnapEvent.snapTargetInline", "snapTargetInline")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a reference to the element snapped to in the inline direction when the event fired, or `null` if scroll snapping only occurs in the block direction so no element is snapped to in the inline direction.

## Examples

### `scrollsnapchanging` example

In the following `scrollsnapchanging` handler function snippet, we set the {{domxref("SnapEvent.snapTargetBlock", "snapTargetBlock")}} element's `class` attribute to `pending` using the {{domxref("Element.className")}} property, which could be used to style the element differently when it becomes a pending snap target.

Note that this handler is intended to be set on a block-direction scroll container (vertically-scrolling if the page is set to a horizontal {{cssxref("writing-mode")}}), therefore only the `snapTargetBlock` element will change between multiple events firing. {{domxref("SnapEvent.snapTargetInline")}} will return `null`, because no snapping occurs in the inline direction.

```js
scrollingElem.addEventListener("scrollsnapchanging", (event) => {
  // Set current pending snap target class to "pending"
  event.snapTargetBlock.className = "pending";

  // Logs the new pending block-direction snap target element
  console.log(event.snapTargetBlock);

  // Logs null; no inline snapping occurs
  console.log(event.snapTargetInline);
});
```

### `scrollsnapchange` example

In the following `scrollsnapchange` handler function snippet, we set a `selected` class on the {{domxref("SnapEvent.snapTargetBlock")}} element, which could be used to style a newly-selected snap target to look like it has been selected (for example, with an animation).

```js
scrollingElem.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.className = "selected";
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} event
- {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} event
- [CSS scroll snap module](/en-US/docs/Web/CSS/CSS_scroll_snap)
- [Using scroll snap events](/en-US/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) on developer.chrome.com (2024)
