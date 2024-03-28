---
title: "MediaQueryListEvent: media property"
short-title: media
slug: Web/API/MediaQueryListEvent/media
page-type: web-api-instance-property
browser-compat: api.MediaQueryListEvent.media
---

{{APIRef("CSSOM")}}

The **`media`** read-only property of the
{{DOMxRef("MediaQueryListEvent")}} interface is a string representing
a serialized media query.

## Value

A string representing a serialized media query.

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

  console.log(event.media);
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
- {{DOMxRef("MediaQueryListEvent")}}
