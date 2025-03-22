---
title: "HTMLTableRowElement: align property"
short-title: align
slug: Web/API/HTMLTableRowElement/align
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.HTMLTableRowElement.align
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

The **`align`** property of the {{domxref("HTMLTableRowElement")}} interface is a string indicating how to horizontally align text in the {{htmlelement("tr")}} table row. Individual cells can override it.

> [!NOTE]
> This property is deprecated, and CSS should be used to align text horizontally in a cell. Use the CSS {{cssxref("text-align")}} property, which takes precedence, to horizontally align text in a row instead.

## Value

The possible values are:

- `left`
  - : Align the text to the left. Use `text-align: left` instead.
- `right`
  - : Align the text to the right. Use `text-align: right` instead.
- `center`
  - : Center the text in the cell. Use `text-align: center` instead.
- `justify`
  - : Spread the text across the cell. Use `text-align: justify` instead.
- `char`
  - : Never fully supported, align text to a specified character. Use `text-align: <string>`, where the string is a single character, when supported.

## Examples

Use CSS `text-align` instead. An [example](/en-US/docs/Web/CSS/text-align#table_alignment) is available on the {{cssxref("text-align")}} page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("text-align")}}
- [Learn: Styling tables](/en-US/docs/Learn_web_development/Core/Styling_basics/Tables)
