---
title: "SVGFEMorphologyElement: radiusY property"
short-title: radiusY
slug: Web/API/SVGFEMorphologyElement/radiusY
page-type: web-api-instance-property
browser-compat: api.SVGFEMorphologyElement.radiusY
---

{{APIRef("SVG")}}

The **`radiusY`** read-only property of the {{domxref("SVGFEMorphologyElement")}} interface reflects the Y component of the {{SVGAttr("radius")}} attribute of the given {{SVGElement("feMorphology")}} element.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

### Accessing the `radiusY` Property

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="morphologyFilter">
      <!-- Applies a morphology filter with a specific radius -->
      <feMorphology in="SourceGraphic" operator="dilate" radius="5 3" />
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:lightblue;"
    filter="url(#morphologyFilter)" />
</svg>
```

```js
// Select the feMorphology element
const morphologyNode = document.querySelector("feMorphology");

// Access the radiusY property
const radiusY = morphologyNode.radiusY.baseVal;

console.log(`The Y radius is: ${radiusY}`); // Output: 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
