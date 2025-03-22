---
title: font-family
slug: Web/CSS/@font-palette-values/font-family
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.font-palette-values.font-family
---

{{CSSRef}}

The [@font-palette-values](/en-US/docs/Web/CSS/@font-palette-values) [descriptor](/en-US/docs/Glossary/CSS_Descriptor) **`font-family`** is used to specify which font-family palette values are to be applied to. This need to match exactly the values used when setting the CSS [font-family](/en-US/docs/Web/CSS/font-family).

## Syntax

```css
@font-palette-values --Dark-mode {
  font-family: "Bungee Spice";
  /* other palette settings follow */
}
```

Other palette values that follow apply only to the specified font family. You can create [@font-palette-values](/en-US/docs/Web/CSS/@font-palette-values) for other font families by using the same [&lt;dashed-ident&gt;s](/en-US/docs/Web/CSS/dashed-ident). This means that if you have multiple Color Fonts and can use the same identifier for each.

### Values

- `<family-name>`
  - : Specifies the name of the [font-family](/en-US/docs/Web/CSS/font-family).

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Using matching family names

In this example, when the `font-family` descriptor is used in the [@font-palette-values](/en-US/docs/Web/CSS/@font-palette-values) at-rule, the same value is used for the `font-family`, as when it is declared.

#### HTML

```html
<h2>This is spicy</h2>
<h2 class="extra-spicy">This is extra hot & spicy</h2>
```

#### CSS

```css
@import url(https://fonts.googleapis.com/css2?family=Bungee+Spice);
@font-palette-values --bungee-extra-spicy {
  font-family: "Bungee Spice";
  override-colors:
    0 DarkRed,
    1 Red;
}

h2 {
  font-family: "Bungee Spice";
}

h2.extra-spicy {
  font-palette: --bungee-extra-spicy;
}
```

#### Result

{{EmbedLiveSample("Using matching family names")}}

### Using the same palette identifier for multiple font-families

In this example, two [@font-palette-values](/en-US/docs/Web/CSS/@font-palette-values) at-rules are set for two font families, but both the at-rules use the same dashed-ident identifier, `--Dark Mode`. This helps to set the [font-palette](/en-US/docs/Web/CSS/font-palette) property for multiple elements, `h1` and `h2` in this case, at the same time. This can be useful when you want to update font colors to match your site's branding.

```css
@font-palette-values --Dark-Mode {
  font-family: "Bungee Spice";
  /* palette settings for Bungee Spice */
}

@font-palette-values --Dark-Mode {
  font-family: Bixa;
  /* palette settings for Bixa */
}

h1,
h2 {
  font-palette: --Dark-Mode;
}

h1 {
  font-family: "Bungee Spice";
}

h2 {
  font-family: Bixa;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-palette-values/", "@font-palette-values")}}
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} descriptor
- {{cssxref("font-palette/", "font-palette")}} property
- {{domxref("CSSFontPaletteValuesRule.fontFamily")}}
