---
title: "SVGFETurbulenceElement: stitchTiles property"
short-title: stitchTiles
slug: Web/API/SVGFETurbulenceElement/stitchTiles
page-type: web-api-instance-property
browser-compat: api.SVGFETurbulenceElement.stitchTiles
---

{{APIRef("SVG")}}

The **`stitchTiles`** read-only property of the {{domxref("SVGFETurbulenceElement")}} interface reflects the {{SVGAttr("stitchTiles")}} attribute of the given {{SVGElement("feTurbulence")}} element. It takes one of the `SVG_STITCHTYPE_*` constants defined on this interface.

## Value

An {{domxref("SVGAnimatedEnumeration")}} object.

## Examples

### Accessing the `stitchTiles` property

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="turbulenceFilter">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.05"
        numOctaves="3"
        stitchTiles="stitch" />
    </filter>
  </defs>

  <rect
    x="20"
    y="20"
    width="160"
    height="160"
    style="fill:lightblue;"
    filter="url(#turbulenceFilter)" />
</svg>
```

```js
// Select the feTurbulence element
const turbulenceElement = document.querySelector("feTurbulence");

// Access the stitchTiles property
console.log(turbulenceElement.stitchTiles.baseVal); // Output: 1 (SVG_STITCHTYPE_STITCH)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
