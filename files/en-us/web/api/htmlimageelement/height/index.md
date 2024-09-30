---
title: "HTMLImageElement: height property"
short-title: height
slug: Web/API/HTMLImageElement/height
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.height
---

{{APIRef("HTML DOM")}}

The **`height`** property of the
{{domxref("HTMLImageElement")}} interface indicates the height at which the image is
drawn, in {{Glossary("CSS pixel", "CSS pixels")}} if the image is being drawn or rendered to any
visual medium such as the screen or a printer; otherwise, it's the natural, pixel
density corrected height of the image.

## Value

An integer value indicating the height of the image. The terms in which the height is
defined depends on whether the image is being rendered to a visual medium or not.

- If the image is being rendered to a visual medium such as a screen or printer, the
  height is expressed in {{Glossary("CSS pixel", "CSS pixels")}}.
- Otherwise, the image's height is represented using its natural (intrinsic) height,
  adjusted for the display density as indicated by
  {{domxref("HTMLImageElement.naturalHeight", "naturalHeight")}}.

## Examples

In this example, two different sizes are provided for an image of a clock using the
[`srcset`](/en-US/docs/Web/HTML/Element/img#srcset) attribute. One is 200px wide and the other is 400px
wide. Further, the [`sizes`](/en-US/docs/Web/HTML/Element/img#sizes) attribute is provided to specify the
width at which the image should be drawn given the viewport's width.

### HTML

Specifically, for viewports up to 400px wide, the image is drawn at a width of 200px;
otherwise, it's drawn at 300px.

```html
<p>Image height: <span class="size">?</span>px (resize to update)</p>
<img
  src="/en-US/docs/Web/HTML/Element/img/clock-demo-200px.png"
  alt="Clock"
  srcset="
    /en-US/docs/Web/HTML/Element/img/clock-demo-200px.png 200w,
    /en-US/docs/Web/HTML/Element/img/clock-demo-400px.png 400w
  "
  sizes="(max-width: 400px) 200px, 300px" />
```

### JavaScript

The JavaScript code looks at the `height` to determine the height of the
image given the width at which it's currently drawn.

```js
const clockImage = document.querySelector("img");
let output = document.querySelector(".size");

const updateHeight = (event) => {
  output.innerText = clockImage.height;
};

window.addEventListener("load", updateHeight);
window.addEventListener("resize", updateHeight);
```

### Result

{{EmbedLiveSample("Examples", 640, 450)}}

This example may be easier to try out {{LiveSampleLink('Examples', 'in its own window')}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCanvasElement.height")}}
- {{domxref("HTMLEmbedElement.height")}}
- {{domxref("HTMLIFrameElement.height")}}
- {{domxref("HTMLObjectElement.height")}}
- {{domxref("HTMLSourceElement.height")}}
- {{domxref("HTMLVideoElement.height")}}
