---
title: "SVGFEDiffuseLightingElement: in1 property"
short-title: in1
slug: Web/API/SVGFEDiffuseLightingElement/in1
page-type: web-api-instance-property
browser-compat: api.SVGFEDiffuseLightingElement.in1
---

{{APIRef("SVG")}}

The **`in1`** read-only property of the {{domxref("SVGFEDiffuseLightingElement")}} interface reflects the {{SVGAttr("in")}} attribute of the given {{SVGElement("feDiffuseLighting")}} element.

## Value

An {{domxref("SVGAnimatedString")}} object.

## Examples

### Accessing the `in` Property of `feDiffuseLighting` Element

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="diffuseLightingFilter">
      <feDiffuseLighting
        in="SourceGraphic"
        result="diffuseLightingResult"
        lighting-color="white"
        surfaceScale="1">
        <feDistantLight azimuth="45" elevation="55" />
      </feDiffuseLighting>
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:lightblue;"
    filter="url(#diffuseLightingFilter)" />
</svg>
```

We can access the `in` attribute of the `feDiffuseLighting` element.

```js
const diffuseLighting = document.querySelector("feDiffuseLighting");

console.log(diffuseLighting.in1.baseVal); // Output: "SourceGraphic"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedString")}}
