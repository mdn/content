---
title: border-spacing
slug: Web/CSS/border-spacing
tags:
  - CSS
  - CSS Property
  - CSS Tables
  - Reference
  - recipe:css-property
browser-compat: css.properties.border-spacing
---
{{CSSRef}}

The **`border-spacing`** [CSS](/en-US/docs/Web/CSS) property sets the distance between the borders of adjacent cells in a {{htmlelement("table")}}. This property applies only when {{cssxref("border-collapse")}} is `separate`.

{{EmbedInteractiveExample("pages/css/border-spacing.html")}}

The `border-spacing` value is also used along the outside edge of the table, where the distance between the table's border and the cells in the first/last column or row is the sum of the relevant (horizontal or vertical) `border-spacing` and the relevant (top, right, bottom, or left) {{cssxref("padding")}} on the table.

> **Note:** The `border-spacing` property is equivalent to the deprecated `cellspacing` `<table>` attribute, except that it has an optional second value that can be used to set different horizontal and vertical spacing.

## Syntax

```css
/* <length> */
border-spacing: 2px;

/* horizontal <length> | vertical <length> */
border-spacing: 1cm 2em;

/* Global values */
border-spacing: inherit;
border-spacing: initial;
border-spacing: revert;
border-spacing: revert-layer;
border-spacing: unset;
```

The `border-spacing` property may be specified as either one or two values.

- When **one** `<length>` value is specified, it defines both the horizontal and vertical spacings between cells.
- When **two** `<length>` values are specified, the first value defines the horizontal spacing between cells (i.e., the space between cells in adjacent _columns_), and the second value defines the vertical spacing between cells (i.e., the space between cells in adjacent _rows_).

### Values

- {{cssxref("&lt;length&gt;")}}
  - : The size of the spacing as a fixed value.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Spacing and padding table cells

This example applies a spacing of `.5em` vertically and `1em` horizontally between a table's cells. Note how, along its outside edges, the table's `padding` values are added to its `border-spacing` values.

#### HTML

```html
<table>
  <tr>
    <td>1</td><td>2</td><td>3</td>
  </tr>
  <tr>
    <td>4</td><td>5</td><td>6</td>
  </tr>
  <tr>
    <td>7</td><td>8</td><td>9</td>
  </tr>
</table>
```

#### CSS

```css
table {
  border-spacing: 1em .5em;
  padding: 0 2em 1em 0;
  border: 1px solid orange;
}

td {
  width: 1.5em;
  height: 1.5em;
  background: #d2d2d2;
  text-align: center;
  vertical-align: middle;
}
```

#### Result

{{ EmbedLiveSample('Spacing_and_padding_table_cells', 400, 200) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("border-collapse")}}, {{cssxref("border-style")}}
- The `border-spacing` property alters the appearance of the {{htmlelement("table")}} HTML element.
