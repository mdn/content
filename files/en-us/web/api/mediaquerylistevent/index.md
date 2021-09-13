---
title: MediaQueryListEvent
slug: Web/API/MediaQueryListEvent
tags:
  - API
  - CSSOM View
  - Interface
  - Media Queries
  - MediaQueryListEvent
  - Reference
browser-compat: api.MediaQueryListEvent
---
{{APIRef("CSSOM")}}

The `MediaQueryListEvent` object stores information on the changes that have happened to a {{DOMxRef("MediaQueryList")}} object — instances are available as the event object on a function referenced by a {{DOMxRef("MediaQueryList.onchange")}} property or {{DOMxRef("MediaQueryList.addListener()")}} call.

## Constructor

- {{DOMxRef("MediaQueryListEvent.MediaQueryListEvent()", "MediaQueryListEvent()")}}
  - : Creates a new `MediaQueryListEvent` instance.

## Properties

_The `MediaQueryListEvent` interface inherits properties from its parent interface, {{DOMxRef("Event")}}._

- {{DOMxRef("MediaQueryListEvent.matches")}}{{ReadOnlyInline}}
  - : A boolean value that is `true` if the {{DOMxRef("document")}} currently matches the media query list, or `false` if not.
- {{DOMxRef("MediaQueryListEvent.media")}}{{ReadOnlyInline}}
  - : A {{DOMxRef("DOMString")}} representing a serialized media query.

## Methods

_The `MediaQueryListEvent` interface inherits methods from its parent interface, {{DOMxRef("Event")}}._

## Examples

```js
var mql = window.matchMedia('(max-width: 600px)');

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    para.textContent = 'This is a narrow screen — less than 600px wide.';
    document.body.style.backgroundColor = 'red';
  } else {
    /* the viewport is more than than 600 pixels wide */
    para.textContent = 'This is a wide screen — more than 600px wide.';
    document.body.style.backgroundColor = 'blue';
  }
}

mql.addListener(screenTest);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [Using media queries from code](/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
