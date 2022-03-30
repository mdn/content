---
title: HTMLEmbedElement
slug: Web/API/HTMLEmbedElement
tags:
  - API
  - HTML DOM
  - Interface
  - NeedsNewLayout
  - Reference
browser-compat: api.HTMLEmbedElement
---
{{APIRef("HTML DOM")}}

The **`HTMLEmbedElement`** interface provides special properties (beyond the regular {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating {{HTMLElement("embed")}} elements.

> **Note:** This topic describes the `HTMLEmbedElement` interface as defined in the standard. It does not address earlier, non-standardized version of the interface.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLEmbedElement.align")}} {{deprecated_inline}}
  - : Is a {{domxref("DOMString")}} representing an enumerated property indicating alignment of the element's contents with respect to the surrounding context. The possible values are `"left"`, `"right"`, `"center"`, and `"justify"`.
- {{domxref("HTMLEmbedElement.height")}}
  - : Is a {{domxref("DOMString")}} reflecting the {{htmlattrxref("height", "embed")}} HTML attribute, containing the displayed height of the resource.
- {{domxref("HTMLEmbedElement.name")}} {{deprecated_inline}}
  - : Is a {{domxref("DOMString")}} representing the name of the embedded object.
- {{domxref("HTMLEmbedElement.src")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("src", "embed")}} HTML attribute, containing the address of the resource.
- {{domxref("HTMLEmbedElement.type")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("type", "embed")}} HTML attribute, containing the type of the resource.
- {{domxref("HTMLEmbedElement.width")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("width", "embed")}} HTML attribute, containing the displayed width of the resource.

## Methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("embed") }}
