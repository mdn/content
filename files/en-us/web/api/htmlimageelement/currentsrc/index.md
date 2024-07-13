---
title: "HTMLImageElement: currentSrc property"
short-title: currentSrc
slug: Web/API/HTMLImageElement/currentSrc
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.currentSrc
---

{{APIRef("HTML DOM")}}

The read-only {{domxref("HTMLImageElement")}} property
**`currentSrc`** indicates the URL of the image which is
currently presented in the {{HTMLElement("img")}} element it represents.

## Value

A string indicating the full URL of the image currently visible in
the {{HTMLElement("img")}} element represented by the `HTMLImageElement`.
This is useful when you provide multiple image options using the
{{domxref("HTMLImageElement.sizes", "sizes")}} and/or
{{domxref("HTMLImageElement.srcset")}} properties. `currentSrc` lets you
determine which image from the set of provided images was selected by the browser.

## Examples

In this example, two different sizes are provided for an image of a clock. One is 200px
wide and the other is 400px wide. The [`sizes`](/en-US/docs/Web/HTML/Element/img#sizes) attribute is
provided to indicate that the image should be drawn at 50% of the document width if the
viewport is under 400px wide; otherwise, the image is drawn at 90% width of the
document.

### HTML

```html
<img
  src="/en-US/docs/Web/HTML/Element/img/clock-demo-400px.png"
  alt="Clock"
  srcset="
    /en-US/docs/Web/HTML/Element/img/clock-demo-200px.png 200w,
    /en-US/docs/Web/HTML/Element/img/clock-demo-400px.png 400w
  "
  sizes="(max-width: 400px) 50%, 90%" />
```

### JavaScript

```js
const clockImage = document.querySelector("img");
const p = document.createElement("p");

p.textContent = clockImage.currentSrc.endsWith("200px.png")
  ? "Using the 200px image!"
  : "Using the 400px image.";
document.body.appendChild(p);
```

### Result

{{EmbedLiveSample("Examples", 640, 370)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
