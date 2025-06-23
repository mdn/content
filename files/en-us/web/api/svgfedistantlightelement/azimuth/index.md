---
title: "SVGFEDistantLightElement: azimuth property"
short-title: azimuth
slug: Web/API/SVGFEDistantLightElement/azimuth
page-type: web-api-instance-property
browser-compat: api.SVGFEDistantLightElement.azimuth
---

{{APIRef("SVG")}}

The **`azimuth`** read-only property of the {{domxref("SVGFEDistantLightElement")}} interface reflects the {{SVGAttr("azimuth")}} attribute of the given {{SVGElement("feDistantLight")}} element.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

### Accessing the `azimuth` Property

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="lightingFilter">
      <feDistantLight azimuth="45" elevation="30" />
      <feDiffuseLighting result="light" lighting-color="white" surfaceScale="2">
        <feDistantLight azimuth="45" elevation="30" />
      </feDiffuseLighting>
    </filter>
  </defs>
  <rect
    x="50"
    y="50"
    width="100"
    height="100"
    style="fill:yellow;"
    filter="url(#lightingFilter)" />
</svg>
```

```js
const distantLight = document.querySelector("feDistantLight");

console.log(distantLight.azimuth.baseVal); // Output: 45
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
