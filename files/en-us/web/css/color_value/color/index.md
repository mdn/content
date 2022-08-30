---
title: color()
slug: Web/CSS/color_value/color
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Reference
  - Web
  - color
  - Experimental
browser-compat: css.types.color.color
---
{{CSSRef}}{{SeeCompatTable}}

The **`color()`** functional notation allows a color to be specified in a particular, specified colorspace rather than the implicit sRGB colorspace that most of the other color functions operate in.

Support for a particular colorspace can be detected with the [`color-gamut`](/en-US/docs/Web/CSS/@media/color-gamut) CSS media feature.

The [`@color-profile`](/en-US/docs/Web/CSS/@color-profile) [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) can be used to define and names a color profile to be used in the `color()` function to specify a color.

## Syntax

```css
color(display-p3 1 0.5 0);
color(display-p3 1 0.5 0 / .5);
```

### Values

- Functional notation: `color( [ [<ident> | <dashed-ident>]? [ <number-percentage>+ | <string> ] [ / <alpha-value> ]? ] )`

  - : `[<ident> | <dashed-ident>]` is an optional {{cssxref("ident")}} or {{cssxref("dashed-ident")}} denoting the colorspace. If this is an `<ident>` it denotes one of the predefined colorspaces (such as display-p3); if it is a \<dashed-ident> it denotes a custom colorspace, defined by a [`@color-profile`](/en-US/docs/Web/CSS/@color-profile) rule.

    `[ <number-percentage>+ | <string> ]` is either one or more {{cssxref("number")}} or {{cssxref("percentage")}} values providing the parameter values that the colorspace takes, or a {{cssxref("string")}} giving the name of a color defined by the colorspace.

    `/ <alpha-value>` (alpha) can be a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Wide Gamut Color in CSS with Display-p3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
