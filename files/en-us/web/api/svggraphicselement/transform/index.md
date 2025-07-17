---
title: "SVGGraphicsElement: transform property"
short-title: transform
slug: Web/API/SVGGraphicsElement/transform
page-type: web-api-instance-property
browser-compat: api.SVGGraphicsElement.transform
---

{{APIRef("SVG")}}

The **`transform`** read-only property of the {{domxref("SVGGraphicsElement")}} interface reflects the computed value of the transform property and its corresponding {{SVGAttr("transform")}} attribute of the given element.

## Value

An {{domxref("SVGAnimatedTransformList")}} object.

## Examples

### Accessing the `transform` Property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <!-- Rectangle with a transformation applied -->
  <rect
    id="rect1"
    x="50"
    y="50"
    width="100"
    height="100"
    fill="blue"
    transform="translate(20, 30) rotate(45)" />
</svg>
```

```js
// Access the SVG element
const rect = document.getElementById("rect1");

// Get the transform list
const transformList = rect.transform.baseVal;

// Iterate through and log each transformation
for (let i = 0; i < transformList.numberOfItems; i++) {
  const transform = transformList.getItem(i);
  console.log(`Type: ${transform.type}, Matrix: ${transform.matrix}`);
}
// Example output:
// Type: 2 (SVG_TRANSFORM_TRANSLATE), Matrix: SVGMatrix { ... }
// Type: 4 (SVG_TRANSFORM_ROTATE), Matrix: SVGMatrix { ... }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
