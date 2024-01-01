---
title: border-block
slug: Web/CSS/border-block
page-type: css-shorthand-property
browser-compat: css.properties.border-block
---

{{CSSRef}}

The **`border-block`** [CSS](/en-US/docs/Web/CSS) property is a [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) for setting the individual logical block border property values in a single place in the style sheet.

{{EmbedInteractiveExample("pages/css/border-block.html")}}

`border-block` can be used to set the values for one or more of {{cssxref("border-block-width")}}, {{cssxref("border-block-style")}}, and {{cssxref("border-block-color")}} setting both the start and end in the block dimension at once. The physical borders to which it maps depends on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("border-top")}} and {{cssxref("border-bottom")}} or {{cssxref("border-right")}}, and {{cssxref("border-left")}} properties depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

The borders in the other dimension can be set with {{cssxref("border-inline")}}, which sets {{cssxref("border-inline-start")}}, and {{cssxref("border-inline-end")}}.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`border-block-color`](/en-US/docs/Web/CSS/border-block-color)
- [`border-block-style`](/en-US/docs/Web/CSS/border-block-style)
- [`border-block-width`](/en-US/docs/Web/CSS/border-block-width)

## Syntax

```css
border-block: 1px;
border-block: 2px dotted;
border-block: medium dashed blue;

/* Global values */
border-block: inherit;
border-block: initial;
border-block: revert;
border-block: revert-layer;
border-block: unset;
```

### Values

The `border-block` is specified with one or more of the following, in any order:

- `<'border-width'>`
  - : The width of the border. See {{cssxref("border-width")}}.
- `<'border-style'>`
  - : The line style of the border. See {{cssxref("border-style")}}.
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
  writing-mode: vertical-rl;
  border-block: 5px dashed blue;
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
- This property maps to one of the physical border properties: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, or {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
