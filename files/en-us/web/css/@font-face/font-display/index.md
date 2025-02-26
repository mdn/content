---
title: font-display
slug: Web/CSS/@font-face/font-display
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.font-face.font-display
---

{{CSSRef}}

The **`font-display`** descriptor for the [`@font-face`](/en-US/docs/Web/CSS/@font-face) at-rule determines how a font face is displayed based on whether and when it is downloaded and ready to use.

## Syntax

```css
/* Keyword values */
font-display: auto;
font-display: block;
font-display: swap;
font-display: fallback;
font-display: optional;
```

### Values

- `auto`
  - : The font display strategy is defined by the user agent.
- `block`
  - : Gives the font face a short block period and an infinite swap period.
- `swap`
  - : Gives the font face an extremely small block period and an infinite swap period.
- `fallback`
  - : Gives the font face an extremely small block period and a short swap period.
- `optional`
  - : Gives the font face an extremely small block period and no swap period.

> [!NOTE]
> In Firefox, the preferences `gfx.downloadable_fonts.fallback_delay`
> and `gfx.downloadable_fonts.fallback_delay_short` provide the duration
> of the "short" and "extremely small" periods, respectively.

## Description

The font display timeline is based on a timer that begins the moment the user agent attempts to use a given downloaded font face. The timeline is divided into the three periods below which dictate the rendering behavior of any elements using the font face:

- Font block period: If the font face is not loaded, any element attempting to use it must render an _invisible_ fallback font face. If the font face successfully loads during this period, it is used normally.
- Font swap period: If the font face is not loaded, any element attempting to use it must render a fallback font face. If the font face successfully loads during this period, it is used normally.
- Font failure period: If the font face is not loaded, the user agent treats it as a failed load causing normal font fallback.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Specifying fallback font-display

```css
@font-face {
  font-family: ExampleFont;
  src:
    url(/path/to/fonts/example-font.woff) format("woff"),
    url(/path/to/fonts/example-font.eot) format("eot");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
