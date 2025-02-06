---
title: "SVGFETurbulenceElement: seed property"
short-title: seed
slug: Web/API/SVGFETurbulenceElement/seed
page-type: web-api-instance-property
browser-compat: api.SVGFETurbulenceElement.seed
---

{{APIRef("SVG")}}

The **`seed`** read-only property of the {{domxref("SVGFETurbulenceElement")}} interface reflects the {{SVGAttr("seed")}} attribute of the given {{SVGElement("feTurbulence")}} element.

It sets a numeric seed for the random generation of the fractal noise or turbulence effect.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

### Accessing the `seed` property

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="turbulenceFilter">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.05"
        numOctaves="3"
        seed="1234" />
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

// Access the seed property
console.log(turbulenceElement.seed.baseVal); // Output: 1234
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
