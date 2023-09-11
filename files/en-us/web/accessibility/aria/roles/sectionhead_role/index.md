---
title: "ARIA: sectionhead role"
slug: Web/Accessibility/ARIA/Roles/sectionhead_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#sectionhead
---

The **`sectionhead` role**, an abstract role, is superclass role for labels or summaries of the topic of its related section.

> **Note:** The `sectionhead` role is an [abstract role](/en-US/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles). It is included here for completeness of documentation. It should not be used by web authors.

## Description

The structural `sectionhead` role is an abstract role for the subclass roles that identify the labels or summaries of the sections they label. The role must not be used. The four subclasses — [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role), [`heading`](/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role), [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role), and [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role). There are HTML element equivalents, like, {{HTMLElement('th', '<code>&lt;th scope="col"&gt;</code>')}} for `columnheader`, {{HTMLElement('th', '<code>&lt;th scope="row"&gt;</code>')}} for rowheader, and any of the HTML headings, {{HTMLElement("Heading_Elements", "h1")}} thru {{HTMLElement("Heading_Elements", "h6")}} for `heading`. The `tab` role does not currently have an HTML equivalent.

## Best Practices

Do not use.

## Specifications

{{Specifications}}

## See Also

- [ARIA: `structure` role](/en-US/docs/Web/Accessibility/ARIA/Roles/structure_role)
- [ARIA: `columnheader` role](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [ARIA: `heading` role](/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role)
- [ARIA: `rowheader` role](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [ARIA: `tab` role](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
