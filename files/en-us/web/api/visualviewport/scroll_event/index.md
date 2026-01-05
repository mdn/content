---
title: "VisualViewport: scroll event"
short-title: scroll
slug: Web/API/VisualViewport/scroll_event
page-type: web-api-event
browser-compat: api.VisualViewport.scroll_event
---

{{APIRef("CSSOM view API")}}

The **`scroll`** event of the {{domxref("VisualViewport")}} interface is fired when the visual viewport is scrolled. This allows you to position elements relative to the visual viewport as it is scrolled, which would normally be anchored to the layout viewport.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("scroll", (event) => { })

onscroll = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

See the [`VisualViewport`](/en-US/docs/Web/API/VisualViewport#examples) landing page for a usage demo.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
