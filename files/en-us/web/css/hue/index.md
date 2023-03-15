---
title: <hue>
slug: Web/CSS/hue
page-type: css-type
browser-compat: css.types.angle
spec-urls: https://drafts.csswg.org/css-color/#typedef-hue
---

{{CSSRef}}

The **`<hue>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents the hue of the color based on the position along a circular {{glossary("color wheel")}} representing the colors of the visible spectrum.

![A color wheel indicating the angle for the hue of the primary (red-green-blue) and secondary (yellow-cyan-magenta) colors](hue-wheel.png)

By definition, _red_ is `0deg`, with the other colors spread around the circle, so _yellow_ is `60deg`, _green_ is `120deg`, _cyan_ is `180deg`, _blue_ is `240deg`, and _magenta_ is `300deg`.

## Syntax

The `<hue>` data type consists of an {{cssxref("&lt;angle&gt;")}} or {{cssxref("&lt;number&gt;")}}.

The `angle` can be listed in one of the following units: `deg`, `rad`, `grad`, or `turn`. When written as a unitless number, the number is interpreted as degrees.

As an `<angle>` is periodic, normalized to the range of `0deg` to `360deg`. It implicitly wraps around such that `480deg` is the same as `120deg`, `-120deg` is the same as `240deg`, `-1turn` is the same as `1turn`, and so on.

## Specifications

{{Specifications}}

## See also

- The `<hue>` data type is a component of the {{cssxref("color_value/hsl", "hsl()")}}, {{cssxref("color_value/hwb", "hwb()")}}, {{cssxref("color_value/lch", "lch()")}}, and {{cssxref("color_value/oklch", "oklch()")}} color functions.
- {{cssxref("color_value")}}
- [CSS Values and Units](/en-US/docs/Web/CSS/CSS_Values_and_Units)
