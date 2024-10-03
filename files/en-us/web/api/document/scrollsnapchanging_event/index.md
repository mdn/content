---
title: "Document: scrollsnapchanging event"
short-title: scrollsnapchanging
slug: Web/API/Document/scrollsnapchanging_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.Document.scrollsnapchanging_event
---

{{APIRef}}{{SeeCompatTable}}

The **`scrollsnapchanging`** event of the {{domxref("Document")}} interface is fired on the [scroll container](/en-US/docs/Glossary/Scroll_container) when the browser determines a new scroll snap target is pending, i.e. it will be selected when the current scroll gesture ends.

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

- {{domxref("Document/scrollsnapchange_event", "scrollsnapchange")}} event
- {{domxref("SnapEvent")}}
- [CSS scroll snap module](/en-US/docs/Web/CSS/CSS_scroll_snap)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) on developer.chrome.com (2024)
