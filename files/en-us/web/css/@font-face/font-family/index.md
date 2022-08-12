---
title: font-family
slug: Web/CSS/@font-face/font-family
tags:
  - '@font-face'
  - At-rule descriptor
  - CSS
  - CSS Descriptor
  - CSS Fonts
  - Reference
browser-compat: css.at-rules.font-face.font-family
---
{{CSSRef}}

The **`font-family`** CSS descriptor allows authors to specify the font family for the font specified in an {{cssxref("@font-face")}} rule.

## Syntax

```css
/* <string> values */
font-family: "font family";
font-family: 'another font family';

/* <custom-ident> value */
font-family: examplefont;
```

### Values

- `<family-name>`
  - : Specifies the name of the font family.

## Formal definition

{{cssinfo}}

## Formal syntax

```
<family-name>

<family-name> =
  <string>        |
  <custom-ident>+
```

## Examples

### Setting the font family name

```css
@font-face {
  font-family: examplefont;
  src: url('examplefont.ttf');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
