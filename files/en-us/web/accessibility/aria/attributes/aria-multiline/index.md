---
title: 'aria-multiline'
slug: Web/Accessibility/ARIA/Attributes/aria-multiline
tags: 
  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-multiline
  - Reference
---

The `aria-multiline` attribute indicates whether a text box accepts multiple lines of input or only a single line.

## Description

The default behavior of the <kbd>ENTER</kbd> or <kbd>RETURN</kbd> key is different between single-line and multi-line text fields in HTML. When user focus is in a single-line `{{htmlelement("input/text", '<input type="text">')}}` element, the keystroke usually submits the form. When user focus in a multi-line {{HTMLElement('textarea')}} element, the keystroke inserts a line break. Only relevant for elements with the [`textbox`]() role set, the `aria-multiline` attribute indicates to assistive technologies whether that text box accepts multiple lines of input or only a single line. The value also sets expectations as to what keystroke will do.

> **Note:** Where possible use an HTML {{HTMLElement('input')}} element with `type="text"` or a {{HTMLElement('textarea')}} as these have built in semantics and behaviors and do not require ARIA attributes or scripting to control keypress events.

The WAI-ARIA `textbox` role differentiates these types of boxes with the `aria-multiline` attribute.  If the `aria-multiline="true"` is set, the textbox widget accepts line breaks within the input, similar to the HTML {{HTMLElement('textarea')}}. Elements with a role of `textbox` that do not have the attribute, or with the value set to `false`, are simple text box. 

Be aware of keystroke distinction when designing text boxes. ARIA only modifies the accessibility tree and therefore how assistive technology presents the textbox to your users. ARIA doesn't change anything about an elements default function or behavior. When not using semantic HTML elements for their intended purpose and default functionality, you must use JavaScript to manage behavior and functionality, including responding to keystroke events.

## Values

- `true`
  - : The text box accepts multiple lines of input.
  
- `false`
  - : The text box only accepts a single line of input. 

## ARIAMixin API 

- {{domxref("Element.aria-multiline")}}
  - : The  [`ariaMultiline`](/en-US/docs/Web/API/Element/ariaMultiline) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-multiline` attribute.
- {{domxref("ElementInternals.aria-multiline")}}
  - : The  [`ariaMultiline`](/en-US/docs/Web/API/ElementInternals/ariaMultiline) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-multiline` attribute.

## Associated roles

Used in roles: 

- [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/text_role)

Inherits into roles: 

- [`searchbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/searchbox_role)

## Specifications

| Specification | Status | 
| ------------- | ------  |
| {{SpecName("ARIA","#aria-multiline","ARIA: aria-multiline Attribute")}}  | {{Spec2('ARIA')}} |

## See Also

- ARIA [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/text_role) role
- ARIA [`searchbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/searchbox_role) role


<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>