---
title: padding-inline-end
slug: Web/CSS/padding-inline-end
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - Reference
  - padding-inline
  - padding-inline-end
  - recipe:css-property
browser-compat: css.properties.padding-inline-end
---
{{CSSRef}}

The **`padding-inline-end`** [CSS](/en-US/docs/Web/CSS) property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

{{EmbedInteractiveExample("pages/css/padding-inline-end.html")}}

## Syntax

```css
/* <length> values */
padding-inline-end: 10px;     /* An absolute length */
padding-inline-end: 1em;      /* A length relative to the text size */

/* <percentage> value */
padding-inline-end: 5%;       /* A padding relative to the block container's width */

/* Global values */
padding-inline-end: inherit;
padding-inline-end: initial;
padding-inline-end: revert;
padding-inline-end: revert-layer;
padding-inline-end: unset;
```

### Values

- {{cssxref("&lt;length&gt;")}}
  - : The size of the padding as a fixed value. Must be nonnegative.
- {{cssxref("&lt;percentage&gt;")}}
  - : The size of the padding as a percentage, relative to the [inline-size](/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow) (_width_ in a horizontal language) of the [containing block](/en-US/docs/Web/CSS/Containing_block). Must be nonnegative.

## Description

The `padding-inline-end` property is defined in the specification as taking the same values as the {{cssxref("padding-top")}} property. However, the physical property it maps to depends on the values set for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}. Therefore, it could map to {{cssxref("padding-bottom")}}, {{cssxref("padding-right")}}, or {{cssxref("padding-left")}}

It relates to {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, and {{cssxref("padding-inline-start")}}, which define the other paddings of the element.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting inline end padding for vertical text

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
  padding-inline-end: 20px;
  background-color: #C8C800;
}
```

#### Result

{{EmbedLiveSample("Setting_inline_end_padding_for_vertical_text", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The mapped physical properties: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, and {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
