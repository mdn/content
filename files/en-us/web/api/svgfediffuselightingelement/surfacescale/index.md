---
title: "SVGFEDiffuseLightingElement: surfaceScale property"
short-title: surfaceScale
slug: Web/API/SVGFEDiffuseLightingElement/surfaceScale
page-type: web-api-instance-property
browser-compat: api.SVGFEDiffuseLightingElement.surfaceScale
---

{{APIRef("SVG")}}

The **`surfaceScale`** read-only property of the {{domxref("SVGFEDiffuseLightingElement")}} interface reflects the {{SVGAttr("surfaceScale")}} attribute of the given {{SVGElement("feDiffuseLighting")}} element.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

### Access the `surfaceScale` property

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="diffuseLightingFilter">
      <feDiffuseLighting
        in="SourceGraphic"
        surfaceScale="2"
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

console.log(diffuseLighting.surfaceScale.baseVal); // Output: 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
