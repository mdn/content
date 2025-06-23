---
title: "SVGFESpecularLightingElement: specularExponent property"
short-title: specularExponent
slug: Web/API/SVGFESpecularLightingElement/specularExponent
page-type: web-api-instance-property
browser-compat: api.SVGFESpecularLightingElement.specularExponent
---

{{APIRef("SVG")}}

The **`specularExponent`** read-only property of the {{domxref("SVGFESpecularLightingElement")}} interface reflects the {{SVGAttr("specularExponent")}} attribute of the given {{SVGElement("feSpecularLighting")}} element.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

### Accessing the `specularExponent` Property

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="specularLightingFilter">
      <!-- Adds specular lighting with a specified exponent -->
      <feSpecularLighting
        in="SourceGraphic"
        specularExponent="40"
        lighting-color="hotpink">
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

// Access the specularExponent property
console.log(specularLightingElement.specularExponent.baseVal); // Output: 40
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
