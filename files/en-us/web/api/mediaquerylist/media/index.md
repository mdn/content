---
title: "MediaQueryList: media property"
short-title: media
slug: Web/API/MediaQueryList/media
page-type: web-api-instance-property
browser-compat: api.MediaQueryList.media
---

{{APIRef("CSSOM view API")}}

The **`media`** read-only property of the
{{DOMxRef("MediaQueryList")}} interface is a string representing a
serialized media query.

## Value

A string representing a serialized media query.

## Examples

This example runs the media query `(width <= 600px)` and displays the
value of the resulting `MediaQueryList`'s `media` property in a
{{HTMLElement("span")}}.

### JavaScript

```js
let mql = window.matchMedia("(width <= 600px)");

document.querySelector(".mq-value").innerText = mql.media;
```

The JavaScript code passes the media query to match into {{DOMxRef("Window.matchMedia", "matchMedia()")}} to compile it, then sets the `<span>`'s
{{DOMxRef("HTMLElement.innerText", "innerText")}} to the value of the result's
`media` property.

### HTML

```html
<span class="mq-value"></span>
```

A `<span>` to receive the output.

```css hidden
.mq-value {
  font:
    18px "Arial",
    sans-serif;
  font-weight: bold;
  color: #8888ff;
  padding: 0.4em;
  border: 1px solid #ddddee;
}
```

### Result

{{EmbedLiveSample("Examples", "100%", "60")}}

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
