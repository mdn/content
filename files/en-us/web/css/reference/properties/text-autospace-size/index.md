---
title: "`text-autospace-size` CSS property"
short-title: text-autospace-size
slug: Web/CSS/Reference/Properties/text-autospace-size
page-type: css-property
browser-compat: css.properties.text-autospace-size
sidebar: cssref
---

The **`text-autospace-size`** [CSS](/en-US/docs/Web/CSS) property sets the size of space that the {{cssxref("text-autospace")}} property adds between Chinese/Japanese/Korean (CJK) characters and non-CJK letters and numbers.

## Syntax

```css
/* <number> values */
text-autospace-size: 0.125;
text-autospace-size: 0.25;
text-autospace-size: 0;

/* Global values */
text-autospace: inherit;
text-autospace: initial;
text-autospace: revert;
text-autospace: revert-layer;
text-autospace: unset;
```

## Values

This property is specified as one value:

- {{cssxref("&lt;number&gt;")}}
  - : Specifies the size of space, as a proportion of the width of a CJK ideograph, represented by the [`ic`](/en-US/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#local_font-relative_lengths) unit. The initial value is `0.125`. Negative values are invalid.

## Description

The `text-autospace-size` property defines the size of space added between Chinese/Japanese/Korean (CJK) characters and non-CJK letters and numbers by the {{cssxref("text-autospace")}} property  It only has an effect when the browser adds spacing between ideographs and non-ideographic letters or numbers, which occurs as long as `text-autospace` is not set to `no-autospace`.  The value doesn't affecgt the spacing added around punctuation. 

The value is a non-negative `<number>` specifying the the size of the space added relative to the size of an ideograph. For example, the initial value is `0.125`, which adds `0.125ic`, one-eighth of an ideograph between the ideograph and non-ideographic letters or numbers. Negative values are invalid and `0` adds no space.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Increasing the spacing

This example compares the default size of space with a larger one. Both paragraphs set {{cssxref("text-autospace")}} to `normal` to add spacing between the Chinese and Latin characters, and the second one doubles it with `text-autospace-size`.

```html
<p lang="zh">HTML超文本标记语言</p>
<p lang="zh" class="wide">HTML超文本标记语言</p>
```

```css
p {
  margin: 0;
  text-autospace: normal;
  font: 2rem sans-serif;
}
.wide {
  text-autospace-size: 0.25;
}
```

{{EmbedLiveSample("increasing_the_spacing", "100%", 120)}}

In browsers that support `text-autospace-size`, the space between "HTML" and the Chinese characters is twice as wide in the second paragraph.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("text-autospace")}}
- {{cssxref("text-spacing-trim")}}
- [`ic`](/en-US/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#local_font-relative_lengths) unit
- [CSS Text](/en-US/docs/Web/CSS/Guides/Text) module
