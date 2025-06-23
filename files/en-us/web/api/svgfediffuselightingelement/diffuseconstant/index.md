---
title: "SVGFEDiffuseLightingElement: diffuseConstant property"
short-title: diffuseConstant
slug: Web/API/SVGFEDiffuseLightingElement/diffuseConstant
page-type: web-api-instance-property
browser-compat: api.SVGFEDiffuseLightingElement.diffuseConstant
---

{{APIRef("SVG")}}

The **`diffuseConstant`** read-only property of the {{domxref("SVGFEDiffuseLightingElement")}} interface reflects the {{SVGAttr("diffuseConstant")}} attribute of the given {{SVGElement("feDiffuseLighting")}} element.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

### Access the `diffuseConstant` property

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="diffuseLightingFilter">
      <feDiffuseLighting
        in="SourceGraphic"
        diffuseConstant="1.5"
        lighting-color="white">
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

```js
const diffuseLighting = document.querySelector("feDiffuseLighting");

console.log(diffuseLighting.diffuseConstant.baseVal); // Output: 1.5
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
