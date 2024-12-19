---
title: margin-block-start
slug: Web/CSS/margin-block-start
page-type: css-property
browser-compat: css.properties.margin-block-start
---

{{CSSRef}}

The **`margin-block-start`** [CSS](/en-US/docs/Web/CSS) property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.

{{EmbedInteractiveExample("pages/css/margin-block-start.html")}}

## Syntax

```css
/* <length> values */
margin-block-start: 10px; /* An absolute length */
margin-block-start: 1em; /* relative to the text size */
margin-block-start: 5%; /* relative to the nearest block container's width */
margin-block-start: anchor-size(width);
margin-block-start: calc(anchor-size(--myAnchor block, 20px) / 3);

/* Keyword values */
margin-block-start: auto;

/* Global values */
margin-block-start: inherit;
margin-block-start: initial;
margin-block-start: revert;
margin-block-start: revert-layer;
margin-block-start: unset;
```

It corresponds to the {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, or {{cssxref("margin-left")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

It relates to {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, and {{cssxref("margin-inline-end")}}, which define the other margins of the element.

### Values

The `margin-block-start` property takes the same values as the {{cssxref("margin-left")}} property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting block start margin

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
  margin-block-start: 20px;
  background-color: #c8c800;
}
```

#### Result

{{EmbedLiveSample("Setting_block_start_margin", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Logical Properties and Values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
- The mapped physical properties: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, and {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
