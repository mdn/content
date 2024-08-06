---
title: "HTMLTableSectionElement: vAlign property"
short-title: vAlign
slug: Web/API/HTMLTableSectionElement/vAlign
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.HTMLTableSectionElement.vAlign
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

The **`vAlign`** property of the {{domxref("HTMLTableSectionElement")}} interface is a string indicating how to vertically align text in a {{htmlelement("thead")}}, {{htmlelement("tbody")}} or {{htmlelement("tfoot")}} table section. Individual rows and cells can override it.

> [!NOTE]
> This property is deprecated. Use the CSS {{cssxref("vertical-align")}} property to horizontally align text in section cells instead.

## Value

The possible values are: `"top"`, `"middle"`, `"bottom"`, or `"baseline"`

- `top`
  - : Align the text to the top of the cell. Use `vertical-align: top` instead.
- `center`
  - : Vertically center the text in the cell. Synonym of `middle`. Use `vertical-align: middle` instead.
- `middle`
  - : Vertically center the text in the cell. Use `vertical-align: middle` instead.
- `bottom`
  - : Align the text to the bottom of the cell. Use `vertical-align: bottom` instead.
- `baseline`
  - : Similar to `top`, but align the baseline of the text as close to the top so no part of the character is outside of the cell.

## Examples

Use CSS {{cssxref("vertical-align")}} instead, which takes precedence, as demonstrated in the [vertical alignment table cells](/en-US/docs/Web/CSS/vertical-align#vertical_alignment_in_a_table_cell) example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("vertical-align")}}
- [Styling tables](/en-US/docs/Learn/CSS/Building_blocks/Styling_tables)
