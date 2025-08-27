---
title: text-autospace
slug: Web/CSS/text-autospace
page-type: css-property
browser-compat: css.properties.text-autospace
sidebar: cssref
---

The **`text-autospace`** [CSS](/en-US/docs/Web/CSS) property allows you to specify the space when transition between Chinese/Japanese/Korean (CJK) and non-CJK characters.

## Syntax

```css
text-autospace: normal;
text-autospace: no-autospace;
text-autospace: insert;
text-autospace: replace;
text-autospace: ideograph-alpha;
text-autospace: ideograph-numeric;
text-autospace: punctuation;
text-autospace: auto;

/* Global values */
text-autospace: inherit;
text-autospace: initial;
text-autospace: revert;
text-autospace: revert-layer;
text-autospace: unset;
```

### Values

- `normal`
  - : does XYZ
- `no-autospace`
  - : No automatic space is inserted.
- `insert`
  - : abc
- `replace`
  - : abc
- `ideograph-alpha`
  - : abc
- `ideograph-numeric`
  - : abc
- `punctuation`
  - : abc
- `auto`
  - : abc

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Example

here is an example XYZ

```html

```

```css hidden

```

```css

```

{{EmbedLiveSample("Example", 200, 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref('text-spacing-trim')}}
- [`ic`](/en-US/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#local_font-relative_lengths) and [`ric`](/en-US/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#root_font-relative_lengths) units
- [CSS Text](/en-US/docs/Web/CSS/CSS_text) module
