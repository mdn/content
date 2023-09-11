---
title: font-display
slug: Web/CSS/@font-feature-values/font-display
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.font-feature-values.font-display
---

{{CSSRef}}

The **`font-display`** descriptor for the {{cssxref("@font-feature-values")}} at-rule sets the default value of how a font face is displayed based on whether and when it is downloaded. Setting a value for the `font-display` descriptor within a `@font-feature-values` block sets the default value of the `font-display` descriptor for the {{cssxref("@font-face")}} at-rule for all the fonts with the same {{cssxref("@font-face/font-family", "font-family")}} value.

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
  - : Gives the font face a short block period, generally around 3 seconds, and an infinite swap period.
- `swap`
  - : Gives the font face an extremely small block period and an infinite swap period.
- `fallback`
  - : Gives the font face an extremely small block period and a short swap period.
- `optional`
  - : Gives the font face an extremely small block period and no swap period.

## Description

The `font-display` descriptor for `@font-feature-values` determines the font display timeline; it does so by setting a default `font-display` value for `@font-face` for the same `font-family` name. When `font-display` is omitted in `@font-face`, the user agent first looks for the `font-display` value that has been set via `@font-feature-values` for the relevant font-family. If no value is found, the user agent uses the `auto` value for `font-display`, in which case, the user agent determines the font display strategy.

The font display timeline is based on a timer that starts when the user agent attempts to use a specific downloaded font face. The timeline is divided into three periods, as listed below. These periods dictate the rendering behavior of any element that uses the font face.

- Font **block** period: If the font face is not loaded, elements attempting to use the font are rendered with an _invisible_ fallback font face. The browser blocks visible text rendering, saving a space for the to-be-displayed text based on metrics of the fallback font. During the block period, text is not visible. At the end of the block period, if the font has not loaded, the text is rendered in the fallback font.

- Font **swap** period: The swap period occurs after the block period (if there is one) and if the font face has not yet been loaded successfully. Elements attempting to use the not-yet-loaded font are rendered using the next available fallback font face. The formerly invisible fallback font face is painted onto the screen. If the font loads successfully during the swap period, the text that was rendered in the fallback font is updated — or swapped — with the newly loaded font. This step triggers a repaint.

- Font **failure** period: If the font face has not loaded by the time the swap period expires or by the time the block period expires (if there is no swap period, as is the case with `optional`), the user agent treats the font as a failed load. As a result, the content becomes visible in the fallback font.

The `font-display` descriptor allows you to set a default display policy for all `@font-face` rules, including those not under author control, such as third-party `@font-face` rules. When the `font-display` value is set via `@font-feature-values`, it becomes the default `font-display` value, and is applied to the entire font-family. However, any `font-display` value defined within individual `@font-face` blocks will override this default, but only for those blocks where the descriptor is defined.

## Examples

```css
@font-feature-values "Leitura" {
  font-display: swap;
  @swash {
    fancy: 1;
  }
}
```

The `font-display` descriptor in this example sets the default `font-display` value for the "Leitura" font to `swap` for all the `@font-face` blocks. Now there might be several `@font-face` blocks importing multiple font files for a single font-family. If one of those `@font-face` blocks includes a `font-display` descriptor, the specified value will be used for that specific font file only. All other blocks not including a `font-display` descriptor will default to `swap` instead of the user-agent's standard default `auto`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-face/font-display", "font-display")}} descriptor for {{cssxref("@font-face")}} at-rule
- {{cssxref("css_fonts", "CSS fonts")}} module
