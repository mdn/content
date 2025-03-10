---
title: font-family
slug: Web/CSS/@font-face/font-family
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.font-face.font-family
---

{{CSSRef}}

The **`font-family`** CSS descriptor sets the font family for a font specified in an {{cssxref("@font-face")}} at-rule.

The value is used for name matching against a particular `@font-face` when styling elements using the [`font-family`](/en-US/docs/Web/CSS/font-family) property.
Any name may be used, and this overrides any name specified in the underlying font data.

## Syntax

```css
/* <string> values */
font-family: "font family";
font-family: "another font family";

/* <custom-ident> value */
font-family: example-font;
```

### Values

- `<family-name>`
  - : Specifies the name of the font family.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting the font family name

```css
@font-face {
  font-family: "Some font family";
  src: url("some_font_name.ttf");
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
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
