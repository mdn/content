---
title: aria-modal
slug: Web/Accessibility/ARIA/Attributes/aria-modal
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-modal
---

{{AccessibilitySidebar}}

The `aria-modal` attribute indicates whether an element is modal when displayed.

## Description

A section of content is "modal" means navigation is limited to the area itself and the background (the ancestors and siblings of the modal) is hidden. Setting `aria-modal="true"` on [`dialog`](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) and [`alertdialog` role](/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role) containers indicates the presence of a "modal" element to users of assistive technology, but does not actually make the element modal. The features that make the element actually modal must be implemented by the developer.

> [!NOTE]
> ARIA only modifies the accessibility tree, modifying how assistive technology presents the content to your users. ARIA doesn't change anything about an element's function or behavior. To create a modal effect you must use JavaScript to manage behavior, focus, and ARIA states.

Relevant only on `dialog` and `alertdialog` containers, setting `aria-modal="true"` tells assistive technologies to let the user know the ability to interact with, or access other content on the page requires the modal dialog to be closed or otherwise lose focus.

Modal dialogs are when content is displayed and the user's interaction is limited to only that section until it is dismissed.

When creating modal dialogs, `aria-modal="true"` tells assistive technologies that the windows underneath the current dialog are not part of the modal content.

When a modal element is displayed, focus should be placed in the modal. Focus needs to be "trapped" inside the modal when it is visible, until it is dismissed. Assistive technology (<abbr>AT</abbr>) can then navigate the modal's content and understand the scope of the modal's content. The `aria-modal` attribute helps AT communicate the bounds of the modal and distinguishes it from the rest of the page's content. When dismissed, focus should return to the element that triggered the modal.

Ensure the modal is controllable using only its descendant elements. If a modal dialog has a close button, the button should be a descendant contained with the modal container in the DOM.

When a modal element is displayed, authors **should** mark all other contents as inert (such as "inert subtrees" in HTML). Disabled content is not inert content. Inert content cannot be interacted with using both normal and specialized browsing modes such as caret browsing, which allow an assistive technology user to explore a page in detail. This includes disabled content, whose content may provide meaning.

The [`inert`](/en-US/docs/Web/HTML/Global_attributes/inert) attribute is a boolean attribute that indicates, by its presence, that the element and all its shadow-including descendants are to be made inert. Until [`HTMLElement.inert`](/en-US/docs/Web/API/HTMLElement/inert) is fully supported, content can be [made inert with JavaScript](https://samthor.au/2021/inert/).

Including `aria-modal="true"` on a [`dialog`](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) or [`alertdialog`](/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role), removes the requirement of putting [`aria-hidden`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) on background content, as the `aria-modal` informs assistive technologies that content outside a dialog is inert. Note that while support for the {{HTMLElement("dialog")}} element is good, thoroughly testing your implementation is vitally important.

If a dialog is not modal — there is no inert background and focus isn't confined to the dialog — either include `aria-modal="false"` or omit the attribute altogether.

## Example

```html
<div id="backdrop" class="no-scroll">
  <div
    role="alertdialog"
    aria-modal="true"
    aria-labelledby="dialog_label"
    aria-describedby="dialog_desc">
    <h2 id="dialog_label">Confirmation</h2>
    <div id="dialog_desc">
      <p>Are you sure you want to delete this file?</p>
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

The [`role="alertdialog"`](/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role) identifies the element that serves as the alert dialog container. The [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) provides the alert dialog an accessible name by referring to the element that provides the alert dialog title. The [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) attribute gives the alert dialog an {{glossary("accessible description")}} by referring to the alert dialog content that describes the primary message or purpose of the alert dialog.

The `aria-modal="true"` informs the assistive technology user that the content underneath the dialog is not interactive so long as the element with a declaration of `role="alertdialog"` has focus.

The `aria-modal` attribute exposes the existence of the modal to assistive technologies so the disabling of the content behind the modal can be communicated to AT users. Like all ARIA attributes, `aria-modal` itself has no effect on the page's functionality; focus management and disabling, interactivity on background elements, and the ability to remove focus from the alertdialog must all be managed with JavaScript.

## Values

- `false` (default)
  - : Element is not modal.
- `true`
  - : Element is modal.

## Associated interfaces

- {{domxref("Element.ariaModal")}}
  - : The [`ariaModal`](/en-US/docs/Web/API/Element/ariaModal) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-modal` attribute.
- {{domxref("ElementInternals.ariaModal")}}
  - : The [`ariaModal`](/en-US/docs/Web/API/ElementInternals/ariaModal) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-modal` attribute.

## Associated roles

Used in roles:

- [`window`](/en-US/docs/Web/Accessibility/ARIA/Roles/window_role)

Inherits into roles:

- [`alertdialog`](/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [`dialog`](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)

## Specifications

{{Specifications}}

## See also

- HTML {{HTMLElement("dialog")}} element
- [`alertdialog` role](/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [`dialog` role](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- HTML [`inert` global attribute](/en-US/docs/Web/HTML/Global_attributes/inert)
- HTMLElement API [`inert`](/en-US/docs/Web/API/HTMLElement/inert) property
