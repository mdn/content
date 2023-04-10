---
title: "SVGGeometryElement: isPointInFill() method"
short-title: isPointInFill()
slug: Web/API/SVGGeometryElement/isPointInFill
page-type: web-api-instance-method
browser-compat: api.SVGGeometryElement.isPointInFill
---

{{APIRef("SVG")}}

The **`SVGGeometryElement.isPointInFill()`** method determines
whether a given point is within the fill shape of an element. Normal hit testing rules
apply; the value of the {{cssxref("pointer-events")}} property on the element determines
whether a point is considered to be within the fill. The `point` argument is
interpreted as a point in the local coordinate system of the element.

## Syntax

```js-nolint
isPointInFill(point)
```

### Parameters

- `point`
  - : A DOMPointInit object interpreted as a point in the local coordinate system
    of the element.

### Return value

A boolean indicating whether the given point is within the fill or not.

## Examples

### SVG

```html
<svg
  viewBox="0 0 100 100"
  width="150"
  height="150"
  xmlns="http://www.w3.org/2000/svg">
  <circle
    id="circle"
    cx="50"
    cy="50"
    r="45"
    fill="white"
    stroke="black"
    stroke-width="10" />

  <circle cx="10" cy="10" r="5" fill="seagreen" />
  <circle cx="40" cy="30" r="5" fill="seagreen" />
</svg>
```

### JavaScript

```js
const circle = document.getElementById("circle");

try {
  // Point is outside
  console.log("Point at 10,10:", circle.isPointInFill(new DOMPoint(10, 10)));

  // Point is inside
  console.log("Point at 40,30:", circle.isPointInFill(new DOMPoint(40, 30)));
} catch (e) {
  // for the browsers that still support the deprecated interface SVGPoint
  const svg = document.getElementsByTagName("svg")[0];
  const point = svg.createSVGPoint();

  // Point is outside
  point.x = 10;
  point.y = 10;
  console.log("Point at 10,10: ", circle.isPointInFill(point));

  // Point is inside
  point.x = 40;
  point.y = 30;
  console.log("Point at 40,30: ", circle.isPointInFill(point));
}
```

### Result

{{EmbedLiveSample("Examples", "150", "155")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
