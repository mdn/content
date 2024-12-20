---
title: "HTMLTableColElement: align property"
short-title: align
slug: Web/API/HTMLTableColElement/align
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.HTMLTableColElement.align
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

The **`align`** property of the {{domxref("HTMLTableColElement")}} interface is a string indicating how to horizontally align text in a table {{htmlelement("col")}} column element.

> [!NOTE]
> This property is deprecated, and CSS should be used to align text horizontally in a column. Use the CSS {{cssxref("text-align")}} property, which takes precedence, to horizontally align text in a column instead.
>
> As {{htmlelement("td")}} are not children of {{htmlelement("col")}}, you can't set it directly on a {{HTMLElement("col")}} element, you need to select the cells of the column using a `td:nth-last-child(n)` or similar (`n` is the column number, counting from the end).

## Value

The possible values are:

- `left`
  - : Align the text to the left. Use `text-align: left` applied directly to the {{HTMLElement("td")}} or {{HTMLElement("th")}} instead.
- `right`
  - : Align the text to the right. Use `text-align: right` applied directly to the `<td>` or `<th>` instead.
- `center`
  - : Center the text in the cell. Use `text-align: center` instead.

## Examples

Use CSS `text-align` on the {{htmlelement("td")}} and {{htmlelement("th")}} elements. As {{htmlelement("td")}} elements of a column are not children of {{htmlelement("col")}}, setting the `align` attribute in HTML or `text-align` property in CSS on a {{HTMLElement("col")}} element will have no effect. Instead, select the cells of a column using a [`:is(td, tr):nth-child(n)`](/en-US/docs/Web/CSS/:nth-child), where `n` is the column number, or similar.

An [example](/en-US/docs/Web/CSS/:nth-child#styling_a_table_column) is available on the {{cssxref(":nth-child()")}} page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("text-align")}}
- {{cssxref(":nth-child()")}}
- {{cssxref(":nth-last-child()")}}
- [Learn: Styling tables](/en-US/docs/Learn_web_development/Core/Styling_basics/Tables)
