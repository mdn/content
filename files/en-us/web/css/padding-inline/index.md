---
title: padding-inline
slug: Web/CSS/padding-inline
tags:
  - CSS
  - recipe:css-shorthand-property
browser-compat: css.properties.padding-inline
---
{{CSSRef}}

The **`padding-inline`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`padding-inline-end`](/en-US/docs/Web/CSS/padding-inline-end)
- [`padding-inline-start`](/en-US/docs/Web/CSS/padding-inline-start)

## Syntax

```css
/* <length> values */
padding-inline: 10px 20px;  /* An absolute length */
padding-inline: 1em 2em;   /* relative to the text size */
padding-inline: 10px; /* sets both start and end values */

/* <percentage> values */
padding-inline: 5% 2%; /* relative to the nearest block container's width */

/* Global values */
padding-inline: inherit;
padding-inline: initial;
padding-inline: revert;
padding-inline: unset;
```

The `padding-inline` property may be specified with one or two values. If one value is given, it is used as the value for both {{cssxref("padding-inline-start")}} and {{cssxref("padding-inline-end")}}. If two values are given, the first is used for {{cssxref("padding-inline-start")}} and the second for {{cssxref("padding-inline-end")}}.

### Values

- {{cssxref("&lt;length&gt;")}}
  - : The size of the padding as a fixed value. Must be nonnegative.
- {{cssxref("&lt;percentage&gt;")}}
  - : The size of the padding as a percentage, relative to the _inline-size_ of the containing block. Must be nonnegative.

## Description

Values for this property correspond to the {{cssxref("padding-top")}} and {{cssxref("padding-bottom")}}, or {{cssxref("padding-right")}}, and {{cssxref("padding-left")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting inline padding for vertical text

#### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  padding-inline: 20px 40px;
  background-color: #c8c800;
}
```

#### Result

{{EmbedLiveSample("Setting_inline_padding_for_vertical_text", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The mapped physical properties: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, and {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
