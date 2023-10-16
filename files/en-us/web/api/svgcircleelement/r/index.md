---
title: "SVGCircleElement: r property"
short-title: r
slug: Web/API/SVGCircleElement/r
page-type: web-api-instance-property
browser-compat: api.SVGCircleElement.r
---

{{APIRef("SVG")}}

The **`r`** read-only property of the {{domxref("SVGCircleElement")}} interface reflects the {{SVGAttr("r")}} attribute of a {{SVGElement("circle")}} element and by that defines the radius of the circle.

If unspecified, the effect is as if the value is set to `0`.

## Value

An {{domxref("SVGAnimatedLength")}} representing the radius of the circle.

## Examples

### SVG

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  width="200"
  height="200">
  <circle r="50" r="50" r="50" fill="gold" id="circle" />
</svg>
```

### JavaScript

```js
const circle = document.getElementById("circle");
console.log(circle.r);
```

{{EmbedLiveSample("Examples", "200", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGCircleElement.cx")}}
- {{domxref("SVGCircleElement.cy")}}
