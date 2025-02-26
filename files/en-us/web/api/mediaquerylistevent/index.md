---
title: MediaQueryListEvent
slug: Web/API/MediaQueryListEvent
page-type: web-api-interface
browser-compat: api.MediaQueryListEvent
---

{{APIRef("CSSOM")}}

The `MediaQueryListEvent` object stores information on the changes that have happened to a {{DOMxRef("MediaQueryList")}} object — instances are available as the event object on a function referenced by a {{DOMxRef("MediaQueryList.change_event", "change")}} event.

{{InheritanceDiagram}}

## Constructor

- {{DOMxRef("MediaQueryListEvent.MediaQueryListEvent()", "MediaQueryListEvent()")}}
  - : Creates a new `MediaQueryListEvent` instance.

## Instance properties

_The `MediaQueryListEvent` interface inherits properties from its parent interface, {{DOMxRef("Event")}}._

- {{DOMxRef("MediaQueryListEvent.matches")}} {{ReadOnlyInline}}
  - : A boolean value that is `true` if the {{DOMxRef("document")}} currently matches the media query list, or `false` if not.
- {{DOMxRef("MediaQueryListEvent.media")}} {{ReadOnlyInline}}
  - : A string representing a serialized media query.

## Instance methods

_The `MediaQueryListEvent` interface inherits methods from its parent interface, {{DOMxRef("Event")}}._

## Examples

```js
const para = document.querySelector("p"); // This is the UI element where to display the text
const mql = window.matchMedia("(max-width: 600px)");

mql.addEventListener("change", (event) => {
  if (event.matches) {
    // The viewport is 600 pixels wide or less
    para.textContent = "This is a narrow screen — less than 600px wide.";
    document.body.style.backgroundColor = "red";
  } else {
    // The viewport is more than 600 pixels wide
    para.textContent = "This is a wide screen — more than 600px wide.";
    document.body.style.backgroundColor = "blue";
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Using media queries from code](/en-US/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
