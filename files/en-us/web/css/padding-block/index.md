---
title: padding-block
slug: Web/CSS/padding-block
tags:
  - CSS
  - CSS Property
  - padding-block
  - recipe:css-shorthand-property
browser-compat: css.properties.padding-block
---
{{CSSRef}}

The **`padding-block`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.

{{EmbedInteractiveExample("pages/css/padding-block.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("padding-block-end")}}
- {{cssxref("padding-block-start")}}

## Syntax

```css
/* <length> values */
padding-block: 10px 20px;  /* An absolute length */
padding-block: 1em 2em;   /* relative to the text size */
padding-block: 10px; /* sets both start and end values */

/* <percentage> values */
padding-block: 5% 2%; /* relative to the nearest block container's width */

/* Global values */
padding-block: inherit;
padding-block: initial;
padding-block: revert;
padding-block: unset;
```

The `padding-block` property may be specified with one or two values. If one value is given, it is used as the value for both {{cssxref("padding-block-start")}} and {{cssxref("padding-block-end")}}. If two values are given, the first is used for {{cssxref("padding-block-start")}} and the second for {{cssxref("padding-block-end")}}.

### Values

The `padding-block` property takes the same values as the {{cssxref("padding-left")}} property.

## Description

These values corresponds to the {{cssxref("padding-top")}} and {{cssxref("padding-bottom")}}, or {{cssxref("padding-right")}}, and {{cssxref("padding-left")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting block padding for vertical text

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
  padding-block: 20px 40px;
  background-color: #c8c800;
}
```

#### Result

{{EmbedLiveSample("Setting_block_padding_for_vertical_text", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The mapped physical properties: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, and {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
