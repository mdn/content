---
title: "SVGPolylineElement: points property"
short-title: points
slug: Web/API/SVGPolylineElement/points
page-type: web-api-instance-property
browser-compat: api.SVGPolylineElement.points
---

{{APIRef("SVG")}}

The **`points`** read-only property of the {{domxref("SVGPolylineElement")}} interface reflects the base (i.e., static) value of the element's {{SVGAttr("points")}} attribute. Modifications via the {{DOMxRef("SVGPointList")}} object are reflected in the {{SVGAttr("points")}} attribute, and vice versa.

## Value

An {{DOMxRef("SVGPointList")}} object.

## Examples

### Accessing the `points` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <polyline
    id="myPolyline"
    points="100,10 150,50 100,90 50,50"
    fill="none"
    stroke="blue"
    stroke-width="4" />
</svg>
```

```js
const polylineElement = document.getElementById("myPolyline");

// Access the points property
console.dir(polylineElement.points); // Output: SVGPointList object containing points (100,10), (150,50), (100,90), (50,50)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
