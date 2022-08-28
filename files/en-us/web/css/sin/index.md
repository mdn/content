---
title: sin()
slug: Web/CSS/sin
tags:
  - CSS
  - CSS Function
  - Function
  - Math
  - Reference
  - Web
  - sin
  - Experimental
browser-compat: css.types.sin
spec-urls: https://drafts.csswg.org/css-values/#trig-funcs
---
{{CSSRef}}{{SeeCompatTable}}

The **`sin()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is a trigonometric function that returns the sine of a number, which is a value between `-1` and `1`. The function contains a single calculation that must resolve to either a {{cssxref("&lt;number&gt;")}} or an {{cssxref("&lt;angle&gt;")}} by interpreting the result of the argument as radians. That is, `sin(45deg)`, `sin(0.125turn)`, and `sin(3.14159 / 4)` all represent the same value, approximately `0.707`.

## Syntax

```css
/* Single <angle> values */
width: calc( sin(45deg) * 100px );
width: calc( sin(0.25turn) * 100px );
width: calc( sin(1.0471967rad) * 100px );

/* Single <number> values */
width: calc( sin(63.673) * 100px );
width: calc( sin(2 * 0.125) * 100px );

/* Other values */
width: calc( sin(pi / 2) * 100px );
width: calc( sin(e / 4) * 100px );
```

The `sin()` function takes only one expression as its argument.

### Formal syntax

{{CSSSyntax}}

## Examples

### Boxes Size

For example, when creating a 100x100 box based on external parameters, in this case `sin(90deg)`. Thus `sin(90deg)` will return `1` making the box `100px` width and `100px` height.

```css
div {
  background-color: red;
  width: calc( sin(90deg) * 100px );
  height: calc( sin(90deg) * 100px );
}
```

### Controlling Animation Duration

Another use-case is to control the {{cssxref("animation-duration")}}. Reducing duration based on the sine value. In this case, the animation duration will be `1s`.

```css
div {
  animation-name: myAnimation;
  animation-duration: calc( sin(0.25turn) * 1s );
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("cos")}}
- {{CSSxRef("tan")}}
- {{CSSxRef("asin")}}
- {{CSSxRef("acos")}}
- {{CSSxRef("atan")}}
- {{CSSxRef("atan2")}}
