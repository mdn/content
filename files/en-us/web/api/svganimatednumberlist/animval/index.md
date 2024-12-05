---
title: "SVGAnimatedNumberList: animVal property"
short-title: animVal
slug: Web/API/SVGAnimatedNumberList/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedNumberList.animVal
---

{{APIRef("SVG")}}

The **`animVal`** read-only property of the {{domxref("SVGAnimatedNumberList")}} interface represents the current animated value of an animatable attribute that accepts a list of [`<number>`](/en-US/docs/Web/SVG/Content_type#number) values.

This property reflects the {{SVGElement("rect")}}, {{SVGElement("polygon")}}, or {{SVGElement("polyline")}} element's {{SVGAttr("points")}} attribute value as a readonly {{domxref("SVGNumberList")}}, providing access to a dynamically updated list of points defined by the {{SVGAttr("points")}} attribute.

## Value

An {{domxref("SVGNumberList")}} object representing the animated value of the attribute. The list contains one or more numbers corresponding to the individual number values specified in the attribute.

- If the attribute is animated, `animVal` reflects the current state of the animation.
- If the attribute is not animated, `animVal` will be the same as the `baseVal`.

## Examples

```js
const rect = document.querySelector("rect");

// Set the animatable 'points' attribute with number values
rect.setAttribute("points", "10,10 20,10 20,20 10,20");

// Access the SVGAnimatedNumberList object
const points = rect.points;

// Get the animated value (during an animation)
console.log(points.animVal); // Outputs the animated state, if any
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
- {{domxref("SVGAnimatedLengthList")}}
