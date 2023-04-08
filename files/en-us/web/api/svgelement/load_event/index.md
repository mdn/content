---
title: "SVGElement: load event"
short-title: load
slug: Web/API/SVGElement/load_event
page-type: web-api-event
browser-compat: api.SVGElement.load_event
---

{{APIRef("SVG")}}

The `load` event fires on an `SVGElement` when it is loaded in the browser, e.g. in the DOM in the case of an embedded `<svg>`. It is basically the same as the standard `load` DOM event.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("load", (event) => {});

onload = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
svgElem.addEventListener("load", () => {
  console.log("SVG loaded.");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
