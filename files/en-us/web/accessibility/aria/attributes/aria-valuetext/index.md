---
title: 'aria-valuetext'
slug: Web/Accessibility/ARIA/Attributes/aria-valuetext
tags: 
  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-valuetext
  - Reference
---

The `aria-valuetext` attribute defines the human readable text alternative of `aria-valuenow` for a range widget.

## Description

Assistive technologies present [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) as numeric values. If a `progressbar` is at 8%, what does that mean? Numbers, even percentages, aren't always user friendly. The `aria-valuetext` provides a way of presenting the current value in a more user friendly, human understandable way. For example, a battery meter value might be conveyed as `aria-valuetext="8% (34 minutes) remaining"`.

The `aria-valuetext` attribute is used with the `aria-valuenow` attribute, not instead of, unless that value is not known.

The `aria-valuetext` is only needed when the numeric value of `aria-valuenow` is not meaningful. For example, a range's values are numeric but may be used for non-numeric values such as college class level. The values of `aria-valuenow` could range from 1 through 4, which indicate the position of each value in the value space, but the `aria-valuetext` would be one of the strings: "first year", "sophmore", "junior", and "senior". If the numeric value is meaningful, such as a spinner with `aria-valuenow="3"` for how many pizza slices you want to order, `aria-valuetext` is not needed.

When both the `aria-valuetext` and `aria-valuenow` are included, the `aria-valuetext` is announced. When there is no `aria-valuetext` attribute, assistive technologies will announce the `aria-valuenow` attribute for the current value.

## Values

- `<string>`
  - : A human readable text alternative of the `aria-valuenow` value.

## ARIAMixin API

- {{domxref("Element.ariaValueText")}}
  - : The  [`ariaValueText`](/en-US/docs/Web/API/Element/ariaValueText) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-valuetext` attribute.
- {{domxref("ElementInternals.ariaValueText")}}
  - : The  [`ariaValueText`](/en-US/docs/Web/API/ElementInternals/ariaValueText) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-valuetext` attribute.

## Associated roles

Used in roles:
- [`range`](/en-US/docs/Web/Accessibility/ARIA/Roles/range_role)
- [`separator`](/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role)
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
| {{SpecName("ARIA","#aria-valuetext","ARIA: aria-valuetext Attribute")}}  | {{Spec2('ARIA')}} |

## See Also

- [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>