---
title: abs()
slug: Web/CSS/abs
page-type: css-function
browser-compat: css.types.abs
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

In older browsers that lack the support for CSS `abs()` function, you can use the CSS {{CSSxRef("max")}} function to achieve the same result, as shown below:

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
