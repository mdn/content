---
title: border-inline-end-width
slug: Web/CSS/border-inline-end-width
page-type: css-property
browser-compat: css.properties.border-inline-end-width
---

{{CSSRef}}

The **`border-inline-end-width`** [CSS](/en-US/docs/Web/CSS) property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, or {{cssxref("border-left-width")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-inline-end-width.html")}}

## Syntax

```css
/* <'border-width'> values */
border-inline-end-width: 2px;
border-inline-end-width: thick;

/* Global values */
border-inline-end-width: inherit;
border-inline-end-width: initial;
border-inline-end-width: revert;
border-inline-end-width: revert-layer;
border-inline-end-width: unset;
```

Related properties are {{cssxref("border-block-start-width")}}, {{cssxref("border-block-end-width")}}, and {{cssxref("border-inline-start-width")}}, which define the other border widths of the element.

### Values

- `<'border-width'>`
  - : The width of the border. See {{ cssxref("border-width") }}.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Applying a border with vertical text

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
  border-inline-end-width: 5px;
}
```

#### Results

{{EmbedLiveSample("Applying_a_border_with_vertical_text", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Logical Properties and Values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
- This property maps to one of the physical border properties: {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, and {{cssxref("border-left-width")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
