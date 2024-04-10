---
title: "HTMLTableCellElement: vAlign property"
short-title: vAlign
slug: Web/API/HTMLTableCellElement/vAlign
page-type: web-api-instance-property
browser-compat: api.HTMLTableCellElement.vAlign
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

The **`HTMLTableCellElement.vAlign`** property is a string indicating how to vertically align text in the cell.

> **Note:** This property is deprecated and CSS should be used to horizontally align text in a cell. Use the {{cssxref("vertical-align")}} property instead.

## Value

The possible values are:

- `top`
  - : Align the text to the top of the cell. Use `vertical-align: top` instead.
- `middle`
  - : Vertically center the text in the cell (default value). Use `vertical-align: middle` instead.
- `bottom`
  - : Align the text to the bottom of the cell. Use `vertical-align: bottom` instead.

## Examples

Use CSS `vertical-align` instead, which takes precendence. An [example](/en-US/docs/Web/CSS/vertical-align#vertical_alignment_in_a_table_cell) is available on the {{cssxref("vertical-align")}} page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("vertical-align")}}
- [Styling tables](/en-US/docs/Learn/CSS/Building_blocks/Styling_tables)
