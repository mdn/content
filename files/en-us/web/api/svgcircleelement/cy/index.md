---
title: SVGCircleElement.cy
slug: Web/API/SVGCircleElement/cy
tags:
  - API
  - Property
  - Reference
  - SVG
  - SVGCircleElement
  - cy
browser-compat: api.SVGCircleElement.cy
---
{{APIRef("SVG")}}

The **`cy`** read-only property of the {{domxref("SVGCircleElement")}} interface reflects the {{SVGAttr("cy")}} attribute of a {{SVGElement("circle")}} element and by that defines the y-coordinate of the circle's center.

If unspecified, the effect is as if the value is set to `0`.

## Syntax

```js
var yCoordinate = element.cy;
```

### Value

An {{domxref("SVGAnimatedLength")}} representing the y-coordinate of the circle's center.

## Example

### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <circle cy="50" cy="50" r="50" fill="gold" id="circle"/>
</svg>
```

### JavaScript

```js
const circle = document.getElementById('circle');
console.log(circle.cy);
```

{{EmbedLiveSample("Example", "200", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGCircleElement.cx")}}
- {{domxref("SVGCircleElement.r")}}
