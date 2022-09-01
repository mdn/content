---
title: oklab()
slug: Web/CSS/color_value/oklab
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Reference
  - Web
  - color
  - oklab
  - Experimental
browser-compat: css.types.color.oklab
---
{{CSSRef}}{{SeeCompatTable}}

The **`oklab()`** functional notation expresses a given color in the Oklab perpetual color space, which attempts to mimic how color is perceived by the human eye.

## Syntax

```css
oklab(40.1% 0.1143 0.045);
oklab(59.69% 0.1007 0.1191);
oklab(59.69% 0.1007 0.1191 / .5);
```

### Values

- Functional notation: `oklab(L a b [/ A])`

  - : `L` specifies the perceived lightness, and is a {{cssxref("&lt;percentage&gt;")}} between `0%` representing black and `100%` representing white.

    The second argument `a` is the distance along the `a` axis in the Oklab colorspace.

    The third argument `b` is the distance along the `b` axis in the Oklab colorspace.

    `A` (alpha) can be a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [A perceptual color space for image processing](https://bottosson.github.io/posts/oklab/)
- [Safari Technology Preview 137 release notes](https://webkit.org/blog/12156/release-notes-for-safari-technology-preview-137/): includes `oklab()` and {{cssxref("color_value/oklch",'oklch()')}} colors.
