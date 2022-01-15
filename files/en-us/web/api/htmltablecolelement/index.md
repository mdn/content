---
title: HTMLTableColElement
slug: Web/API/HTMLTableColElement
tags:
  - API
  - HTML DOM
  - Interface
  - NeedsNewLayout
  - Reference
browser-compat: api.HTMLTableColElement
---
{{ APIRef("HTML DOM") }}

The **`HTMLTableColElement`** interface provides special properties (beyond the {{domxref("HTMLElement")}} interface it also has available to it inheritance) for manipulating single or grouped table column elements.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}_.

- {{domxref("HTMLTableColElement.align")}} {{deprecated_inline}}
  - : Is a {{domxref("DOMString")}} that indicates the horizontal alignment of the cell data in the column.
- {{domxref("HTMLTableColElement.ch")}} {{deprecated_inline}}
  - : Is a {{domxref("DOMString")}} representing the alignment character for cell data.
- {{domxref("HTMLTableColElement.chOff")}} {{deprecated_inline}}
  - : Is a {{domxref("DOMString")}} representing the offset for the alignment character.
- {{domxref("HTMLTableColElement.span")}}
  - : Is an `unsigned long` that reflects the {{htmlattrxref("span", "col")}} HTML attribute, indicating the number of columns to apply this object's attributes to. Must be a positive integer.
- {{domxref("HTMLTableColElement.vAlign")}} {{deprecated_inline}}
  - : Is a {{domxref("DOMString")}} that indicates the vertical alignment of the cell data in the column.
- {{domxref("HTMLTableColElement.width")}} {{deprecated_inline}}
  - : Is a {{domxref("DOMString")}} representing the default column width.

## Methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}_.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("col")}} and {{HTMLElement("colgroup")}}.
