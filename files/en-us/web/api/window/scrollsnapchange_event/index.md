---
title: "Window: scrollsnapchange event"
short-title: scrollsnapchange
slug: Web/API/Window/scrollsnapchange_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.Window.scrollsnapchange_event
---

{{APIRef}}{{SeeCompatTable}}

The **`scrollsnapchange`** event of the {{domxref("Window")}} interface is fired on the `window` at the end of a scrolling operation when a new scroll snap target is selected.

This event works in exactly the same way as the {{domxref("Element")}} interface's [`scrollsnapchange`](/en-US/docs/Web/API/Element/scrollsnapchange_event) event.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("scrollsnapchange", (event) => {});

onscrollsnapchange = (event) => {};
```

## Event type

A {{domxref("SnapEvent")}}, which inherits from the generic {{domxref("Event")}} type.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Window/scrollsnapchanging_event", "scrollsnapchanging")}} event
- {{domxref("SnapEvent")}}
- [CSS scroll snap module](/en-US/docs/Web/CSS/CSS_scroll_snap)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) on developer.chrome.com (2024)
