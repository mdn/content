---
title: lab()
slug: Web/CSS/color_value/lab
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Reference
  - Web
  - color
  - lab
  - Experimental
browser-compat: css.types.color.lab
---
{{CSSRef}}{{SeeCompatTable}}

The **`lab()`** functional notation expresses a given color in the CIE L\*a\*b\* color space. Lab represents the entire range of color that humans can see.

## Syntax

```css
lab(29.2345% 39.3825 20.0664);
lab(52.2345% 40.1645 59.9971);
lab(52.2345% 40.1645 59.9971 / .5);
```

### Values

- Functional notation: `lab(L a b [/ A])`

  - : `L` specifies the CIE Lightness, and is a {{cssxref("&lt;percentage&gt;")}} between `0%` representing black and `100%` representing white.

    The second argument `a` is the distance along the `a` axis in the Lab colorspace.

    The third argument `b` is the distance along the `b` axis in the Lab colorspace.

    `A` (alpha) can be a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [LCH colors in CSS: what, why, and how?](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/)
- [Safari Technology Preview 122 release notes](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/): includes `lab()` and {{cssxref("color_value/lch",'lch()')}} colors.
