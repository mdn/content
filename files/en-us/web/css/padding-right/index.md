---
title: padding-right
slug: Web/CSS/padding-right
page-type: css-property
browser-compat: css.properties.padding-right
---

{{CSSRef}}

The **`padding-right`** [CSS](/en-US/docs/Web/CSS) property sets the width of the [padding area](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding_area) on the right of an element.

{{EmbedInteractiveExample("pages/css/padding-right.html")}}

An element's padding area is the space between its content and its border.

> **Note:** The {{cssxref("padding")}} property can be used to set paddings on all four sides of an element with a single declaration.

## Syntax

```css
/* <length> values */
padding-right: 0.5em;
padding-right: 0;
padding-right: 2cm;

/* <percentage> value */
padding-right: 10%;

/* Global values */
padding-right: inherit;
padding-right: initial;
padding-right: revert;
padding-right: revert-layer;
padding-right: unset;
```

The `padding-right` property is specified as a single value chosen from the list below. Unlike margins, negative values are not allowed for padding.

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

### Setting right padding using pixels and percentages

```css
.content {
  padding-right: 5%;
}
.sidebox {
  padding-right: 10px;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Introduction to the CSS basic box model](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- {{cssxref("padding-top")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} and the {{cssxref("padding")}} shorthand
- The mapped logical properties: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, and {{cssxref("padding-inline-end")}} and the shorthands {{cssxref("padding-block")}} and {{cssxref("padding-inline")}}
