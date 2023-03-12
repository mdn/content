---
title: HTMLTableCellElement
slug: Web/API/HTMLTableCellElement
page-type: web-api-interface
browser-compat: api.HTMLTableCellElement
---

{{ APIRef("HTML DOM") }}

The **`HTMLTableCellElement`** interface provides special properties and methods (beyond the regular {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating the layout and presentation of table cells, either header cells ({{HTMLElement("th")}})) or data cells ({{HTMLElement("td")}}), in an HTML document.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLTableCellElement.abbr")}}
  - : A string which can be used on `<th>` elements (not on {{HTMLElement("td")}}), specifying an alternative label for the header cell. This alternate label can be used in other contexts, such as when describing the headers that apply to a data cell. This is used to offer a shorter term for use by screen readers in particular, and is a valuable accessibility tool. Usually the value of `abbr` is an abbreviation or acronym, but can be any text that's appropriate contextually.
- {{domxref("HTMLTableCellElement.cellIndex")}} {{ReadOnlyInline}}
  - : A long integer representing the cell's position in the {{domxref("HTMLTableRowElement.cells", "cells")}} collection of the {{HTMLElement("tr")}} the cell is contained within. If the cell doesn't belong to a `<tr>`, it returns `-1`.
- {{domxref("HTMLTableCellElement.colSpan")}}
  - : An unsigned long integer indicating the number of columns this cell must span; this lets the cell occupy space across multiple columns of the table. It reflects the [`colspan`](/en-US/docs/Web/HTML/Element/td#colspan) attribute.
- {{domxref("HTMLTableCellElement.headers")}} {{ReadOnlyInline}}
  - : A {{domxref("DOMTokenList")}} describing a list of `id` of {{HTMLElement("th")}} elements that represents headers associated with the cell. It reflects the [`headers`](/en-US/docs/Web/HTML/Element/td#headers) attribute.
- {{domxref("HTMLTableCellElement.rowSpan")}}
  - : An unsigned long integer indicating the number of rows this cell must span; this lets a cell occupy space across multiple rows of the table. It reflects the [`rowspan`](/en-US/docs/Web/HTML/Element/td#rowspan) attribute.
- {{domxref("HTMLTableCellElement.scope")}}

  - : A string indicating the scope of a {{HTMLElement("th")}} cell. Header cells can be configured, using the `scope` property, the apply to a specified row or column, or to the not-yet-scoped cells within the current row group (that is, the same ancestor {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, or {{HTMLElement("tfoot")}} element). If no value is specified for `scope`, the header is not associated directly with cells in this way. Permitted values for `scope` are:

    - `col`
      - : The header cell applies to the following cells in the same column (or columns, if `colspan` is used as well), until either the end of the column or another `<th>` in the column establishes a new scope.
    - `colgroup`
      - : The header cell applies to all cells in the current column group that do not already have a scope applied to them. This value is only allowed if the cell is in a column group.
    - `row`
      - : The header cell applies to the following cells in the same row (or rows, if `rowspan` is used as well), until either the end of the row or another `<th>` in the same row establishes a new scope.
    - `rowgroup`
      - : The header cell applies to all cells in the current row group that do not already have a scope applied to them. This value is only allowed if the cell is in a row group.
    - The empty string (`""`)
      - : The header cell has no predefined scope; the user agent will establish the scope based on contextual clues.

## Instance methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}_.

## Deprecated properties

> **Warning:** These properties have been {{Glossary("deprecated")}} and should no longer be used. They are documented primarily to help understand older code bases.

- {{domxref("HTMLTableCellElement.align")}} {{deprecated_inline}}
  - : A string containing an enumerated value reflecting the [`align`](/en-US/docs/Web/HTML/Element/td#align) attribute. It indicates the alignment of the element's contents with respect to the surrounding context. The possible values are `"left"`, `"right"`, and `"center"`.
- {{domxref("HTMLTableCellElement.axis")}} {{deprecated_inline}}
  - : A string containing a name grouping cells in virtual. It reflects the obsolete [`axis`](/en-US/docs/Web/HTML/Element/td#axis) attribute.
- {{domxref("HTMLTableCellElement.bgColor")}} {{deprecated_inline}}
  - : A string containing the background color of the cells. It reflects the obsolete [`bgColor`](/en-US/docs/Web/HTML/Element/td#bgcolor) attribute.
- {{domxref("HTMLTableCellElement.ch")}} {{deprecated_inline}}
  - : A string containing one single character. This character is the one to align all the cell of a column on. It reflects the [`char`](/en-US/docs/Web/HTML/Element/td#char) and default to the decimal points associated with the language, e.g. `'.'` for English, or `','` for French. This property was optional and was not very well supported.
- {{domxref("HTMLTableCellElement.chOff")}} {{deprecated_inline}}
  - : A string containing an integer indicating how many characters must be left at the right (for left-to-right scripts; or at the left for right-to-left scripts) of the character defined by `HTMLTableCellElement.ch`. This property was optional and was not very well supported.
- {{domxref("HTMLTableCellElement.height")}} {{deprecated_inline}}
  - : A string containing a length of pixel of the hinted height of the cell. It reflects the obsolete [`height`](/en-US/docs/Web/HTML/Element/td#height) attribute.
- {{domxref("HTMLTableCellElement.noWrap")}} {{deprecated_inline}}
  - : A boolean value reflecting the [`nowrap`](/en-US/docs/Web/HTML/Element/td#nowrap) attribute and indicating if cell content can be broken in several lines.
- {{domxref("HTMLTableCellElement.vAlign")}} {{deprecated_inline}}
  - : A string representing an enumerated value indicating how the content of the cell must be vertically aligned. It reflects the [`valign`](/en-US/docs/Web/HTML/Element/td#valign) attribute and can have one of the following values: `"top"`, `"middle"`, `"bottom"`, or `"baseline"`. Use the CSS {{cssxref("vertical-align")}} property instead.
- {{domxref("HTMLTableCellElement.width")}} {{deprecated_inline}}
  - : A string specifying the number of pixels wide the cell should be drawn, if possible. This property reflects the also obsolete [`width`](/en-US/docs/Web/HTML/Element/td#width) attribute. Use the CSS {{cssxref("width")}} property instead.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML elements implementing this interface: {{HTMLElement("th")}} and {{HTMLElement("td")}}.
