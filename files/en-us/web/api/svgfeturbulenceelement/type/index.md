---
title: "SVGFETurbulenceElement: type property"
short-title: type
slug: Web/API/SVGFETurbulenceElement/type
page-type: web-api-instance-property
browser-compat: api.SVGFETurbulenceElement.type
---

{{APIRef("SVG")}}

The **`type`** read-only property of the {{domxref("SVGFETurbulenceElement")}} interface reflects the {{SVGAttr("type")}} attribute of the given {{SVGElement("feTurbulence")}} element. It takes one of the `SVG_TURBULENCE_TYPE_*` constants defined on this interface.

## Value

An {{domxref("SVGAnimatedEnumeration")}} object.

## Examples

### Accessing the `type` property

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="turbulenceFilter">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.05"
        numOctaves="3"
        result="turbulence" />
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

// Access the type property
console.log(turbulenceElement.type.baseVal); // Output: 1 (SVG_TURBULENCE_TYPE_FRACTALNOISE)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
