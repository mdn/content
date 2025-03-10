---
title: HTMLLabelElement
slug: Web/API/HTMLLabelElement
page-type: web-api-interface
browser-compat: api.HTMLLabelElement
---

{{ APIRef("HTML DOM") }}

The **`HTMLLabelElement`** interface gives access to properties specific to {{HTMLElement("label")}} elements. It inherits methods and properties from the base {{domxref("HTMLElement")}} interface.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLLabelElement.control")}} {{ReadOnlyInline}}
  - : A {{domxref("HTMLElement")}} representing the control with which the label is associated.
- {{domxref("HTMLLabelElement.form")}} {{ReadOnlyInline}}
  - : A {{domxref("HTMLFormElement")}} object representing the form with which the labeled control is associated, or `null` if there is no associated control, or if that control isn't associated with a form. In other words, this is just a shortcut for `HTMLLabelElement.control.form`.
- {{domxref("HTMLLabelElement.htmlFor")}}
  - : A string containing the ID of the labeled control. This reflects the [`for`](/en-US/docs/Web/HTML/Element/label#for) attribute.

> [!NOTE]
> To programmatically set the `for` attribute, use [`htmlFor`](/en-US/docs/Web/API/HTMLLabelElement/htmlFor).

## Instance methods

_No specific methods; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("label")}}
- {{HTMLElement("form")}}
- {{domxref("HTMLFormElement")}}
