---
title: font-family
slug: Web/CSS/@font-palette-values/font-family
page-type: css-at-rule-descriptor
tags:
  - CSS
  - CSS Fonts
  - Color Fonts
  - CSS Descriptor
  - Reference
browser-compat: css.at-rules.font-palette-values.font-family
---

{{CSSRef}}

The [@font-palette-values](/en-US/docs/Web/CSS/@font-palette-values) descriptor **`font-family`** is used to specify which font-family palette values are to be applied to. This need to match exactly the values used when setting the CSS [font-family](/en-US/docs/Web/CSS/font-family).

## Syntax

```css
@font-palette-values --Dark-mode {
  font-family: "Bungee Spice";
  /* other palette settings follow */
}
```

The `font-family` descriptor means that the settings that follow apply to the specified font-family. Other [@font-palette-values](/en-US/docs/Web/CSS/@font-palette-values) can be set for other font-families using the same [&lt;dashed-ident&gt;s](/en-US/docs/Web/CSS/dashed-ident), which means if you have multiple Color Fonts you can use the same identifier for each.

### Values

- `<family-name>`
  - : Specifies the name of the font family.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Naming syntax

As an example when `font-family` descriptor is used in the [@font-palette-values](/en-US/docs/Web/CSS/@font-palette-values) the value is identical in each instance, eg `"Bungee Spice"`.

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

{{EmbedLiveSample("Naming syntax")}}

### Using the same identifier for multiple font-families example

In this example we see the [@font-palette-values](/en-US/docs/Web/CSS/@font-palette-values) set for 2 font-families and the [&lt;dashed-ident&gt;](/en-US/docs/Web/CSS/dashed-ident) is the same for each font-family. When setting the [font-palette](/en-us/docs/Web/CSS/font-palette) it can be done for all the elements at the same time. This may be done so that you can change the Color Fonts colors to match your sites branding.

```css
@font-palette-values --Dark-Mode {
  font-family: "Bungee Spice";
  /* palette settings for Bungee Spice */
}
@font-palette-values --Dark-Mode {
  font-family: Bixa;
  /* palette settings for Bixa */
}
h1, h2 {
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
- {{cssxref("@font-palette-values/font-family", "font-family")}}
- {{cssxref("@font-palette-values/override-colors", "override-colors")}}
- {{cssxref("font-palette/", "font-palette")}}
