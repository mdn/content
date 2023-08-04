---
title: <alpha-value>
slug: Web/CSS/alpha-value
page-type: css-type
spec-urls: https://drafts.csswg.org/css-color/#type-def-alpha-value
---

{{CSSRef}}

The **`<alpha-value>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents a value that can be either a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;percentage&gt;")}}, specifying the **{{Glossary("alpha", "alpha channel")}}** or **transparency** of a color.

## Syntax

The value of an `<alpha-value>` is given as either a [`<number>`](/en-US/docs/Web/CSS/number) or a [`<percentage>`](/en-US/docs/Web/CSS/percentage).

If given as a number, the useful range is 0 (fully transparent) to 1.0 (fully opaque), with decimal values in between; that is, 0.5 indicates that half of the foreground color is used and half of the background color is used. Values outside the range of 0 to 1 are permitted, but are [clamped](<https://en.wikipedia.org/wiki/Clamping_(graphics)>) to lie within the range 0 to 1.

If the alpha value is given as a percentage, 0% corresponds to fully transparent while 100% indicates fully opaque.

## Formal syntax

{{csssyntax}}

## Interpolation

When animated, values of the `<alpha-value>` CSS data type are {{Glossary("interpolation", "interpolated")}} as real, floating-point numbers. The speed of the interpolation is determined by the [easing function](/en-US/docs/Web/CSS/easing-function) associated with the animation.

## Examples

### Setting text color opacity

The [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb) function accepts a fourth optional value to specify an alpha value.
The following example shows how to apply a color with 60% opacity using the alpha value:

```css
/* <rgb()> */
color: rgb(34 12 64 / 60%);
```

### Setting shape image threshold

Here an alpha value is used to determine which parts of an image are considered part of a shape:

```css
/* shape-image-threshold */
shape-image-threshold: 70%;
shape-image-threshold: 0.7;
```

## Specifications

{{Specifications}}

## See also

- [Fundamental text and font styling](/en-US/docs/Learn/CSS/Styling_text/Fundamentals)
- [CSS data types](/en-US/docs/Web/CSS/CSS_Types)
- [CSS Color](/en-US/docs/Web/CSS/CSS_colors)
- [`<color>`](/en-US/docs/Web/CSS/color_value)
