---
title: "SVGAnimatedNumberList: baseVal property"
short-title: baseVal
slug: Web/API/SVGAnimatedNumberList/baseVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedNumberList.baseVal
---

{{APIRef("SVG")}}

The **`SVGAnimatedNumberList.baseVal`** read-only property of the {{domxref("SVGAnimatedNumberList")}} interface represents the base (non-animated) value of an animatable attribute that accepts a list of `<number>` values.

This property provides access to the initial or static value of the associated attribute as a live {{domxref("SVGNumberList")}} object, which can be modified to update the attribute.

## Value

An {{domxref("SVGNumberList")}} object representing the base value of the attribute. The list contains one or more numbers corresponding to the individual number values specified in the attribute.

- Changes to the `SVGNumberList` reflected by `baseVal` directly update the attribute on the SVG element.

## Examples

```js
// Create an SVG element with a list of numbers
const svgNamespace = "http://www.w3.org/2000/svg";
const rect = document.createElementNS(svgNamespace, "rect");

// Set the animatable 'points' attribute with number values
rect.setAttribute("points", "10,10 20,10 20,20 10,20");

// Access the SVGAnimatedNumberList object
const animatedPoints = rect.points;

// Get the base value (non-animated)
console.log(animatedPoints.baseVal); // Outputs: an SVGNumberList of numbers

// Modify the base value
animatedPoints.baseVal = [10, 15, 25, 30];

// Verify the reflected attribute value
console.log(rect.getAttribute("points")); // Outputs: "10,15 25,30"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
- {{domxref("SVGAnimatedLengthList")}}
