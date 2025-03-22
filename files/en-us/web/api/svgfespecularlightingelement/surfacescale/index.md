---
title: "SVGFESpecularLightingElement: surfaceScale property"
short-title: surfaceScale
slug: Web/API/SVGFESpecularLightingElement/surfaceScale
page-type: web-api-instance-property
browser-compat: api.SVGFESpecularLightingElement.surfaceScale
---

{{APIRef("SVG")}}

The **`surfaceScale`** read-only property of the {{domxref("SVGFESpecularLightingElement")}} interface reflects the {{SVGAttr("surfaceScale")}} attribute of the given {{SVGElement("feSpecularLighting")}} element.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

### Accessing the `surfaceScale` Property

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="specularLightingFilter">
      <!-- Adds specular lighting with a surface scale -->
      <feSpecularLighting
        in="SourceGraphic"
        specularExponent="20"
        lighting-color="hotpink"
        surfaceScale="3">
        <fePointLight x="50" y="50" z="30" />
      </feSpecularLighting>
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:lightblue;"
    filter="url(#specularLightingFilter)" />
</svg>
```

```js
// Select the feSpecularLighting element
const specularLightingElement = document.querySelector("feSpecularLighting");

// Access the surfaceScale property
console.log(specularLightingElement.surfaceScale.baseVal); // Output: 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
