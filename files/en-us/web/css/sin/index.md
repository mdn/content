---
title: sin()
slug: Web/CSS/sin
page-type: css-function
browser-compat: css.types.sin
---

{{CSSRef}}

The **`sin()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is a trigonometric function that returns the sine of a number, which is a value between `-1` and `1`. The function contains a single calculation that must resolve to either a {{cssxref("&lt;number&gt;")}} or an {{cssxref("&lt;angle&gt;")}} by interpreting the result of the argument as radians. That is, `sin(45deg)`, `sin(0.125turn)`, and `sin(3.14159 / 4)` all represent the same value, approximately `0.707`.

## Syntax

```css
/* Single <angle> values */
width: calc(100px * sin(45deg));
width: calc(100px * sin(0.25turn));
width: calc(100px * sin(1.0471967rad));

/* Single <number> values */
width: calc(100px * sin(63.673));
width: calc(100px * sin(2 * 0.125));

/* Other values */
width: calc(100px * sin(pi / 2));
width: calc(100px * sin(e / 4));
```

### Parameter

The `sin(angle)` function accepts only one value as its parameter.

- `angle`
  - : A calculation which resolves to a {{cssxref("&lt;number&gt;")}} or an {{cssxref("&lt;angle&gt;")}}. When specifying unitless numbers they are interpreted as a number of radians, representing an {{cssxref("&lt;angle&gt;")}}

### Return value

The sine of an `angle` will always return a number between `−1` and `1`.

- If `angle` is `infinity`, `-infinity`, or `NaN`, the result is `NaN`.
- If `angle` is `0⁻`, the result is `0⁻`.

### Formal syntax

{{CSSSyntax}}

## Examples

### Boxes Size

For example, when creating a 100x100 box based on external parameters, in this case `sin(90deg)`. Thus `sin(90deg)` will return `1` making the box `100px` width and `100px` height.

```css
div {
  background-color: red;
  width: calc(sin(90deg) * 100px);
  height: calc(sin(90deg) * 100px);
}
```

### Controlling Animation Duration

Another use-case is to control the {{cssxref("animation-duration")}}. Reducing duration based on the sine value. In this case, the animation duration will be `1s`.

```css
div {
  animation-name: myAnimation;
  animation-duration: calc(sin(0.25turn) * 1s);
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
