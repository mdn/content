---
title: "VisualViewport: resize event"
short-title: resize
slug: Web/API/VisualViewport/resize_event
page-type: web-api-event
browser-compat: api.VisualViewport.resize_event
---

{{APIRef("CSSOM view API")}}

The **`resize`** event of the {{domxref("VisualViewport")}} interface is fired when the visual viewport is resized. This allows you to position elements relative to the visual viewport as it is zoomed, which would normally be anchored to the layout viewport.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("resize", (event) => { })

onresize = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

See the [`VisualViewport`](/en-US/docs/Web/API/VisualViewport#examples) landing page for a usage demo.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
