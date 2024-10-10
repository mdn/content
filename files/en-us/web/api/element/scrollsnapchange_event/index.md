---
title: "Element: scrollsnapchange event"
short-title: scrollsnapchange
slug: Web/API/Element/scrollsnapchange_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.Element.scrollsnapchange_event
---

{{APIRef}}{{SeeCompatTable}}

The **`scrollsnapchange`** event of the {{domxref("Element")}} interface is fired on the [scroll container](/en-US/docs/Glossary/Scroll_container) at the end of a scrolling operation when a new scroll snap target has been selected, just before the corresponding {{domxref("Element/scrollend_event", "scrollend")}} event fires.

A scrolling operation ends when the user finishes scrolling within a scroll container — for example using a touch gesture or by dragging the mouse pointer on a scroll bar — and releases the gesture.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("scrollsnapchange", (event) => {});

onscrollsnapchange = (event) => {};
```

## Event type

A {{domxref("SnapEvent")}}, which inherits from the generic {{domxref("Event")}} type.

## Examples

In the following `scrollsnapchange` handler function snippet, we set a `selected` class on the {{domxref("SnapEvent.snapTargetBlock")}} element, which could be used to style a newly-selected snap target to look like it has been selected (for example, with an animation).

```js
scrollingElem.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.classList.add("selected");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} event
- {{DOMxRef("Document/scrollend_event", "scrollend")}} event
- {{domxref("SnapEvent")}}
- CSS {{cssxref("scroll-snap-type")}} property
- [CSS scroll snap module](/en-US/docs/Web/CSS/CSS_scroll_snap)
- [Using scroll snap events](/en-US/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) on developer.chrome.com (2024)
