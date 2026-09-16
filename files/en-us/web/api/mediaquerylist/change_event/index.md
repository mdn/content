---
title: "MediaQueryList: change event"
short-title: change
slug: Web/API/MediaQueryList/change_event
page-type: web-api-event
browser-compat: api.MediaQueryList.change_event
---

{{APIRef("CSSOM view API")}}

The **`change`** event of the {{DOMxRef("MediaQueryList")}} interface fires when the status of media query support changes.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
```

## Event type

A {{domxref("MediaQueryListEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MediaQueryListEvent")}}

## Example

```js
const mql = window.matchMedia("(width <= 600px)");

mql.onchange = (e) => {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    console.log("This is a narrow screen — less than 600px wide.");
  } else {
    /* the viewport is more than 600 pixels wide */
    console.log("This is a wide screen — more than 600px wide.");
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media queries](/en-US/docs/Web/CSS/Guides/Media_queries/Using)
- [Using media queries from code](/en-US/docs/Web/CSS/Guides/Media_queries/Testing)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
