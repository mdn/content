---
title: font-palette
slug: Web/CSS/font-palette
page-type: css-property
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
```

### Values

- `normal`
  - : Specifies the default color palette or the default glyph colorization (set by the font maker) to be used for the font. With this setting, the palette in the font at index 0 is rendered.
- `light`
  - : Specifies the first palette in the font that matches 'light' to be used for the font. Some fonts contain metadata that identify a palette as applicable for a light (close to white) background. If a font does not have this metadata, the `light` value behaves as `normal`.
- `dark`
  - : Specifies the first palette in the font that matches 'dark' to be used for the font. Some fonts contain metadata that identify a palette as applicable for a dark (close to black) background. If a font does not have this metadata, the value behaves as `normal`.
- `<palette-identifier>`
  - : Allows you to specify your own values for the font palette by using the [@font-palette-values](/en-US/docs/Web/CSS/@font-palette-values) at-rule. This value is specified using the [&lt;dashed-ident&gt;](/en-US/docs/Web/CSS/dashed-ident) format.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Specifying a dark palette

This example allows you to use the first palette marked as _dark_ (works best on a near black background) by the font-maker.

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
- {{cssxref("@font-palette-values/base-palette", "base-palette")}} descriptor
- {{cssxref("@font-palette-values/font-family", "font-family")}} descriptor
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} descriptor
