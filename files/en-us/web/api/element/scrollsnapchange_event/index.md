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

The **`scrollsnapchange`** event of the {{domxref("Element")}} interface is fired at the end of a scrolling operation when a new scroll snap target (as implemented using features of the [CSS scroll snap module](/en-US/docs/Web/CSS/CSS_scroll_snap)) is selected.

Note that this event fires:

- When a scrolling gesture is completed (i.e. the user has finished scrolling a scroll container and releases the gesture), but only if a new snap target is selected.
- Just before the {{domxref("Element/scrollend_event", "scrollend")}} event fires.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("scrollsnapchange", (event) => {});

onscrollsnapchange = (event) => {};
```

## Event type

A {{domxref("SnapEvent")}}.

## Examples

In the following `scrollsnapchange` handler function snippet (set on a scrolling container element), we set a `select-section` class on the {{domxref("SnapEvent.snapTargetBlock")}} element, which could be used to style a newly-selected snap target to look like it has been selected (for example, with an animation).

Note that this handler is intended to be set on a block-direction scroll container (vertically-scrolling if the page is set to a left-to-right {{cssxref("writing-mode")}}), therefore only the `snapTargetBlock` element will change between multiple events firing. The element snapped to in the inline direction will always be the same, therefore {{domxref("SnapEvent.snapTargetInline")}} will always contain a reference to the same element.

```js
scrollingElem.addEventListener("scrollsnapchange", (event) => {
  if (document.querySelector(".select-section")) {
    document.querySelector(".select-section").className = "deselect-section";
  } else {
    document.querySelector("section").className = "select-section";
  }

  event.snapTargetBlock.className = "select-section";

  // Logs the id of the new block-direction snap target element
  console.log(event.snapTargetBlock.id);

  // Always logs the same ID; the inline-direction snap target
  // element will always be the same
  console.log(event.snapTargetInline.id);
});
```

At the start of the function, we also include an `if...else` block to look for a previously-selected snap target. If one is found, it has a `deselect-section` class applied to it, which for example could be used to apply a deselection animation. If not, the first snap target in the page is given the `select-section` class, which means that it will be given the appropriate selected styles when the page first loads.

See the [Using scroll snap events](/en-US/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events) guide for full examples and explanation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} event
- {{domxref("SnapEvent")}}
- [CSS scroll snap module](/en-US/docs/Web/CSS/CSS_scroll_snap)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) on developer.chrome.com (2024)
