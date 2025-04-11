---
title: "ElementInternals: ariaDetailsElements property"
short-title: ariaDetailsElements
slug: Web/API/ElementInternals/ariaDetailsElements
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaDetailsElements
---

{{APIRef("DOM")}}

The **`ariaDetailsElements`** property of the {{domxref("ElementInternals")}} interface is an array containing the element (or elements) that provide an accessible details for the element it is applied to.
The accessible details are similar to the accessible description (see {{domxref("ElementInternals/ariaDescribedByElements","ariaDescribedByElements")}}), but provides more verbose information.

The [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) topic contains additional information about how the attribute and property should be used.

## Value

An array of elements.
The inner text of these elements can be joined with spaces to get the accessible details.

## Description

The property is a flexible alternative to using the [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) attribute to set the accessible details information.
Unlike `aria-details`, the elements assigned to this property can be selected: they do not have to have an `id`.
This can be convenient as it avoids having to unnecessarily create ids for elements in order to use them for the details information.

The property reflects the element's [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) attribute when it is defined, but only for listed reference `id` values that match valid in-scope elements.
If the property is set, then the corresponding attribute is cleared.
For more information about reflected element references and scope see [Reflected element references](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Reflected attributes_ guide.

## Examples

The examples in the following documents are relevant:

- {{domxref("Element.ariaDetailsElements")}} is the DOM equivalent of this property.
  It is used in the same way, but within the DOM instead of a shadow DOM and/or custom element.
- [Reflected element reference examples](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#setting_and_getting_reflected_element_references) in the _Attribute reflection_ guide demonstrates the mapping between references in the attribute and elements properties.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) attribute
- {{domxref("Element.ariaDetailsElements")}}
- [Reflected element references](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Attribute reflection_ guide.
