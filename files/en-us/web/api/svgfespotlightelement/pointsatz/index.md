---
title: "SVGFESpotLightElement: pointsAtZ property"
short-title: pointsAtZ
slug: Web/API/SVGFESpotLightElement/pointsAtZ
page-type: web-api-instance-property
browser-compat: api.SVGFESpotLightElement.pointsAtZ
---

{{APIRef("SVG")}}

The **`pointsAtZ`** read-only property of the {{domxref("SVGFESpotLightElement")}} interface reflects the {{SVGAttr("pointsAtZ")}} attribute of the given {{SVGElement("feSpotLight")}} element.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

### Accessing the `pointsAtZ` attribute of the `<feSpotLight>` element

In this example, we access the `z` location for the light source created by the `<feSpotLight>` SVG filter element in the SVG coordinate system by using the `pointsAtZ` read-only property of the `SVGFESpotLightElement` interface.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="specularLightingFilter">
      <!-- Apply a specular light effect to the SourceGraphic -->
      <feSpecularLighting
        in="SourceGraphic"
        specularExponent="20"
        lighting-color="hotpink"
        surfaceScale="30">
        <feSpotLight
          x="10"
          y="50"
          z="150"
          pointsAtX="150"
          pointsAtY="100"
          pointsAtZ="0"
          specularExponent="20" />
      </feSpecularLighting>
    </filter>
  </defs>

  <!-- A circle to display the effect of the lighting -->
  <circle cx="100" cy="100" r="50" filter="url(#specularLightingFilter)" />
</svg>
```

```js
// Select the feSpotLight element
const spotLightElement = document.querySelector("feSpotLight");
console.log(spotLightElement.pointsAtZ.baseVal); // Output: 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
