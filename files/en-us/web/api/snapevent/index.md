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

These events can be used to run code in response to new elements being snapped to; `SnapEvent` exposes references to the element snapped to in the inline and/or block direction.

{{InheritanceDiagram}}

## Constructor

- {{domxref("SnapEvent.SnapEvent", "SnapEvent()")}} {{Experimental_Inline}}
  - : Creates a new `SnapEvent` object instance.

## Instance properties

_Inherits properties from its parent, {{DOMxRef("Event")}}._

- {{domxref("SnapEvent.snapTargetBlock", "snapTargetBlock")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a reference to the element snapped to in the block direction when the event fired.
- {{domxref("SnapEvent.snapTargetInline", "snapTargetInline")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a reference to the element snapped to in the inline direction when the event fired.

## Examples

### `scrollsnapchanging` example

In the following `scrollsnapchanging` handler function snippet, we set the {{domxref("SnapEvent.snapTargetBlock", "snapTargetBlock")}} element's `class` attribute to `pending` using the {{domxref("Element.className")}} property, which could be used to style the element differently when it becomes a pending snap target.

Note that this handler is intended to be set on a block-direction scroll container (vertically-scrolling if the page is set to a left-to-right {{cssxref("writing-mode")}}), therefore only the `snapTargetBlock` element will change between multiple events firing. The element snapped to in the inline direction will always be the same, therefore {{domxref("SnapEvent.snapTargetInline")}} will always contain a reference to the same element.

```js
scrollingElem.addEventListener("scrollsnapchanging", (event) => {
  // Set current pending snap target class to "pending"
  event.snapTargetBlock.className = "pending";

  // Logs the id of the new block-direction snap target element
  console.log(event.snapTargetBlock.id);

  // Always logs the same ID; the inline-direction snap target
  // element will always be the same
  console.log(event.snapTargetInline.id);
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

- {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} and {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} events
- [CSS scroll snap module](/en-US/docs/Web/CSS/CSS_scroll_snap)
- [Using scroll snap events](/en-US/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) on developer.chrome.com (2024)
