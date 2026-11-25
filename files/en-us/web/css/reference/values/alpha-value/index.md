---
title: "`<alpha-value>` CSS type"
short-title: <alpha-value>
slug: Web/CSS/Reference/Values/alpha-value
page-type: css-type
spec-urls: https://drafts.csswg.org/css-color/#typedef-color-alpha-value
sidebar: cssref
---

The **`<alpha-value>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/Reference/Values/Data_types) represents a value that can be either a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;percentage&gt;")}}, specifying the **{{Glossary("alpha", "alpha channel")}}** or **transparency** of a color.

## Associated functions

This data type is accepted as a parameter in the following CSS functions:

- {{cssxref("alpha()")}}
- {{cssxref("color()")}}
- {{cssxref("device-cmyk()")}}
- {{cssxref("hsl()")}}
- {{cssxref("hsl()", "hsla()")}}
- {{cssxref("hwb()")}}
- {{cssxref("lab()")}}
- {{cssxref("lch()")}}
- {{cssxref("oklab()")}}
- {{cssxref("oklch()")}}
- {{cssxref("rgb()")}}
- {{cssxref("rgb()", "rgba()")}}

## Syntax

```css
/* <number> values */
0
0.125
0.5
1

/* <percentage> values */
0%
12.5%
50%
100%
```

### Values

This data type is specified as one of the following values:

- {{cssxref("number")}}
  - : A positive value between `0` and `1`, inclusive
- {{cssxref("percentage")}}
  - : A `<percentage>` between `0%` and `100%`, inclusive.

Values outside the ranges, though valid, are clamped to the nearest limit in the range.

## Description

An `<alpha-value>` is given as either a {{cssxref("number")}} or a {{cssxref("percentage")}}.

If given as a number, the useful range is `0` (fully transparent) to `1.0` (fully opaque), with decimal values in between. For example, `0.5` indicates that half of the foreground color is used and half of the background color is used. Values outside the range of `0` to `1` are permitted, but are clamped to the range of `0` to `1`.

If the alpha value is given as a percentage, `0%` corresponds to fully transparent while `100%` indicates fully opaque.

### Interpolation

When animated, values of the `<alpha-value>` CSS data type are {{Glossary("interpolation", "interpolated")}} as real, floating-point numbers. The speed of the interpolation is determined by the [easing function](/en-US/docs/Web/CSS/Reference/Values/easing-function) associated with the animation.

## Formal syntax

{{csssyntax}}

## Examples

### Setting text color opacity

The example demonstrates applying a color with `60%` opacity using the `<alpha-value>` as a parameter within an {{cssxref("rgb()")}} function, which accepts an optional fourth parameter specifying an alpha value:

```css
/* <rgb()> */
color: rgb(34 12 64 / 60%);
```

## Specifications

{{Specifications}}

## See also

- [Learn: Fundamental text and font styling](/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS data types](/en-US/docs/Web/CSS/Reference/Values/Data_types)
- [CSS Color](/en-US/docs/Web/CSS/Guides/Colors)
- {{cssxref("&lt;color&gt;")}}
