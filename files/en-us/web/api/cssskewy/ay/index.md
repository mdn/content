---
title: "CSSSkewY: ay property"
short-title: ay
slug: Web/API/CSSSkewY/ay
page-type: web-api-instance-property
browser-compat: api.CSSSkewY.ay
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`ay`** property of the {{domxref("CSSSkewY")}} interface represents the skew angle along the y-axis.
The element's horizontal edges are tilted by this angle.
A positive angle moves the right side down relative to the left side, and a negative angle moves it up.

## Value

A {{domxref("CSSNumericValue")}} that is an {{cssxref("angle")}} value, such as `CSS.deg(20)` or `CSS.turn(0.1)`.

## Examples

### Reading and setting the `ay` angle

This example creates a skew, logs its `ay` value, and then changes it to a positive angle.

```js
const skewY = new CSSSkewY(CSS.deg(-15));

console.log(skewY.ay); // CSSUnitValue {value: -15, unit: "deg"}

skewY.ay = CSS.deg(25);

console.log(skewY.toString()); // "skewY(25deg)"
```

The new `ay` value of `25deg` would move the right side of an element down relative to its left side.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform-function/skewY", "skewY()")}}
- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
