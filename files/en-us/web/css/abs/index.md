---
title: abs()
slug: Web/CSS/abs
page-type: css-function
tags:
  - CSS
  - CSS Function
  - Function
  - Layout
  - Reference
  - Web
  - abs
  - Experimental
spec-urls: https://drafts.csswg.org/css-values/#sign-funcs
---

{{CSSRef}}

The **`abs()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) returns the absolute value of the argument, as the same type as the input.

## Syntax

```css
/* property: abs(expression) */
width: abs(20% - 100px);
```

### Parameters

The `abs(x)` function accepts only one value as its parameter.

- `x`
  - : A calculation which resolves to a number.

### Return value

The absolute value of `x`.

- if `x`'s numeric value is positive or `0⁺`, return `x`.
- Otherwise, returns `-1 * x`.

### Formal syntax

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

## Specifications

{{Specifications}}

## See also

- {{CSSxRef("sign")}}
