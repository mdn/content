---
title: SVGGeometryElement.isPointInStroke()
slug: Web/API/SVGGeometryElement/isPointInStroke
tags:
  - API
  - DOM
  - Method
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGGeometryElement.isPointInStroke
---
{{APIRef("SVG")}}

The **`SVGGeometryElement.isPointInStroke()`** method
determines whether a given point is within the stroke shape of an element. Normal hit
testing rules apply; the value of the {{cssxref("pointer-events")}} property on the
element determines whether a point is considered to be within the stroke. The
`point` argument is interpreted as a point in the local coordiante system of
the element.

## Syntax

```js
boolean someElement.isPointInStroke(DOMPointInit point);
```

### Parameters

- point
  - : An object interpreted as a point in the local coordinate system
    of the element.

### Return value

A boolean indicating whether the given point is within the stroke or not.

## Example

### SVG

```html
<svg viewBox="0 0 100 100" width="150" height="150"
    xmlns="http://www.w3.org/2000/svg">
  <circle id="circle" cx="50" cy="50" r="45"
      fill="white" stroke="black" stroke-width="10"/>

  <circle cx="10" cy="10" r="5" fill="seagreen"/>
  <circle cx="40" cy="30" r="5" fill="seagreen"/>
  <circle cx="83" cy="17" r="5" fill="seagreen"/>
</svg>
```

### JavaScript

```js
var circle = document.getElementById('circle');

// Point not in circle
console.log('Point at 10,10:', circle.isPointInStroke(new DOMPoint(10, 10)));

// Point in circle but not stroke
console.log('Point at 40,30:', circle.isPointInStroke(new DOMPoint(40, 30)));

// Point in circle stroke
console.log('Point at 83,17:', circle.isPointInStroke(new DOMPoint(83, 17)));
```

### Result

{{EmbedLiveSample("Example", "150", "150")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
