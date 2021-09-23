---
title: HTMLImageElement.height
slug: Web/API/HTMLImageElement/height
tags:
  - API
  - HTML
  - HTML DOM
  - HTMLImageElement
  - Image
  - Property
  - Reference
  - dimensions
  - height
  - size
browser-compat: api.HTMLImageElement.height
---
{{APIRef("HTML DOM")}}

The **`height`** property of the
{{domxref("HTMLImageElement")}} interface indicates the height at which the image is
drawn, in {{Glossary("CSS pixels")}} if the image is being drawn or rendered to any
visual medium such as the screen or a printer; otherwise, it's the natural, pixel
density corrected height of the image.

## Syntax

```js
htmlImageElement.height = newHeight;
let height = htmlImageElement.height;
```

### Value

An integer value indicating the height of the image. The terms in which the height is
defined depends on whether the image is being rendered to a visual medium or not.

- If the image is being rendered to a visual medium such as a screen or printer, the
  height is expressed in {{Glossary("CSS pixels")}}.
- Otherwise, the image's height is represented using its natural (intrinsic) height,
  adjusted for the display density as indicated by
  {{domxref("HTMLImageElement.naturalHeight", "naturalHeight")}}.

## Example

In this example, two different sizes are provided for an image of a clock using the
{{htmlattrxref("srcset", "img")}} attribute. One is 200px wide and the other is 400px
wide. Further, the {{htmlattrxref("sizes", "img")}} attribute is provided to specify the
width at which the image should be drawn given the viewport's width.

### HTML

Specifically, for viewports up to 400px wide, the image is drawn at a width of 200px;
otherwise, it's drawn at 300px.

```html
<p>Image height: <span class="size">?</span>px (resize to update)</p>
<img src="/files/17373/clock-demo-200px.png"
      alt="Clock"
      srcset="/files/17373/clock-demo-200px.png 200w,
          /files/17374/clock-demo-400px.png 400w"
      sizes="(max-width: 400px) 200px, 300px">
```

### JavaScript

The JavaScript code looks at the `height` to determine the height of the
image given the width at which it's currently drawn.

```js
var clockImage = document.querySelector("img");
let output = document.querySelector(".size");

const updateHeight = event => { output.innerText = clockImage.height; };

window.addEventListener("load", updateHeight);
window.addEventListener("resize", updateHeight);
```

### Result

{{EmbedLiveSample("Example", 640, 450)}}

This example may be easier to try out {{LiveSampleLink('Example', 'in its own window')}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
