---
title: "SVGFESpotLightElement: specularExponent property"
short-title: specularExponent
slug: Web/API/SVGFESpotLightElement/specularExponent
page-type: web-api-instance-property
browser-compat: api.SVGFESpotLightElement.specularExponent
---

{{APIRef("SVG")}}

The **`specularExponent`** read-only property of the {{domxref("SVGFESpotLightElement")}} interface reflects the {{SVGAttr("specularExponent")}} attribute of the given {{SVGElement("feSpotLight")}} element.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

### Accessing the `specularExponent` attribute of the `<feSpotLight>` element

In this example, we access the exponent value controlling the focus of the `<feSpotLight>` filter element's light source by using the `specularExponent` read-only property of the `SVGFESpotLightElement` interface.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="specularLightingFilter">
      <!-- Apply a specular light effect to the SourceGraphic -->
      <feSpecularLighting
        in="SourceGraphic"
        specularExponent="40"
        lighting-color="hotpink"
        surfaceScale="5">
        <feSpotLight
          x="100"
          y="100"
          z="50"
          pointsAtX="100"
          pointsAtY="100"
          specularExponent="40" />
      </feSpecularLighting>
    </filter>
  </defs>
  <circle
    cx="100"
    cy="100"
    r="50"
    style="fill:lightblue;"
    filter="url(#specularLightingFilter)" />
</svg>
```

```js
// Select the feSpotLight element
const spotLightElement = document.querySelector("feSpotLight");

// Access the specularExponent property
console.log(spotLightElement.specularExponent.baseVal); // Output: 40
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
