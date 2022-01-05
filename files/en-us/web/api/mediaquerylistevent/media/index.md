---
title: MediaQueryListEvent.media
slug: Web/API/MediaQueryListEvent/media
tags:
  - API
  - CSSOM View
  - Media
  - Media Queries
  - MediaQueryListEvent
  - Property
  - Reference
browser-compat: api.MediaQueryListEvent.media
---
{{APIRef("CSSOM")}}

The **`media`** read-only property of the
{{DOMxRef("MediaQueryListEvent")}} interface is a {{DOMxRef("DOMString")}} representing
a serialized media query.

## Syntax

```js
var media = MediaQueryListEvent.media;
```

### Value

A {{DOMxRef("DOMString")}} representing a serialized media query.

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

  console.log(e.media);
}

mql.addListener(screenTest);
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
