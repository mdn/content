---
title: "ARIA: dialog role"
slug: Web/Accessibility/ARIA/Roles/dialog_role
page-type: aria-role
spec-urls:
  - https://w3c.github.io/aria/#dialog
  - https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/
---

{{AccessibilitySidebar}}

The `dialog` role is used to mark up an HTML based application dialog or window that separates content or UI from the rest of the web application or page. Dialogs are generally placed on top of the rest of the page content using an overlay. Dialogs can be either non-modal (it's still possible to interact with content outside of the dialog) or modal (only the content in the dialog can be interacted with).

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">Your personal details were successfully updated</h2>
  <p id="dialog1Desc">
    You can change your details at any time in the user account section.
  </p>
  <button>Close</button>
</div>
```

## Description

A dialog is a descendant window of the primary window of a web application. For HTML pages, the primary application window is the entire web document, i.e., the body element.

Marking up a dialog element with the `dialog` role helps assistive technology identify the dialog's content as being grouped and separated from the rest of the page content. However, adding `role="dialog"` alone is not sufficient to make a dialog accessible. Additionally, the following needs to be done:

- The dialog must be properly labeled
- Keyboard focus must be managed correctly

The sections below describe how these two requirements can be met.

### Labeling

Even though it is not required for the dialog itself to be able to receive focus, it still needs to be labeled. The label given to the dialog will provide contextual information for the interactive controls inside the dialog. In other words, the dialog's label acts like a grouping label for the controls inside it (similar to how a `<legend>` element provides a grouping label for the controls inside a `<fieldset>` element).

If a dialog already has a visible title bar, the text inside that bar can be used to label the dialog itself. The best way to achieve this is by using the [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) attribute to the `role="dialog"` element. Additionally, if the dialog contains additional descriptive text besides the dialog title, this text can be associated with the dialog using the [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) attribute. This approach is shown in the code snippet below:

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">Your personal details were successfully updated</h2>
  <p id="dialog1Desc">
    You can change your details at any time in the user account section.
  </p>
  <button>Close</button>
</div>
```

> [!NOTE]
> Keep in mind that a dialog's title and description text do not have to be focusable in order to be perceived by screen readers operating in a non-virtual mode. The combination of the ARIA dialog role and labeling techniques should make the screen reader announce the dialog's information when focus is moved into it.

### Required JavaScript features

#### Focus management

A dialog has particular requirements for how keyboard focus should be managed:

- Dialogs should always have at least one focusable control. For many dialogs, there will be a button like "Close", "OK" or "Cancel". In addition to the needed control, dialogs can contain any number of focusable elements, even entire forms or other container widgets like tabs.
- When the dialog appears on the screen, keyboard focus (whose control depends upon the dialog's purpose) should be moved to the default focusable control inside the dialog. For dialogs that only provide a basic message, it could be an "OK" button. For dialogs containing a form it could be the first field in the form.
- After the dialog is dismissed, keyboard focus should be moved back to where it was before it moved into the dialog. Otherwise the focus can be dropped to the beginning of the page.
- For most dialogs, the expected behavior is that the dialog's tab order _wraps_, which means that when the user tabs through the focusable elements in the dialog, the first focusable element will be focused after the last one has been reached. In other words, the tab order should be contained within and by the dialog.
- If the dialog can be moved or resized, ensure that these actions must be performable by keyboard users as well as mouse users. Similarly, if a dialog provides special features like toolbars or context menus, these must be reachable and operable by keyboard users as well.
- Dialogs can be modal or non-modal. When a _modal_ dialog appears on the screen, it's not possible to interact with any page content outside the dialog. In other words, the main application UI or page content is considered to be temporarily disabled as long as the modal dialog is showing. For _non-modal_ dialogs it is still possible to interact with content outside of the dialog while the dialog is showing. Note that for non-modal dialogs there will have to be a global keyboard shortcut that allows focus to be moved between opened dialogs and the main page.

### Associated ARIA roles, states, and properties

- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Use this attribute to label the dialog. Often, the value of the `aria-labelledby` attribute will be the id of the element used to title the dialog.
- [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
  - : Use this attribute to describe the contents of the dialog.

### Possible effects on user agents and assistive technology

When the `dialog` role is used, the user agent should do the following:

- Expose the element as a dialog in the operating system's accessibility API.

When the dialog is correctly labeled and focus is moved to an element (often an interactive element, such as a button) inside the dialog, screen readers should announce the dialog's accessible role, name and optionally description, along with announcing the focused element.

> [!NOTE]
> Opinions may differ on how assistive technology should handle this technique, and the order of announcements may differ depending on the assistive technology used. The information provided above is one of those opinions and may change as the specification is defined.

## Examples

### A dialog containing a form

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">Subscription Form</h2>
  <p id="dialog1Desc">We will not share this information with third parties.</p>
  <form>
    <p>
      <label for="firstName">First Name</label>
      <input id="firstName" type="text" />
    </p>
    <p>
      <label for="lastName">Last Name</label>
      <input id="lastName" type="text" />
    </p>
    <p>
      <label for="interests">Interests</label>
      <textarea id="interests"></textarea>
    </p>
    <p>
      <input type="checkbox" id="autoLogin" name="autoLogin" />
      <label for="autoLogin">Auto-login?</label>
    </p>
    <p>
      <input type="submit" value="Save Information" />
    </p>
  </form>
</div>
```

#### Working Examples

- [jQuery-UI Dialog](https://jqueryui.com/dialog/)

### Notes

> [!NOTE]
> While it is possible to prevent keyboard users from moving focus to elements outside of the dialog, screen reader users may still be able to navigate to that content using their screen reader's virtual cursor.
> It is important for developers to ensure that content outside of the modal dialog is inaccessible to all users while the modal dialog is active.

## Specifications

{{Specifications}}

## See also

- [ARIA: alertdialog role](/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- {{HTMLElement('dialog', 'The HTML <code>&lt;dialog&gt;</code> element')}}
