---
title: HTMLTableSectionElement
slug: Web/API/HTMLTableSectionElement
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
browser-compat: api.HTMLTableSectionElement
---
{{ APIRef("HTML DOM") }}

The **`HTMLTableSectionElement`** interface provides special properties and methods (beyond the {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating the layout and presentation of sections, that is headers, footers and bodies, in an HTML table.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLTableSectionElement.align")}} {{deprecated_inline}}
  - : Is a {{domxref("DOMString")}} containing an enumerated value reflecting the {{htmlattrxref("align", "tr")}} attribute. It indicates the alignment of the element's contents with respect to the surrounding context. The possible values are `"left"`, `"right"`, and `"center"`.
- {{domxref("HTMLTableSectionElement.rows")}} {{readonlyInline}}
  - : Returns a live {{domxref("HTMLCollection")}} containing the rows in the section. The `HTMLCollection` is live and is automatically updated when rows are added or removed.
- {{domxref("HTMLTableSectionElement.ch")}} {{deprecated_inline}}
  - : Is a {{domxref("DOMString")}} containing one single chararcter. This character is the one to align all the cell of a column on. It reflects the {{htmlattrxref("char", "tr")}} and default to the decimal points associated with the language, e.g. `'.'` for English, or `','` for French. This property was optional and was not very well supported.
- {{domxref("HTMLTableSectionElement.chOff")}} {{deprecated_inline}}
  - : Is a {{domxref("DOMString")}} containing a integer indicating how many characters must be left at the right (for left-to-right scripts; or at the left for right-to-left scripts) of the character defined by `HTMLTableRowElement.ch`. This property was optional and was not very well supported.
- {{domxref("HTMLTableSectionElement.vAlign")}} {{deprecated_inline}}
  - : Is a {{domxref("DOMString")}} representing an enumerated value indicating how the content of the cell must be vertically aligned. It reflects the {{htmlattrxref("valign", "tr")}} attribute and can have one of the following values: `"top"`, `"middle"`, `"bottom"`, or `"baseline"`.

## Methods

_Inherits methods from its parent, {{domxref("HTMLElement")}}_.

- {{domxref("HTMLTableSectionElement.deleteRow()")}}
  - : Removes the row, corresponding to the `index` given in parameter, in the section. If the `index` value is `-1` the last row is removed; if it smaller than `-1` or greater than the amount of rows in the collection, a {{DOMxRef("DOMException")}} with the value `IndexSizeError` is raised.
- {{domxref("HTMLTableSectionElement.insertRow()")}}
  - : Returns an {{DOMxRef("HTMLTableRowElement")}} representing a new row of the section. It inserts it in the rows collection immediately before the {{HTMLElement("tr")}} element at the given `index` position. If the `index` is `-1`, the new row is appended to the collection. If the `index` is smaller than `-1` or greater than the number of rows in the collection, a {{DOMxRef("DOMException")}} with the value `IndexSizeError` is raised.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML elements implementing this interface: {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, and {{HTMLElement("tbody")}}.
