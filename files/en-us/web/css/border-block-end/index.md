---
title: border-block-end
slug: Web/CSS/border-block-end
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - Reference
  - border-block
  - border-block-end-color
  - border-block-end-style
  - border-block-end-width
  - recipe:css-shorthand-property
browser-compat: css.properties.border-block-end
---
{{CSSRef}}

The **`border-block-end`** [CSS](/en-US/docs/Web/CSS) property is a [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) for setting the individual logical block-end border property values in a single place in the style sheet.

{{EmbedInteractiveExample("pages/css/border-block-end.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`border-block-end-color`](/en-US/docs/Web/CSS/border-block-end-color)
- [`border-block-end-style`](/en-US/docs/Web/CSS/border-block-end-style)
- [`border-block-end-width`](/en-US/docs/Web/CSS/border-block-end-width)

## Syntax

```css
border-block-end: 1px;
border-block-end: 2px dotted;
border-block-end: medium dashed blue;

/* Global values */
border-block-end: inherit;
border-block-end: initial;
border-block-end: revert;
border-block-end: revert-layer;
border-block-end: unset;
```

`border-block-end` can be used to set the values for one or more of {{cssxref("border-block-end-width")}}, {{cssxref("border-block-end-style")}}, and {{cssxref("border-block-end-color")}}. The physical border to which it maps depends on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, or {{cssxref("border-left")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

Related properties are {{cssxref("border-block-start")}}, {{cssxref("border-inline-start")}}, and {{cssxref("border-inline-end")}}, which define the other borders of the element.

### Values

The `border-block-end` is specified with one or more of the following, in any order:

- `<'border-width'>`
  - : The width of the border. See {{cssxref("border-width")}}.
- `<'border-style'>`
  - : The line style of the border. See {{cssxref("border-style")}}.
- `<'color'>`
  - : The color of the border. See {{cssxref("color")}}.

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
  border-block-end: 5px dashed blue;
}
```

#### Results

{{EmbedLiveSample("Border_with_vertical_text", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- This property maps to one of the physical border properties: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, or {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
