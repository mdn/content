---
title: "SVGFEMergeNodeElement: in1 property"
short-title: in1
slug: Web/API/SVGFEMergeNodeElement/in1
page-type: web-api-instance-property
browser-compat: api.SVGFEMergeNodeElement.in1
---

{{APIRef("SVG")}}

The **`in1`** read-only property of the {{domxref("SVGFEMergeNodeElement")}} interface reflects the {{SVGAttr("in")}} attribute of the given {{SVGElement("feMergeNode")}} element.

## Value

An {{domxref("SVGAnimatedString")}} object.

## Examples

### Accessing the `in` Property of `feMergeNode` Element

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="mergeFilter">
      <!-- Merges two inputs -->
      <feMerge>
        <feMergeNode in="SourceGraphic" />
        <feMergeNode in="BackgroundImage" />
      </feMerge>
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:lightblue;"
    filter="url(#mergeFilter)" />
</svg>
```

We can access the `in` attribute of the `feMergeNode` element.

```js
// Select the first feMergeNode element
const mergeNode = document.querySelector("feMergeNode");
console.log(mergeNode.in1.baseVal); // Output: "SourceGraphic"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedString")}}
