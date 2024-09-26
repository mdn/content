---
title: "Element: scrollsnapchanging event"
short-title: scrollsnapchanging
slug: Web/API/Element/scrollsnapchanging_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.Element.scrollsnapchanging_event
---

{{APIRef}}{{SeeCompatTable}}

The **`scrollsnapchanging`** event of the {{domxref("Element")}} interface is fired when the browser determines that a new scroll snap target (as implemented using features of the [CSS scroll snap module](/en-US/docs/Web/CSS/CSS_scroll_snap)) is pending (i.e., it will be selected when the current scroll gesture ends).

Note that this event fires during a scrolling gesture, each time the user moves over a potential new snap target — imagine a user scrolling slowly by dragging their finger on a touch screen device, or holding down the mouse button on a scroll bar and moving the mouse. `scrollsnapchanging` can therefore fire multiple times for each scrolling gesture.

However, `scrollsnapchanging` does not fire on all potential snap targets for a gesture that spans multiple snap targets at once — just the last target that the snapping will potentially rest on. In this case, imagine a user flicking their finger hard on the screen to scroll past several potential targets before starting to come to rest near a target further down the scroll container.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("scrollsnapchanging", (event) => {});

onscrollsnapchanging = (event) => {};
```

## Event type

A {{domxref("SnapEvent")}}.

## Examples

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

See the [Using scroll snap events](/en-US/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events) guide for full examples and explanation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} event
- {{domxref("SnapEvent")}}
- [CSS scroll snap module](/en-US/docs/Web/CSS/CSS_scroll_snap)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) on developer.chrome.com (2024)
