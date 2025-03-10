---
title: "VisualViewport: scrollend event"
short-title: scrollend
slug: Web/API/VisualViewport/scrollend_event
page-type: web-api-event
browser-compat: api.VisualViewport.scrollend_event
---

{{APIRef("Visual Viewport")}}

The **`scrollend`** event of the {{domxref("VisualViewport")}} interface is fired when a scrolling operation on the visual viewport ends. This allows you to update an element when a scrolling action is completed. For example, you could use the {{domxref("VisualViewport/resize_event", "resize")}} and {{domxref("VisualViewport/scroll_event", "scroll")}} events to keep an element fixed to the visual viewport as it is pinch-zoomed and scrolled, and update it with new content when scrolling ends using `scrollend`.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("scrollend", (event) => {});

onscrollend = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

See the [Visual Viewport API](/en-US/docs/Web/API/Visual_Viewport_API#examples) landing page for a usage demo.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
