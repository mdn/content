---
title: lch()
slug: Web/CSS/color_value/lch
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Reference
  - Web
  - color
  - lch
  - Experimental
browser-compat: css.types.color.lch
---
{{CSSRef}}{{SeeCompatTable}}

The **`lch()`** functional notation expresses a given color in the LCH color space. It has the same L axis as {{cssxref("color_value/lab","lab()")}}, but uses polar coordinates C (Chroma) and H (Hue).

## Syntax

```css
lch(29.2345% 44.2 27);
lch(52.2345% 72.2 56.2);
lch(52.2345% 72.2 56.2 / .5);
```

### Values

- Functional notation: `lch(L C H [/ A])`

  - : `L` specifies the CIE Lightness, and is a {{cssxref("&lt;percentage&gt;")}} between `0%` representing black and `100%` representing white.

    The second argument `C` is the chroma (roughly representing the "amount of color"). Its minimum useful value is 0, while its maximum is theoretically unbounded (but in practice does not exceed 230).

    The third argument `H` is the hue angle. `0deg` points along the positive "a" axis (toward purplish red), `90deg` points along the positive "b" axis (toward mustard yellow), `180deg` points along the negative "a" axis (toward greenish cyan), and `270deg` points along the negative "b" axis (toward sky blue).

    `A` (alpha) can be a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [LCH colors in CSS: what, why, and how?](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/)
- [Safari Technology Preview 122 release notes](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/): includes `lch()` and {{cssxref("color_value/lab",'lab()')}} colors.
