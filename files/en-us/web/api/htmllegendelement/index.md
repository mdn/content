---
title: HTMLLegendElement
slug: Web/API/HTMLLegendElement
page-type: web-api-interface
browser-compat: api.HTMLLegendElement
---

{{ APIRef("HTML DOM") }}

The **`HTMLLegendElement`** is an interface allowing to access properties of the {{HTMLElement("legend")}} elements. It inherits properties and methods from the {{domxref("HTMLElement")}} interface.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLLegendElement.align")}} {{deprecated_inline}}
  - : A string representing the alignment relative to the form set.
- {{domxref("HTMLLegendElement.form")}} {{ReadOnlyInline}}
  - : A {{domxref("HTMLFormElement")}} representing the form that this legend belongs to. If the legend has a fieldset element as its parent, then this attribute returns the same value as the **form** attribute on the parent fieldset element. Otherwise, it returns `null`.

## Instance methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("legend")}}
