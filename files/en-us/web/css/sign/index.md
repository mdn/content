---
title: sign()
slug: Web/CSS/sign
page-type: css-function
browser-compat: css.types.sign
---

{{CSSRef}}

The **`sign()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) contains one calculation, and returns `-1` if the numeric value of the argument is negative, `+1` if the numeric value of the argument is positive, `0⁺` if the numeric value of the argument is 0⁺, and `0⁻` if the numeric value of the argument is 0⁻.

> **Note:** While `{{CSSxRef("abs")}}` returns the absolute value of the argument, `sign()` returns the sign of the argument.

## Syntax

```css
/* property: sign( expression ) */
top: sign(20vh - 100px);
```

### Parameters

The `sign(x)` function accepts only one value as its parameter.

- `x`
  - : A calculation which resolves to a number.

### Return value

A number representing the sign of `A`:

- If `x` is positive, returns `1`.
- If `x` is negative, returns `-1`.
- If `x` is positive zero, returns `0`.
- If `x` is negative zero, returns `-0`.
- Otherwise, returns `NaN`.

### Formal syntax

{{CSSSyntax}}

## Examples

### Background image position

For example, in {{cssxref("background-position")}} positive percentages resolve to a negative length, and vice versa, if the background image is larger than the background area. Thus `sign(10%)` might return `1` or `-1`, depending on how the percentage is resolved! (Or even `0`, if it's resolved against a zero length.)

```css
div {
  background-position: sign(10%);
}
```

### Position direction

Another use case is to control the {{cssxref("position")}} of the element. Either a positive or a negative value.

```css
div {
  position: absolute;
  top: calc(100px * sign(var(--value)));
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("abs")}}
