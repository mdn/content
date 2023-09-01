---
title: HTMLTableRowElement
slug: Web/API/HTMLTableRowElement
page-type: web-api-interface
browser-compat: api.HTMLTableRowElement
---

{{ APIRef("HTML DOM") }}

The **`HTMLTableRowElement`** interface provides special properties and methods (beyond the {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating the layout and presentation of rows in an HTML table.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLTableRowElement.cells")}} {{ReadOnlyInline}}
  - : Returns a live {{domxref("HTMLCollection")}} containing the cells in the row. The `HTMLCollection` is live and is automatically updated when cells are added or removed.
- {{domxref("HTMLTableRowElement.rowIndex")}} {{ReadOnlyInline}}
  - : Returns a `long` value which gives the logical position of the row within the entire table. If the row is not part of a table, returns `-1`.
- {{domxref("HTMLTableRowElement.sectionRowIndex")}} {{ReadOnlyInline}}
  - : Returns a `long` value which gives the logical position of the row within the table section it belongs to. If the row is not part of a section, returns `-1`.

## Instance methods

_Inherits methods from its parent, {{domxref("HTMLElement")}}_.

- {{domxref("HTMLTableRowElement.deleteCell()", "deleteCell(index)")}}
  - : Removes the cell corresponding to `index`. If `index` is `-1`, the last cell of the row is removed. If `index` is less than `-1` or greater than the amount of cells in the collection, a {{DOMxRef("DOMException")}} with the value `IndexSizeError` is raised.
- {{domxref("HTMLTableRowElement.insertCell()", "insertCell(index)")}}
  - : Returns an {{DOMxRef("HTMLTableCellElement")}} representing a new cell of the row. The cell is inserted in the collection of cells immediately before the given `index` position in the row. If `index` is `-1`, the new cell is appended to the collection. If `index` is less than `-1` or greater than the number of cells in the collection, a {{DOMxRef("DOMException")}} with the value `IndexSizeError` is raised.

## Deprecated properties

> **Warning:** These properties have been {{Glossary("deprecated")}} and should no longer be used. They are documented primarily to help understand older code bases.

- {{domxref("HTMLTableRowElement.align")}} {{deprecated_inline}}
  - : A string containing an enumerated value reflecting the [`align`](/en-US/docs/Web/HTML/Element/tr#align) attribute. It indicates the alignment of the element's contents with respect to the surrounding context. The possible values are `"left"`, `"right"`, and `"center"`.
- {{domxref("HTMLTableRowElement.bgColor")}} {{deprecated_inline}}
  - : A string containing the background color of the cells. It reflects the obsolete [`bgColor`](/en-US/docs/Web/HTML/Element/tr#bgcolor) attribute.
- {{domxref("HTMLTableRowElement.ch")}} {{deprecated_inline}}
  - : A string containing one single character. This character is the one to align all the cell of a column on. It reflects the [`char`](/en-US/docs/Web/HTML/Element/tr#char) and default to the decimal points associated with the language, e.g. `'.'` for English, or `','` for French. This property was optional and was not very well supported.
- {{domxref("HTMLTableRowElement.chOff")}} {{deprecated_inline}}
  - : A string containing an integer indicating how many characters must be left at the right (for left-to-right scripts; or at the left for right-to-left scripts) of the character defined by `HTMLTableRowElement.ch`. This property was optional and was not very well supported.
- {{domxref("HTMLTableRowElement.vAlign")}} {{deprecated_inline}}
  - : A string representing an enumerated value indicating how the content of the cell must be vertically aligned. It reflects the [`valign`](/en-US/docs/Web/HTML/Element/tr#valign) attribute and can have one of the following values: `"top"`, `"middle"`, `"bottom"`, or `"baseline"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("tr")}}.
