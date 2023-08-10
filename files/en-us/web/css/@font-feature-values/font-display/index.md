---
title: font-display
slug: Web/CSS/@font-feature-values/font-display
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.font-feature-values.font-display
---

{{CSSRef}}

The **`font-display`** descriptor for the {{cssxref("@font-feature-values")}} at-rule determines how a font-family is displayed by setting the default `font-display` value for the {{cssxref("@font-face")}} at-rule descriptor for a font-family.

This descriptor sets the default value of how a font face is displayed based on whether and when it is downloaded and ready to use for an entire `font-family`.

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

## Description

The `font-display` descriptor for `@font-feature-values` determines the font display timeline by setting a default font-display value for `@font-face` rules for the same `font-family` name. When font-display is omitted in an `@font-face` rule, the user agent uses the font-display value set via `@font-feature-values` for the relevant font-family if one is set, and otherwise defaults to `font-display: auto`.

The `font-display` descriptor enables setting a default display policy for all `@font-face` rules, including those not under author control, such as third-party `@font-face` rules. but is still able to set a default font-display policy for the provided font-family. The default font-display set via `@font-feature-values` is applied to the entire font-family.

The font display timeline is based on a timer that begins the moment the user agent attempts to use a given downloaded font face. The timeline is divided into the three periods below which dictate the rendering behavior of any elements using the font face:

- Font block period: If the font face is not loaded, any element attempting to use it must render an _invisible_ fallback font face. If the font face successfully loads during this period, it is used normally.
- Font swap period: If the font face is not loaded, any element attempting to use it must render a fallback font face. If the font face successfully loads during this period, it is used normally.
- Font failure period: If the font face is not loaded, the user agent treats it as a failed load causing normal font fallback.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

```css
@font-feature-values "Leitura" {
  font-display: swap;
  @swash {
    fancy: 1;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{cssxref("@font-face/font-display", "font-display")}} descriptor for {{cssxref("@font-face")}}
- {{cssxref("css_fonts", "CSS fonts module")}}
