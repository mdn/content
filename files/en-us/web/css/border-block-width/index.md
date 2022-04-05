---
title: border-block-width
slug: Web/CSS/border-block-width
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.border-block-width
---
{{CSSRef}}

The **`border-block-width`** [CSS](/en-US/docs/Web/CSS) property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("border-top-width")}} and {{cssxref("border-bottom-width")}}, or {{cssxref("border-left-width")}}, and {{cssxref("border-right-width")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-block-width.html")}}

The border width in the other dimension can be set with {{cssxref("border-inline-width")}}, which sets {{cssxref("border-inline-start-width")}}, and {{cssxref("border-inline-end-width")}}.

## Syntax

```css
/* <'border-width'> values */
border-block-width: 5px;
border-block-width: thick;

/* Global values */
border-block-width: inherit;
border-block-width: initial;
border-block-width: revert;
border-block-width: revert-layer;
border-block-width: unset;
```

### Values

- `<'border-width'>`
  - : The width of the border. See {{ cssxref("border-width") }}.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Border width with vertical text

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
  border: 1px solid blue;
  border-block-width: 5px;
}
```

#### Results

{{EmbedLiveSample("Border_width_with_vertical_text", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- This property maps to one of the physical border properties: {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, and {{cssxref("border-left-width")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
