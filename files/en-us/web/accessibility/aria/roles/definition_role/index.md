---
title: "ARIA: definition role"
slug: Web/Accessibility/ARIA/Roles/definition_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#definition
---

The `definition` ARIA role indicates the element is a definition of a term or concept.

## Description

The `definition` ARIA role can be included on an element that is a definition of a term or concept, similar to the native {{HTMLElement('dfn')}} element. To associate the definition with the `term` being defined, and to provide an accessible name, reference the term being defined with `role="term"`, using [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby).

```html-nolint
<p>
  <span role="term">Mansplaining</span>,
  <span role="definition">
    a portmanteau of "man" and "explain", is the patronizing act of explaining
    without being asked to do so, to someone already learned on the topic, often
    after someone has already explained it
  </span>.
</p>
```

> **Note:** Instead of a `<span>` with the [`term`](/en-US/docs/Web/Accessibility/ARIA/Roles/term_role) and `definition` roles, use the {{HTMLElement('dfn')}} element. **Always use native element if available.**

```html
<p>
  <dfn>Mansplaining</dfn>, a portmanteau of "man" and "explain", is the
  patronizing act of explaining without being asked to do so, to someone already
  learned on the topic, often after someone has already explained it.
</p>
```

## Specifications

{{Specifications}}

## See Also

- [The `term` role](/en-US/docs/Web/Accessibility/ARIA/Roles/term_role)
- The {{HTMLElement('dfn')}} element
- The {{HTMLElement('dd')}} element
- The {{HTMLElement('dl')}} element
- The {{HTMLElement('dt')}} element

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
