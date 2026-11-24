---
title: "CSSSkewX: ax property"
short-title: ax
slug: Web/API/CSSSkewX/ax
page-type: web-api-instance-property
browser-compat: api.CSSSkewX.ax
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`ax`** property of the {{domxref("CSSSkewX")}} interface represents the skew angle along the x-axis.
The element's vertical edges are tilted by this angle.
A positive angle moves the bottom to the right relative to the top, and a negative angle moves it to the left.

## Value

A {{domxref("CSSNumericValue")}} that is an {{cssxref("angle")}} value, such as `CSS.deg(20)` or `CSS.turn(0.1)`.

## Examples

### Reading and setting the `ax` angle

This example creates a skew, logs its `ax` value, and then changes it to a negative angle.

```js
const skewX = new CSSSkewX(CSS.deg(30));

console.log(skewX.ax); // CSSUnitValue {value: 30, unit: "deg"}

skewX.ax = CSS.deg(-20);

console.log(skewX.toString()); // "skewX(-20deg)"
```

The new `ax` value of `-20deg` would move the bottom of an element to the left relative to its top.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform-function/skewX", "skewX()")}}
- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
