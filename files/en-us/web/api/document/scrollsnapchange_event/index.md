---
title: "Document: scrollsnapchange event"
short-title: scrollsnapchange
slug: Web/API/Document/scrollsnapchange_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.Document.scrollsnapchange_event
---

{{APIRef}}{{SeeCompatTable}}

The **`scrollsnapchange`** event of the {{domxref("Document")}} interface is fired on the [scroll container](/en-US/docs/Glossary/Scroll_container) at the end of a scrolling operation when a new scroll snap target is selected.

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

- {{domxref("Document/scrollsnapchanging_event", "scrollsnapchanging")}} event
- {{DOMxRef("Document/scrollend_event", "scrollend")}} event
- {{domxref("SnapEvent")}}
- CSS {{cssxref("scroll-snap-type")}} property
- [CSS scroll snap module](/en-US/docs/Web/CSS/CSS_scroll_snap)
- [Using scroll snap events](/en-US/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) on developer.chrome.com (2024)
