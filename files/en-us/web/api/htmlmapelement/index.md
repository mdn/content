---
title: HTMLMapElement
slug: Web/API/HTMLMapElement
page-type: web-api-interface
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
browser-compat: api.HTMLMapElement
---
{{ APIRef("HTML DOM") }}

The **`HTMLMapElement`** interface provides special properties and methods (beyond those of the regular object {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating the layout and presentation of map elements.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLMapElement.name")}}
  - : A string representing the {{HTMLElement("map")}} element for referencing it other context. If the `id` attribute is set, this must have the same value; and it cannot be `null` or empty.
- {{domxref("HTMLMapElement.areas")}} {{ReadOnlyInline}}
  - : A live {{domxref("HTMLCollection")}} representing the {{HTMLElement("area")}} elements associated to this {{HTMLElement("map")}}.

## Methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}} ._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML element implementing this interface: {{ HTMLElement("map") }}.
