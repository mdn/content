---
title: "SVGGeometryElement: isPointInStroke() method"
short-title: isPointInStroke()
slug: Web/API/SVGGeometryElement/isPointInStroke
page-type: web-api-instance-method
browser-compat: api.SVGGeometryElement.isPointInStroke
---

{{APIRef("SVG")}}

The **`SVGGeometryElement.isPointInStroke()`** method
determines whether a given point is within the stroke shape of an element. Normal hit
testing rules apply; the value of the {{cssxref("pointer-events")}} property on the
element determines whether a point is considered to be within the stroke. The
`point` argument is interpreted as a point in the local coordinate system of
the element.

## Syntax

```js-nolint
isPointInStroke(point)
```

### Parameters

- `point`
  - : An object interpreted as a point in the local coordinate system
    of the element.

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
    fill="white"
    stroke="black"
    stroke-width="10" />
</svg>
```

### JavaScript

```js
const svg = document.getElementsByTagName("svg")[0];
const circle = document.getElementById("circle");
const points = [
  ["10", "10"],
  ["40", "30"],
  ["70", "40"],
  ["15", "75"],
  ["83", "83"],
];

for (const point of points) {
  let isPointInStroke;

  try {
    const pointObj = new DOMPoint(point[0], point[1]);
    isPointInFill = circle.isPointInStroke(pointObj);
  } catch (e) {
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
  pointEl.style.cx = point[0];
  pointEl.style.cy = point[1];
  pointEl.style.r = 5;
  pointEl.style.fill = isPointInStroke ? "seagreen" : "rgb(255 0 0 / 50%)";
  svg.appendChild(pointEl);
}
```

### Result

{{EmbedLiveSample("Examples", "150", "150")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
