---
title: table-layout
slug: Web/CSS/table-layout
page-type: css-property
browser-compat: css.properties.table-layout
---

{{CSSRef}}

The **`table-layout`** [CSS](/en-US/docs/Web/CSS) property sets the algorithm used to lay out {{htmlelement("table")}} cells, rows, and columns.

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

  - : The automatic table layout algorithm is used. The widths of the table and its cells are adjusted to fit the content. Most browsers use this algorithm by default.

- `fixed`

  - : The fixed table layout algorithm is used. When using this keyword, the table's width _needs to be specified explicitly_ using the [`width`](/en-US/docs/Web/CSS/width) property. If the value of the `width` property is set to `auto` or is not specified, the browser uses the automatic table layout algorithm, in which case the `fixed` value has no effect.\
    The fixed table layout algorithm is faster than the automatic layout algorithm because the horizontal layout of the table depends only on the table's width, the width of the columns, and borders or cell spacing. The horizontal layout doesn't depend on the contents of the cells because it depends only on explicitly set widths.

    In the fixed table layout algorithm, the width of each column is determined as follows:

    - A column element with explicit width sets the width for that column.
    - Otherwise, a cell in the first row with explicit width determines the width for that column.
    - Otherwise, the column gets the width from the shared remaining horizontal space.

    With this algorithm the entire table can be rendered once the first table row has been downloaded and analyzed. This can speed up rendering time over the "automatic" layout method, but subsequent cell content might not fit in the column widths provided. Cells use the {{Cssxref("overflow")}} property to determine whether to clip any overflowing content, but only if the table has a known width; otherwise, they won't overflow the cells.

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
  <tr>
    <td>Ed</td>
    <td>Wood</td>
  </tr>
  <tr>
    <td>Albert</td>
    <td>Schweitzer</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Fonda</td>
  </tr>
  <tr>
    <td>William</td>
    <td>Shakespeare</td>
  </tr>
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
- [CSS table](/en-US/docs/Web/CSS/CSS_table) module
