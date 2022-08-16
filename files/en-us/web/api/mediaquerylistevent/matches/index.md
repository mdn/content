---
title: MediaQueryListEvent.matches
slug: Web/API/MediaQueryListEvent/matches
page-type: web-api-instance-property
tags:
  - API
  - CSSOM View
  - Media Queries
  - MediaQueryListEvent
  - Property
  - Reference
  - matches
browser-compat: api.MediaQueryListEvent.matches
---
{{APIRef("CSSOM")}}

The **`matches`** read-only property of the
{{DOMxRef("MediaQueryListEvent")}} interface is a boolean value that is
`true` if the {{DOMxRef("document")}} currently matches the media query list,
or `false` if not.

## Value

A boolean value; returns `true` if the {{DOMxRef("document")}}
currently matches the media query list, `false` if not.

## Examples

```js
const para = document.querySelector("p"); // This is the UI element where to display the text
const mql = window.matchMedia('(max-width: 600px)');

mql.addEventListener("change", (event) => {
  if (event.matches) {
    // The viewport is 600 pixels wide or less
    para.textContent = 'This is a narrow screen — less than 600px wide.';
    document.body.style.backgroundColor = 'red';
  } else {
    // The viewport is more than 600 pixels wide
    para.textContent = 'This is a wide screen — more than 600px wide.';
    document.body.style.backgroundColor = 'blue';
  }
});
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
- {{DOMxRef("MediaQueryListEvent")}}
