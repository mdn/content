---
title: "CSSSkew: ax property"
short-title: ax
slug: Web/API/CSSSkew/ax
page-type: web-api-instance-property
browser-compat: api.CSSSkew.ax
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`ax`** property of the {{domxref("CSSSkew")}} interface represents the skew angle along the x-axis.
The element's vertical edges are tilted by this angle.
A positive angle moves the bottom to the right relative to the top, and a negative angle moves it to the left.

## Value

A {{domxref("CSSNumericValue")}} that is an {{cssxref("angle")}} value, such as `CSS.deg(20)` or `CSS.turn(0.1)`.

## Examples

### Reading and setting the `ax` angle

This example creates a skew, logs its `ax` value, and then changes it to an angle in radians.

```js
const skew = new CSSSkew(CSS.deg(20), CSS.deg(10));

console.log(skew.ax); // CSSUnitValue {value: 20, unit: "deg"}

skew.ax = CSS.rad(0.5);

console.log(skew.toString()); // "skew(0.5rad, 10deg)"
```

The new `ax` value of `0.5rad` is about 28.6 degrees, so it would tilt an element's vertical edges more than the original `20deg`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform-function/skew", "skew()")}}
- {{cssxref("transform-function/skewX", "skewX()")}}
- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
