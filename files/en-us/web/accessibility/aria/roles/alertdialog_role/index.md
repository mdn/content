---
title: "ARIA: alertdialog role"
slug: Web/Accessibility/ARIA/Roles/alertdialog_role
page-type: aria-role
spec-urls:
  - https://w3c.github.io/aria/#alertdialog
  - https://w3c.github.io/aria-practices/#alertdialog
---

The **alertdialog** role is to be used on modal alert dialogs that interrupt a user's workflow to communicate an important message and require a response.

## Description

The `alertdialog` role is used to notify users of urgent information that demands the user's immediate attention. Including `role="alertdialog"` on the element containing the dialog helps assistive technology identify the content as being grouped and separated from the rest of the page content. Examples include error messages that require confirmation and other action confirmation prompts.

As the name implies, `alertdialog` is a mashup of the [`dialog`](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) and [`alert`](/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role) roles. `alertdialog` is a type of `dialog` with similar use cases as `alert`, but for when a user response is required.

> **Note:** The `alertdialog` role should only be used for alert messages that have associated interactive controls. If an alert dialog only contains static content and has no interactive controls at all, use [`alert`](/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role) instead.

Being a type of dialog, the [`dialog`](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) role's states, properties, and keyboard focus requirements are applicable to the `alertdialog` role as well.

Because of its urgent nature, interrupting the user's workflow, alert dialogs must always be [modal](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal).

The alert dialog must have at least one focusable control — such as Confirm, Close, and Cancel — and focus must be moved to that control when the alert dialog appears. Alertdialogs can have additional interactive controls such as text fields and checkboxes.

The `alertdialog` role is not to be used as a replacement for other dialogs, including no-confirmation-required `alert` dialogs ([`Window.alert()`](/en-US/docs/Web/API/Window/alert)) and prompts ([`Window.prompt()`](/en-US/docs/Web/API/Window/prompt)).

Adding `role="alertdialog"` alone is not sufficient to make an alert dialog accessible. The following also need to be done:

- The alert dialog must be properly labeled
- Keyboard focus must be managed correctly

The `alertdialog` must have an accessible name, defined with [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) or [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label). The alert dialog text must have an accessible description using [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

## Examples

### Example 1: A basic alert dialog

```html
<div
  role="alertdialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <div role="document" tabindex="0">
    <h2 id="dialog1Title">Your login session is about to expire</h2>
    <p id="dialog1Desc">To extend your session, click the OK button</p>
    <button>OK</button>
  </div>
</div>
```

The code snippet above shows how to mark up an alert dialog that only provides a message and an OK button.

### Example 2: Confirmation dialog with two options

```html
<div id="alert_dialog" role="alertdialog" aria-modal="true" aria-labelledby="dialog_label" aria-describedby="dialog_desc">
  <h2 id="dialog_label">Confirmation</h2>
  <div id="dialog_desc">
    <p>Are you sure you want to delete this image?</p>
    <p>This change can't be undone.</p>
  </div>
  <ul>
    <li>
      <button type="button" onclick="closeThis()">No</button>
    </li>
    <li>
      <button type="button" aria-controls="form" id="delete_file_confirm" onclick="deleteFile()">Yes</button>
    </li>
  </div>
</div>
```

### Associated WAI-ARIA roles, states, and properties

- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Use this attribute to label the alertdialog. The `aria-labelledby` attribute is generally the id of the element used to title the alertdialog.

- [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
  - : Use this attribute to encompass the description of the contents of the alert dialog. The value of the `aria-describedby` attribute is generally the ID of the element containing the alert dialog's messaging, usually coming right after the title.

## Specifications

{{Specifications}}

## See Also

- HTML {{HTMLElement("dialog")}} element
- [The `dialog` role](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- [The `alert` role](/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [`aria-modal` attribute](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal)
- [`Window.alert()`](/en-US/docs/Web/API/Window/alert)
- [`Window.prompt()`](/en-US/docs/Web/API/Window/prompt)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
