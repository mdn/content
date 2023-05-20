---
title: border-inline-start-width
slug: Web/CSS/border-inline-start-width
page-type: css-property
browser-compat: css.properties.border-inline-start-width
---

{{CSSRef}}

The **`border-inline-start-width`** [CSS](/en-US/docs/Web/CSS) property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, or {{cssxref("border-left-width")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-inline-start-width.html")}}

## Syntax

```css
/* <'border-width'> values */
border-inline-start-width: 5px;
border-inline-start-width: thick;

/* Global values */
border-inline-start-width: inherit;
border-inline-start-width: initial;
border-inline-start-width: revert;
border-inline-start-width: revert-layer;
border-inline-start-width: unset;
```

Related properties are {{cssxref("border-block-start-width")}}, {{cssxref("border-block-end-width")}}, and {{cssxref("border-inline-end-width")}}, which define the other border widths of the element.

### Values

- `<'border-width'>`
  - : The width of the border. See {{ cssxref("border-width") }}.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  border: 1px solid blue;
  border-inline-start-width: 5px;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Logical Properties and Values](/en-US/docs/Web/CSS/CSS_Logical_Properties)
- This property maps to one of the physical border properties: {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, and {{cssxref("border-left-width")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
