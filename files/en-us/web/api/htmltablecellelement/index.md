---
title: HTMLTableCellElement
slug: Web/API/HTMLTableCellElement
page-type: web-api-interface
browser-compat: api.HTMLTableCellElement
---

{{ APIRef("HTML DOM") }}

The **`HTMLTableCellElement`** interface provides special properties and methods (beyond the regular {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating the layout and presentation of table cells, either header cells ({{HTMLElement("th")}}) or data cells ({{HTMLElement("td")}}), in an HTML document.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLTableCellElement.abbr")}}
  - : A string that can be used on `<th>` elements (not on {{HTMLElement("td")}}), specifying an alternative label for the header cell. This alternate label can be used in other contexts, such as when describing the headers that apply to a data cell. This is used to offer a shorter term for use by screen readers in particular; and is a valuable accessibility tool. Usually, the value of `abbr` is an abbreviation or acronym, but can be any text that's appropriate contextually.
- {{domxref("HTMLTableCellElement.cellIndex")}} {{ReadOnlyInline}}
  - : A number representing the cell's position in the {{domxref("HTMLTableRowElement.cells", "cells")}} collection of the {{HTMLElement("tr")}} the cell is contained within. If the cell doesn't belong to a `<tr>`, it returns `-1`.
- {{domxref("HTMLTableCellElement.colSpan")}}
  - : A positive number indicating the number of columns this cell must span; this lets the cell occupy space across multiple columns of the table. It reflects the [`colspan`](/en-US/docs/Web/HTML/Element/td#colspan) attribute.
- {{domxref("HTMLTableCellElement.headers")}} {{ReadOnlyInline}}
  - : A {{domxref("DOMTokenList")}} describing a list of `id` of {{HTMLElement("th")}} elements that represent headers associated with the cell. It reflects the [`headers`](/en-US/docs/Web/HTML/Element/td#headers) attribute.
- {{domxref("HTMLTableCellElement.rowSpan")}}
  - : A positive number indicating the number of rows this cell must span; this lets a cell occupy space across multiple rows of the table. It reflects the [`rowspan`](/en-US/docs/Web/HTML/Element/td#rowspan) attribute.
- {{domxref("HTMLTableCellElement.scope")}}
  - : A string indicating the scope of a {{HTMLElement("th")}} cell. Possible values for `scope` are: `col`, `colgroup`, `row`, `rowgroup`, or the empty string (`""`).

## Instance methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}_.

## Deprecated properties

> [!WARNING]
> These properties have been deprecated and should no longer be used. They are documented primarily to help understand older code bases.

- {{domxref("HTMLTableCellElement.align")}} {{deprecated_inline}}
  - : A string containing the value of the [`align`](/en-US/docs/Web/HTML/Element/td#align) attribute, if present, or empty string if not set. It can be used to set the alignment of the element's contents to the surrounding context of `"left"`, `"right"`, and `"center"`. Use the CSS {{cssxref("text-align")}} property instead.
- {{domxref("HTMLTableCellElement.axis")}} {{deprecated_inline}}
  - : A string containing a name grouping cells in virtual. It reflects the obsolete [`axis`](/en-US/docs/Web/HTML/Element/td#axis) attribute.
- {{domxref("HTMLTableCellElement.bgColor")}} {{deprecated_inline}}
  - : A string containing the background color of the cells. It reflects the obsolete [`bgColor`](/en-US/docs/Web/HTML/Element/td#bgcolor) attribute.
- {{domxref("HTMLTableCellElement.ch")}} {{deprecated_inline}}
  - : A string containing one single character. This character is the one to align all the cells of a column on. It reflects the [`char`](/en-US/docs/Web/HTML/Element/td#char) and defaults to the decimal points associated with the language, e.g. `'.'` for English, or `','` for French. This property was optional and was not very well supported.
- {{domxref("HTMLTableCellElement.chOff")}} {{deprecated_inline}}
  - : A string containing an integer indicating how many characters must be left at the right (for left-to-right scripts; or at the left for right-to-left scripts) of the character defined by `HTMLTableCellElement.ch`. This property was optional and was not very well supported.
- {{domxref("HTMLTableCellElement.height")}} {{deprecated_inline}}
  - : A string containing a length of pixel of the hinted height of the cell. It reflects the obsolete [`height`](/en-US/docs/Web/HTML/Element/td#height) attribute.
- {{domxref("HTMLTableCellElement.noWrap")}} {{deprecated_inline}}
  - : A boolean value reflecting the `nowrap` attribute and indicating if cell content can be broken into several lines.
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
