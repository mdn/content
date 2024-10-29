---
title: "ARIA: note role"
slug: Web/Accessibility/ARIA/Roles/note_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#note
---

{{AccessibilitySidebar}}

A `note` role suggests a section whose content is parenthetic or ancillary to the main content.

## Description

The `note` role can be added to parenthetic or ancillary content if no other native element or other role fits the purpose.

### Associated WAI-ARIA roles, states, and properties

- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) or [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) (optional)
  - : Naming a note is optional, but can help screen reader users understand its context and purpose. The name can be provided using `aria-labelledby` if a visible label is present, otherwise with `aria-label`.

## Examples

```html
<h1>Madam C. J. Walker</h1>
<p>
  Madam C.J. Walker was an African American entrepreneur, philanthropist, and
  political and social activist.
</p>
<h2>Early Life</h2>
…
<h2>Career</h2>
…
<p role="note" class="highlight-box">
  At the height of the depression, Madam C. J. Walker trained 20,000 women to
  sell hair pomade door-to-door
</p>
<h2>Activism and Philanthropy</h2>
…
```

In the above Wikipedia style entry for Madam C.J. Walker, the `highlight-box` with role `note` could have been a {{HTMLElement('blockquote')}} if it contained a quote or {{HTMLElement('figcaption')}} in a {{HTMLElement('figure')}} if there was an associated image. In this case, as neither of those made sense, the `note` role was added to add semantics to the parenthetic content.

## Specifications

{{Specifications}}

## See also

- [Document structure roles](/en-US/docs/Web/Accessibility/ARIA/Roles#1._document_structure_roles)
