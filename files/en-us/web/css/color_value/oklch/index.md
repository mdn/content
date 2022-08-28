---
title: oklch()
slug: Web/CSS/color_value/oklch
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Reference
  - Web
  - color
  - oklch
  - Experimental
browser-compat: css.types.color.oklch
---
{{CSSRef}}{{SeeCompatTable}}

The **`oklch()`** functional notation expresses a given color in the OKLCH color space. It has the same L axis as {{cssxref("color_value/oklab","oklab()")}}, but uses polar coordinates C (Chroma) and H (Hue).

## Syntax

```css
oklch(40.1% 0.123 21.57)
oklch(59.69% 0.156 49.77)
oklch(59.69% 0.156 49.77 / .5)
```

### Values

- Functional notation: `oklch(L C H [/ A])`

  - : `L` specifies the perceived lightness, and is a {{cssxref("&lt;percentage&gt;")}} between `0%` representing black and `100%` representing white.

    The second argument `C` is the chroma (roughly representing the "amount of color"). Its minimum useful value is 0, while its maximum is theoretically unbounded (but in practice does not exceed 0.4).

    The third argument `H` is the hue angle. `0deg` points along the positive "a" axis (toward purplish red), `90deg` points along the positive "b" axis (toward mustard yellow), `180deg` points along the negative "a" axis (toward greenish cyan), and `270deg` points along the negative "b" axis (toward sky blue).

    `A` (alpha) can be a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [A perceptual color space for image processing](https://bottosson.github.io/posts/oklab/)
- [Safari Technology Preview 137 release notes](https://webkit.org/blog/12156/release-notes-for-safari-technology-preview-137/): includes `oklch()` and {{cssxref("color_value/oklab",'oklab()')}} colors.
