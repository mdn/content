---
title: "SVGFEMorphologyElement: operator property"
short-title: operator
slug: Web/API/SVGFEMorphologyElement/operator
page-type: web-api-instance-property
browser-compat: api.SVGFEMorphologyElement.operator
---

{{APIRef("SVG")}}

The **`operator`** read-only property of the {{domxref("SVGFEMorphologyElement")}} interface reflects the {{SVGAttr("operator")}} attribute of the given {{SVGElement("feMorphology")}} element. It takes one of the `SVG_MORPHOLOGY_OPERATOR_*` constants defined on this interface.

## Value

An {{domxref("SVGAnimatedEnumeration")}} object.

## Examples

### Accessing the `operator` Property

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="morphologyFilter">
      <!-- Applies a morphology filter with the "dilate" operator -->
      <feMorphology in="SourceGraphic" operator="dilate" radius="3" />
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

// Access the 'operator' property
const operatorEnum = morphologyNode.operator.baseVal;

console.log(operatorEnum); // Output: 2 (SVG_MORPHOLOGY_OPERATOR_DILATE)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedEnumeration")}}
