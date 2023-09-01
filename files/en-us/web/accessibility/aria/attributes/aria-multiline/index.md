---
title: aria-multiline
slug: Web/Accessibility/ARIA/Attributes/aria-multiline
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-multiline
---

The `aria-multiline` attribute indicates whether a `textbox` accepts multiple lines of input or only a single line.

## Description

The default behavior of the <kbd>Enter</kbd> or <kbd>Return</kbd> key differs between single-line and multi-line text fields. When user focus is in a single-line `{{htmlelement("input/text", '&lt;input type="text"&gt;')}}`, an <kbd>Enter</kbd> or <kbd>Return</kbd> keystroke usually submits the form.

When user focus is in a multi-line {{HTMLElement('textarea')}}, the keystroke inserts a line break. Only relevant for elements with the [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role) role set, the `aria-multiline` attribute indicates to assistive technologies whether that text box accepts multiple lines of input or only a single line, setting expectations as to what type of data to enter and what those keystroke will do.

> **Note:** Where possible, use the HTML {{HTMLElement('input')}} or the {{HTMLElement('textarea')}}, as these have built in semantics and behaviors, do not require ARIA attributes or scripting, and have keyboard support built in.

If the `aria-multiline="true"` is set, it means the textbox widget will accept line breaks within the input, similar to the HTML {{HTMLElement('textarea')}}. Elements with a role of `textbox` that do not have the attribute, or with the value set to `false`, are simple text box.

Be aware of focus and keystrokes when designing text boxes. ARIA only modifies the accessibility tree and therefore how assistive technology presents the textbox to your users. ARIA doesn't change anything about an element's default function or behavior. When not using semantic HTML elements for their intended purpose and default functionality, you must use JavaScript to manage behavior and functionality, including responding to keystroke events.

## Values

- `true`

  - : The text box accepts multiple lines of input.

- `false`
  - : The text box only accepts a single line of input.

## ARIAMixin API

- {{domxref("Element.ariaMultiLine")}}
  - : The [`ariaMultiLine`](/en-US/docs/Web/API/Element/ariaMultiLine) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-multiline` attribute.
- {{domxref("ElementInternals.ariaMultiLine")}}
  - : The [`ariaMultiLine`](/en-US/docs/Web/API/ElementInternals/ariaMultiLine) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-multiline` attribute.

## Associated roles

Used in roles:

- [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role)

Inherits into roles:

- [`searchbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/searchbox_role)

## Specifications

{{Specifications}}

## See Also

- ARIA [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role) role
- ARIA [`searchbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/searchbox_role) role

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>
