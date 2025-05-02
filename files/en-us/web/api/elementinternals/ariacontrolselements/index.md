---
title: "ElementInternals: ariaControlsElements property"
short-title: ariaControlsElements
slug: Web/API/ElementInternals/ariaControlsElements
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaControlsElements
---

{{APIRef("DOM")}}

The **`ariaControlsElements`** property of the {{domxref("ElementInternals")}} interface is an array containing the element (or elements) that are controlled by the element it is applied to.
For example, this might be set on a [combobox](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) to indicate the element that it pops up, or on a [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) to indicate the ID of the element it controls.

The [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) topic contains additional information about how the attribute and property should be used.

## Value

An array of subclasses of {{domxref("HTMLElement")}}, representing the elements that are controlled by this element.

When read, the returned array is a static and read-only.
When written, the assigned array is copied: subsequent changes to the array do not affect the value of the property.

## Description

The property is a flexible alternative to using the [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) attribute to set the controlled elements.
Unlike `aria-controls`, the elements assigned to this property do not have to have an [`id`](/en-US/docs/Web/HTML/Global_attributes/id) attribute.

The property reflects the [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) attribute when it is defined, but only for listed reference `id` values that match valid in-scope elements.
If the property is set, then the corresponding attribute is cleared.
For more information about reflected element references and scope see [Reflected element references](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Reflected attributes_ guide.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) attribute
- {{domxref("Element.ariaControlsElements")}}
- [Reflected element references](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Attribute reflection_ guide
