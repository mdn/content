---
title: "SVGPolygonElement: points property"
short-title: points
slug: Web/API/SVGPolygonElement/points
page-type: web-api-instance-property
browser-compat: api.SVGPolygonElement.points
---

{{APIRef("SVG")}}

The **`points`** read-only property of the {{domxref("SVGPolygonElement")}} interface reflects the base (i.e., static) value of the element's {{SVGAttr("points")}} attribute. Modifications via the {{DOMxRef("SVGPointList")}} object are reflected in the {{SVGAttr("points")}} attribute, and vice versa.

## Value

A {{DOMxRef("SVGPointList")}} object.

## Examples

### Accessing the `points` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <polygon id="myPolygon" points="100,10 150,50 100,90 50,50" fill="blue" />
</svg>
```

```js
const polygonElement = document.getElementById("myPolygon");

// Access the points property
console.dir(polygonElement.points); // Output: SVGPointList object containing points (100,10), (150,50), (100,90), (50,50)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
