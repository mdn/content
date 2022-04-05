---
title: margin-inline-end
slug: Web/CSS/margin-inline-end
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - NeedsContent
  - Reference
  - margin-inline
  - margin-inline-end
  - recipe:css-property
browser-compat: css.properties.margin-inline-end
---
{{CSSRef}}

The **`margin-inline-end`** [CSS](/en-US/docs/Web/CSS) property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} or {{cssxref("margin-left")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/margin-inline-end.html")}}

## Syntax

```css
/* <length> values */
margin-inline-end: 10px;   /* An absolute length */
margin-inline-end: 1em;    /* relative to the text size */
margin-inline-end: 5%;     /* relative to the nearest block container's width */

/* Keyword values */
margin-inline-end: auto;

/* Global values */
margin-inline-end: inherit;
margin-inline-end: initial;
margin-inline-end: revert;
margin-inline-end: revert-layer;
margin-inline-end: unset;
```

It relates to {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, and {{cssxref("margin-inline-start")}}, which define the other margins of the element.

### Values

The `margin-inline-end` property takes the same values as the {{cssxref("margin-left")}} property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting inline end margin

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
  margin-inline-end: 20px;
  background-color: #c8c800;
}
```

#### Result

{{EmbedLiveSample("Setting_inline_end_margin", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("margin-inline-start")}}
- The mapped physical properties: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, and {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
