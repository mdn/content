---
title: 'ARIA: directory role'
slug: Web/Accessibility/ARIA/Roles/directory_role
tags: 
  - Accessibility
  - ARIA
  - roles
  - Reference
  - ARIA roles
  - document structure role
  - deprecated
---

The `directory` role was for a list of references to members of a group, such as a static table of contents.

> **Warning:** The `directory` role was deprecated in ARIA 1.2

## Description

A directory is a static table of contents, whether linked or unlinked. This includes tables of contents built with lists, including nested lists. Dynamic tables of contents, however, might use a tree role instead.

The deprecated `directory` role was used for lists of references to members of a group, such as a static table of contents.
Use the [`list`](/en-US/docs/Web/Accessibility/ARIA/Roles/list_role) role instead. Or, better yet, use the {{HTMLElement('ul')}} or {{HTMLElement('ol')}} elements, as using `directory` does not provide any additional benefits to assistive technology users.


## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#directory","ARIA: directory role")}}                                             | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices 1.2","#aria_lh_directory_role","directory role")}} | {{Spec2('ARIA Authoring Practices 1.2')}} |



## See Also
- [The `list` role](/en-US/docs/Web/Accessibility/ARIA/Roles/list_role)
- The {{HTMLElement('ul')}} element
- The {{HTMLElement('ol')}} element

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>