---
title: font-palette
slug: Web/CSS/font-palette
page-type: css-property
tags:
  - CSS
  - CSS Fonts
  - Color Fonts
  - CSS Property
  - Reference
browser-compat: css.properties.font-palette
---

{{CSSRef}}

The [CSS](/en-US/docs/Web/CSS) **`font-palette`** property sets the palette the User-Agent should use for the font. Users can also set their own values that are assign in the [@font-palette-values](/en-US/docs/Web/CSS/@font-palette-values) [@rule](/en-US/docs/Web/CSS/At-rule).

## Syntax

```css
/* Using a pre-defined palette */
font-palette: normal;
/* Using a user-defined palette */
font-palette: --one;
```

### Values

- `normal`
  - : User-Agents display the color font with the default palette or default glyph colorisation.
- `light`
  - : Some fonts contain metadata that identify a palette as applicable for a light (close to white) background. When this value is selected then the first palette that match `light` will be used. If the font does not have this metadata then the value behaves as `normal`.
- `dark`
  - : Some fonts contain metadata that identify a palette as applicable for a dark (close to black) background. When this value is selected then the first palette that match `dark` will be used. If the font does not have this metadata then the value behaves as `normal`.
- `<palette-identifier>`
  - : This allows the user to choose their own values for the font palette by using the {{cssxref("@font-palette-values")}} {{cssxref("at-rule")}}

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
