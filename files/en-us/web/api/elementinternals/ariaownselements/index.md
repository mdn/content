---
title: "ElementInternals: ariaOwnsElements property"
short-title: ariaOwnsElements
slug: Web/API/ElementInternals/ariaOwnsElements
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaOwnsElements
---

{{APIRef("DOM")}}

The **`ariaOwnsElements`** property of the {{domxref("ElementInternals")}} interface is an array containing the element (or elements) that define a visual, functional, or contextual relationship between a parent element that it is applied to, and its child elements.
This is used when the shadow DOM hierarchy cannot be used to represent the relationship, and it would not otherwise be available to assistive technology,

The [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) topic contains additional information about how the attribute and property should be used.

## Value

An array of subclasses of {{domxref("HTMLElement")}}.

When read, the returned array is a static and read-only.
When written, the assigned array is copied: subsequent changes to the array do not affect the value of the property.

## Description

The property is a flexible alternative to using the [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) attribute to indicate ownership of an element.
Unlike `aria-owns`, the elements assigned to this property do not have to have an [`id`](/en-US/docs/Web/HTML/Reference/Global_attributes/id) attribute.

The property reflects the element's [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) attribute when it is defined, but only for listed reference `id` values that match valid in-scope elements.
If the property is set, then the corresponding attribute is cleared.
For more information about reflected element references and scope see [Reflected element references](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Reflected attributes_ guide.

## Examples

The examples in the following documents are relevant:

- {{domxref("Element.ariaOwnsElements")}} is the DOM equivalent of this property.
  It is used in the same way, but within the DOM instead of a shadow DOM and/or custom element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) attribute
- {{domxref("Element.ariaOwnsElements")}}
- [Reflected element references](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Attribute reflection_ guide.
