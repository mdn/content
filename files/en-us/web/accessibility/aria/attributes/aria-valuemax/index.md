---
title: 'aria-valuemax'
slug: Web/Accessibility/ARIA/Attributes/aria-valuemax
tags: 
  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-valuemax
  - Reference
---

The `aria-valuemax` attribute defines the maximum allowed value for a range widget.

## Description

The `aria-valuemax` attribute defines the maximum value allowed for range widgets. It is similar to the `max` attribute of {{HTMLElement('progress')}}, {{HTMLElement('meter')}}, and {{HTMLElement('input')}} of type [`range`](en-US/docs/Web/HTML/Element/input/range), [`number`](en-US/docs/Web/HTML/Element/input/number) and all the date-time types.

When creating a range type role, including [`meter`](/en-US/docs/Web/Accessibility/ARIA/Roles/meter_role), [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/scrollbar_role), [`slider`](/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role), and [`spinbutton`](/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role) on a non-semantic element, the `aria-valuemax` enables defining a maximum that is more than the minimum value. The minimum value is defined with [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin).

> **Warning:** The [`range`](/en-US/docs/Web/Accessibility/ARIA/Roles/range_role) role itself should **NOT** be used as it is an ["abstract"](en-US/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles). The `aria-valuemax` attribute is used on all of the range roles subtypes.

Declaring the maximum and minimum values allows assistive technologies to convey the size of the range to users.

## Values

- `<number>`
  - : A decimal number that is greater than the minimum value.

## ARIAMixin API

- {{domxref("Element.ariaValueMax")}}
  - : The  [`ariaValueMax`](/en-US/docs/Web/API/Element/ariaValueMax) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-valuemax` attribute.
- {{domxref("ElementInternals.ariaValueMax")}}
  - : The  [`ariaValueMax`](/en-US/docs/Web/API/ElementInternals/ariaValueMax) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-valuemax` attribute.

## Associated roles

Used in roles:
- [`meter`](/en-US/docs/Web/Accessibility/ARIA/Roles/meter_role)
- [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`separator`](/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role)
- [`slider`](/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)

Inherited into roles:
- [`meter`](/en-US/docs/Web/Accessibility/ARIA/Roles/meter_role)
- [`progressbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
- [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`slider`](/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)

## Specifications

| Specification | Status |
| ------------- | ------  |
| {{SpecName("ARIA","#aria-valuemax","ARIA: aria-valuemax Attribute")}}  | {{Spec2('ARIA')}} |

## See Also

- [`range` role](/en-US/docs/Web/Accessibility/ARIA/Roles/range_role)
- [`<input type="range>` element `max` attribute](en-US/docs/Web/HTML/Element/input/range#max) attribute
- [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
- [`aria-aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-aria-valuenow).

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>