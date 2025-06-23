---
title: "SVGFESpecularLightingElement: specularConstant property"
short-title: specularConstant
slug: Web/API/SVGFESpecularLightingElement/specularConstant
page-type: web-api-instance-property
browser-compat: api.SVGFESpecularLightingElement.specularConstant
---

{{APIRef("SVG")}}

The **`specularConstant`** read-only property of the {{domxref("SVGFESpecularLightingElement")}} interface reflects the {{SVGAttr("specularConstant")}} attribute of the given {{SVGElement("feSpecularLighting")}} element.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

### Accessing the `specularConstant` Property

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="specularLightingFilter">
      <!-- Applies specular lighting with a constant specular reflectance -->
      <feSpecularLighting
        in="SourceGraphic"
        specularConstant="0.5"
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

// Access the specularConstant property
console.log(specularLightingElement.specularConstant.baseVal); // Output: 0.5
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
