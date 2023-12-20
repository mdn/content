---
title: "ARIA: structure role"
slug: Web/Accessibility/ARIA/Roles/structure_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#structure
---

The `structure` role is for document structural elements.

> **Note:** The `structure` role is an [abstract role](/en-US/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles). It is included here for completeness of documentation. It should not be used by web authors.

## Description

`Structure` is a superclass [abstract role](/en-US/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles) for document structures, like as [`document`](/en-US/docs/Web/Accessibility/ARIA/Roles/document_role),
[`rowgroup`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role), and [`sectionhead`](/en-US/docs/Web/Accessibility/ARIA/Roles/sectionhead_role), that support the accessibility of dynamic web content by helping assistive technologies determine active content versus static document content. Some subclass roles, like
[`section` role](/en-US/docs/Web/Accessibility/ARIA/Roles/section_role), are in turn superclasses of other roles.

The `structure` role is the superclass for all document structure roles, which are used to provide a structural description for a section of content. Most structure roles should no longer be used as browsers now support semantic HTML element with the same meaning. The structure roles without HTML equivalents, such as the [`presentation` role](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) which means content is presentational only, provide information on the document structure to assistive technologies such as screen readers as equivalent native HTML tags are not available.

## Best Practices

Do not use `role="structure"`. Do use HTML and subclass structure roles.

## Specifications

{{Specifications}}

## See Also

- [ARIA: `roletype` role](/en-US/docs/Web/Accessibility/ARIA/Roles/roletype_role)
- [ARIA: `generic` role](/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role)
- [ARIA: `presentation` role](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role)
- [ARIA: `range` role](/en-US/docs/Web/Accessibility/ARIA/Roles/range_role)
- [ARIA: `section` role](/en-US/docs/Web/Accessibility/ARIA/Roles/section_role)
- [ARIA: `sectionhead` role](/en-US/docs/Web/Accessibility/ARIA/Roles/sectionhead_role)

<!-- these shouldn't be used so we shouldn't link to them
- [ARIA: `application` role](/en-US/docs/Web/Accessibility/ARIA/Roles/application_role)
- [ARIA: `document` role](/en-US/docs/Web/Accessibility/ARIA/Roles/document_role)
- [ARIA: `rowgroup` role](/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
- [ARIA: `separator` role](/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role)
-->

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
