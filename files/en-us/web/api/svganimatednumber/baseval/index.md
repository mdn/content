---
title: "SVGAnimatedNumber: baseVal property"
short-title: baseVal
slug: Web/API/SVGAnimatedNumber/baseVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedNumber.baseVal
---

{{APIRef("SVG")}}

The **`baseVal`** property of the {{domxref("SVGAnimatedNumber")}} interface represents the base (non-animated) value of an animatable numeric attribute.

Some animateable SVG attributes accept a single numeric value, such as the {{SVGAttr("radius")}} attribute of the {{SVGElement("circle")}} or {{SVGElement("ellipse")}} elements and the {{SVGAttr("width")}} and {{SVGAttr("height")}} attributes of the {{SVGElement("rect")}} element, and many others. The `baseVal` property reflects and updates the base, or non-animated, value of the numeric attribute.

## Value

A `number`; the base value of the attribute as a float.

## Examples

This example includes a {{SVGElement("path")}} element with a nested {{SVGElement("animate")}} element that animates the value of the path's {{SVGElement("pathLength")}} attribute:

```html
<path d="M 0,40 h100" pathLength="90" id="path">
  <animate
    attributeName="pathLength"
    values="50; 90; 50;"
    dur="10s"
    repeatCount="indefinite" />
</path>
```

```js
const path = document.querySelector("path");

console.log(path.pathLength.animVal); // output: 50
console.log(path.pathLength.baseVal); // output: 90
```

We use the `baseVal` property to access the base (non-animating) value of the animating `pathLength`, while the {{domxref("SVGAnimatedNumber.animVal")}} reflects the current value of the {{domxref("SVGGeometryElement.pathLength", "pathLength")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedInteger")}}
- {{domxref("SVGElement")}}
