---
title: "ElementInternals: ariaFlowToElements property"
short-title: ariaFlowToElements
slug: Web/API/ElementInternals/ariaFlowToElements
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaFlowToElements
---

{{APIRef("DOM")}}

The **`ariaFlowToElements`** property of the {{domxref("ElementInternals")}} interface is an array containing the element (or elements) that provide an alternate reading order of content, overriding the general default reading order at the user's discretion.
If just one element is provided this is the next element in the reading order.
If multiple elements are provided, then each element represents a possible path that should be offered to the user for selection.

The [`aria-flowto`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) topic contains additional information about how the attribute and property should be used.

## Value

An array of subclasses of {{domxref("HTMLElement")}}.

When read, the returned array is a static and read-only.
When written, the assigned array is copied: subsequent changes to the array do not affect the value of the property.

## Description

The property is a flexible alternative to using the [`aria-flowto`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) attribute to set an alternative reading order.
Unlike `aria-flowto`, the elements assigned to this property do not have to have an [`id`](/en-US/docs/Web/HTML/Global_attributes/id) attribute.

The property reflects the element's [`aria-flowto`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) attribute when it is defined, but only for listed reference `id` values that match valid in-scope elements.
If the property is set, then the corresponding attribute is cleared.
For more information about reflected element references and scope see [Reflected element references](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Reflected attributes_ guide.

## Examples

The examples in the following documents are relevant:

- {{domxref("Element.ariaFlowToElements")}} is the DOM equivalent of this property.
  It is used in the same way, but within the DOM instead of a shadow DOM and/or custom element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`aria-flowto`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) attribute
- {{domxref("Element.ariaFlowToElements")}}
- [Reflected element references](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Attribute reflection_ guide.
