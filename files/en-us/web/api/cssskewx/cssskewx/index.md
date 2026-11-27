---
title: "CSSSkewX: CSSSkewX() constructor"
short-title: CSSSkewX()
slug: Web/API/CSSSkewX/CSSSkewX
page-type: web-api-constructor
browser-compat: api.CSSSkewX.CSSSkewX
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSSkewX()`** constructor creates a new {{domxref("CSSSkewX")}} object, which represents the value of a {{cssxref("transform-function/skewX", "skewX()")}} function applied to the CSS {{cssxref("transform")}} property.

## Syntax

```js-nolint
new CSSSkewX(ax)
```

### Parameters

- `ax`
  - : A {{domxref("CSSNumericValue")}} that is an {{cssxref("angle")}} value, representing the skew angle along the x-axis.

### Return value

A new {{domxref("CSSSkewX")}} object.

### Exceptions

- {{jsxref("TypeError")}}
  - : The value passed for `ax` isn't an {{cssxref("angle")}} value.

## Examples

### Creating a skew with an angle in turns

This example creates a `CSSSkewX` with an angle in turns rather than degrees, then logs its `is2D` property and string form.

```js
const skewX = new CSSSkewX(CSS.turn(0.1));

console.log(skewX.is2D); // true
console.log(skewX.toString()); // "skewX(0.1turn)"
```

The new skew is 2D, like every skew, and its string form keeps the angle in turns.
An angle of `0.1turn` is 36 degrees, a tenth of a full turn.

### Passing values of the wrong type

This example passes values that don't match the type the constructor accepts.

```js
try {
  new CSSSkewX(CSS.px(10));
} catch (e) {
  console.log(e.name); // "TypeError"
}

try {
  new CSSSkewX(CSS.number(0));
} catch (e) {
  console.log(e.name); // "TypeError"
}
```

The first call throws because a length isn't an angle.
The second call throws because a number isn't an angle, even when it's `0`.
For an angle of zero, pass `CSS.deg(0)` instead.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
