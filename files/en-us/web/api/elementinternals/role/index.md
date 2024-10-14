---
title: "ElementInternals: role property"
short-title: role
slug: Web/API/ElementInternals/role
page-type: web-api-instance-property
browser-compat: api.ElementInternals.role
---

{{APIRef("Web Components")}}

The **`role`** read-only property of the {{domxref("ElementInternals")}} interface returns the [WAI-ARIA role](/en-US/docs/Web/Accessibility/ARIA/Roles) for the element. For example, a checkbox might have [`role="checkbox"`](/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role). It reflects the `role` attribute; it does not return the element's implicit ARIA role, if any, unless explicitly set.

## Value

A string which contains an ARIA role. A full list of ARIA roles can be found on the [ARIA techniques page](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques).

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
