---
title: border-block-color
slug: Web/CSS/border-block-color
page-type: css-property
browser-compat: css.properties.border-block-color
---

{{CSSRef}}

The **`border-block-color`** [CSS](/en-US/docs/Web/CSS) property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("border-top-color")}} and {{cssxref("border-bottom-color")}}, or {{cssxref("border-right-color")}} and {{cssxref("border-left-color")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-block-color.html")}}

The border color in the other dimension can be set with {{cssxref("border-inline-color")}} which sets {{cssxref("border-inline-start-color")}}, and {{cssxref("border-inline-end-color")}}.

## Syntax

```css
border-block-color: yellow;
border-block-color: #f5f6f7;

/* Global values */
border-block-color: inherit;
border-block-color: initial;
border-block-color: revert;
border-block-color: revert-layer;
border-block-color: unset;
```

### Values

- {{CSSXref("&lt;color&gt;")}}
  - : The color of the border.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Border with vertical text

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
  border: 10px solid blue;
  border-block-color: red;
}
```

#### Results

{{EmbedLiveSample("Border_with_vertical_text", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Logical Properties and Values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
- This property maps to the physical border properties: {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, or {{cssxref("border-left-color")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
