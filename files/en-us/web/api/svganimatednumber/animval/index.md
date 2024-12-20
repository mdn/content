---
title: "SVGAnimatedNumber: animVal property"
short-title: animVal
slug: Web/API/SVGAnimatedNumber/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedNumber.animVal
---

{{APIRef("SVG")}}

The **`animVal`** read-only property of the {{domxref("SVGAnimatedNumber")}} interface represents the animated value of an SVG element's numeric attribute.

Some animatable SVG attributes accept a single number, such as the {{SVGAttr("radius")}} attribute of the {{SVGElement("circle")}} or {{SVGElement("ellipse")}} elements and the {{SVGAttr("width")}} and {{SVGAttr("height")}} attributes of the {{SVGElement("rect")}} element, and many others. The `animVal` attribute provides access to the current animated value of the animatable numeric attribute during animations.

## Value

A `number`; the current value of the animated attribute as a float.

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

We use the `animVal` property to access the current value of the animating `pathLength`, while the {{domxref("SVGAnimatedNumber.baseVal")}} reflects the base (non-animating) value of the {{domxref("SVGGeometryElement.pathLength", "pathLength")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedInteger")}}
- {{domxref("SVGElement")}}
