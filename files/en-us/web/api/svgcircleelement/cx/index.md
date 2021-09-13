---
title: SVGCircleElement.cx
slug: Web/API/SVGCircleElement/cx
tags:
  - API
  - Property
  - Reference
  - SVG
  - SVGCircleElement
  - cx
browser-compat: api.SVGCircleElement.cx
---
{{APIRef("SVG")}}

The **`cx`** read-only property of the {{domxref("SVGCircleElement")}} interface reflects the {{SVGAttr("cx")}} attribute of a {{SVGElement("circle")}} element and by that defines the x-coordinate of the circle's center.<

If unspecified, the effect is as if the value is set to `0`.

## Syntax

```js
var xCoordinate = element.cx;
```

### Value

An {{domxref("SVGAnimatedLength")}} representing the x-coordinate of the circle's center.

## Example

### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <circle cx="50" cy="50" r="50" fill="gold" id="circle"/>
</svg>
```

### JavaScript

```js
const circle = document.getElementById('circle');
console.log(circle.cx);
```

{{EmbedLiveSample("Example", "200", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGCircleElement.cy")}}
- {{domxref("SVGCircleElement.r")}}
