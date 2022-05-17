---
title: margin-top
slug: Web/CSS/margin-top
tags:
  - CSS
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.margin-top
---
{{CSSRef}}

The **`margin-top`** [CSS](/en-US/docs/Web/CSS) property sets the [margin area](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#margin_area) on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

{{EmbedInteractiveExample("pages/css/margin-top.html")}}

This property has no effect on _non-[replaced](/en-US/docs/Web/CSS/Replaced_element)_ inline elements, such as {{HTMLElement("span")}} or {{HTMLElement("code")}}.

## Syntax

```css
/* <length> values */
margin-top: 10px;  /* An absolute length */
margin-top: 1em;   /* relative to the text size */
margin-top: 5%;    /* relative to the nearest block container's width */

/* Keyword values */
margin-top: auto;

/* Global values */
margin-top: inherit;
margin-top: initial;
margin-top: revert;
margin-top: revert-layer;
margin-top: unset;
```

The `margin-top` property is specified as the keyword `auto`, or a `<length>`, or a `<percentage>`. Its value can be positive, zero, or negative.

### Values

- {{cssxref("&lt;length&gt;")}}
  - : The size of the margin as a fixed value.
- {{cssxref("&lt;percentage&gt;")}}
  - : The size of the margin as a percentage, relative to the inline size (_width_ in a horizontal language, defined by {{cssxref("writing-mode")}}) of the [containing block](/en-US/docs/Web/CSS/Containing_block).
- `auto`
  - : The browser selects a suitable value to use. See {{cssxref("margin")}}.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting positive and negative top margins

```css
.content { margin-top:   5%; }
.sidebox { margin-top: 10px; }
.logo    { margin-top: -5px; }
#footer  { margin-top:  1em; }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, and {{cssxref("margin-left")}} and the {{cssxref("margin")}} shorthand
- The mapped logical properties: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, and {{cssxref("margin-inline-end")}} and the shorthands {{cssxref("margin-block")}} and {{cssxref("margin-inline")}}
