---
title: base-palette
slug: Web/CSS/@font-palette-values/base-palette
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.font-palette-values.base-palette
---

{{CSSRef}}

The **`base-palette`** CSS [descriptor](/en-US/docs/Glossary/CSS_Descriptor) is used to specify the name or index of a pre-defined palette to be used for creating a new palette. If the specified `base-palette` does not exist, then the palette defined at index 0 will be used.

## Syntax

```css
@font-palette-values --one {
  base-palette: 1;
}
```

The `base-palette` [descriptor](/en-US/docs/Glossary/CSS_Descriptor) is specified using a zero-based index of the font-maker created palettes.

### Values

- `<index>`
  - : Specifies the index of the pre-defined palette to use.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Changing the default palette in a font

Using the [Rocher Color Font](https://www.harbortype.com/fonts/rocher-color/), this example shows two instances of switching the default palette in the font to an alternate palette created by the font-maker.

#### HTML

```html
<h2>default base-palette</h2>
<h2 class="two">base-palette at index 2</h2>
<h2 class="five">base-palette at index 5</h2>
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

@font-palette-values --two {
  font-family: "Rocher";
  base-palette: 2;
}

@font-palette-values --five {
  font-family: "Rocher";
  base-palette: 5;
}

.two {
  font-palette: --two;
}

.five {
  font-palette: --five;
}
```

#### Result

![Example showing 3 different base-palettes of Rocher color font](./rocher-color-font-alt-base-palettes.jpg)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-palette-values/", "@font-palette-values")}}
- {{cssxref("@font-palette-values/font-family", "font-family")}} descriptor
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} descriptor
- {{cssxref("font-palette/", "font-palette")}} property
- {{domxref("CSSFontPaletteValuesRule.basePalette")}}
