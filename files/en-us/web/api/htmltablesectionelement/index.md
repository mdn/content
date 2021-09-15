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

{{InheritanceDiagram(600, 120)}}

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
  - : Removes the row at the given position in the section. If the given position is greater (or equal as it starts at zero) than the amount of rows in the section, or is smaller than `0`, it raises a {{domxref("DOMException")}} with the `IndexSizeError` value.
- {{domxref("HTMLTableSectionElement.insertRow()")}}
  - : Inserts a new row just before the given position in the section. If the given position is not given or is `-1`, it appends the row to the end of section. If the given position is greater (or equal as it starts at zero) than the amount of rows in the section, or is smaller than `-1`, it raises a {{domxref("DOMException")}} with the `IndexSizeError` value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML elements implementing this interface: {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, and {{HTMLElement("tbody")}}.
