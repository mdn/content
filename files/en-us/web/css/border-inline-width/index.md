---
title: border-inline-width
slug: Web/CSS/border-inline-width
page-type: css-property
browser-compat: css.properties.border-inline-width
---

{{CSSRef}}

The **`border-inline-width`** [CSS](/en-US/docs/Web/CSS) property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("border-top-width")}} and {{cssxref("border-bottom-width")}}, or {{cssxref("border-left-width")}}, and {{cssxref("border-right-width")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-inline-width.html")}}

The border width in the other dimension can be set with {{cssxref("border-block-width")}}, which sets {{cssxref("border-block-start-width")}}, and {{cssxref("border-block-end-width")}}.

## Syntax

```css
/* <'border-width'> values */
border-inline-width: 5px 10px;
border-inline-width: 5px;
border-inline-width: thick;

/* Global values */
border-inline-width: inherit;
border-inline-width: initial;
border-inline-width: revert;
border-inline-width: revert-layer;
border-inline-width: unset;
```

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
  border-inline-width: 5px 10px;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Logical Properties and Values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
- This property maps to one of the physical border properties: {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, and {{cssxref("border-left-width")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
