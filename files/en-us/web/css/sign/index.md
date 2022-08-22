---
title: sign()
slug: Web/CSS/sign
tags:
  - CSS
  - CSS Function
  - Sign-Related
  - Function
  - Layout
  - Reference
  - Web
  - sign
browser-compat: css.types.sign
spec-urls: https://drafts.csswg.org/css-values/#sign-funcs
---
{{CSSRef}}

The **`sign()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) contains one calculation, and returns `-1` if the numeric value of the argument is negative, `+1` if the numeric value of the argument is positive, `0⁺` if the numeric value of the argument is 0⁺, and `0⁻` if the numeric value of the argument is 0⁻.

> **Note:** While [`abs()`](/en-US/docs/Web/CSS/abs) returns the absolute value of the argument, `sign()` returns the sign of the argument.

## Syntax

```css
/* property: sign(expression) */
top: sign( --value );
```

The `sign()` function takes only one expression as its argument.

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

Another usecase is to control the {{cssxref("position")}} of the element. Either a positive or a negative value.

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
