---
title: ARIA states and properties (attributes)
short-title: Attributes
slug: Web/Accessibility/ARIA/Reference/Attributes
page-type: landing-page
sidebar: accessibilitysidebar
---

This page lists reference pages covering all the <abbr>WAI-ARIA</abbr> attributes discussed on MDN.

<abbr>ARIA</abbr> attributes enable modifying an element's states and properties as defined in the accessibility tree.

> [!NOTE]
> ARIA only modifies the accessibility tree, modifying how assistive technology presents the content to your users. ARIA doesn't change anything about an element's function or behavior. When not using semantic HTML elements for their intended purpose and default functionality, you must use JavaScript to manage behavior, focus, and ARIA states.

## ARIA attribute types

There are 4 categories of ARIA states and properties:

### Widget attributes

- [`aria-autocomplete`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)
- [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
- [`aria-disabled`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
- [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- [`aria-haspopup`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
- [`aria-hidden`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- [`aria-invalid`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-level`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
- [`aria-modal`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`aria-multiline`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline)
- [`aria-multiselectable`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
- [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
- [`aria-placeholder`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder)
- [`aria-pressed`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- [`aria-readonly`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
- [`aria-required`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
- [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
- [`aria-sort`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)
- [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
- [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
- [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
- [`aria-valuetext`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)

### Live region attributes

- [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-atomic`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)

### Drag-and-Drop attributes

- [`aria-dropeffect`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect)
- [`aria-grabbed`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed)

### Relationship attributes

- [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
- [`aria-colcount`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
- [`aria-colindex`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
- [`aria-colspan`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)
- [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-description`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-flowto`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)
- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
- [`aria-posinset`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
- [`aria-rowcount`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)
- [`aria-rowindex`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
- [`aria-rowspan`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
- [`aria-setsize`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)

## Global ARIA attributes

Some states and properties apply to all HTML elements regardless of whether an ARIA role is applied. These are defined as "Global" attributes. Global states and properties are supported by all roles and base markup elements.

Many of the above attributes are global, meaning they can be included on any element unless specifically disallowed:

- [`aria-atomic`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- [`aria-current`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current)
- [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-description`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- [`aria-disabled`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
- [`aria-dropeffect`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect)
- [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-flowto`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)
- [`aria-grabbed`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed)
- [`aria-haspopup`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
- [`aria-hidden`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- [`aria-invalid`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-keyshortcuts`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts)
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
- [`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-roledescription`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)

By "specifically disallowed," all the above attributes are global except for the `aria-label` and `aria-labelledby` properties, which are not allowed on elements with role [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) nor its synonym [`none`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/none_role) role.

## Index of states and properties

The following are the reference pages covering the <abbr>WAI-ARIA</abbr> states and properties described on <abbr>MDN</abbr>.

{{SubpagesWithSummaries}}

## See also

- [Using ARIA: roles, states, and properties](/en-US/docs/Web/Accessibility/ARIA/Guides/Techniques)
