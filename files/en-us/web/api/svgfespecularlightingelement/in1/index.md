---
title: "SVGFESpecularLightingElement: in1 property"
short-title: in1
slug: Web/API/SVGFESpecularLightingElement/in1
page-type: web-api-instance-property
browser-compat: api.SVGFESpecularLightingElement.in1
---

{{APIRef("SVG")}}

The **`in1`** read-only property of the {{domxref("SVGFESpecularLightingElement")}} interface reflects the {{SVGAttr("in")}} attribute of the given {{SVGElement("feSpecularLighting")}} element.

## Value

An {{domxref("SVGAnimatedString")}} object.

## Examples

### Accessing the `in` Property of `feSpecularLighting` Element

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="specularLightingFilter">
      <!-- Adds specular lighting effect to the SourceGraphic -->
      <feSpecularLighting
        in="SourceGraphic"
        specularExponent="20"
        lighting-color="hotpink"
        surfaceScale="2">
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

We can access the `in` attribute of the `feSpecularLighting` element.

```js
// Select the feSpecularLighting element
const specularLightingElement = document.querySelector("feSpecularLighting");

// Access the in1 property
console.log(specularLightingElement.in1.baseVal); // Output: "SourceGraphic"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedString")}}
