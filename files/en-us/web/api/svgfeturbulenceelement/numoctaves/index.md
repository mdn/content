---
title: "SVGFETurbulenceElement: numOctaves property"
short-title: numOctaves
slug: Web/API/SVGFETurbulenceElement/numOctaves
page-type: web-api-instance-property
browser-compat: api.SVGFETurbulenceElement.numOctaves
---

{{APIRef("SVG")}}

The **`numOctaves`** read-only property of the {{domxref("SVGFETurbulenceElement")}} interface reflects the {{SVGAttr("numOctaves")}} attribute of the given {{SVGElement("feTurbulence")}} element.

## Value

An {{domxref("SVGAnimatedInteger")}} object.

## Examples

### Accessing the `numOctaves` property

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="turbulenceFilter">
      <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" />
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

// Access the numOctaves property
console.log(turbulenceElement.numOctaves.baseVal); // Output: 4
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
