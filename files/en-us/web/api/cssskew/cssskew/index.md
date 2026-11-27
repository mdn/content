---
title: "CSSSkew: CSSSkew() constructor"
short-title: CSSSkew()
slug: Web/API/CSSSkew/CSSSkew
page-type: web-api-constructor
browser-compat: api.CSSSkew.CSSSkew
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSSkew()`** constructor creates a new {{domxref("CSSSkew")}} object, which represents the value of a {{cssxref("transform-function/skew", "skew()")}} function applied to the CSS {{cssxref("transform")}} property.

## Syntax

```js-nolint
new CSSSkew(ax, ay)
```

### Parameters

- `ax`
  - : A {{domxref("CSSNumericValue")}} that is an {{cssxref("angle")}} value, representing the skew angle along the x-axis.
- `ay`
  - : A {{domxref("CSSNumericValue")}} that is an {{cssxref("angle")}} value, representing the skew angle along the y-axis.

### Return value

A new {{domxref("CSSSkew")}} object.

### Exceptions

- {{jsxref("TypeError")}}
  - : The value passed for `ax` or `ay` isn't an {{cssxref("angle")}} value.

## Examples

### Creating a skew along both axes

This example creates a `CSSSkew` with an angle along each axis and logs its `is2D` property and string form.

```js
const skew = new CSSSkew(CSS.deg(20), CSS.deg(10));

console.log(skew.is2D); // true
console.log(skew.toString()); // "skew(20deg, 10deg)"
```

The new skew is 2D, like every skew, and its string form includes both angles.

### Creating a skew along the x-axis only

This example creates a `CSSSkew` with an `ax` in turns rather than degrees and an `ay` of `0deg`, then logs its string form.

```js
const skew = new CSSSkew(CSS.turn(0.1), CSS.deg(0));

console.log(skew.toString()); // "skew(0.1turn)"
```

The string form leaves out `ay`, because its value is `0deg`.
An angle of `0.1turn` is 36 degrees, a tenth of a full turn.

### Passing values of the wrong type

This example passes values that don't match the types the constructor accepts.

```js
try {
  new CSSSkew(CSS.px(10), CSS.deg(0));
} catch (e) {
  console.log(e.name); // "TypeError"
}

try {
  new CSSSkew(CSS.deg(20), CSS.number(0));
} catch (e) {
  console.log(e.name); // "TypeError"
}
```

The first call throws because a length isn't an angle.
The second call throws because a number isn't an angle, even when it's `0`.
To skew only along the x-axis, pass `CSS.deg(0)` for `ay` instead.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
