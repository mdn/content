---
title: "CSSSkew: ay property"
short-title: ay
slug: Web/API/CSSSkew/ay
page-type: web-api-instance-property
browser-compat: api.CSSSkew.ay
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`ay`** property of the {{domxref("CSSSkew")}} interface represents the skew angle along the y-axis.
The element's horizontal edges are tilted by this angle.
A positive angle moves the right side down relative to the left side, and a negative angle moves it up.

## Value

A {{domxref("CSSNumericValue")}} that is an {{cssxref("angle")}} value, such as `CSS.deg(20)` or `CSS.turn(0.1)`.
A skew read from a `skew()` function with only one angle has an `ay` of `0deg`.

## Examples

### Reading and setting the `ay` angle

This example creates a skew, logs its `ay` value, and then sets it to `0deg`.

```js
const skew = new CSSSkew(CSS.deg(20), CSS.deg(10));

console.log(skew.ay); // CSSUnitValue {value: 10, unit: "deg"}

skew.ay = CSS.deg(0);

console.log(skew.toString()); // "skew(20deg)"
```

After `ay` is set to `0deg`, the string form leaves it out, because `skew(20deg)` means the same as `skew(20deg, 0deg)`.

### Reading `ay` from a `skew()` function with one angle

This example reads the skew from an element's inline style, which uses a `skew()` function with only one angle.

```js
const element = document.createElement("div");
element.style.transform = "skew(20deg)";

const skew = element.attributeStyleMap.get("transform")[0];

console.log(skew.ay); // CSSUnitValue {value: 0, unit: "deg"}
```

Because the `skew()` function has only one angle, `ay` is `0deg`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform-function/skew", "skew()")}}
- {{cssxref("transform-function/skewY", "skewY()")}}
- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
