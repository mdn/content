---
title: "SVGFETurbulenceElement: baseFrequencyY property"
short-title: baseFrequencyY
slug: Web/API/SVGFETurbulenceElement/baseFrequencyY
page-type: web-api-instance-property
browser-compat: api.SVGFETurbulenceElement.baseFrequencyY
---

{{APIRef("SVG")}}

The **`baseFrequencyY`** read-only property of the {{domxref("SVGFETurbulenceElement")}} interface reflects the Y component of the {{SVGAttr("baseFrequency")}} attribute of the given {{SVGElement("feTurbulence")}} element.

## Value

An {{domxref("SVGAnimatedInteger")}} object.

## Examples

### Accessing the `baseFrequencyY` property

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

// Access the baseFrequencyY property
console.log(turbulenceElement.baseFrequencyY.baseVal); // Output: 0.25
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
