---
title: 'ARIA: alertdialog role'
slug: Web/Accessibility/ARIA/Roles/alertdialog_role
tags: 
  - Alert
  - Alertdialog
  - Accessibility
  - ARIA
  - roles
  - Reference
  - ARIA roles
---

The **alertdialog** role is to be used on modal alert dialogs that interrupt a user's workflow to communicate an important message and require a response. 

## Description
Not to be confused with the live region [`alert`](/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role) role, the `alertdialog` role defines a modal dialog that interrupts the user's workflow. It is used to communicate an important message and get a response. Examples include error messages that require a confirmation and other action confirmation prompts. The `alertdialog` role is not to be used as a replacement for other dialogs, including no confirmation required alert dialogs [`Window.alert()`](/en-US/docs/Web/API/Window/alert) and prompts [`Window.prompt()`](/en-US/docs/Web/API/Window/prompt).  

The `alertdialog` must have an accessible name, defined with [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) or [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label). The alert dialog text must have an accessible description using [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

The alert dialog must have at least one focusable control -- such as Confirm, Close, and/or Cancel -- and focus must be moved to that control when the alert dialog appears. Alertdialogs can have additional interactive controls such as text fields and checkboxes. 

As the name implies, `alertdialog` is a type of dialog. This means the [`dialog`](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) role's states, properties, and keyboard focus requirements are applicable to the alertdialog role as well: 

## Example

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
Marking up an alert dialog containing element with the `alertdialog` role helps assistive technology identify the content as being grouped and separated from the rest of the page content. However, adding `role="alertdialog"` alone is not sufficient to make the alert dialog accessible. The following needs to be done:


  - The alert dialog must be properly labeled
  - Keyboard focus must be managed correctly

### Associated WAI-ARIA roles, states, and properties

- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Use this attribute to label the alertdialog. The `aria-labelledby` attribute is generally the id of the element used to title the alertdialog.

- [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
  - :  Use this attribute to encompass the description of the contents of the alert dialog. The value of the `aria-describedby` attribute is generally the ID of the element containing the alert dialog's messaging, usually coming right after the title.

### Required JavaScript features

See the [`dialog` role's required javaScript features](en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role#required_javascript_features)

## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#alertdialog","ARIA: alertdialog role")}}                                             | {{Spec2('ARIA')}}  |
| {{SpecName("ARIA Authoring Practices 1.2","#alertdialog","Alertdialog")}} | {{Spec2('ARIA Authoring Practices 1.2')}} |

## See Also

  * [The `dialog` role](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)
  * [Using the `alertdialog` role](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alertdialog_role)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>