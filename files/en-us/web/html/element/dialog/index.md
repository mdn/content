---
title: "<dialog>: The Dialog element"
slug: Web/HTML/Element/dialog
page-type: html-element
browser-compat: html.elements.dialog
---

{{HTMLSidebar}}

The **`<dialog>`** [HTML](/en-US/docs/Web/HTML) element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.

The native HTML `<dialog>` element is used to create modal and modalless boxes. The `<dialog>` element should be displayed using JavaScript, either via the {{domxref("HTMLDialogElement.showModal()", ".showModal()")}} method to display a modal dialog or via the {{domxref("HTMLDialogElement.show()", ".show()")}} method to render th dialog modalless. The `<dialog>` should be closed via the {{domxref("HTMLDialogElement.close()", ".close()")}} method. Dialogs can be closed by submitting a `<form>` nested within the `<dialog>` via the `dialog` method. Modal dialogs can also be closed with the <kbd>Esc</kbd> key.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

> **Warning:** The `tabindex` attribute must not be used on the `<dialog>` element.

- `open`
  - : Indicates that the dialog is active and can be interacted with. When the `open` attribute is not set, the dialog _shouldn't_ be shown to the user.
    It is recommended to use the `.show()` or `.showModal()` methods to render dialogs, rather than the `open` attribute. If a `<dialog>` is opened using the `open` attribute, it will be non-modal.

> **Note:** Non-modal `<dialog>`s can be toggled open and closed by toggling the presence of the `open` attribute, but this is not recommended.

## Usage notes

- {{HTMLElement("form")}} elements can close a `<dialog>` if they have the attribute `method="dialog"` or if the button used to submit the form has `formmethod="dialog"` set. In this case, the `<dialog>` closes, the states of the form controls are saved, not submitted, and the {{domxref("HTMLDialogElement.returnValue", "returnValue")}} property gets set to the `value` of the button that was used to save the form's state.
- The {{cssxref('::backdrop')}} CSS pseudo-element can be used to style modal dialog's backdrop, which is displayed behind a `<dialog>` element when a dialog is displayed with {{domxref("HTMLDialogElement.showModal()")}}. For example, to dim unreachable content behind the modal dialog.
- The `autofocus` attribute should be added on the element that the user will expect to immediately interact with when a modal dialog opens, or the `<dialog>` element itself if there is no such element.

## Examples

### HTML-only example

