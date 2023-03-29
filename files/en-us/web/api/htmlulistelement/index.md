---
title: HTMLUListElement
slug: Web/API/HTMLUListElement
page-type: web-api-interface
browser-compat: api.HTMLUListElement
---

{{ APIRef("HTML DOM") }}

The **`HTMLUListElement`** interface provides special properties (beyond those defined on the regular {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating unordered list ({{HTMLElement("ul")}}) elements.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLUListElement.type")}} {{deprecated_inline}}
  - : A string value reflecting the [`type`](/en-US/docs/Web/HTML/Element/ul#type) and defining the kind of marker to be used to display. The values are browser dependent and have never been standardized.
- {{domxref("HTMLUListElement.compact")}} {{deprecated_inline}}
  - : A boolean value indicating that spacing between list items should be reduced. This property reflects the [`compact`](/en-US/docs/Web/HTML/Element/ul#compact) attribute only, it doesn't consider the {{cssxref("line-height")}} CSS property used for that behavior in modern pages.

## Instance methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("ul") }}.
