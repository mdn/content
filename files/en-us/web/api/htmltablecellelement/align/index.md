---
title: "HTMLTableCellElement: align property"
short-title: align
slug: Web/API/HTMLTableCellElement/align
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.HTMLTableCellElement.align
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

The **`align`** property of the {{domxref("HTMLTableCellElement")}} interface is a string indicating how to horizontally align text in the {{htmlelement("th")}} or {{htmlelement("td")}} table cell.

> [!NOTE]
> This property is deprecated, and CSS should be used to align text horizontally in a cell. Use the CSS {{cssxref("text-align")}} property, which takes precedence, to horizontally align text in a cell instead.

## Value

The possible values are:

- `left`
  - : Align the text to the left. Use `text-align: left` instead.
- `right`
  - : Align the text to the right. Use `text-align: right` instead.
- `center`
  - : Center the text in the cell. Use `text-align: center` instead.

## Examples

Use CSS `text-align` instead. An [example](/en-US/docs/Web/CSS/text-align#table_alignment) is available on the {{cssxref("text-align")}} page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("text-align")}}
- [Learn: Styling tables](/en-US/docs/Learn_web_development/Core/Styling_basics/Tables)
