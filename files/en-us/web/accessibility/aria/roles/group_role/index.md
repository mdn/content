---
title: 'ARIA: group role'
slug: Web/Accessibility/ARIA/Roles/group_role
tags: 
  - Accessibility
  - ARIA
  - roles
  - Reference
  - ARIA roles
  - document structure role
---

The `group` role can be used for sets of UI feature not intended to be included in a page summary or table of contents by assistive technologies.

## Description

The `group` role can be used to form a logical collection of items in a widget, such as children in a tree widget forming a collection of siblings in a hierarchy. When used in the context of a [`listbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role), the only children allowed are {{HTMLElement('option')}} elements. But, why not use a {{HTMLElement('select')}} or {{HTMLElement('option')}}?

Authors MAY nest group elements. If a section is significant enough to warrant inclusion in the web page's table of contents, the author SHOULD assign it a role of region or a standard landmark role.

## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#group","ARIA: group role")}}                                             | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices 1.2","#aria_lh_group_role","group role")}} | {{Spec2('ARIA Authoring Practices 1.2')}} |


## See Also

- The {{HTMLElement('fieldset')}} Element
- The {{HTMLElement('option')}} Element
- [ARIA: `section` role](/en-US/docs/Web/Accessibility/ARIA/Roles/section_role)
- [ARIA: `row` role](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role)
- [ARIA: `select` role](/en-US/docs/Web/Accessibility/ARIA/Roles/select_role)
- [ARIA: `toolbar` role](/en-US/docs/Web/Accessibility/ARIA/Roles/toolbar_role)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>