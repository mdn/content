---
title: "HTMLTableColElement: vAlign property"
short-title: vAlign
slug: Web/API/HTMLTableColElement/vAlign
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.HTMLTableColElement.vAlign
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

The **`vAlign`** property of the {{domxref("HTMLTableColElement")}} interface is a string indicating how to vertically align text in a table {{htmlelement("col")}} column element.

> **Note:** This property is deprecated, and CSS should be used to align text vertically in a column. Use the CSS {{cssxref("vertical-align")}} property, which takes precedence, to vertically align text in each column cell instead.
>
> As {{htmlelement("td")}} are not children of {{htmlelement("col")}}, you can't set it directly on a {{HTMLElement("col")}}element , you need to select the cells of the column using a `td:nth-child(n)` or similar (`n` is the column number).

## Value

The possible values are: `"top"`, `"middle"`, `"bottom"`, or `"baseline"`

- `top`
  - : Align the text to the top of the column. Use `vertical-align: top` instead.
- `center`
  - : Vertically center the text in the column. Synonym of `middle`. Use `vertical-align: middle` instead.
- `middle`
  - : Vertically center the text in the column. Use `vertical-align: middle` instead.
- `bottom`
  - : Align the text to the bottom of the column. Use `vertical-align: bottom` instead.
- `baseline`
  - : Similar to `top`, but align the baseline of the text as close to the top so no part of the character is outside of the cell.

## Examples

Use CSS `vertical-align`. As {{htmlelement("td")}} elements of a column are not children of {{htmlelement("col")}}, you can't set it directly on a {{HTMLElement("col")}}, you need to select the cells using a `td:nth-child(n)` or similar (`n` is the column number).

An [example](/en-US/docs/Web/CSS/:nth-child#styling_a_table_column) is available on the {{cssxref(":nth-child()")}} page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("vertical-align")}}
- {{cssxref(":nth-child()")}}
- [Styling tables](/en-US/docs/Learn/CSS/Building_blocks/Styling_tables)
