---
title: abs()
slug: Web/CSS/abs
page-type: css-function
browser-compat: css.types.abs
sidebar: cssref
---

The **`abs()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) returns the absolute value of the argument, as the same type as the input.

## Syntax

```css
/* abs( <calc-sum> ) */
abs(20% - 100px)
abs(var(--gradientAngle))
```

### Parameters

The `abs()` function accepts one parameter.

- `<calc-sum>`
  - : An expression or calculation that resolves to a {{cssxref("number")}}, a {{cssxref("dimension")}}, a {{cssxref("percentage")}} or a {{cssxref("calc-keyword")}}.

### Return value

The absolute value of `<calc-sum>`.

- If `<calc-sum>`'s numeric value is positive or `0⁺`, the function returns `<calc-sum>`.
- Otherwise, it returns `-1 * <calc-sum>`.

## Formal syntax

{{CSSSyntax}}

## Examples

### Positive variables

The `abs()` function can be used to ensure that a value is always positive. In the following example a CSS custom property `--font-size` is used as the value of {{CSSxRef("font-size")}}. Wrapping this custom property in `abs()` will convert a negative value to a positive one.

```css
h1 {
  font-size: abs(var(--font-size));
}
```

### Control gradient angle of direction

You can also control the gradient direction using `abs()` function. In the following example, with an angle of -45deg the gradient would start red and transition to blue. By using `abs()` to make the value positive, the gradient will start blue and transition to red.

```css
div {
  --deg: -45deg;
  background-image: linear-gradient(abs(var(--deg)), blue, red);
}
```

### Backwards compatible fallback

In browsers that lack support for CSS `abs()` function, you can use the CSS {{CSSxRef("max")}} function to achieve the same result:

```css
p {
  line-height: max(var(--lh), -1 * var(--lh));
}
```

We use the {{CSSxRef("max")}} function to return the largest (most positive) value from a list of two values: `var(--lh)` or `-1 * var(--lh)`. Irrespective of whether `--lh` is positive or negative, the calculated return value will always be positive, that is, an absolute number.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("sign")}}
