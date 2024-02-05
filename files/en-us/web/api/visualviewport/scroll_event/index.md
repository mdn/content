---
title: "VisualViewport: scroll event"
short-title: scroll
slug: Web/API/VisualViewport/scroll_event
page-type: web-api-event
browser-compat: api.VisualViewport.scroll_event
---

{{APIRef("Visual Viewport")}}

The **`scroll`** event of the {{domxref("VisualViewport")}} interface is fired when the visual viewport is scrolled.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("scroll", (event) => {});

onscroll = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

You can use the `scroll` event in an {{domxref("EventTarget.addEventListener", "addEventListener()")}} method:

```js
visualViewport.addEventListener("scroll", () => {
  // …
});
```

Or use the `onscroll` event handler property:

```js
visualViewport.onscroll = () => {
  // …
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
