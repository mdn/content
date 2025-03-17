---
title: "ElementInternals: ariaErrorMessageElements property"
short-title: ariaErrorMessageElements
slug: Web/API/ElementInternals/ariaErrorMessageElements
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaErrorMessageElements
---

{{APIRef("DOM")}}

The **`ariaErrorMessageElements`** property of the {{domxref("ElementInternals")}} interface is an array containing the element (or elements) that provide an error message for the element it is applied to.

The [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) topic contains additional information about how the attribute and property should be used.

## Value

An array of elements.
The inner text of these elements can be joined with spaces to get the error message.

## Description

The property is a flexible alternative to using the [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) attribute to set the error message for an element.
Unlike `aria-errormessage`, the elements assigned to this property can be selected: they do not have to have an `id`.
This can be convenient as it avoids having to unnecessarily create ids for elements in order to assign them as the message.

The property reflects the element's [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) attribute when it is defined, but only for listed reference `id` values that match valid in-scope elements.
If the property is set, then the corresponding attribute is cleared.
For more information about reflected element references and scope see [Reflected element references](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Reflected attributes_ guide.

## Examples

The examples in the following documents are relevant:

- {{domxref("Element.ariaErrorMessageElements")}} is the DOM equivalent of this property.
  It is used in the same way, but within the DOM instead of a shadow DOM and/or custom element.
- [Reflected element reference examples](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#setting_and_getting_reflected_element_references) in the _Attribute reflection_ guide demonstrates the mapping between references in the attribute and elements properties.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) attribute
- {{domxref("Element.ariaErrorMessageElements")}}
- [Reflected element references](2/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Attribute reflection_ guide.
