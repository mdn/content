---
title: SVGGeometryElement.isPointInFill()
slug: Web/API/SVGGeometryElement/isPointInFill
tags:
  - API
  - DOM
  - Method
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGGeometryElement.isPointInFill
---
{{APIRef("SVG")}}

The **`SVGGeometryElement.isPointInFill()`** method determines
whether a given point is within the fill shape of an element. Normal hit testing rules
apply; the value of the {{cssxref("pointer-events")}} property on the element determines
whether a point is considered to be within the fill. The `point` argument is
interpreted as a point in the local coordinate system of the element.

## Syntax

```js
boolean someElement.isPointInFill(DOMPointInit point);
```

### Parameters

- point
  - : An object interpreted as a point in the local coordinate system
    of the element.

### Return value

A boolean indicating whether the given point is within the fill or not.

## Example

### SVG

```html
<svg viewBox="0 0 100 100" width="150" height="150"
    xmlns="http://www.w3.org/2000/svg">
  <circle id="circle" cx="50" cy="50" r="45"
      fill="white" stroke="black" stroke-width="10"/>

  <circle cx="10" cy="10" r="5" fill="seagreen"/>
  <circle cx="40" cy="30" r="5" fill="seagreen"/>
</svg>
```

### JavaScript

```js
var circle = document.getElementById('circle');

// Point is outside
console.log('Point at 10,10:', circle.isPointInFill(new DOMPoint(10, 10)));

// Point is inside
console.log('Point at 40,30:', circle.isPointInFill(new DOMPoint(40, 30)));
```

### Result

{{EmbedLiveSample("Example", "150", "150")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
