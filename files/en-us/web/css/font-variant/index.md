---
title: font-variant
slug: Web/CSS/font-variant
tags:
  - CSS
  - CSS Fonts
  - CSS Property
  - Reference
  - recipe:css-shorthand-property
browser-compat: css.properties.font-variant
---
{{CSSRef}}

The **`font-variant`** CSS [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) allows you to set all the font variants for a font.

You can also set the CSS Level 2 (Revision 1) values of `font-variant`, (that is, `normal` or `small-caps`), by using the {{cssxref("font")}} shorthand.

{{EmbedInteractiveExample("pages/css/font-variant.html")}}

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
font-variant: revert;
font-variant: revert-layer;
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

{{csssyntax}}

## Examples

### Setting the small-caps font variant

#### HTML

```html
<p class="normal">Firefox rocks!</p>
<p class="small">Firefox rocks!</p>
```

#### CSS

```css
p.normal {
  font-variant: normal;
}
p.small {
  font-variant: small-caps;
}
```

#### Result

{{ EmbedLiveSample('Setting the small-caps font variant') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("text-transform")}}
- {{cssxref("text-combine-upright")}}
- {{cssxref("text-orientation")}}
