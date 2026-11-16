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

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("resize", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
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
