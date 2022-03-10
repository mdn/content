---
title: 'MediaQueryList: change event'
slug: Web/API/MediaQueryList/change_event
tags:
  - API
  - CSSOM View
  - Event Handler
  - MediaQueryList
  - Event
  - Reference
  - onchange
browser-compat: api.MediaQueryList.change_event
---
{{APIRef("CSSOM")}}

The **`change`** event of the {{DOMxRef("MediaQueryList")}} interface fires when the status of media query support changes.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('change', event => { });

onchange = event => { };
```

## Event type

An {{domxref("MediaQueryListEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MediaQueryListEvent")}}

## Event properties

{{page("/en-US/docs/Web/API/MediaQueryListEvent", "Properties")}}

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
