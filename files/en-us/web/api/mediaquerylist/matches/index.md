---
title: MediaQueryList.matches
slug: Web/API/MediaQueryList/matches
tags:
  - API
  - Adaptive Design
  - CSSOM
  - CSSOM View
  - DOM
  - Media Queries
  - MediaQueryList
  - Property
  - Reference
  - matches
browser-compat: api.MediaQueryList.matches
---
{{APIRef("CSSOM")}}

The **`matches`** read-only property of the
{{DOMxRef("MediaQueryList")}} interface is a boolean value that returns
`true` if the {{DOMxRef("document")}} currently matches the media query list,
or `false` if not.

You can be notified when the value of `matches` changes by watching for the
{{domxref("MediaQueryList.change_event", "change")}} event to be fired at the
`MediaQueryList`.

## Syntax

```js
var matches = <varm>MediaQueryList.matches;
```

### Value

A boolean value that is `true` if the {{DOMxRef("document")}}
currently matches the media query list; otherwise, it's `false`.

## Examples

This example detects viewport orientation changes by creating a media query using the
[`orientation`](/en-US/docs/Web/CSS/@media/orientation) media
feature:

```js
function addMQListener(mq, callback) {
  if (mq.addEventListener) {
    mq.addEventListener("change", callback);
  } else {
    mq.addListener(callback);
  }
}

addMQListener(window.matchMedia("(orientation:landscape)"),
  event => {
    if (event.matches) {
      /* now in landscape orientation */
    } else {
      /* now in portrait orientation */
    }
  }
);
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
