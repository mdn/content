---
title: "SVGPolygonElement: animatedPoints property"
short-title: animatedPoints
slug: Web/API/SVGPolygonElement/animatedPoints
page-type: web-api-instance-property
browser-compat: api.SVGPolygonElement.animatedPoints
---

{{APIRef("SVG")}}

The **`animatedPoints`** read-only property of the {{domxref("SVGPolygonElement")}} interface reflects the animated value of the element's {{SVGAttr("points")}} attribute. If the {{SVGAttr("points")}} attribute is not being animated, it contains the same value as the `points` property.

## Value

A {{DOMxRef("SVGPointList")}} object.

## Examples

### Accessing the `animatedPoints` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <polygon id="myPolygon" points="100,10 150,50 100,90 50,50" fill="blue">
    <animate
      attributeName="points"
      values="100,10 150,50 100,90 50,50; 150,10 200,50 150,90 100,50"
      dur="2s"
      repeatCount="indefinite" />
  </polygon>
</svg>
```

```js
const polygonElement = document.getElementById("myPolygon");

// Access the animatedPoints property
console.dir(polygonElement.animatedPoints); // Output: SVGPointList object
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
