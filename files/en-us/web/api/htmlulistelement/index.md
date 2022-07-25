---
title: HTMLUListElement
slug: Web/API/HTMLUListElement
page-type: web-api-interface
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
browser-compat: api.HTMLUListElement
---
{{ APIRef("HTML DOM") }}

The **`HTMLUListElement`** interface provides special properties (beyond those defined on the regular {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating unordered list elements.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLUListElement.type")}} {{deprecated_inline}}
  - : A string value reflecting the {{htmlattrxref("type", "ul")}} and defining the kind of marker to be used to display. The values are browser dependent and have never been standardized.
- {{domxref("HTMLUListElement.compact")}} {{deprecated_inline}}
  - : A boolean value indicating that spacing between list items should be reduced. This property reflects the {{htmlattrxref("compact", "ul")}} attribute only, it doesn't consider the {{cssxref("line-height")}} CSS property used for that behavior in modern pages.

## Methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("ul") }}.
