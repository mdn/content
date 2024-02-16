---
title: "VisualViewport: resize event"
short-title: resize
slug: Web/API/VisualViewport/resize_event
page-type: web-api-event
browser-compat: api.VisualViewport.resize_event
---

{{APIRef("Visual Viewport")}}

The **`resize`** event of the {{domxref("VisualViewport")}} interface is fired when the visual viewport is resized.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("resize", (event) => {});

onresize = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

You can use the `resize` event in an {{domxref("EventTarget.addEventListener", "addEventListener()")}} method:

```js
visualViewport.addEventListener("resize", () => {
  // …
});
```

Or use the `onresize` event handler property:

```js
visualViewport.onresize = () => {
  // …
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
