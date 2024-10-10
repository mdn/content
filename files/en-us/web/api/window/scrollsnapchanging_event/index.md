---
title: "Window: scrollsnapchanging event"
short-title: scrollsnapchanging
slug: Web/API/Window/scrollsnapchanging_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.Window.scrollsnapchanging_event
---

{{APIRef}}{{SeeCompatTable}}

The **`scrollsnapchanging`** event of the {{domxref("Window")}} interface is fired on the `window` when the browser determines a new scroll snap target is pending, i.e. it will be selected when the current scroll gesture ends.

This event works in exactly the same way as the {{domxref("Element")}} interface's [`scrollsnapchanging`](/en-US/docs/Web/API/Element/scrollsnapchanging_event) event.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("scrollsnapchanging", (event) => {});

onscrollsnapchanging = (event) => {};
```

## Event type

A {{domxref("SnapEvent")}}, which inherits from the generic {{domxref("Event")}} type.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window/scrollsnapchange_event", "scrollsnapchange")}} event
- {{DOMxRef("Document/scrollend_event", "scrollend")}} event
- {{domxref("SnapEvent")}}
- CSS {{cssxref("scroll-snap-type")}} property
- [CSS scroll snap module](/en-US/docs/Web/CSS/CSS_scroll_snap)
- [Using scroll snap events](/en-US/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) on developer.chrome.com (2024)
