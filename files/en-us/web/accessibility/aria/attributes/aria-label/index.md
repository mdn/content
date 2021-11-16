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
---

The `aria-label` attribute defines a string value that labels the current element.

## Description

The `aria-label` attribute is used to define a string that labels the current element. Use it in cases where a text label is _not_ visible on the screen. If there is visible text labeling the element, use [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) instead. 

```html
<button aria-label="Close" onclick="myDialog.close()">X</button>
```

The purpose of `aria-label` is the same as that of `aria-labelledby`. Both provide an accessible name for an object. If there is no visible name for the object on the page you can reference, use `aria-label` to provide the user with a recognizable name of the object. If the label text is available in the DOM, such as visible text or [`alt`]() attribute, use `aria-labelledby` and not `aria-label`.  If both are present on the same element, `aria-labelledby` will take precedence.

The `aria-label` attribute can be used with regular, semantic HTML elements; it is not limited to elements that have an [ARIA `role`](/en-US/docs/Web/Accessibility/ARIA/Roles) assigned.

Not all elements can be given an accessible name. Neither `aria-label` nor `aria-labelledby` should be used with inline structural role such as with `code`, `term`, or `emphasis` nor roles whose semantics will not be mapped to the accessibility API, including `presentation`, `none`, and `hidden`. Rather, use `aria-label` to ensure an accessible name is provided when none is visible in the DOM for all interactive elements, like links, video, and form controls, [landmark roles](g/en-US/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles), and [widget roles](). 

If you give your {{HTMLElement('iframe')}}s a `title`, your images an `alt` attributes, and your inputs associated {{HTMLElement('label')}}s, `aria-label` is not necessary. But, if present, the `aria-label` will take precendence as your iframe, image, or input's accessible name.

For form control has a {{HTMLElement('label')}} and aria attributes, the order of precedence is `aria-labeledby`, then `aria-label`, then {{HTMLElement('label')}}.

## Values
- `<string>`
  - : 


## ARIAMixin API 

- {{domxref("Element.ariaLabel")}}
  - : The  [`ariaLabel`](/en-US/docs/Web/API/Element/ariaLabel) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-label` attribute.
- {{domxref("ElementInternals.ariaLabel")}}
  - : The  [`ariaLabel`](/en-US/docs/Web/API/ElementInternals/ariaLabel) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-label` attribute.

## Associated roles

Used in almost all roles **except** roles that can not be provided an accessible name by the author.

The `aria-label` attribute is **NOT** supported in [`code`](/en-US/docs/Web/Accessibility/ARIA/Roles/code_role), [`caption`](/en-US/docs/Web/Accessibility/ARIA/Roles/caption_role), [`deletion`](/en-US/docs/Web/Accessibility/ARIA/Roles/deletion_role), [`emphasis`](/en-US/docs/Web/Accessibility/ARIA/Roles/emphasis_role), [`generic`](/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role), [`insertion`](/en-US/docs/Web/Accessibility/ARIA/Roles/_role), [`mark`](/en-US/docs/Web/Accessibility/ARIA/Roles/mark_role), [`paragraph`](/en-US/docs/Web/Accessibility/ARIA/Roles/paragraph_role), [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role)/[`none`](/en-US/docs/Web/Accessibility/ARIA/Roles/none_role), [`strong`](/en-US/docs/Web/Accessibility/ARIA/Roles/strong_role), [`subscript`](/en-US/docs/Web/Accessibility/ARIA/Roles/supscript_role), [`superscript`](/en-US/docs/Web/Accessibility/ARIA/Roles/superscript_role), [`suggestion`](/en-US/docs/Web/Accessibility/ARIA/Roles/suggestion_role), [`term`](/en-US/docs/Web/Accessibility/ARIA/Roles/term_role), and [`time`](/en-US/docs/Web/Accessibility/ARIA/Roles/time_role)

## Specifications

| Specification | Status | 
| ------------- | ------  |
| {{SpecName("ARIA","#aria-label","ARIA: aria-label Attribute")}}  | {{Spec2('ARIA')}} |

## See Also

- {{HTMLElement('label')}} element
- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>

