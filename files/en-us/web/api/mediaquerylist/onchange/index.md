---
title: MediaQueryList.onchange
slug: Web/API/MediaQueryList/onchange
tags:
  - API
  - CSSOM View
  - Event Handler
  - MediaQueryList
  - Property
  - Reference
  - onchange
browser-compat: api.MediaQueryList.onchange
---
{{APIRef("CSSOM")}}

The **`onchange`** property of the
{{DOMxRef("MediaQueryList")}} interface is an event handler property representing a
function that is invoked when the {{domxref("MediaQueryList/change_event", "change")}}
event fires, i.e when the status of media query support changes. The event object is a
{{DOMxRef("MediaQueryListEvent")}} instance, which is recognized as a
`MediaListQuery` instance in older browsers, for backwards compatibility
purposes.

## Syntax

```js
MediaQueryList.onchange = function() { /* ... */ };
```

## Example

```js
var mql = window.matchMedia('(max-width: 600px)');

mql.onchange = (e) => {
    if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    console.log('This is a narrow screen — less than 600px wide.')
  } else {
    /* the viewport is more than than 600 pixels wide */
    console.log('This is a wide screen — more than 600px wide.')
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [Using media queries from
  code](/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
