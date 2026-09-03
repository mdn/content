---
title: "SVGFEGaussianBlurElement: edgeMode property"
short-title: edgeMode
slug: Web/API/SVGFEGaussianBlurElement/edgeMode
page-type: web-api-instance-property
browser-compat: api.SVGFEGaussianBlurElement.edgeMode
---

{{APIRef("SVG")}}

The **`edgeMode`** read-only property of the {{domxref("SVGFEGaussianBlurElement")}} interface determines what color values to use when the blur needs to sample pixels beyond the edge of the input image. It reflects the {{SVGAttr("edgeMode")}} attribute of the given {{SVGElement("feGaussianBlur")}} element.

Its value is one of the `SVG_EDGEMODE_*` constants defined on the {{domxref("SVGFEGaussianBlurElement")}} interface.

## Value

An {{domxref("SVGAnimatedEnumeration")}} object. The `baseVal` property of this object contains one of the following values:

- `0`
  - : Represents `SVG_EDGEMODE_UNKNOWN`, which means that the {{SVGAttr("edgeMode")}} attribute has a value other than the predefined keywords.
- `1`
  - : Represents `SVG_EDGEMODE_DUPLICATE`, which means that the input image is extended along each of its borders as necessary by duplicating the color values at the given edge of the input image.
- `2`
  - : Represents `SVG_EDGEMODE_WRAP`, which means that the input image is extended by taking the color values from the opposite edge of the image.
- `3`
  - : Represents `SVG_EDGEMODE_NONE`, which means that the input image is extended with pixel values of zero for the R, G, B, and A channels.

## Examples

### Accessing the `edgeMode` property

```html
<svg
  viewBox="0 0 200 200"
  width="300"
  height="300"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="blur-filter">
      <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="160"
    height="160"
    fill="rebeccapurple"
    filter="url(#blur-filter)" />
</svg>
<output></output>
```

```css hidden
body {
  font-family: system-ui;
}

output {
  display: block;
  font: inherit;
  white-space: pre;
}
```

We can access the `edgeMode` property to read the current value:

```js
const gaussianBlur = document.querySelector("feGaussianBlur");
const log = document.querySelector("output");

if (gaussianBlur.edgeMode) {
  // Default edgeMode for feGaussianBlur is "none" (3)
  log.textContent = `edgeMode.baseVal: ${gaussianBlur.edgeMode.baseVal}`;
} else {
  log.textContent = "edgeMode is not supported in this browser";
}
```

{{EmbedLiveSample("Examples", "", "320")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("edgeMode")}}
- {{domxref("SVGFEConvolveMatrixElement.edgeMode")}}
