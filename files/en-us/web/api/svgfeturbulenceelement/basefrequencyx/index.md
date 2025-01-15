---
title: "SVGFETurbulenceElement: baseFrequencyX property"
short-title: baseFrequencyX
slug: Web/API/SVGFETurbulenceElement/baseFrequencyX
page-type: web-api-instance-property
browser-compat: api.SVGFETurbulenceElement.baseFrequencyX
---

{{APIRef("SVG")}}

The **`baseFrequencyX`** read-only property of the {{domxref("SVGFETurbulenceElement")}} interface reflects the X component of the {{SVGAttr("baseFrequency")}} attribute of the given {{SVGElement("feTurbulence")}} element.

## Value

An {{domxref("SVGAnimatedInteger")}} object.

## Examples

### Accessing the `baseFrequencyX` property

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="turbulenceFilter">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.5 0.25"
        numOctaves="4" />
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

// Access the baseFrequencyX property
console.log(turbulenceElement.baseFrequencyX.baseVal); // Output: 0.5
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
