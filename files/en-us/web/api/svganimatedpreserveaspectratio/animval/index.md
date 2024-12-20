---
title: "SVGAnimatedPreserveAspectRatio: animVal property"
short-title: animVal
slug: Web/API/SVGAnimatedPreserveAspectRatio/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedPreserveAspectRatio.animVal
---

{{APIRef("SVG")}}

The **`animVal`** read-only property of the {{domxref("SVGAnimatedPreserveAspectRatio")}} interface represents the current animated value of the {{SVGAttr("preserveAspectRatio")}} attribute of an SVG element. This property reflects the current value after any animations or transformations are applied.

## Value

An {{domxref("SVGPreserveAspectRatio")}} object.

## Examples

Given the following SVG:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <image
    id="myImage"
    href="image.jpg"
    width="50"
    height="50"
    preserveAspectRatio="xMinYMin meet">
    <animate
      attributeName="preserveAspectRatio"
      from="xMinYMin meet"
      to="xMaxYMax slice"
      dur="5s"
      repeatCount="indefinite" />
  </image>
</svg>
```

We can access the animated value of `preserveAspectRatio` like this:

```js
const image = document.querySelector("#myImage");
const animatedValue = image.preserveAspectRatio.animVal;

console.log(animatedValue.align); // output: "xMaxYMax" (after animation)
console.log(animatedValue.meetOrSlice); // output: "slice" (after animation)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGPreserveAspectRatio")}}
- {{domxref("SVGElement")}}
