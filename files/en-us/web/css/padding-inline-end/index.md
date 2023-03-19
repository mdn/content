---
title: padding-inline-end
slug: Web/CSS/padding-inline-end
page-type: css-property
browser-compat: css.properties.padding-inline-end
---

{{CSSRef}}

The **`padding-inline-end`** [CSS](/en-US/docs/Web/CSS) property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

{{EmbedInteractiveExample("pages/css/padding-inline-end.html")}}

## Syntax

```css
/* <length> values */
padding-inline-end: 10px; /* An absolute length */
padding-inline-end: 1em; /* A length relative to the text size */

/* <percentage> value */
padding-inline-end: 5%; /* A padding relative to the block container's width */

/* Global values */
padding-inline-end: inherit;
padding-inline-end: initial;
padding-inline-end: revert;
padding-inline-end: revert-layer;
padding-inline-end: unset;
```

### Values

The `padding-inline-end` property takes the same values as the {{CSSXref("padding-left")}} property.

## Description

This property corresponds to the {{CSSXref("padding-top")}}, {{CSSXref("padding-right")}}, {{CSSXref("padding-bottom")}}, or {{CSSXref("padding-left")}} property depending on the values defined for {{CSSXref("writing-mode")}}, {{CSSXref("direction")}}, and {{CSSXref("text-orientation")}}.

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
  background-color: #c8c800;
}
```

#### Result

{{EmbedLiveSample("Setting_inline_end_padding_for_vertical_text", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Logical Properties and Values](/en-US/docs/Web/CSS/CSS_Logical_Properties)
- The mapped physical properties: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, and {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
