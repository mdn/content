---
title: HTMLImageElement.currentSrc
slug: Web/API/HTMLImageElement/currentSrc
tags:
  - API
  - HTMLImageElement
  - Image
  - Property
  - Reference
  - URL
  - currentSrc
  - source
browser-compat: api.HTMLImageElement.currentSrc
---
{{APIRef("HTML DOM")}}

The read-only {{domxref("HTMLImageElement")}} property
**`currentSrc`** indicates the URL of the image which is
currently presented in the {{HTMLElement("img")}} element it represents.

## Syntax

```js
let currentSource = htmlImageElement.currentSrc;
```

### Value

A {{domxref("USVString")}} indicating the full URL of the image currently visible in
the {{HTMLElement("img")}} element represented by the `HTMLImageElement`.
This is useful when you provide multiple image options using the
{{domxref("HTMLImageElement.sizes", "sizes")}} and/or
{{domxref("HTMLImageElement.srcset")}} properties. `currentSrc` lets you
determine which image from the set of provided images was selected by the browser.

## Example

In this example, two different sizes are provided for an image of a clock. One is 200px
wide and the other is 400px wide. The {{htmlattrxref("sizes", "img")}} attribute is
provided to indicate that the image should be drawn at 50% of the document width if the
viewport is under 400px wide; otherwise, the image is drawn at 90% width of the
document.

### HTML

```html
 <img src="/files/16797/clock-demo-400px.png"
      alt="Clock"
      srcset="/files/16864/clock-demo-200px.png 200w, /files/16797/clock-demo-400px.png 400w"
      sizes="(max-width: 400px) 50%, 90%">
```

### JavaScript

```js
var clockImage = document.querySelector("img");
let p = document.createElement("p");

if (!clockImage.currentSrc.endsWith("200px.png")) {
  p.innerText = "Using the 200px image.";
} else {
  p.innerText = "Using the 400px image!";
}
document.body.appendChild(p);
```

### Result

{{EmbedLiveSample("Example", 640, 370)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
