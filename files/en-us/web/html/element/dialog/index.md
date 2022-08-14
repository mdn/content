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
      It is recommended to use the `.show()` or `.showModal()` methods to render dialogs, rather than the `open` attribute.

## Accessibility considerations

To ensure accessibility for users of Safari versions below 15.4, consider using a polyfill such as [a11y-dialog](https://a11y-dialog.netlify.app/) as earlier implementations of the `<dialog>` element had [usability issues with some forms of assistive technology](https://www.scottohara.me/blog/2019/03/05/open-dialog.html).

When implementing a dialog, it is important to consider the most appropriate place to set user focus. Explicitly indicating the initial focus placement by use of the [autofocus](/en-US/docs/Web/HTML/Global_attributes/autofocus) attribute will help ensure initial focus is set to the element deemed the best initial focus placement for any particular dialog.  When in doubt, as it may not always be known where initial focus could be set within a dialog, particularly for instances where a dialog's content is dynamically rendered when invoked, then if necessary authors may decide focusing the `<dialog>` element itself would provide the best initial focus placement.

Ensure a mechanism is provided to allow users to close a dialog. The most robust way to ensure all users can close a dialog is to include an explicit button to do so. For instance, a confirmation, cancel or close button as appropriate. Additionally, for those using a device with a keyboard, the <kbd>Escape</kbd> key is commonly expected to close modal dialogs as well. By default, a `<dialog>` invoked by the `showModal()` method will allow for its dismissal by the <kbd>Escape</kbd>.  A non-modal dialog does not dismiss via the <kbd>Escape</kbd> key by default, and depending on what the non-modal dialog represents, it may not be desired for this behavior. If multiple modal dialogs are open, <kbd>Escape</kbd> should only close the last shown dialog.

The `<dialog>` element is exposed by browsers similarly to custom dialogs using the ARIA [role="dialog"](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) attribute. `<dialog>` elements invoked by the `showModal()` method will have an implicit [aria-modal="true"](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal), where as `<dialog>` elements invoked by the `show()` method, or rendered by use of the `open` attribute or changing the default `display` of a `<dialog>` will be exposed as `[aria-modal="false"]`.  It is recommended to use the appropriate `showModal()` or `show()` method to render dialogs.

Ensure your dialog implementation doesn't break expected default behaviors and follows proper labeling recommendations.

## Usage notes

- {{HTMLElement("form")}} elements can close a dialog if they have the attribute `method="dialog"`. When such a form is submitted, the dialog closes with its {{domxref("HTMLDialogElement.returnValue", "returnValue")}} property set to the `value` of the button that was used to submit the form.
- The {{cssxref('::backdrop')}} CSS pseudo-element can be used to style behind a `<dialog>` element when the dialog is displayed with {{domxref("HTMLDialogElement.showModal()")}}. For example, to dim unreachable content behind the modal dialog.

## Examples

### Simple example

The following will render a modeless (non-modal) dialog. The "OK" button allows the dialog to be closed when activated. It is important to provide a mechanism to close a dialog within the `dialog` element. For instance, the <kbd>Esc</kbd> key does not close modeless dialogs by default, nor can one assume that a user will even have access to a physical keyboard (e.g., someone using a touch screen device without access to a keyboard).

```html
<dialog open>
  <p>Greetings, one and all!</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
```

### Advanced example

This example opens a modal dialog that contains a form, when the "Update details" button is activated.

#### HTML

```html
<!-- Simple modal dialog containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <p><label>Favorite animal:
      <select>
        <option value="default">Choose…</option>
        <option>Brine shrimp</option>
        <option>Red panda</option>
        <option>Spider monkey</option>
      </select>
    </label></p>
    <div>
      <button value="cancel">Cancel</button>
      <button id="confirmBtn" value="default">Confirm</button>
    </div>
  </form>
</dialog>
<p>
  <button id="updateDetails">Update details</button>
</p>
<output></output>
```

#### JavaScript

```js
const updateButton = document.getElementById('updateDetails');
const favDialog = document.getElementById('favDialog');
const outputBox = document.querySelector('output');
const selectEl = favDialog.querySelector('select');
const confirmBtn = favDialog.querySelector('#confirmBtn');

// If a browser doesn't support the dialog, then hide the
// dialog contents by default.
if (typeof favDialog.showModal !== 'function') {
  favDialog.hidden = true;
  /* a fallback script to allow this dialog/form to function
     for legacy browsers that do not support <dialog>
     could be provided here.
  */
}
// "Update details" button opens the <dialog> modally
updateButton.addEventListener('click', () => {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    outputBox.value = "Sorry, the <dialog> API is not supported by this browser.";
  }
});
// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener('change', (e) => {
  confirmBtn.value = selectEl.value;
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener('close', () => {
  outputBox.value = `${favDialog.returnValue} button clicked - ${(new Date()).toString()}`;
});
```

### Result

{{EmbedLiveSample("Advanced_example", "100%", 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLDialogElement/close_event", "close")}} event
- The {{domxref("HTMLDialogElement/cancel_event", "cancel")}} event
- [HTML forms guide](/en-US/docs/Learn/Forms).
- The {{cssxref("::backdrop")}} pseudo-element
- [dialog-polyfill](https://github.com/GoogleChrome/dialog-polyfill)
