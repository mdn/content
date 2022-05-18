---
title: 'ARIA: generic role'
slug: Web/Accessibility/ARIA/Roles/generic_role
tags:
  - Accessibility
  - ARIA
  - roles
  - Reference
  - ARIA roles
  - document structure role
spec-urls: https://w3c.github.io/aria/#generic
---

The `generic` role creates a nameless container element which has no semantic meaning on its own.

> **Note:** The `generic` role is the implicit role of generic elements used by user agents. It is included here for completeness of documentation. It should not be used by web authors.

## Description

While ARIA is primarily used to express semantics, there are some elements that shouldn't expose a semantic name to assistive technologies. The `generic` role indicates an element's role is equivalent to that of the non-semantic {{HTMLElement('div')}} and {{HTMLElement('span')}} elements.

The `generic` role is intended for use as the implicit role of generic elements in host languages for use by user agents only; not for use by developers. Instead, to remove implicit accessibility semantics, use [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) or `none`, the {{HTMLElement('div')}} and {{HTMLElement('span')}} elements that have no semantic meaning, or semantic container roles such as [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role) to semantically group descendants in a named container.

Like an element with role `presentation`, an element with `role="generic"` can provide a limited number of accessible states and properties for its descendants, such as [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) attributes. However, unlike elements with role `presentation`, `generic` elements are exposed in accessibility APIs so that assistive technologies can gather certain properties such as layout and bounds.

Because the generic role is nameless, the [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) and [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) attributes are prohibited. Because the role is generic, the [`aria-roledescription`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) and [`aria-brailleroledescription`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription) attributes are also prohibited.

> **Note:** The element with `role="generic"` should not have an accessible name or role description.

### Associated WAI-ARIA roles, states, and properties

None. If a global ARIA state and property is set, `generic` or `none` will be ignored, and the implicit role of the element will be used.

## Examples

This role is for use by user agents and not by developers. As such, no appropriate example exists.

## Specifications

{{Specifications}}

## See Also

- HTML {{HTMLElement('div')}} and {{HTMLElement('span')}} elements
- [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) roles such as
- [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role) role

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
