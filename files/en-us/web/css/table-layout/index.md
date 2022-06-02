---
title: table-layout
slug: Web/CSS/table-layout
tags:
  - CSS
  - CSS Property
  - CSS Tables
  - Reference
  - recipe:css-property
browser-compat: css.properties.table-layout
---
{{CSSRef}}

The **`table-layout`** CSS property sets the algorithm used to lay out {{htmlelement("table")}} cells, rows, and columns.

{{EmbedInteractiveExample("pages/css/table-layout.html")}}

## Syntax

```css
/* Keyword values */
table-layout: auto;
table-layout: fixed;

/* Global values */
table-layout: inherit;
table-layout: initial;
table-layout: revert;
table-layout: revert-layer;
table-layout: unset;
```

### Values

- `auto`
  - : By default, most browsers use an automatic table layout algorithm. The widths of the table and its cells are adjusted to fit the content.
- `fixed`

  - : Table and column widths are set by the widths of `table` and `col` elements or by the width of the first row of cells. Cells in subsequent rows do not affect column widths.

    Under the "fixed" layout method, the entire table can be rendered once the first table row has been downloaded and analyzed. This can speed up rendering time over the "automatic" layout method, but subsequent cell content might not fit in the column widths provided. Cells use the {{Cssxref("overflow")}} property to determine whether to clip any overflowing content, but only if the table has a known width; otherwise, they won't overflow the cells.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Fixed-width tables with text-overflow

This example uses a fixed table layout, combined with the {{cssxref("width")}} property, to restrict the table's width. The {{cssxref("text-overflow")}} property is used to apply an ellipsis to words that are too long to fit. If the table layout were `auto`, the table would grow to accommodate its contents, despite the specified `width`.

#### HTML

```html
<table>
  <tr><td>Ed</td><td>Wood</td></tr>
  <tr><td>Albert</td><td>Schweitzer</td></tr>
  <tr><td>Jane</td><td>Fonda</td></tr>
  <tr><td>William</td><td>Shakespeare</td></tr>
</table>
```

#### CSS

```css
table {
  table-layout: fixed;
  width: 120px;
  border: 1px solid red;
}

td {
  border: 1px solid blue;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

#### Result

{{EmbedLiveSample('Fixed-width_tables_with_text-overflow')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<table>`](/en-US/docs/Web/HTML/Element/table)
