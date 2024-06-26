---
title: "VisualViewport: scrollend event"
short-title: scrollend
slug: Web/API/VisualViewport/scrollend_event
page-type: web-api-event
browser-compat: api.VisualViewport.scrollend_event
---

{{APIRef("Visual Viewport")}}

The **`scrollend`** event of the {{domxref("VisualViewport")}} interface is fired when a scrolling operation on the visual viewport ends.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("scrollend", (event) => {});

onscrollend = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

You can use the `scrollend` event in an {{domxref("EventTarget.addEventListener", "addEventListener()")}} method:

```js
visualViewport.addEventListener("scrollend", () => {
  // …
});
```

Or use the `onscrollend` event handler property:

```js
visualViewport.onscrollend = () => {
  // …
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
