---
title: "SVGFEMorphologyElement: in1 property"
short-title: in1
slug: Web/API/SVGFEMorphologyElement/in1
page-type: web-api-instance-property
browser-compat: api.SVGFEMorphologyElement.in1
---

{{APIRef("SVG")}}

The **`in1`** read-only property of the {{domxref("SVGFEMorphologyElement")}} interface reflects the {{SVGAttr("in")}} attribute of the given {{SVGElement("feMorphology")}} element.

## Value

An {{domxref("SVGAnimatedString")}} object.

## Examples

### Accessing the `in` Property of `feMorphology` Element

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="morphologyFilter">
      <!-- Applies a morphology filter to the SourceGraphic -->
      <feMorphology in="SourceGraphic" operator="dilate" radius="2" />
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

We can access the `in` attribute of the `feMorphology` element.

```js
// Select the feMorphology element
const morphologyNode = document.querySelector("feMorphology");
console.log(morphologyNode.in1.baseVal); // Output: "SourceGraphic"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedString")}}
