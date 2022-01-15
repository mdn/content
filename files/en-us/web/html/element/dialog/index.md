---
title: '<dialog>: The Dialog element'
slug: Web/HTML/Element/dialog
tags:
  - Dialog
  - Element
  - HTML
  - HTML interactive elements
  - Reference
  - Web
  - polyfill
browser-compat: html.elements.dialog
---

{{HTMLRef}}

The **`<dialog>`** [HTML](/en-US/docs/Web/HTML) element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >,
        <a href="/en-US/docs/Web/HTML/Element/Heading_Elements#sectioning_roots"
          >sectioning root</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >flow content</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role"
          >dialog</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>{{ARIARole("alertdialog")}}</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLDialogElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

> **Warning:** The `tabindex` attribute must not be used on the `<dialog>` element.

- {{htmlattrdef("open")}}
  - : Indicates that the dialog is active and can be interacted with. When the `open` attribute is not set, the dialog _shouldn't_ be shown to the user.

## Usage notes

- {{HTMLElement("form")}} elements can close a dialog if they have the attribute `method="dialog"`. When such a form is submitted, the dialog closes with its {{domxref("HTMLDialogElement.returnValue", "returnValue")}} property set to the `value` of the button that was used to submit the form.
- The {{cssxref('::backdrop')}} CSS pseudo-element can be used to style behind a `<dialog>` element when the dialog is displayed with {{domxref("HTMLDialogElement.showModal()")}}. For example, to dim unreachable content behind the modal dialog.

## Examples

### Simple example

```html
<dialog open>
  <p>Greetings, one and all!</p>
</dialog>
```

### Advanced example

This example opens a pop-up dialog box that contains a form, when the "Update details" button is clicked.

#### HTML

```html
<!-- Simple pop-up dialog box containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <p><label>Favorite animal:
      <select>
        <option></option>
        <option>Brine shrimp</option>
        <option>Red panda</option>
        <option>Spider monkey</option>
      </select>
    </label></p>
    <menu>
      <button value="cancel">Cancel</button>
      <button id="confirmBtn" value="default">Confirm</button>
    </menu>
  </form>
</dialog>

<menu>
  <button id="updateDetails">Update details</button>
</menu>

<output aria-live="polite"></output>
```

#### JavaScript

```js
var updateButton = document.getElementById('updateDetails');
var favDialog = document.getElementById('favDialog');
var outputBox = document.querySelector('output');
var selectEl = document.querySelector('select');
var confirmBtn = document.getElementById('confirmBtn');

// "Update details" button opens the <dialog> modally
updateButton.addEventListener('click', function onOpen() {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});
// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener('change', function onSelect(e) {
  confirmBtn.value = selectEl.value;
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener('close', function onClose() {
  outputBox.value = favDialog.returnValue + " button clicked - " + (new Date()).toString();
});
```

### Result

{{EmbedLiveSample("Advanced_example", "100%", 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Polyfill

Include this polyfill to provide support for browsers without `<dialog>` element.

[dialog-polyfill](https://github.com/GoogleChrome/dialog-polyfill)

## See also

- The {{domxref("HTMLDialogElement/close_event", "close")}} event
- The {{domxref("HTMLDialogElement/cancel_event", "cancel")}} event
- [HTML forms guide](/en-US/docs/Learn/Forms).
- The {{cssxref("::backdrop")}} pseudo-element
