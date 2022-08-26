---
title: 'aria-label'
slug: Web/Accessibility/ARIA/Attributes/aria-label
tags:
  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-label
  - Reference
spec-urls: https://w3c.github.io/aria/#aria-label
---

The `aria-label` attribute defines a string value that labels an interactive element.

## Description

Sometimes the default [accessible name](https://w3c.github.io/accname/#dfn-accessible-name) of an element is missing, or does not accurately describe its contents, and there is no content visible in the DOM that can be associated with the object to give it meaning. A common example is a button containing an SVG or [icon font (which you shouldn't be using)](https://www.youtube.com/watch?v=9xXBYcWgCHA) without any text.

In cases where an interactive element has no accessible name, or an accessible name that isn't accurate, and there is no content visible in the DOM that can be referenced via the [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) attribute, the `aria-label` attribute can be used to define a string that labels the interactive element on which it is set. This provides the element with its accessible name.

```html
<button aria-label="Close" onclick="myDialog.close()">
  <svg aria-hidden="true" focusable="false" width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="m.967 14.217 5.8-5.906-5.765-5.89L3.094.26l5.783 5.888L14.66.26l2.092 2.162-5.766 5.889 5.801 5.906-2.092 2.162-5.818-5.924-5.818 5.924-2.092-2.162Z" fill="#000"/></svg>
</button>
```

> **Note:** `aria-label` is intended for use on interactive elements, or elements made to be interactive via other ARIA declarations, when there is no appropriate text visible in the DOM that could be referenced as a label

Most content has an accessible name generated from its immediate wrapping element's text content. Accessible names can also be created by certain attributes or associated elements.

By default, a button's accessible name is the content between the opening and closing {{HTMLElement('button')}} tags, an image's accessible name is the content of its [`alt`](/en-US/docs/Web/HTML/Element/img#attr-alt) attribute, and a form input's accessible name is the content of the associated {{HTMLElement('label')}} element.

If none of these options are available, or if the default accessible name is not appropriate, use the `aria-label` attribute to define the accessible name of an element.

`aria-label` can be used in cases where text that could label the element is _not_ visible. If there is visible text that labels an element, use [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) instead.

The purpose of `aria-label` is the same as `aria-labelledby`. Both provide an accessible name for an element. If there is no visible name for the element you can reference, use `aria-label` to provide the user with a recognizable accessible name. If the label text is available in the DOM, and referencing the DOM content and acceptable user experience, prefer to use `aria-labelledby`. Don't include both. If both are present on the same element, `aria-labelledby` will take precedence over `aria-label`.

The `aria-label` attribute can be used with regular, semantic HTML elements; it is not limited to elements that have an [ARIA `role`](/en-US/docs/Web/Accessibility/ARIA/Roles) assigned.

Don't "overuse" `aria-label`. For example, use visible text with `aria-describedby` or `aria-description`, not `aria-label`, to provide additional instructions or clarify the UI. Always remember, you don't need to target instructions to screen readers only; if instructions are needed, provide them to everyone (or, preferably, make your UI more intuitive).

Not all elements can be given an accessible name. Neither `aria-label` nor `aria-labelledby` should be used with non-interactive elements or inline structural role such as with `code`, `term`, or `emphasis` nor roles whose semantics will not be mapped to the accessibility API, including `presentation`, `none`, and `hidden`. The `aria-label` attribute is intended for interactive elements only. Use `aria-label` to ensure an accessible name is provided when none is visible in the DOM for all interactive elements, like links, videos, form controls, [landmark roles](/en-US/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles), and [widget roles](/en-US/docs/Web/Accessibility/ARIA/Roles#2._widget_roles).

If you give your {{HTMLElement('iframe')}}s a `title`, your images an `alt` attributes, and your input's associated {{HTMLElement('label')}}s, `aria-label` is not necessary. But, if present, the `aria-label` will take precedence over the `title`, `alt` and `<label>` as your `iframe`, image, or input's accessible name, respectively.

> **Note:** The `aria-label` is only "visible" to assistive technologies. If the information is important enough to add for AT users, consider making it visible for all users.

## Values

- `<string>`
  - : A string of text that will be the accessible name for the object.

## ARIAMixin API

- {{domxref("Element.ariaLabel")}}
  - : The [`ariaLabel`](/en-US/docs/Web/API/Element/ariaLabel) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-label` attribute.
- {{domxref("ElementInternals.ariaLabel")}}
  - : The [`ariaLabel`](/en-US/docs/Web/API/ElementInternals/ariaLabel) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-label` attribute.

## Associated roles

Used in almost all roles **except** roles that can not be provided an accessible name by the author.

The `aria-label` attribute is **NOT** supported in [`code`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), [`caption`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), [`deletion`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), [`emphasis`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), [`generic`](/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role), [`insertion`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), [`mark`](/en-US/docs/Web/Accessibility/ARIA/Roles/mark_role), [`paragraph`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role)/[`none`](/en-US/docs/Web/Accessibility/ARIA/Roles/none_role), [`strong`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), [`subscript`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), [`superscript`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), [`suggestion`](/en-US/docs/Web/Accessibility/ARIA/Roles/suggestion_role), [`term`](/en-US/docs/Web/Accessibility/ARIA/Roles/term_role), and [`time`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)

> **Note:** The `aria-label` attribute is intended for interactive elements only. When placed on non-interactive elements, such as those listed above, it may not be read or may confuse your users as a non-interactive element that acts like an interactive one.

## Specifications

{{Specifications}}

## See Also

- {{HTMLElement('label')}} element
- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>
