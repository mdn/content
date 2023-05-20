---
title: border-inline
slug: Web/CSS/border-inline
page-type: css-shorthand-property
browser-compat: css.properties.border-inline
---

{{CSSRef}}

The **`border-inline`** [CSS](/en-US/docs/Web/CSS) property is a [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) for setting the individual logical inline border property values in a single place in the style sheet.

{{EmbedInteractiveExample("pages/css/border-inline.html")}}

The physical borders to which `border-inline` maps depends on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("border-top")}} and {{cssxref("border-bottom")}} or {{cssxref("border-right")}}, and {{cssxref("border-left")}} properties, depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

The borders in the other dimension can be set with {{cssxref("border-block")}}, which sets {{cssxref("border-block-start")}}, and {{cssxref("border-block-end")}}.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`border-inline-color`](/en-US/docs/Web/CSS/border-inline-color)
- [`border-inline-style`](/en-US/docs/Web/CSS/border-inline-style)
- [`border-inline-width`](/en-US/docs/Web/CSS/border-inline-width)

## Syntax

```css
border-inline: 1px;
border-inline: 2px dotted;
border-inline: medium dashed blue;

/* Global values */
border-inline: inherit;
border-inline: initial;
border-inline: revert;
border-inline: revert-layer;
border-inline: unset;
```

### Values

The `border-inline` is specified with one or more of the following, in any order:

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
  border-inline: 5px dashed blue;
}
```

#### Results

{{EmbedLiveSample("Border_with_vertical_text", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Logical Properties and Values](/en-US/docs/Web/CSS/CSS_Logical_Properties)
- This property maps to one of the physical border properties: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, or {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
