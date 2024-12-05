---
title: "SVGAnimatedNumberList: baseVal property"
short-title: baseVal
slug: Web/API/SVGAnimatedNumberList/baseVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedNumberList.baseVal
---

{{APIRef("SVG")}}

The **`baseVal`** read-only property of the {{domxref("SVGAnimatedNumberList")}} interface represents the base (non-animated) value of an animatable attribute that accepts a list of [`<number>`](/en-US/docs/Web/SVG/Content_type#number) values.

This property reflects the {{SVGElement("rect")}}, {{SVGElement("polygon")}}, or {{SVGElement("polyline")}} element's {{SVGAttr("points")}} attribute value as a readonly {{domxref("SVGNumberList")}}, providing access to a static list of points defined by the {{SVGAttr("points")}} attribute.

## Value

An {{domxref("SVGNumberList")}} object representing the base value of the attribute. The list contains one or more numbers corresponding to the individual number values specified in the attribute.

- Changes to the `SVGNumberList` reflected by `baseVal` directly update the attribute on the SVG element.

## Examples

```js
const rect = document.querySelector("rect");

// Set the animatable 'points' attribute with number values
rect.setAttribute("points", "10,10 20,10 20,20 10,20");

// Access the SVGAnimatedNumberList object
const points = rect.points;

// Modify the base value
points.baseVal = [10, 15, 25, 30];

// Verify the reflected attribute value
console.log(rect.getAttribute("points")); // Output: "10,15 25,30"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
- {{domxref("SVGAnimatedLengthList")}}
