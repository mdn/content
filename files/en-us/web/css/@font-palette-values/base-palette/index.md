---
title: base-palette
slug: Web/CSS/@font-palette-values/base-palette
page-type: css-at-rule-descriptor
tags:
  - CSS
  - CSS Fonts
  - Color Fonts
  - CSS Descriptor
  - CSS Property
  - Reference
browser-compat: css.at-rules.font-palette-values.base-palette
---

{{CSSRef}}

The [@font-palette-values](/en-US/docs/Web/CSS/@font-palette-values) [descriptor](/en-US/docs/Glossary/Descriptor_(CSS)) **`base-palette`** is used to specify which pre-defined palette should be used. If a `base-palette` is defined that does not exist then it will revert to the palette defined at index 0.

## Syntax

```css
@font-palette-values --one {
  base-palette: 1;
}
```

The `base-palette` [descriptor](/en-US/docs/Glossary/Descriptor_(CSS)) is set using a zero-based index of the font creators pre-defined palettes.

### Values

- `<index>`
  - : Specifies the index of the pre-defined base-palette to use.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Changing the base-palette

As an example, using [Rocher Color Font](https://www.harbortype.com/fonts/rocher-color/) and switching the default base-palette to an alternate pre-defined palette.

#### HTML

```html
<h2>default base-palette</h2>
<h2 class="two">base-palette at index 2</h2>
<h2 class="five">base-palette at index 5</h2>
```

#### CSS

```css
@font-face {
  font-family: 'Rocher';
  src: url('[path-to-font]/RocherColorGX.woff2') format('woff2'); 
}
h2 {
  font-family: 'Rocher';
}
@font-palette-values --two {
  font-family: 'Rocher';
  base-palette: 2;
}
@font-palette-values --five {
  font-family: 'Rocher';
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
- {{cssxref("@font-palette-values/font-family", "font-family")}}
- {{cssxref("@font-palette-values/override-colors", "override-colors")}}
- {{cssxref("font-palette/", "font-palette")}}
