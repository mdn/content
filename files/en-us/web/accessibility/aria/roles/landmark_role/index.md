---
title: "ARIA: landmark role"
slug: Web/Accessibility/ARIA/Roles/landmark_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#landmark
---

A landmark is an important subsection of a page. The `landmark` role is an abstract superclass for the aria role values for sections of content that are important enough that users will likely want to be able to navigate directly to them.

> **Note:** The `landmark` role is an [abstract role](/en-US/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles). It is included here for completeness of documentation. It should not be used by web authors.

## Description

A `landmark` is an abstract role for a section of content that is important enough that users will likely want to be able to navigate to the section easily and have it included in a dynamically generated summary of the page. Landmarks allow assistive technologies to navigate and to find content quickly.

To create a landmark role, define the purpose of the content by using a semantic element such as `<section>`, `<nav>`, or `<main>`, or adding an ARIA role that is a subclass of the `landmark` role such as [`role="banner"`](/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role), [`role="complementary"`](/en-US/docs/Web/Accessibility/ARIA/Roles/complementary_role), or [`role="region"`](/en-US/docs/Web/Accessibility/ARIA/Roles/region_role). Do not use `role="landmark"`.

A visible label should be provided, referenced with [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby). If necessary, brief, descriptive, label can be provided with [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label).

For screen reader users, adding landmark roles effectively create 'skip links' for screen reader users, but don't replace in page navigation as the landmark roles are not otherwise surfaced.

## Best Practices

Do not use `role="landmark"`. Do use HTML and subclass landmark roles.

Landmarks ensure content is in navigable regions. Use {{HTMLElement('main')}} for [`role="main"`](/en-US/docs/Web/Accessibility/ARIA/Roles/main_role), {{HTMLElement('header')}} for [`role="banner"`](/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role), {{HTMLElement('nav')}} for [`role="navigation"`](/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role), and {{HTMLElement('footer')}} for [`role="contentinfo"`](/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role). It is also good practice to include the role redundantly with the associated semantic element. It is not as good practice to use non-semantic elements, such as {{HTMLElement('div')}}, adding semantics with landmark roles. But do include one or the other or both. Otherwise, your content is no longer as navigable for screen reader users.

## Specifications

{{Specifications}}

## See Also

- [ARIA: `section` role](/en-US/docs/Web/Accessibility/ARIA/Roles/section_role)
- [ARIA: `banner` role](/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role)
- [ARIA: `complementary` role](/en-US/docs/Web/Accessibility/ARIA/Roles/complementary_role)
- [ARIA: `contentinfo` role](/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role)
- [ARIA: `form` role](/en-US/docs/Web/Accessibility/ARIA/Roles/form_role)
- [ARIA: `main` role](/en-US/docs/Web/Accessibility/ARIA/Roles/main_role)
- [ARIA: `navigation` role](/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role)
- [ARIA: `region` role](/en-US/docs/Web/Accessibility/ARIA/Roles/region_role)
- [ARIA: `search` role](/en-US/docs/Web/Accessibility/ARIA/Roles/search_role)
- [Using HTML landmark roles to improve accessibility](https://developer.mozilla.org/en-US/blog/aria-accessibility-html-landmark-roles/) on MDN blog (2023)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
