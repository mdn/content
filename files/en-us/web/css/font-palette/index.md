---
title: font-palette
slug: Web/CSS/font-palette
page-type: css-property
tags:
  - CSS
  - CSS Fonts
  - Color Fonts
  - CSS Property
  - font-palette
  - Reference
browser-compat: css.properties.font-palette
---

{{CSSRef}}

The **`font-palette`** [CSS](/en-US/docs/Web/CSS) property allows specifying one of the many palettes contained in a font that a user agent should use for the font. Users can also override the values in a palette or create a new palette by using the [@font-palette-values](/en-US/docs/Web/CSS/@font-palette-values) at-rule.

## Syntax

```css
/* Using a font-defined palette */
font-palette: normal;

/* Using a user-defined palette */
font-palette: --one;

### Values

- `normal`
  - : User-Agents display the color font with the default palette or default glyph colorization (set by the font maker).
- `light`
  - : Some fonts contain metadata that identify a palette as applicable for a light (close to white) background. When this value is selected then the first palette that match `light` will be used. If the font does not have this metadata then the value behaves as `normal`.
- `dark`
  - : Some fonts contain metadata that identify a palette as applicable for a dark (close to black) background. When this value is selected then the first palette that match `dark` will be used. If the font does not have this metadata then the value behaves as `normal`.
- `<palette-identifier>`
  - : This allows the user to choose their own values for the font palette by using the [@font-palette-values](/en-US/docs/Web/CSS/@font-palette-values) [At-rules](/en-US/docs/Web/CSS/At-rule) and is identified using the [&lt;dashed-ident&gt;](/en-US/docs/Web/CSS/dashed-ident) format.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Dark mode example

```css
@media (prefers-color-scheme: dark) {
  .banner {
    font-palette: dark;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-palette-values", "@font-palette-values")}}
- {{cssxref("@font-palette-values/base-palette", "base-palette")}}
- {{cssxref("@font-palette-values/font-family", "font-family")}}
- {{cssxref("@font-palette-values/override-colors", "override-colors")}}
