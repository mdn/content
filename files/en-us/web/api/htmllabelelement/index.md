---
title: HTMLLabelElement
slug: Web/API/HTMLLabelElement
tags:
  - API
  - HTML DOM
  - HTMLLabelElement
  - Interface
  - Reference
browser-compat: api.HTMLLabelElement
---
{{ APIRef("HTML DOM") }}

The **`HTMLLabelElement`** interface gives access to properties specific to {{HTMLElement("label")}} elements. It inherits methods and properties from the base {{domxref("HTMLElement")}} interface.

{{InheritanceDiagram(600,120)}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLLabelElement.control")}} {{ReadOnlyInline}}
  - : Is a {{domxref("HTMLElement")}} representing the control with which the label is associated.
- {{domxref("HTMLLabelElement.form")}} {{ReadOnlyInline}}
  - : Is a {{domxref("HTMLFormElement")}} object representing the form with which the labeled control is associated, or `null` if there is no associated control, or if that control isn't associated with a form. In other words, this is just a shortcut for `HTMLLabelElement.control.form`.
- {{domxref("HTMLLabelElement.htmlFor")}}
  - : Is a string containing the ID of the labeled control. This reflects the {{htmlattrxref("for", "label")}} attribute.

> **Note:** To programmatically set the `for` attribute, use [`htmlFor`](/en-US/docs/Web/API/HTMLLabelElement/htmlFor).

## Methods

_No specific methods; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("label")}}
- {{HTMLElement("form")}}
- {{domxref("HTMLFormElement")}}
