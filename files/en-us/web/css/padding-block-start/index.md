---
title: padding-block-start
slug: Web/CSS/padding-block-start
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - Reference
  - padding-block
  - padding-block-start
  - recipe:css-property
browser-compat: css.properties.padding-block-start
---
{{CSSRef}}

The **`padding-block-start`** [CSS](/en-US/docs/Web/CSS) property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

{{EmbedInteractiveExample("pages/css/padding-block-start.html")}}

## Syntax

```css
/* <length> values */
padding-block-start: 10px;      /* An absolute length */
padding-block-start: 1em;       /* A length relative to the text size */

/* <percentage> value */
padding-block-start: 5%;        /* A padding relative to the block container's width */

/* Global values */
padding-block-start: inherit;
padding-block-start: initial;
padding-block-start: revert;
padding-block-start: revert-layer;
padding-block-start: unset;
```

### Values

- {{cssxref("&lt;length&gt;")}}
  - : The size of the padding as a fixed value. Must be nonnegative.
- {{cssxref("&lt;percentage&gt;")}}
  - : The size of the padding as a percentage, relative to the [inline-size](/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow) (_width_ in a horizontal language) of the [containing block](/en-US/docs/Web/CSS/Containing_block). Must be nonnegative.

## Description

The `padding-block-start` property is defined in the specification as taking the same values as the {{cssxref("padding-top")}} property. However, the physical property it maps to depends on the values set for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}. Therefore, it could map to {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, or {{cssxref("padding-left")}}

It relates to {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, and {{cssxref("padding-inline-end")}}, which define the other paddings of the element.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting block start padding for vertical text

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
  writing-mode: vertical-lr;
  padding-block-start: 20px;
  background-color: #C8C800;
}
```

#### Result

{{EmbedLiveSample("Setting_block_start_padding_for_vertical_text", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The mapped physical properties: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, and {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
