---
title: "SVGGeometryElement: isPointInStroke() method"
short-title: isPointInStroke()
slug: Web/API/SVGGeometryElement/isPointInStroke
page-type: web-api-instance-method
browser-compat: api.SVGGeometryElement.isPointInStroke
---

{{APIRef("SVG")}}

The **`isPointInStroke()`** method of the {{domxref("SVGGeometryElement")}} interface determines whether a given point is within the stroke shape of an element. The `point` argument is interpreted as a point in the local coordinate system of the element.

## Syntax

```js-nolint
isPointInStroke(point)
```

### Parameters

- `point`
  - : An object representing a point interpreted in the local coordinate system of the element. It is converted to a {{domxref("DOMPoint")}} object using the same algorithm as [`DOMPoint.fromPoint()`](/en-US/docs/Web/API/DOMPoint/fromPoint_static).

### Return value

A boolean indicating whether the given point is within the stroke or not.

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
    fill="rgb(0 0 0 / 25%)"
    stroke="rgb(0 0 0 / 50%)"
    stroke-width="10" />
</svg>
```

### JavaScript

```js
const svg = document.getElementsByTagName("svg")[0];
const circle = document.getElementById("circle");
const points = [
  [10, 10],
  [40, 30],
  [70, 40],
  [15, 75],
  [83, 83],
];

for (const point of points) {
  let isPointInStroke;

  try {
    const pointObj = { x: point[0], y: point[1] };
    isPointInStroke = circle.isPointInStroke(pointObj);
  } catch {
    // Fallback for browsers that don't support DOMPoint as an argument
    const pointObj = svg.createSVGPoint();
    pointObj.x = point[0];
    pointObj.y = point[1];
    isPointInStroke = circle.isPointInStroke(pointObj);
  }

  console.log(`Point at ${point[0]},${point[1]}: ${isPointInStroke}`);

  const pointEl = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  pointEl.cx.baseVal.value = point[0];
  pointEl.cy.baseVal.value = point[1];
  pointEl.r.baseVal.value = 5;
  const pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
  if (isPointInStroke) {
    pointEl.setAttribute("fill", "rgb(0 170 0 / 50%)");
    pointEl.setAttribute("stroke", "rgb(0 170 0)");
    pathEl.setAttribute("stroke", "rgb(0 170 0)");
    pathEl.setAttribute("d", `M ${point[0] - 5} ${point[1]} h 10 m -5 -5 v 10`);
  } else {
    pointEl.setAttribute("fill", "rgb(170 0 0 / 50%)");
    pointEl.setAttribute("stroke", "rgb(170 0 0)");
    pathEl.setAttribute("stroke", "rgb(170 0 0)");
    pathEl.setAttribute("d", `M ${point[0] - 5} ${point[1]} h 10`);
  }
  svg.append(pointEl, pathEl);
}
```

### Result

{{EmbedLiveSample("Examples", "150", "150")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
