---
title: override-colors
slug: Web/CSS/@font-palette-values/override-colors
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.font-palette-values.override-colors
---

{{CSSRef}}

The **`override-colors`** CSS [descriptor](/en-US/docs/Glossary/CSS_Descriptor) is used to override colors in the chosen [base-palette](/en-US/docs/Web/CSS/@font-palette-values/base-palette) for a color font.

## Syntax

```css
/* basic syntax */
override-colors: <index of color> <color>;

/* using color names */
override-colors: 0 red;

/* using hex-color */
override-colors: 0 #f00;

/* using rgb */
override-colors: 0 rgb(255 0 0);

/* overriding multiple colors */
override-colors:
  0 #f00,
  1 #0f0,
  2 #00f;

/* overriding multiple colors with readability */
override-colors:
  0 #f00,
  1 #0f0,
  2 #00f;
```

The `override-colors` [descriptor](/en-US/docs/Glossary/CSS_Descriptor) takes a comma-separated list of the color index and new color value.

The color index is zero-based and any [color value](/en-US/docs/Web/CSS/color_value) can be used.

For each key-value pair of index and color, the color with the index in the specified [base-palette](/en-US/docs/Web/CSS/@font-palette-values/base-palette) will be overwritten. If the color font does not have a color at the specified index, it will be ignored.

### Values

- `[ <integer [0,∞]> <absolute-color-base> ]`
  - : Specifies the index of a color in a [base-palette](/en-US/docs/Web/CSS/@font-palette-values/base-palette) and the color to overwrite it with.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Changing colors of emojis

This example shows how to override colors in the [Noto Color Emoji](https://fonts.google.com/noto/specimen/Noto+Color+Emoji) color font to match your site's brand.

#### HTML

```html
<section class="hats">
  <div class="hat">
    <h2>Original Hat</h2>
    <div class="emoji">🎩</div>
  </div>
  <div class="hat">
    <h2>Red Hat</h2>
    <div class="emoji red-hat">🎩</div>
  </div>
</section>
```

#### CSS

```css hidden
.hats {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
```

```css-nolint
@font-face {
  font-family: "Noto Color Emoji";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/l/font?kit=Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabts6diywYkdG3gjD0U&skey=a373f7129eaba270&v=v24)
    format("woff2");
}

.emoji {
  font-family: "Noto Color Emoji";
  font-size: 3rem;
}
@font-palette-values --red {
  font-family: "Noto Color Emoji";
  override-colors:
    0 rgb(74 11 0),
    1 rgb(149 22 1),
    2 rgb(183 27 1),
    3 rgb(193 28 1),
    4 rgb(230 34 1);
}
.red-hat {
  font-palette: --red;
}
```

#### Result

{{EmbedLiveSample("Changing colors of emojis")}}

### Changing a color in an alternate base-palette

Using [Rocher Color Font](https://www.harbortype.com/fonts/rocher-color/), this example shows how to override one color in the font.

#### HTML

```html
<h2 class="normal-palette">Normal Palette</h2>
<h2 class="override-palette">Override Palette</h2>
```

#### CSS

```css
@font-face {
  font-family: "Rocher";
  src: url("[path-to-font]/RocherColorGX.woff2") format("woff2");
}
h2 {
  font-family: "Rocher";
}
@font-palette-values --override-palette {
  font-family: "Rocher";
  base-palette: 3;
}
@font-palette-values --override-palette {
  font-family: "Rocher";
  base-palette: 3;
  override-colors: 0 rebeccapurple;
}
.normal-palette {
  font-palette: --normal-palette;
}
.override-palette {
  font-palette: --override-palette;
}
```

#### Result

This example shows the that in `base-palette` `3`, the color at index 0 is overridden with `rebeccapurple`.

![Example showing base-palette and base-palette with 1 color overridden](override-base-palette-color.jpg)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-palette-values/", "@font-palette-values")}}
- {{cssxref("@font-palette-values/base-palette", "base-palette")}}
- {{cssxref("@font-palette-values/font-family", "font-family")}}
- {{cssxref("font-palette/", "font-palette")}}
- {{domxref("CSSFontPaletteValuesRule.overrideColors")}}
