---
title: border-block-end-color
slug: Web/CSS/border-block-end-color
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - Reference
  - border-block
  - border-block-color
  - border-block-end
  - border-block-end-color
  - recipe:css-property
browser-compat: css.properties.border-block-end-color
---
{{CSSRef}}

The **`border-block-end-color`** [CSS](/en-US/docs/Web/CSS) property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, or {{cssxref("border-left-color")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-block-end-color.html")}}

## Syntax

```css
border-block-end-color: yellow;
border-block-end-color: #F5F6F7;

/* Global values */
border-block-end-color: inherit;
border-block-end-color: initial;
border-block-end-color: revert;
border-block-end-color: revert-layer;
border-block-end-color: unset;
```

Related properties are {{cssxref("border-block-start-color")}}, {{cssxref("border-inline-start-color")}}, and {{cssxref("border-inline-end-color")}}, which define the other border colors of the element.

### Values

- `<'color'>`
  - : The color of the border. See {{cssxref("color")}}.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Border color with vertical text

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
  border-block-end-color: red;
}
```

#### Results

{{EmbedLiveSample("Border_color_with_vertical_text", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- This property maps to one of the physical border properties: {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, or {{cssxref("border-left-color")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
