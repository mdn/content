---
title: abs()
slug: Web/CSS/abs
tags:
  - CSS
  - CSS Function
  - Sign-Related
  - Function
  - Layout
  - Reference
  - Web
  - abs
browser-compat: css.types.abs
---
{{CSSRef}}

The **`abs()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) contains one calculation, and returns the absolute value of the argument, as the same type as the input.

The `abs(A)` statement will return `A` if `A`'s numeric value is positive or 0⁺. Otherwise it will return the value of `-1 * A`.

## Syntax

```css
/* property: abs(expression) */
width: abs(20% - 100px);
```

The `abs()` function takes only one expression as its argument.

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

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("sign_function", "sign()")}}
