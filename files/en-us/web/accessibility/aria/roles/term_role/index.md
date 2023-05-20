---
title: "ARIA: term role"
slug: Web/Accessibility/ARIA/Roles/term_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#term
---

The `term` role can be used for a word or phrase with an optional corresponding [`definition`](/en-US/docs/Web/Accessibility/ARIA/Roles/definition_role).

## Description

The `term` role can be used for a word or phrase with an optional corresponding [`definition`](/en-US/docs/Web/Accessibility/ARIA/Roles/definition_role). It is equivalent in semantics to the HTML {{HTMLElement('dfn')}} element and the definition term ({{HTMLElement('dt')}}) element within a definition list ({{HTMLElement('dl')}} ).

The `term` role is used to explicitly identify a word or phrase for which a definition has been provided by the author or is expected to be provided by the user. If there is an existing definition, or a form or form control to enter a definition, authors SHOULD set [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details) to point to the related element.

Don't use the `role="term"` on interactive elements like links because it can interfere with assistive technology users ability to interact with the element. Also, the term itself is the accessible name, so do not use [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) or [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby).

> **Warning:** The accessible name should be the term itself, so DO NOT use `aria-label` or `aria-labelledby`.

### Associated WAI-ARIA roles, states, and properties

None.

### Keyboard interactions

None.

### Required JavaScript features

None.

## Examples

```html
<p>
  <span role="term">Mansplaining</span>,
  <span role="definition"
    >a portmanteau of "man" and "explain", is the patronizing act of explaining
    without being asked to do so, to someone already learned on the topic, often
    after someone has already explained it</span
  >.
</p>
```

Including better semantics, the above could also be written:

```html
<p>
  <dfn role="term">Mansplaining</dfn>,
  <span role="definition"
    >a portmanteau of "man" and "explain", is the patronizing act of explaining
    without being asked to do so, to someone already learned on the topic, often
    after someone has already explained it</span
  >.
</p>
```

or without any ARIA (but possibly not how you want it presented)

```html
<dl>
  <dt>Mansplaining</dt>
  <dd>
    A portmanteau of "man" and "explain", is the patronizing act of explaining
    without being asked to do so, to someone already learned on the topic, often
    after someone has already explained it.
  </dd>
</dl>
```

## Accessibility Concerns

Don't use the `role="term"` on interactive elements such as links as it can interfere with the assistive technology user's ability to interact with the element.

## Best Practices

Allow the term itself to define the accessible name. Do not use `aria-label` or `aria-labelledby`.

### Prefer HTML

## Specifications

{{Specifications}}

## See Also

- [ARIA: `definition` role](/en-US/docs/Web/Accessibility/ARIA/Roles/definition_role).
- The HTML {{HTMLElement('dfn')}} element

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
