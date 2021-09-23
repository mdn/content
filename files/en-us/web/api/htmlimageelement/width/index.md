---
title: HTMLImageElement.width
slug: Web/API/HTMLImageElement/width
tags:
  - API
  - HTML
  - HTML DOM
  - HTMLImageElement
  - Image
  - Property
  - Reference
  - size
  - width
browser-compat: api.HTMLImageElement.width
---
{{APIRef("HTML DOM")}}

The **`width`** property of the
{{domxref("HTMLImageElement")}} interface indicates the width at which an image is
drawn in {{Glossary("CSS pixel", "CSS pixels")}} if it's being drawn or rendered to
any visual medium such as a screen or printer. Otherwise, it's the natural, pixel
density-corrected width of the image.

## Syntax

```js
htmlImageElement.width = newWidth;
let width = htmlImageElement.width;
```

### Value

An integer value indicating the width of the image. The way the width is defined
depends on whether or not the image is being rendered to a visual medium, such as a
screen or printer:

- If the image is being rendered to a visual medium, the width is expressed in
  {{Glossary("CSS pixel", "CSS pixels")}}.
- If the image is not being rendered to a visual medium, its width is represented
  using the image's natural (intrinsic) width, adjusted for the display density as
  indicated by {{domxref("HTMLImageElement.naturalWidth", "naturalWidth")}}.

## Example

In this example, two different sizes are provided for an image of a clock using the
{{htmlattrxref("srcset", "img")}} attribute. One is 200px wide and the other is 400px
wide. The {{htmlattrxref("sizes", "img")}} attribute is used to specify the width at
which the image should be drawn given the viewport's width.

### HTML

For viewports up to 400px wide, the image is drawn at a width of 200px. Otherwise, it's
drawn at 400px.

```html
<p>Image width: <span class="size">?</span>px (resize to update)</p>
<img src="/files/16864/clock-demo-200px.png"
      alt="Clock"
      srcset="/files/16864/clock-demo-200px.png 200w,
          /files/16797/clock-demo-400px.png 400w"
      sizes="(max-width: 400px) 200px, 400px">
```

### JavaScript

JavaScript looks at the `width` property to determine the width of the image
at the moment. This is performed in the window's {{domxref("Window.load_event",
  "load")}} and {{domxref("Window.resize_event", "resize")}} event handlers so the most
current width information is always available.

```js
var clockImage = document.querySelector("img");
let output = document.querySelector(".size");

const updateWidth = event => { output.innerText = clockImage.width; };

window.addEventListener("load", updateWidth);
window.addEventListener("resize", updateWidth);
```

### Result

{{EmbedLiveSample("Example", 640, 450)}}

This example may be easier to try out {{LiveSampleLink('Example', 'in its own window')}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
