---
title: HTMLLIElement
slug: Web/API/HTMLLIElement
page-type: web-api-interface
browser-compat: api.HTMLLIElement
---

{{ APIRef("HTML DOM") }}

The **`HTMLLIElement`** interface exposes specific properties and methods (beyond those defined by regular {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating list elements.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLLIElement.type")}} {{deprecated_inline}}
  - : A string representing the type of the bullets, `"disc"`, `"square"` or `"circle"`. As the standard way of defining the list type is via the CSS {{cssxref("list-style-type")}} property, use the CSSOM methods to set it via a script.
- {{domxref("HTMLLIElement.value")}}
  - : An integer indicating the ordinal position of the _list element_ inside a given {{HTMLElement("ol")}}. It reflects the `value` attribute of the HTML {{HTMLElement("li")}} element, and can be smaller than `0`. If the {{HTMLElement("li")}} element is not a child of an {{HTMLElement("ol")}} element, the property has no meaning.

## Instance methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("li")}}
