---
title: "SVGAnimatedNumberList: animVal property"
short-title: animVal
slug: Web/API/SVGAnimatedNumberList/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedNumberList.animVal
---

{{APIRef("SVG")}}

The **`SVGAnimatedNumberList.animVal`** read-only property of the {{domxref("SVGAnimatedNumberList")}} interface represents the current animated value of an animatable attribute that accepts a list of `<number>` values.

This property provides access to the animated state of the attribute, reflecting the current animation value during an animation. If the attribute is not currently being animated, `animVal` will be the same as `baseVal`.

## Value

An {{domxref("SVGNumberList")}} object representing the animated value of the attribute. The list contains one or more numbers corresponding to the individual number values specified in the attribute.

- If the attribute is animated, `animVal` reflects the current state of the animation.
- If the attribute is not animated, `animVal` will be the same as the `baseVal`.

## Examples

```js
// Create an SVG element with a list of numbers
const svgNamespace = "http://www.w3.org/2000/svg";
const rect = document.createElementNS(svgNamespace, "rect");

// Set the animatable 'points' attribute with number values
rect.setAttribute("points", "10,10 20,10 20,20 10,20");

// Access the SVGAnimatedNumberList object
const animatedPoints = rect.points;

// Get the animated value (during an animation)
console.log(animatedPoints.animVal); // Outputs the animated state, if any

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
