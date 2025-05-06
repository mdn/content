---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
page-type: web-api-interface
browser-compat:
  - api.HTMLDialogElement
  - api.HTMLElement.beforetoggle_event.dialog_elements
  - api.HTMLElement.toggle_event.dialog_elements
---

{{APIRef("HTML DOM")}}

The **`HTMLDialogElement`** interface provides methods to manipulate {{HTMLElement("dialog")}} elements. It inherits properties and methods from the {{domxref("HTMLElement")}} interface.

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from its parent interface, {{domxref("HTMLElement")}}._

- {{domxref("HTMLDialogElement.closedBy")}}
  - : A string that sets or returns the [`closedby`](/en-US/docs/Web/HTML/Reference/Elements/dialog#closedby) attribute value of the `<dialog>` element, which indicates the types of user actions that can be used to close the dialog.
- {{domxref("HTMLDialogElement.open")}}
  - : A boolean value reflecting the [`open`](/en-US/docs/Web/HTML/Reference/Elements/dialog#open) HTML attribute, indicating whether the dialog is available for interaction.
- {{domxref("HTMLDialogElement.returnValue")}}
  - : A string that sets or returns the return value for the dialog.

## Instance methods

_Also inherits methods from its parent interface, {{domxref("HTMLElement")}}._

- {{domxref("HTMLDialogElement.close()")}}
  - : Closes the dialog. An optional string may be passed as an argument, updating the `returnValue` of the dialog.
- {{domxref("HTMLDialogElement.requestClose()")}}
  - : Requests to close the dialog. An optional string may be passed as an argument, updating the `returnValue` of the dialog.
- {{domxref("HTMLDialogElement.show()")}}
  - : Displays the dialog modelessly, i.e., still allowing interaction with content outside of the dialog.
- {{domxref("HTMLDialogElement.showModal()")}}
  - : Displays the dialog as a modal, over the top of any other dialogs that might be present. Everything outside the dialog are [inert](/en-US/docs/Web/API/HTMLElement/inert) with interactions outside the dialog being blocked.

## Events

_Also inherits events from its parent interface, {{DOMxRef("HTMLElement")}}._

Listen to these events using {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} or by assigning an event listener to the `oneventname` property of this interface.

- {{domxref("HTMLDialogElement/cancel_event", "cancel")}}
  - : Fired when the dialog is requested to close, whether with the escape key, or via the `HTMLDialogElement.requestClose()` method.
- {{domxref("HTMLDialogElement/close_event", "close")}}
  - : Fired when the dialog is closed, whether with the escape key, the `HTMLDialogElement.close()` method, or via submitting a form within the dialog with [`method="dialog"`](/en-US/docs/Web/HTML/Reference/Elements/form#method).

## Examples

### Opening a modal dialog

The following example shows a button that, when clicked, uses the {{domxref("HTMLDialogElement.showModal()")}} function to open a modal {{htmlelement("dialog")}} containing a form.

While open, everything other than the modal dialog's contents is inert.
You can click the _Cancel_ button to close the dialog (via the {{domxref("HTMLDialogElement.close()")}} function), or submit the form via the _Confirm_ button.

The example demonstrates how you might use all the "state change" events that can be fired on the dialog: {{domxref("HTMLDialogElement/cancel_event", "cancel")}} and {{domxref("HTMLDialogElement/close_event", "close")}}, and the inherited events {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}}, and {{domxref("HTMLElement/toggle_event", "toggle")}}.

#### HTML

```html
<!-- pop-up dialog box, containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <p>
      <label for="favAnimal">Favorite animal:</label>
      <select id="favAnimal" name="favAnimal">
        <option></option>
        <option>Brine shrimp</option>
        <option>Red panda</option>
        <option>Spider monkey</option>
      </select>
    </p>
    <div>
      <button id="cancel" type="reset">Cancel</button>
      <button id="submit" type="submit">Confirm</button>
    </div>
  </form>
</dialog>

<div>
  <button id="updateDetails">Update details</button>
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 150px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

##### Showing the dialog

The code first gets objects for the {{htmlelement("button")}} elements, the {{htmlelement("dialog")}} element, and the {{htmlelement("select")}} element.
It then adds a listener to call the {{domxref("HTMLDialogElement.showModal()")}} function when the _Update_ button is clicked.

```js
const updateButton = document.getElementById("updateDetails");
const confirmButton = document.getElementById("submit");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("favDialog");
const selectElement = document.getElementById("favAnimal");

// Update button opens a modal dialog
updateButton.addEventListener("click", () => {
  dialog.showModal();
});
```

##### Cancel and confirm buttons

Next we add listeners to the _Confirm_ and _Cancel_ button `click` events.
The handlers call {{domxref("HTMLDialogElement.close()")}} with the selection value (if present) and no value, which in turn set the return value of the dialog ({{domxref("HTMLDialogElement.returnValue")}}) to the selection value and `null`, respectively.

```js
// Confirm button closes dialog if there is a selection.
confirmButton.addEventListener("click", () => {
  if (selectElement.value) {
    // Set dialog.returnValue to selected value
    dialog.close(selectElement.value);
  }
});

// Cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
  dialog.close(); // Set dialog.returnValue to null
});
```

Calling `close()` also fires the {{domxref("HTMLDialogElement/close_event", "close")}} event, which we implement below by logging the return value of the dialog.
If the _Confirm_ button was clicked this should be the selected value in the dialog, otherwise it should be `null`.

```js
dialog.addEventListener("close", (event) => {
  log(`close_event: (dialog.returnValue: "${dialog.returnValue}")`);
});
```

##### Cancel event

The {{domxref("HTMLDialogElement/cancel_event", "cancel")}} event is fired when "platform specific methods" are used to close the dialog, such as the <kbd>Esc</kbd> key.
It is also fired when the `HTMLDialogElement.requestClose()` method is called.
The event is "cancelable" which means that we could use it to prevent the dialog from closing.
Here we just treat the cancel as a "close" operation, and reset the {{domxref("HTMLDialogElement.returnValue")}} to `""` to clear any value that may have been set.

```js
dialog.addEventListener("cancel", (event) => {
  log(`cancel_event: (dialog.returnValue: "${dialog.returnValue}")`);
  dialog.returnValue = ""; // Reset value
});
```

##### Toggle event

The [`toggle` event](/en-US/docs/Web/API/HTMLElement/toggle_event) (inherited from `HTMLElement`) is fired just after a dialog has opened or closed (but before the `closed` event).

Here we add a listener to log when the Dialog opens and closes.

> [!NOTE]
> The `toggle` and `beforetoggle` events may not be fired at dialog elements on all browsers.
> On these browser versions you can instead check the {{domxref("HTMLDialogElement.open")}} property after attempting to open/close the dialog.

```js
dialog.addEventListener("toggle", (event) => {
  log(`toggle_event: Dialog ${event.newState}`);
});
```

##### Beforetoggle event

The [`beforetoggle` event](/en-US/docs/Web/API/HTMLElement/beforetoggle_event) (inherited from `HTMLElement`) is a cancellable event that is fired just before a dialog is opened or closed.
If needed, this can be used to prevent a dialog from showing, or to perform actions on other elements that are affected by the dialog open/close state, such as adding classes on them to trigger animations.

In this case we just log the old and new state.

```js
dialog.addEventListener("beforetoggle", (event) => {
  log(
    `beforetoggle event: oldState: ${event.oldState}, newState: ${event.newState}`,
  );

  // Call event.preventDefault() to prevent a dialog opening
  /*
    if (shouldCancel()) {
        event.preventDefault();
    }
  */
});
```

#### Result

Try out the example below.
Note that both `Confirm` and `Cancel` buttons result in the `close` event being fired, and that the result should reflect the selected dialog option.

{{EmbedLiveSample("Opening a modal dialog", '100%', "250px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("dialog") }}.
