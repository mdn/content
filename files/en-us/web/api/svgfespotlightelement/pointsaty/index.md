---
title: "SVGFESpotLightElement: pointsAtY property"
short-title: pointsAtY
slug: Web/API/SVGFESpotLightElement/pointsAtY
page-type: web-api-instance-property
browser-compat: api.SVGFESpotLightElement.pointsAtY
---

{{APIRef("SVG")}}

The **`pointsAtY`** read-only property of the {{domxref("SVGFESpotLightElement")}} interface reflects the {{SVGAttr("pointsAtY")}} attribute of the given {{SVGElement("feSpotLight")}} element.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

### Accessing the `pointsAtY` attribute of the `<feSpotLight>` element

In this example, we access the `y` location of the `<feSpotLight>` element in the SVG coordinate system by using the `pointsAtY` read-only property of the `SVGFESpotLightElement` interface.

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
console.log(spotLightElement.pointsAtY.baseVal); // Output: 100
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
