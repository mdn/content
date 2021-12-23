---
title: HTMLLIElement
slug: Web/API/HTMLLIElement
tags:
  - API
  - HTML DOM
  - HTML DOM Interface
  - Interface
  - Reference
browser-compat: api.HTMLLIElement
---
{{ APIRef("HTML DOM") }}

The **`HTMLLIElement`** interface exposes specific properties and methods (beyond those defined by regular {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating list elements.

{{InheritanceDiagram(600, 120)}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLLIElement.type")}} {{deprecated_inline}}
  - : Is a {{domxref("DOMString")}} representing the type of the bullets, `"disc"`, `"square"` or `"circle"`. As the standard way of defining the list type is via the CSS {{cssxref("list-style-type")}} property, use the CSSOM methods to set it via a script.
- {{domxref("HTMLLIElement.value")}}
  - : Is a `long` indicating the ordinal position of the _list element_ inside a given {{HTMLElement("ol")}}. It reflects the {{htmlattrxref("value", "li")}} attribute of the HTML {{HTMLElement("li")}} element, and can be smaller than `0`. If the {{HTMLElement("li")}} element is not a child of an {{HTMLElement("ol")}} element, the property has no meaning.

## Methods

_No specific method; inherits properties from its parent, {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("li")}}
