---
title: "@font-palette-values"
slug: Web/CSS/@font-palette-values
page-type: css-at-rule
browser-compat: css.at-rules.font-palette-values
---

{{CSSRef}}

The **`@font-palette-values`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rule) allows you to customize the default values of [font-palette](/en-US/docs/Web/CSS/font-palette) created by the font-maker.

## Syntax

```css
@font-palette-values --identifier {
  font-family: Bixa;
}
.my-class {
  font-palette: --identifier;
}
```

The [&lt;dashed-ident&gt;](/en-US/docs/Web/CSS/dashed-ident) is a user defined identifier, that while it looks like a [CSS custom property](/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) behaves in a different way and is not wrapped in a [CSS var() function](/en-US/docs/Web/CSS/var).

### Descriptors

- {{cssxref("@font-palette-values/base-palette", "base-palette")}}
  - : Specifies the name or index of the base-palette, created by the font-maker, to use.
- {{cssxref("@font-palette-values/font-family", "font-family")}}
  - : Specifies the name of the font family that this palette can be applied to. A `font-family` name is required for the `@font-palette-values` rule to be valid.
- {{cssxref("@font-palette-values/override-colors", "override-colors")}}
  - : Specifies the colors in the base palette to override.

## Formal syntax

{{csssyntax}}

## Examples

### Overriding colors in an existing palette

This example shows how you can change some or all of the colors in a color font.

#### HTML

```html
<p>default colors</p>
<p class="alternate">alternate colors</p>
```

#### CSS

```css
@import url(https://fonts.googleapis.com/css2?family=Bungee+Spice);
p {
  font-family: "Bungee Spice";
  font-size: 2rem;
}
@font-palette-values --Alternate {
  font-family: "Bungee Spice";
  override-colors:
    0 #00ffbb,
    1 #007744;
}
.alternate {
  font-palette: --Alternate;
}
```

#### Result

When overriding colors of the normal or base-palette at index 0 you do not need to declare which base-palette to use. This should only be done when overriding a different base-palette. If you are overriding all the colors then there is also no need to specify the base-palette to use.

{{EmbedLiveSample("Overriding colors in an existing palette")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-palette", "font-palette")}} property
- {{cssxref("@font-palette-values/font-family", "font-family")}} descriptor
- {{cssxref("@font-palette-values/base-palette", "base-palette")}} descriptor
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} descriptor
- {{domxref("CSSFontPaletteValuesRule")}}
