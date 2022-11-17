---
title: override-colors
slug: Web/CSS/@font-palette-values/override-colors
page-type: css-at-rule-descriptor
tags:
  - CSS
  - CSS Fonts
  - Color Fonts
  - CSS Descriptor
  - CSS Property
  - Reference
browser-compat: css.at-rules.font-palette-values.override-colors
---

{{CSSRef}}

Short description of this feature

## Syntax

```css

```

### Values

- `<family-name>`
  - : Specifies the name of the font family.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Changing colors of emojis

The [Noto Color Emoji](https://fonts.google.com/noto/specimen/Noto+Color+Emoji/) font, is a color font which you can override the colors to match the sites brand.

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

```css
@font-face {
  font-family: "Noto Color Emoji";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/l/font?kit=Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabts6diywYkdG3gjD0U&skey=a373f7129eaba270&v=v24) format("woff2");
}
.emoji {
  font-family: "Noto Color Emoji";
  font-size: 3rem;
}
@font-palette-values --red {
  font-family: "Noto Color Emoji";
  override-colors: 
    0 rgba(74, 11, 0, 255), 
    1 rgba(149, 22, 1, 255), 
    2 rgba(183, 27, 1, 255), 
    3 rgba(193, 28, 1, 255), 
    4 rgba(230, 34, 1, 255);
}
.red-hat {
  font-palette: --red;
}
```

#### Result

{{EmbedLiveSample("Changing colors of emojis")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-palette-values/", "@font-palette-values")}}
- {{cssxref("@font-palette-values/base-palette", "base-palette")}}
- {{cssxref("@font-palette-values/font-family", "font-family")}}
- {{cssxref("font-palette/", "font-palette")}}
