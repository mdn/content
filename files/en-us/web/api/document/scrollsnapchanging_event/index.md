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

The **`scrollsnapchanging`** event of the {{domxref("Document")}} interface is fired when the browser determines that a new scroll snap target (as implemented using features of the [CSS scroll snap module](/en-US/docs/Web/CSS/CSS_scroll_snap)) is pending (i.e., it will be selected when the current scroll gesture ends).

This event works in exactly the same way as its counterpart implemented on the {{domxref("Element")}} interface — see [`Element`: `scrollsnapchanging` event](/en-US/docs/Web/API/Element/scrollsnapchanging_event) for more information.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Document/scrollsnapchange_event", "scrollsnapchange")}} event
- {{domxref("SnapEvent")}}
- [CSS scroll snap module](/en-US/docs/Web/CSS/CSS_scroll_snap)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) on developer.chrome.com (2024)
