---
title: "<dialog>: The Dialog element"
slug: Web/HTML/Element/dialog
page-type: html-element
browser-compat: html.elements.dialog
---

{{HTMLSidebar}}

The **`<dialog>`** [HTML](/en-US/docs/Web/HTML) element represents a modal or non-modal dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.

The HTML `<dialog>` element is used to create both modal and non-modal dialog boxes. Modal dialog boxes interrupt interaction with the rest of the page being inert, while non-modal dialog boxes allow interaction with the rest of the page.

JavaScript should be used to display the `<dialog>` element. Use the {{domxref("HTMLDialogElement.showModal()", ".showModal()")}} method to display a modal dialog and the {{domxref("HTMLDialogElement.show()", ".show()")}} method to display a non-modal dialog. The dialog box can be closed using the {{domxref("HTMLDialogElement.close()", ".close()")}} method or using the [`dialog`](/en-US/docs/Web/HTML/Element/form#method) method when submitting a `<form>` that is nested within the `<dialog>` element. Modal dialogs can also be closed by pressing the <kbd>Esc</kbd> key.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

> **Warning:** The `tabindex` attribute must not be used on the `<dialog>` element.

- `open`

  - : Indicates that the dialog box is active and is available for interaction. If the `open` attribute is not set, the dialog box will not be visible to the user.
    It is recommended to use the `.show()` or `.showModal()` method to render dialogs, rather than the `open` attribute. If a `<dialog>` is opened using the `open` attribute, it is non-modal.

    > **Note:** While you can toggle between the open and closed states of non-modal dialog boxes by toggling the presence of the `open` attribute, this approach is not recommended.

## Usage notes

- HTML {{HTMLElement("form")}} elements can be used to close a dialog box if they have the attribute `method="dialog"` or if the button used to submit the form has [`formmethod="dialog"`](/en-US/docs/Web/HTML/Element/input#formmethod) set. When a `<form>` within a `<dialog>` is submitted via the `dialog` method, the dialog box closes, the states of the form controls are saved but not submitted, and the {{domxref("HTMLDialogElement.returnValue", "returnValue")}} property gets set to the value of the button that was activated.
- The CSS {{cssxref('::backdrop')}} pseudo-element can be used to style the backdrop of a modal dialog, which is displayed behind the `<dialog>` element when the dialog is displayed using the {{domxref("HTMLDialogElement.showModal()")}} method. For example, you can use this pseudo-element to obfuscate the inert content behind the modal dialog.
- The [`autofocus`](/en-US/docs/Web/HTML/Global_attributes/autofocus) attribute should be added to the element with which the user is expected to interact immediately on opening a modal dialog. If there is no element involving immediate interaction, the `autofocus` attribute can be added to the `<dialog>` element itself.

## Examples

### Caveats of creating a dialog using only HTML

This example demonstrates the create a non-modal dialog by using only HTML. Because of the boolean `open` attribute in the `<dialog>` element, the dialog appears open when the page loads. The dialog can be closed by clicking the "OK" button because the `method` attribute in the `<form>` element is set to `"dialog"`. In this case, no JavaScript is needed to close the form.

```html
<dialog open>
  <p>Greetings, one and all!</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
```

#### Result

{{EmbedLiveSample("Caveats_of_creating_a_dialog_using_only_HTML", "100%", 200)}}

This dialog is initially open because of the presence of the `open` attribute. Dialogs that are displayed using the `open` attribute are non-modal. You may notice that after clicking "OK", the dialog gets dismissed leaving the Result frame empty. When the dialog is dismissed, there is no method provided to reopen it. For this reason, the preferred method to display non-modal dialogs is by using the {{domxref("HTMLDialogElement.show()")}} method. It is possible to toggle the display of the dialog by adding or removing the boolean `open` attribute, but it is not the recommended practice.

### Creating a modal dialog

This example demonstrates a modal dialog with a [gradient](/en-US/docs/Web/CSS/gradient) backdrop. The `.showModal()` method opens the modal dialog when the "Show the dialog" button is activated. The dialog can be closed by pressing the <kbd>Esc</kbd> key or via the `close()` method when the "Close" button within the dialog is activated.

When a dialog opens, the browser, by default, gives focus to the first element that can be focused within the dialog. In this example, the [`autofocus`](/en-US/docs/Web/HTML/Global_attributes/autofocus) attribute is applied to the "Close" button, giving it focus when the dialog opens, as this is the element we expect the user will interact with immediately after the dialog opens.

#### HTML

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a groovy backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

We can style the backdrop of the dialog by using the {{cssxref('::backdrop')}} pseudo-element.

```css
::backdrop {
  background-image: linear-gradient(
    45deg,
    magenta,
    rebeccapurple,
    dodgerblue,
    green
  );
  opacity: 0.75;
}
```

#### JavaScript

The dialog is opened modally using the `.showModal()` method and closed using the `.close()` method.

```js
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### Result

{{EmbedLiveSample("Modal_example", "100%", 200)}}

When the modal dialog is displayed, it appears above any other dialogs that might be present. Everything outside the modal dialog is inert and interactions outside the dialog are blocked. Notice that when the dialog is open, with the exception of the dialog itself, interaction with the document is not possible; the "Show the dialog" button is mostly obfuscated by the almost opaque backdrop of the dialog and is inert.

### Handling the return value from the dialog

This example demonstrates the [`returnValue`](/en-US/docs/Web/API/HTMLDialogElement/returnValue) of the `<dialog>` element and how to close a modal dialog by using a form. By default, the `returnValue` is the empty string or the value of the button that submits the form within the `<dialog>` element, if there is one.

This example opens a modal dialog when the "Show the dialog" button is activated. The dialog contains a form with a {{HTMLElement("select")}} and two {{HTMLElement("button")}} elements, which default to `type="submit"`. An eventlistener updates the value of the "Confirm" button when the select option changes. If the "Confirm" button is activated to close the dialog, the current value of the button is the return value. If the dialog is closed by pressing the "Cancel" button, the `returnValue` is `cancel`.

When the dialog is closed, the return value is displayed under the "Show the dialog" button. If the dialog is closed by pressing the <kbd>Esc</kbd> key, the `returnValue` is not updated and the `close` event doesn't occur so the text in the {{HTMLElement("output")}} is not updated.

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

{{EmbedLiveSample("Handling the return value from the dialog", "100%", 300)}}

This example demonstrates the following three methods of closing modal dialogs:

- By submitting the form within the dialog form using the `dialog` method (as seen in the [HTML-only example](#caveats-of-creating-a-dialog-using-only-html)).
- By pressing the <kbd>Esc</kbd> key.
- By calling the {{domxref("HTMLDialogElement.close()")}} method (as seen in the [modal example](#creating_a_modal_dialog).
  In this example, the "Cancel" button closes the dialog via the `dialog` form method and the "Confirm" button closes the dialog via the {{domxref("HTMLDialogElement.close()")}} method.

The "Cancel" button includes the [`formmethod="dialog"`](/en-US/docs/Web/HTML/Element/input/submit#formmethod) attribute, which overrides the {{HTMLElement("form")}}'s default {{HTTPMethod("GET")}} method. When a form's method is [`dialog`](#usage_notes), the state of the form is saved but not submitted, and the dialog gets closed.

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

## Accessibility considerations

When implementing a dialog, it is important to consider the most appropriate place to set user focus. When using {{domxref("HTMLDialogElement.showModal()")}} to open a `<dialog>`, focus is set on the first nested focusable element. Explicitly indicating the initial focus placement by using the [`autofocus`](/en-US/docs/Web/HTML/Global_attributes/autofocus) attribute will help ensure initial focus is set on the element deemed the best initial focus placement for any particular dialog. When in doubt, as it may not always be known where initial focus could be set within a dialog, particularly for instances where a dialog's content is dynamically rendered when invoked, the `<dialog>` element itself may provide the best initial focus placement.

Ensure a mechanism is provided to allow users to close the dialog. The most robust way to ensure that all users can close the dialog is to include an explicit button to do so, such as a confirmation, cancellation, or close button.

By default, a dialog invoked by the `showModal()` method can be dismissed by pressing the <kbd>Esc</kbd> key. A non-modal dialog does not dismiss via the <kbd>Esc</kbd> key by default, and depending on what the non-modal dialog represents, it may not be desired for this behavior. Keyboard users expect the <kbd>Esc</kbd> key to close modal dialogs; ensure that this behavior is implemented and maintained. If multiple modal dialogs are open, pressing the <kbd>Esc</kbd> key should close only the last shown dialog. When using `<dialog>`, this behavior is provided by the browser.

While dialogs can be created using other elements, the native `<dialog>` element provides usability and accessibility features that must be replicated if you use other elements for a similar purpose. If you're creating a custom dialog implementation, ensure that all expected default behaviors are supported and proper labeling recommendations are followed.

The `<dialog>` element is exposed by browsers in a manner similar to custom dialogs that use the ARIA [role="dialog"](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) attribute. `<dialog>` elements invoked by the `showModal()` method implicitly have [aria-modal="true"](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal), whereas `<dialog>` elements invoked by the `show()` method or displayed using the `open` attribute or by changing the default `display` of a `<dialog>` are exposed as `[aria-modal="false"]`. When implementing modal dialogs, everything other than the `<dialog>` and its contents should be rendered inert using the [`inert`](/en-US/docs/Web/HTML/Global_attributes/inert) attribute. When using `<dialog>` along with the `HTMLDialogElement.showModal()` method, this behavior is provided by the browser.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLDialogElement")}} interface
- {{domxref("HTMLDialogElement/close_event", "close")}} event
- {{domxref("HTMLDialogElement/cancel_event", "cancel")}} event
- {{domxref("HTMLDialogElement/open", "open")}} property of the `HTMLDialogElement` interface
- [`inert`](/en-US/docs/Web/HTML/Global_attributes/inert) global attribute for HTML elements
- {{CSSXref("::backdrop")}} CSS pseudo-element
- [Web forms](/en-US/docs/Learn/Forms) in the Learn area