The following will render a non-modal, or modal-less, dialog. The dialog is open when the page loads due to the inclusion of the boolean `open` attribute. Instead of using JavaScript, the "OK" button enables the dialog to be closed when activated due to the inclusion of a form with the [`method="dialog"`'](#method).

```html
<dialog open>
  <p>Greetings, one and all!</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
```

#### Result

{{EmbedLiveSample("Basic_but_not_recommended_example", "100%", 200)}}

This dialog was opened via the `open` attribute. Dialogs displayed by the inclusion of the `open` attribute are non-modal. In this example, when the dialog is dismissed, no method is provided to re-open it. The {{domxref("HTMLDialogElement.show()")}} method is the preferred method of making non-modal dialogs visible. Toggling the presence of the boolean `open` attribute will toggle the display of the dialog, but is not the recommended method.

### Modal example

This example opens a modal dialog when the "Show the dialog" button is activated. Once made visible, the dialog can be dismissed by activating the "Close" button within the dialog, or via the <kbd>Esc</kbd> key.

#### HTML

```html
<dialog>
  <button autofocus>Close</button>
  <p>This is a dialog</p>
</dialog>
<button>Show the dialog</button>
```

By default, the user agent gives focus to the first focusable element in the dialog when it is opened. We included the [`autofocus`](/en-US/docs/Web/HTML/Global_attributes/autofocus) on the element we expect the user will expect to immediately interact with when the dialog opens.

#### CSS

We can style the {{cssxref('::backdrop')}}.

```css
::backdrop {
  image: linear-gradient(45deg, magenta, rebeccapurple, dodgerblue, green);
  opacity: 0.75;
}
```

#### JavaScript

The dialog is opened modally with the `.showModal()` method and closed with the `.close()` method.

```js
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button close the <dialog>
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### Result

{{EmbedLiveSample("Modal_example", "100%", 200)}}

When a modal dialog is opened, it is opened over the top of any other dialogs that might be present. Everything outside the modal dialog are inert with interactions outside the dialog being blocked. You'll note when the dialog is opened, With the exception of the dialog, interacting with the document is not possible; the "Show the dialog" button is mostly obfuscated by the almost opaque backdrop and is inert.

### Return value example

TThe value of the submitting button whose activation submits a form within a dialog is the [`returnValue`](/en-US/docs/Web/API/HTMLDialogElement/returnValue) of the dialog.

This example opens a modal dialog when the "Show the dialog" button is activated. The dialog contains a form with a {{HTMLElement("select")}} and two {{HTMLElement("button")}} elements which default to `type="submit"`. An eventlistener updates the value of the "confirm" button when the `<select>` changes. This is the return value. If the dialog is closed with the <kbd>Esc</kbd> key, there is no return value.

When the dialog is closed, the return value is displayed under the "Show the dialog" button.

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

This example demonstrated three methods of closing modal dialogs; this dialog can be closed via an in-dialog form submitted using the `dialog` methode methods, as we also saw in the [HTML-only example](#html-only-example). This dialog can also be closed with the <kbd>Esc</kbd> key and via the {domxref("HTMLDialogElement.close()")}} method, also demonstrated in the [modal example](#modal-example). In this example, the "Cancel" button closes the dialog via the `dialog` form method and the "Confirm" closes the dialog via the {{domxref("HTMLDialogElement.close()")}} method.

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

## Accessibility considerations

While dialogs can be created using other elements, the native `<dialog>` element provides usability and accessibility features that must be replicated if using other elements for a similar purpose. If creating a custom dialog implementation, ensure all expected default behaviors are supported and proper labeling recommendations are followed.

When implementing a dialog, it is important to consider the most appropriate place to set user focus. When using {{domxref("HTMLDialogElement.showModal()")}} to open a `<dialog>`, focus is set on the first nested focusable element. Explicitly indicating the initial focus placement by use of the [autofocus](/en-US/docs/Web/HTML/Global_attributes/autofocus) attribute will help ensure initial focus is set to the element deemed the best initial focus placement for any particular dialog. When in doubt, as it may not always be known where initial focus could be set within a dialog, particularly for instances where a dialog's content is dynamically rendered when invoked, the `<dialog>` element itself may provide the best initial focus placement.

Ensure a mechanism is provided to allow users to close a dialog. The most robust way to ensure all users can close a dialog is to include an explicit button to do so, sucha as a confirmation, cancel or close button.

By default, a `<dialog>` invoked by the `showModal()` method will allow for its dismissal by the <kbd>Escape</kbd>. A non-modal dialog does not dismiss via the <kbd>Escape</kbd> key by default, and depending on what the non-modal dialog represents, it may not be desired for this behavior. Keyboard users expect the <kbd>Escape</kbd> key to close modal dialogs; ensure this behavior is implemented and maintained. If multiple modal dialogs are open, <kbd>Escape</kbd> should only close the last shown dialog. When using `<dialog>`, this behavior is provided by the browser.

The `<dialog>` element is exposed by browsers similarly to custom dialogs using the ARIA [role="dialog"](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) attribute. `<dialog>` elements invoked by the `showModal()` method will have an implicit [aria-modal="true"](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal), whereas `<dialog>` elements invoked by the `show()` method, or rendered by use of the `open` attribute or changing the default `display` of a `<dialog>` will be exposed as `[aria-modal="false"]`. When implementing modal dialogs, everything other than the `<dialog>` and its contents should be rendered inert using the [`inert`](/en-US/docs/Web/HTML/Global_attributes/inert) attribute. When using `<dialog>` along with the `HTMLDialogElement.showModal()` method, this behavior is provided by the browser.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLDialogElement/close_event", "close")}} event
- The {{domxref("HTMLDialogElement/cancel_event", "cancel")}} event
- [HTML forms guide](/en-US/docs/Learn/Forms).
- The {{cssxref("::backdrop")}} pseudo-element
