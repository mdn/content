---
title: font-variant
slug: Web/CSS/@font-face/font-variant
browser-compat: css.at-rules.font-face.font-variant
---
{{CSSRef}}

The **`font-variant`** CSS [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) allows you to set all the font variants for the fonts specified in the {{cssxref("@font-face")}} rule.

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}

## Syntax

```css
font-variant: small-caps;
font-variant: common-ligatures small-caps;

/* Global values */
font-variant: inherit;
font-variant: initial;
font-variant: unset;
```

### Values

- `normal`
  - : Specifies a normal font face; each of the longhand properties has an initial value of normal. Longhand properties of `font-variant` are: {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}}, and {{cssxref("font-variant-east-asian")}}.
- `none`
  - : Sets the value of the {{cssxref("font-variant-ligatures")}} to `none` and the values of the other longhand property as `normal`, their initial value.
- `<common-lig-values>`, `<discretionary-lig-values>`, `<historical-lig-values>`, `<contextual-alt-values>`
  - : Specifies the keywords related to the {{cssxref("font-variant-ligatures")}} longhand property. The possible values are: `common-ligatures`, `no-common-ligatures`, `discretionary-ligatures`, `no-discretionary-ligatures`, `historical-ligatures`, `no-historical-ligatures`, `contextual`, and `no-contextual`.
- `stylistic()`, `historical-forms`, `styleset()`, `character-variant()`, `swash()`, `ornaments()`, `annotation()`
  - : Specifies the keywords and functions related to the {{cssxref("font-variant-alternates")}} longhand property.
- `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`
  - : Specifies the keywords and functions related to the {{cssxref("font-variant-caps")}} longhand property.
- `<numeric-figure-values>`, `<numeric-spacing-values>`, `<numeric-fraction-values>`, `ordinal`, `slashed-zero`
  - : Specifies the keywords related to the {{cssxref("font-variant-numeric")}} longhand property. The possible values are:  `lining-nums`, `oldstyle-nums`, `proportional-nums`, `tabular-nums`, `diagonal-fractions`, `stacked-fractions`, `ordinal`, and `slashed-zero`.
- `<east-asian-variant-values>`, `<east-asian-width-values>`, `ruby`
  - : Specifies the keywords related to the {{cssxref("font-variant-east-asian")}} longhand property. The possible values are: `jis78`, `jis83`, `jis90`, `jis04`, `simplified`, `traditional`, `full-width`, `proportional-width`, `ruby`.

## Formal definition

{{cssinfo}}

## Formal syntax

```
normal |
none   |
[ <common-lig-values>                      ||
  <discretionary-lig-values>               ||
  <historical-lig-values>                  ||
  <contextual-alt-values>                  ||
  stylistic(<feature-value-name>)          ||
  historical-forms                         ||
  styleset(<feature-value-name>#)          ||
  character-variant(<feature-value-name>#) ||
  swash(<feature-value-name>)              ||
  ornaments(<feature-value-name>)          ||
  annotation(<feature-value-name>)         ||
  [ small-caps      |
    all-small-caps  |
    petite-caps     |
    all-petite-caps |
    unicase         |
    titling-caps
  ]                                        ||
  <numeric-figure-values>                  ||
  <numeric-spacing-values>                 ||
  <numeric-fraction-values>                ||
  ordinal                                  ||
  slashed-zero                             ||
  <east-asian-variant-values>              ||
  <east-asian-width-values>                ||
  ruby
]
```

## Examples

### Setting the small-caps font variant

The following finds a local Open Sans font or imports it, and allows using the font for small-caps.

```css
@font-face {
  font-family: "Open Sans";
  src: local("Open Sans") format("woff2"),
       url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
  font-variant: small-caps;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range descriptor")}}
