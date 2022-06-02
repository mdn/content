---
title: padding-top
slug: Web/CSS/padding-top
tags:
  - CSS
  - CSS Padding
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.padding-top
---
{{CSSRef}}

The **`padding-top`** [CSS](/en-US/docs/Web/CSS) property sets the height of the [padding area](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding_area) on the top of an element.

{{EmbedInteractiveExample("pages/css/padding-top.html")}}

An element's padding area is the space between its content and its border.

![The effect of the CSS padding-top property on the element box](padding-top.svg)

> **Note:** The {{cssxref("padding")}} property can be used to set paddings on all four sides of an element with a single declaration.

## Syntax

```css
/* <length> values */
padding-top: 0.5em;
padding-top: 0;
padding-top: 2cm;

/* <percentage> value */
padding-top: 10%;

/* Global values */
padding-top: inherit;
padding-top: initial;
padding-top: revert;
padding-top: revert-layer;
padding-top: unset;
```

The `padding-top` property is specified as a single value chosen from the list below. Unlike margins, negative values are not allowed for padding.

### Values

- {{cssxref("&lt;length&gt;")}}
  - : The size of the padding as a fixed value. Must be nonnegative.
- {{cssxref("&lt;percentage&gt;")}}
  - : The size of the padding as a percentage, relative to the inline size (_width_ in a horizontal language, defined by {{cssxref("writing-mode")}}) of the [containing block](/en-US/docs/Web/CSS/Containing_block). Must be nonnegative.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting top padding using pixels and percentages

```css
.content { padding-top: 5%; }
.sidebox { padding-top: 10px; }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Introduction to the CSS basic box model](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} and the {{cssxref("padding")}} shorthand
- The mapped logical properties: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, and {{cssxref("padding-inline-end")}} and the shorthands {{cssxref("padding-block")}} and {{cssxref("padding-inline")}}
