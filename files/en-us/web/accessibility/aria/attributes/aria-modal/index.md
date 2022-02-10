---
title: 'aria-modal'
slug: Web/Accessibility/ARIA/Attributes/aria-modal
tags: 
  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-modal
  - Reference
---

The `aria-modal` attribute indicates whether an element is modal when displayed. When an element is modal, navigation is limited to the modal itself and the background (the ancestors and siblings of the modal) is hidden.


## Description

Setting `aria-modal="true"`on `dialog` and `alertdialog` containers indicates the presence of a "modal" element, letting the user know the ability to interact with, or access other content on the page requires the modal dialog to be closed or otherwise lose focus. 

Modal dialogs are when content is displayed and the user's interaction is limited to only that section until it is dismissed. 

When creating modal dialogs, `aria-modal="true"` tells assistive technologies that the windows underneath the current dialog are not part of the modal content.

When a modal element is displayed, focus is placed in the modal. Assistive technology (<abbr>AT</abbr>) navigates the modal's content (unless focus has explicitly been set elsewhere). Focus is essentialled "trapped" inside the modal when it's visible, until is is dismissed. The `aria-modal` attribute helps AT communicate the bounds of the modal and distinguishes it from the rest of the page's content.

Ensure the modal is controllable using only its descendant elements. If a modal dialog has a close button, the button should be a descendant contained with the modal container in the DOM. 

When a modal element is displayed, authors <strong>should</strong> mark all other contents as inert (such as "inert subtrees" in HTML). The [`inert`](/en-US/docs/Web/API/HTMLElement/inert) attribute is a boolean attribute that indicates, by its presence, that the element and all its shadow-including descendants is to be made inert.

When supported, inluding `aria-modal="true"` on a [`dialog"`](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) or [`alertdialog"`](/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role), removes the requirement of putting [`aria-hidden`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) on background content as the `aria-modal` informs assistive technologies that content outside a dialog is inert. Setting `aria-hidden` on all content outside a dialog to make it inert for AT users is still an option, but no longer required. 

If a dialog is not modal -- there is no inert background and focus isn't confined to the dialog -- either include `aria-modal="false"` or omit the attribute altogether. 

## Example

```html

<div id="backdrop" class="no-scroll">
  <div role="alertdialog"
       aria-modal="true"
       aria-labelledby="dialog_label"
       aria-describedby="dialog_desc">
    <h2 id="dialog_label">
      Confirmation
    </h2>
    <div id="dialog_desc">
      <p>
        Are you sure you want to delete this file?
      </p>
    </div>
    <button type="button" onclick="closeDialog(this)">
      No. Close this popup.
    </button>
    <button type="button" onclick="deleteFile(this)">
      Yes. Delete the file.
    </button>
  </div>
</div>
```

This partial example includes an `alertdialog` nested in a full-screen, non-scrollable backdrop. 

The [`role="alertdialog"`](/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)	identifies the element that serves as the alert dialog container. The [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) provides the alert dialog an accessible name by referring to the element that provides the alert dialog title. The [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) attribute gives the alert dialog an accessible description by referring to the alert dialog content that describes the primary message or purpose of the alert dialog.

The `aria-modal="true"`	informs the assistive technology user that the content underneath the dialog is not interactive so long as the alertdialog has focus.

The `aria-modal` attribute exposes the existence of the modal to assistive technologies so the disabling of the content behind the modal can be communicated to AT users. Like all ARIA attributes, `aria-modal` itself has no effect on the page's functionality; focus management and disabling, interactivity on background elements, and the ability to remove focus from the alertdialog must all be managed with JavaScript.

## Values

- `false` (default)
  - : Element is not modal.
- `true`
  - : Element is modal.

## ARIAMixin API 

- {{domxref("Element.ariaModal")}}
  - : The  [`ariaModal`](/en-US/docs/Web/API/Element/ariaModal) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-modal` attribute.
- {{domxref("ElementInternals.ariaModal")}}
  - : The  [`ariaModal`](/en-US/docs/Web/API/ElementInternals/ariaModal) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-modal` attribute.

## Associated roles

Used in roles:  
- [`window`](/en-US/docs/Web/Accessibility/ARIA/Roles/window_role)

Inherits into roles:  
- [`alertdialog`](/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [`dialog`](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)

## Specifications

| Specification | Status | 
| ------------- | ------  |
| {{SpecName("ARIA","#aria-modal","ARIA: aria-modal Attribute")}}  | {{Spec2('ARIA')}} |

## See Also

- HTML {{HTMLElement('dialog')}} element
- [`alertdialog` role](/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [`dialog` role](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- [`inert`](/en-US/docs/Web/API/HTMLElement/inert)

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>