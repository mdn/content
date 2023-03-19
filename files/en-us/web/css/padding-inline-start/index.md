---
title: padding-inline-start
slug: Web/CSS/padding-inline-start
page-type: css-property
browser-compat: css.properties.padding-inline-start
---

{{CSSRef}}

The **`padding-inline-start`** [CSS](/en-US/docs/Web/CSS) property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

{{EmbedInteractiveExample("pages/css/padding-inline-start.html")}}

## Syntax

```css
/* <length> values */
padding-inline-start: 10px; /* An absolute length */
padding-inline-start: 1em; /* A length relative to the text size */

/* <percentage> value */
padding-inline-start: 5%; /* A padding relative to the block container's width */

/* Global values */
padding-inline-start: inherit;
padding-inline-start: initial;
padding-inline-start: revert;
padding-inline-start: revert-layer;
padding-inline-start: unset;
```

### Values

The `padding-inline-start` property takes the same values as the {{CSSXref("padding-left")}} property.

## Description

This property corresponds to the {{CSSXref("padding-top")}}, {{CSSXref("padding-right")}}, {{CSSXref("padding-bottom")}}, or {{CSSXref("padding-left")}} property depending on the values defined for {{CSSXref("writing-mode")}}, {{CSSXref("direction")}}, and {{CSSXref("text-orientation")}}.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting inline start padding for vertical text

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
  padding-inline-start: 20px;
  background-color: #c8c800;
}
```

#### Result

{{EmbedLiveSample("Setting_inline_start_padding_for_vertical_text", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Logical Properties and Values](/en-US/docs/Web/CSS/CSS_Logical_Properties)
- The mapped physical properties: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, and {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
