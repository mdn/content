---
title: "@font-palette-values"
slug: Web/CSS/@font-palette-values
page-type: css-at-rule
tags:
  - CSS
  - CSS Fonts
  - Color Fonts
  - Reference
browser-compat: css.at-rules.font-palette-values
---

{{CSSRef}}

The **`@font-palette-values`** allows a user to defined a [font-palette](/en-US/docs/Web/CSS/font-palette) which can be used to change the default colors within a **Color Font**.

## Syntax

```css
@font-palette-values --identifier {
  font-family: Bixa;
}
.my-class {
  font-palette: --identifier;
}
```

The {{cssxref("dashed-ident")}} (dashed identifier) is a user defined identifier, that while it looks like a [CSS custom property](/en-US/docs/Web/CSS/Using_CSS_custom_properties) behaves in a different way and is just used to reference the values set by the `@font-palette-values` [@rule](/en-US/docs/Web/CSS/At-rule).

### Descriptors

- [font-family](/en-US/docs/Web/CSS/@font-palette-values/font-family)
  - : Specifies the name of the font family, that this palette can be applied to.
- [base-palette](/en-US/docs/Web/CSS/@font-palette-values/base-palette)
  - : Specifies the name or index of the base-palette to use.
- [override-colors](/en-US/docs/Web/CSS/@font-palette-values/override-colors)
  - : Specifies the colors to override, this is a comma separated list with color index and new value.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Changing the default override-colors example

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

{{EmbedLiveSample("Changing the default override-colors example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-palette", "font-palette")}}
- {{cssxref("@font-palette-values/font-family", "font-family")}}
- {{cssxref("@font-palette-values/base-palette", "base-palette")}}
- {{cssxref("@font-palette-values/override-colors", "override-colors")}}
