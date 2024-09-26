---
title: SnapEvent
slug: Web/API/SnapEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.SnapEvent
---

{{APIRef("Snap Events")}}{{SeeCompatTable}}

The **`SnapEvent`** interface defines the event object for the {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} and {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} events, which are related to the [CSS scroll snap module](/en-US/docs/Web/CSS/CSS_scroll_snap). Respectively, these fire when the browser determines that a new snap target is pending (will be selected when the current scroll gesture ends), and when a new snap target is selected.

These can be used to run code in response to new elements being snapped to; `SnapEvent` exposes references to the element snapped to in the inline and/or block direction.

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

See the [Using scroll snap events](/en-US/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events) guide for full examples and explanation.

### `scrollsnapchanging` example

In the following `scrollsnapchanging` handler function snippet (set on a scrolling container element), we set the {{domxref("SnapEvent.snapTargetBlock", "snapTargetBlock")}} element's `class` attribute to `pending` using the {{domxref("Element.className")}} property, which could be used to style the element differently when it becomes a pending snap target.

Note that this handler is intended to be set on a block-direction scroll container (vertically-scrolling if the page is set to a left-to-right {{cssxref("writing-mode")}}), therefore only the `snapTargetBlock` element will change between multiple events firing. The element snapped to in the inline direction will always be the same, therefore {{domxref("SnapEvent.snapTargetInline")}} will always contain a reference to the same element.

```js
scrollingElem.addEventListener("scrollsnapchanging", (event) => {
  // remove previously-set "pending" classes
  const pendingElems = document.querySelectorAll(".pending");
  pendingElems.forEach((elem) => {
    elem.className = "";
  });

  // Set current pending snap target class to "pending"
  event.snapTargetBlock.className = "pending";

  // Logs the id of the new block-direction snap target element
  console.log(event.snapTargetBlock.id);

  // Always logs the same ID; the inline-direction snap target
  // element will always be the same
  console.log(event.snapTargetInline.id);
});
```

At the start of the function, we select all elements that previously had the `pending` class applied and remove it, so that only the most recent pending snap target is styled.

### `scrollsnapchange` example

In the following `scrollsnapchange` handler function snippet (again, set on a scrolling container element), we set a `select-section` class on the {{domxref("SnapEvent.snapTargetBlock")}} element, which could be used to style a newly-selected snap target to look like it has been selected (for example, with an animation).

```js
scrollingElem.addEventListener("scrollsnapchange", (event) => {
  if (document.querySelector(".select-section")) {
    document.querySelector(".select-section").className = "deselect-section";
  } else {
    document.querySelector("section").className = "select-section";
  }

  event.snapTargetBlock.className = "select-section";
});
```

At the start of the function, we also include an `if...else` block to look for a previously-selected snap target. If one is found, it has a `deselect-section` class applied to it, which for example could be used to apply a deselection animation. If not, the first snap target in the page is given the `select-section` class, which means that it will be given the appropriate selected styles when the page first loads.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} and {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} events
- [CSS scroll snap module](/en-US/docs/Web/CSS/CSS_scroll_snap)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) on developer.chrome.com (2024)
