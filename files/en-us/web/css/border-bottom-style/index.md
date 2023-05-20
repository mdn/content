---
title: border-bottom-style
slug: Web/CSS/border-bottom-style
page-type: css-property
browser-compat: css.properties.border-bottom-style
---

{{CSSRef}}

The **`border-bottom-style`** [CSS](/en-US/docs/Web/CSS) property sets the line style of an element's bottom {{cssxref("border")}}.

{{EmbedInteractiveExample("pages/css/border-bottom-style.html")}}

> **Note:** The specification doesn't define how borders of different styles connect in the corners.

## Syntax

```css
/* Keyword values */
border-bottom-style: none;
border-bottom-style: hidden;
border-bottom-style: dotted;
border-bottom-style: dashed;
border-bottom-style: solid;
border-bottom-style: double;
border-bottom-style: groove;
border-bottom-style: ridge;
border-bottom-style: inset;
border-bottom-style: outset;

/* Global values */
border-bottom-style: inherit;
border-bottom-style: initial;
border-bottom-style: revert;
border-bottom-style: revert-layer;
border-bottom-style: unset;
```

The `border-bottom-style` property is specified as a single {{cssxref("line-style")}} keyword value.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Demonstrating all border styles

#### HTML

```html
<table>
  <tr>
    <td class="b1">none</td>
    <td class="b2">hidden</td>
    <td class="b3">dotted</td>
    <td class="b4">dashed</td>
  </tr>
  <tr>
    <td class="b5">solid</td>
    <td class="b6">double</td>
    <td class="b7">groove</td>
    <td class="b8">ridge</td>
  </tr>
  <tr>
    <td class="b9">inset</td>
    <td class="b10">outset</td>
  </tr>
</table>
```

#### CSS

```css
/* Define look of the table */
table {
  border-width: 3px;
  background-color: #52e385;
}
tr,
td {
  padding: 3px;
}

/* border-bottom-style example classes */
.b1 {
  border-bottom-style: none;
}
.b2 {
  border-bottom-style: hidden;
}
.b3 {
  border-bottom-style: dotted;
}
.b4 {
  border-bottom-style: dashed;
}
.b5 {
  border-bottom-style: solid;
}
.b6 {
  border-bottom-style: double;
}
.b7 {
  border-bottom-style: groove;
}
.b8 {
  border-bottom-style: ridge;
}
.b9 {
  border-bottom-style: inset;
}
.b10 {
  border-bottom-style: outset;
}
```

#### Result

{{ EmbedLiveSample('Demonstrating_all_border_styles', 300, 200) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The other style-related border properties: {{ Cssxref("border-left-style") }}, {{ Cssxref("border-right-style") }}, {{ Cssxref("border-top-style") }}, and {{ Cssxref("border-style") }}.
- The other bottom-border-related properties: {{ Cssxref("border-bottom") }}, {{ Cssxref("border-bottom-color") }}, and {{ Cssxref("border-bottom-width") }}.
