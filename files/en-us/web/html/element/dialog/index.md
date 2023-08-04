---
title: "<dialog>: The Dialog element"
slug: Web/HTML/Element/dialog
page-type: html-element
browser-compat: html.elements.dialog
---

{{HTMLSidebar}}

The **`<dialog>`** [HTML](/en-US/docs/Web/HTML) element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

> **Warning:** The `tabindex` attribute must not be used on the `<dialog>` element.

- `open`
  - : Indicates that the dialog is active and can be interacted with. When the `open` attribute is not set, the dialog _shouldn't_ be shown to the user.
    It is recommended to use the `.show()` or `.showModal()` methods to render dialogs, rather than the `open` attribute. If a `<dialog>` is opened using the `open` attribute, it will be non-modal.

## Accessibility considerations

The native HTML `<dialog>` element should be used in creating modal dialogs as it provides usability and accessibility features that must be replicated if using other elements for a similar purpose. Use the appropriate `.showModal()` or `.show()` method to render dialogs. If creating a custom dialog implementation, ensure all expected default behaviors are supported and proper labeling recommendations are followed.

When implementing a dialog, it is important to consider the most appropriate place to set user focus. Explicitly indicating the initial focus placement by use of the [autofocus](/en-US/docs/Web/HTML/Global_attributes/autofocus) attribute will help ensure initial focus is set to the element deemed the best initial focus placement for any particular dialog. When in doubt, as it may not always be known where initial focus could be set within a dialog, particularly for instances where a dialog's content is dynamically rendered when invoked, then if necessary authors may decide focusing the `<dialog>` element itself would provide the best initial focus placement. When using {{domxref("HTMLDialogElement.showModal()")}} to open a `<dialog>`, focus is set on the first nested focusable element.

Ensure a mechanism is provided to allow users to close a dialog. The most robust way to ensure all users can close a dialog is to include an explicit button to do so. For instance, a confirmation, cancel or close button as appropriate. Additionally, for those using a device with a keyboard, the <kbd>Escape</kbd> key is commonly expected to close modal dialogs as well. By default, a `<dialog>` invoked by the `showModal()` method will allow for its dismissal by the <kbd>Escape</kbd>. A non-modal dialog does not dismiss via the <kbd>Escape</kbd> key by default, and depending on what the non-modal dialog represents, it may not be desired for this behavior. If multiple modal dialogs are open, <kbd>Escape</kbd> should only close the last shown dialog. When using `<dialog>`, this behavior is provided by the browser.

The `<dialog>` element is exposed by browsers similarly to custom dialogs using the ARIA [role="dialog"](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) attribute. `<dialog>` elements invoked by the `showModal()` method will have an implicit [aria-modal="true"](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal), whereas `<dialog>` elements invoked by the `show()` method, or rendered by use of the `open` attribute or changing the default `display` of a `<dialog>` will be exposed as `[aria-modal="false"]`. When implementing modal dialogs, everything other than the `<dialog>` and its contents should be rendered inert using the [`inert`](/en-US/docs/Web/HTML/Global_attributes/inert) attribute. When using `<dialog>` along with the `HTMLDialogElement.showModal()` method, this behavior is provided by the browser.

## Usage notes

- {{HTMLElement("form")}} elements can close a `<dialog>` if they have the attribute `method="dialog"` or if the button used to submit the form has `formmethod="dialog"` set. In this case, the state of the form controls are saved, not submitted, the `<dialog>` closes, and the {{domxref("HTMLDialogElement.returnValue", "returnValue")}} property gets set to the `value` of the button that was used to save the form's state.
- The {{cssxref('::backdrop')}} CSS pseudo-element can be used to style the backdrop that is displayed behind a `<dialog>` element when the dialog is displayed with {{domxref("HTMLDialogElement.showModal()")}}. For example, to dim unreachable content behind the modal dialog.

## Examples

### Simple example

The following will render a non-modal, or modal-less, dialog. The "OK" button allows the dialog to be closed when activated.

```html
<dialog open>
  <p>Greetings, one and all!</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
```

#### Result

{{EmbedLiveSample("Simple_example", "100%", 200)}}

Because this dialog was opened via the `open` attribute, it is non-modal. In this example, when the dialog is dismissed, no method is provided to re-open it. Opening dialogs via {{domxref("HTMLDialogElement.show()")}} is preferred over the toggling of the boolean `open` attribute.

### Advanced example

This example opens a modal dialog when the "Show the dialog" button is activated. The dialog contains a form with a {{HTMLElement("select")}} and two {{HTMLElement("button")}} elements which default to `type="submit"`. Updating the value of the `<select>` updates the value of the "confirm" button. This value is the [`returnValue`](/en-US/docs/Web/API/HTMLDialogElement/returnValue). If the dialog is closed with the <kbd>Esc</kbd> key, there is no return value. When the dialog is closed, the return value is displayed under the "Show the dialog" button.

#### HTML

```html
<!-- A modal dialog containing a form -->
<dialog id="favDialog">
  <form>
    <p>
      <label>
        Favorite animal:
        <select>
          <option value="default">Choose…</option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select>
      </label>
    </p>
    <div>
      <button value="cancel" formmethod="dialog">Cancel</button>
      <button id="confirmBtn" value="default">Confirm</button>
    </div>
  </form>
</dialog>
<p>
  <button id="showDialog">Show the dialog</button>
</p>
<output></output>
```

#### JavaScript

```js
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener("change", (e) => {
  confirmBtn.value = selectEl.value;
});

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
favDialog.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for "default" rather than empty string
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog.close(selectEl.value); // Have to send the select box value here.
});
```

### Result

{{EmbedLiveSample("Advanced_example", "100%", 300)}}

This modal dialog can be closed three ways. For keyboard users, modal dialogs can be closed with the <kbd>Esc</kbd> key. In this example, the "Cancel" button closes the dialog via the `dialog` form method and the "Confirm" closes the dialog via the {{domxref("HTMLDialogElement.close()")}} method.
The "Cancel" button includes a [`formmethod="dialog"`](/en-US/docs/Web/HTML/Element/input/submit#formmethod), which overrides the {{HTMLElement("form")}}'s default {{HTTPMethod("GET")}} [`method`](/en-US/docs/Web/HTML/Element/form#method). When a form's method is [`dialog`](#usage_notes), the state of the form is saved, not submitted, and the dialog gets closed.
Without an `action`, submitting the form via the default {{HTTPMethod("GET")}} method causes a page to reload. We use JavaScript to prevent the submission and close the dialog with the {{domxref("event.preventDefault()")}} and {{domxref("HTMLDialogElement.close()")}} methods, respectively.

It is important to provide a closing mechanism within every `dialog` element. The <kbd>Esc</kbd> key does not close non-modal dialogs by default, nor can one assume that a user will even have access to a physical keyboard (e.g., someone using a touch screen device without access to a keyboard).

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content">Flow content</a>,
        <a href="/en-US/docs/Web/HTML/Element/Heading_Elements#sectioning_roots">sectioning root</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content">Flow content</a>
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
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content">flow content</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role">dialog</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role"><code>alertdialog</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLDialogElement")}}</td>
    </tr>
  </tbody>
</table>

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
