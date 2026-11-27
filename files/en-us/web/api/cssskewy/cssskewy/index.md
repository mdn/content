---
title: "CSSSkewY: CSSSkewY() constructor"
short-title: CSSSkewY()
slug: Web/API/CSSSkewY/CSSSkewY
page-type: web-api-constructor
browser-compat: api.CSSSkewY.CSSSkewY
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSSkewY()`** constructor creates a new {{domxref("CSSSkewY")}} object, which represents the value of a {{cssxref("transform-function/skewY", "skewY()")}} function applied to the CSS {{cssxref("transform")}} property.

## Syntax

```js-nolint
new CSSSkewY(ay)
```

### Parameters

- `ay`
  - : A {{domxref("CSSNumericValue")}} that is an {{cssxref("angle")}} value, representing the skew angle along the y-axis.

### Return value

A new {{domxref("CSSSkewY")}} object.

### Exceptions

- {{jsxref("TypeError")}}
  - : The value passed for `ay` isn't an {{cssxref("angle")}} value.

## Examples

### Creating a skew with an angle in gradians

This example creates a `CSSSkewY` with an angle in gradians rather than degrees, then logs its `is2D` property and string form.

```js
const skewY = new CSSSkewY(CSS.grad(50));

console.log(skewY.is2D); // true
console.log(skewY.toString()); // "skewY(50grad)"
```

The new skew is 2D, like every skew, and its string form keeps the angle in gradians.
An angle of `50grad` is 45 degrees, an eighth of a full turn.

### Passing values of the wrong type

This example passes values that don't match the type the constructor accepts.

```js
try {
  new CSSSkewY(CSS.percent(10));
} catch (e) {
  console.log(e.name); // "TypeError"
}

try {
  new CSSSkewY(CSS.number(0));
} catch (e) {
  console.log(e.name); // "TypeError"
}
```

The first call throws because a percentage isn't an angle.
The second call throws because a number isn't an angle, even when it's `0`.
For an angle of zero, pass `CSS.deg(0)` instead.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
