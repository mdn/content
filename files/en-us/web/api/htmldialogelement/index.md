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
  - : A string that sets or returns the [`closedby`](/en-US/docs/Web/HTML/Reference/Elements/dialog#closedby) HTML attribute, indicating the types of user actions that can be used to close the dialog.
- {{domxref("HTMLDialogElement.open")}}
  - : A boolean value reflecting the [`open`](/en-US/docs/Web/HTML/Reference/Elements/dialog#open) HTML attribute, indicating whether the dialog is available for interaction.
- {{domxref("HTMLDialogElement.returnValue")}}
  - : A string that sets or returns the return value for the dialog.

## Instance methods

_Also inherits methods from its parent interface, {{domxref("HTMLElement")}}._

- {{domxref("HTMLDialogElement.close()")}}
  - : Closes the dialog. An optional string may be passed as an argument, updating the {{domxref("HTMLDialogElement.returnValue", "returnValue")}} of the dialog.
- {{domxref("HTMLDialogElement.requestClose()")}}
  - : Requests to close the dialog. An optional string may be passed as an argument, updating the {{domxref("HTMLDialogElement.returnValue", "returnValue")}} of the dialog.
- {{domxref("HTMLDialogElement.show()")}}
  - : Displays the dialog modelessly, i.e., still allowing interaction with content outside of the dialog.
- {{domxref("HTMLDialogElement.showModal()")}}
  - : Displays the dialog as a modal, over the top of any other dialogs that might be present. Everything outside the dialog is {{DOMxRef("HTMLElement.inert", "inert")}} with interactions outside the dialog being blocked.

## Events

_Also inherits events from its parent interface, {{DOMxRef("HTMLElement")}}._

Listen to these events using {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} or by assigning an event listener to the `oneventname` property of this interface.

- {{domxref("HTMLDialogElement/cancel_event", "cancel")}}
  - : Fired when the dialog is requested to close, whether with the escape key, or via the {{domxref("HTMLDialogElement.requestClose()", "requestClose()")}} method. If the event is canceled (via {{domxref("Event.preventDefault()")}}), the dialog will remain open. If not canceled, the dialog will close and the {{domxref("HTMLDialogElement/close_event", "close")}} event will be fired.
- {{domxref("HTMLDialogElement/close_event", "close")}}
  - : Fired when the dialog is closed.

## Examples

### Open / close a modal dialog

The following example shows a button that, when clicked, uses the {{domxref("HTMLDialogElement.showModal()", "showModal()")}} function to open a modal dialog containing a form.

While open, everything other than the modal dialog's contents is inert.
You can click the _Close_ button to close the dialog (via the {{domxref("HTMLDialogElement.close()", "close()")}} function), or submit the form via the _Confirm_ button.

The example demonstrates:

1. Closing a form with the {{domxref("HTMLDialogElement.close()", "close()")}} function
2. Closing a form on form submit and setting the dialog {{domxref("HTMLDialogElement.returnValue", "returnValue")}}
3. Closing a form with the <kbd>Esc</kbd> key
4. "state change" events that can be fired on the dialog: {{domxref("HTMLDialogElement/cancel_event", "cancel")}} and {{domxref("HTMLDialogElement/close_event", "close")}}, and the inherited events {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}}, and {{domxref("HTMLElement/toggle_event", "toggle")}}.

#### HTML

```html
<dialog id="dialog">
  <button id="close" type="button">Close</button>
  <form method="dialog" id="form">
    <p>
      <label for="fav-animal">Favorite animal:</label>
      <select id="fav-animal" name="favAnimal" required>
        <option></option>
        <option>Brine shrimp</option>
        <option>Red panda</option>
        <option>Spider monkey</option>
      </select>
    </p>
    <div>
      <button id="submit" type="submit">Confirm</button>
    </div>
  </form>
</dialog>

<button id="open">Open dialog</button>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 170px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

##### Open the dialog

The code first gets objects for the {{htmlelement("dialog")}} element, the {{htmlelement("button")}} elements, and the {{htmlelement("select")}} element.
It then adds a listener to call the {{domxref("HTMLDialogElement.showModal()")}} function when the _Open Dialog_ button is clicked.

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");

// Open button opens a modal dialog
openButton.addEventListener("click", () => {
  log(`dialog: showModal()`);
  dialog.showModal();
});
```

##### Close the dialog when the _Close_ button is clicked

Next we add a listener to the _Close_ button {{domxref("Element/click_event", "click")}} event. The handler set the {{domxref("HTMLDialogElement.returnValue", "returnValue")}} and calls the {{domxref("HTMLDialogElement.close()", "close()")}} function to close the dialog.

```js
// Close button closes the dialog box
const closeButton = document.getElementById("close");
closeButton.addEventListener("click", () => {
  dialog.returnValue = ""; // Reset return value
  log(`dialog: close()`);
  dialog.close();
  // Alternatively, we could use dialog.requestClose(""); with an empty return value.
});
```

##### Close the dialog when _Confirm_ button is clicked via form submission

Next we add a listener to the {{htmlelement("form")}} {{domxref("HTMLFormElement.submit_event", "submit")}} event.
The form is submitted when the required {{htmlelement("select")}} element has a value and the _Confirm_ button is clicked. If the {{htmlelement("select")}} element does not have a value the form will not submit and the dialog will remain open.

```js
// Confirm button closes dialog if there is a selection.
const form = document.getElementById("form");
const selectElement = document.getElementById("fav-animal");
form.addEventListener("submit", () => {
  log(`form: submit`);
  // Set the return value to the selected option value
  dialog.returnValue = selectElement.value;
  // We don't need to close the dialog here
  // submitting the form with method="dialog" will do that automatically.
  // dialog.close();
});
```

##### Get the `returnValue` on `close`

Calling {{domxref("HTMLDialogElement.close()", "close()")}} (or successfully submitting a form with `method="dialog"`") fires the {{domxref("HTMLDialogElement/close_event", "close")}} event, which we implement below by logging the return value of the dialog.

```js
dialog.addEventListener("close", (event) => {
  log(`close_event: (dialog.returnValue: "${dialog.returnValue}")`);
});
```

##### `cancel` event

The {{domxref("HTMLDialogElement/cancel_event", "cancel")}} event is fired when "platform specific methods" are used to close the dialog, such as the <kbd>Esc</kbd> key.
It is also fired when the {{domxref("HTMLDialogElement.requestClose()", "requestClose()")}} method is called.
The event is "cancelable" which means that we could use it to prevent the dialog from closing.
Here we just treat the cancel as a "close" operation, and reset the {{domxref("HTMLDialogElement.returnValue", "returnValue")}} to `""` to clear any value that may have been set.

```js
dialog.addEventListener("cancel", (event) => {
  log(`cancel_event: (dialog.returnValue: "${dialog.returnValue}")`);
  dialog.returnValue = ""; // Reset value
});
```

##### `toggle` event

The {{domxref("HTMLElement/toggle_event", "toggle")}} event (inherited from {{domxref("HTMLElement", "HTMLElement")}}) is fired just after a dialog has opened or closed (but before the {{domxref("HTMLDialogElement/close_event", "close")}} event).

Here we add a listener to log when the dialog opens and closes.

> [!NOTE]
> The {{domxref("HTMLElement/toggle_event", "toggle")}} and {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}} events may not be fired at dialog elements on all browsers.
> On these browser versions you can instead check the {{domxref("HTMLDialogElement.open", "open")}} property after attempting to open/close the dialog.

```js
dialog.addEventListener("toggle", (event) => {
  log(`toggle event: newState: ${event.newState}`);
});
```

##### `beforetoggle` event

The {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}} event (inherited from {{domxref("HTMLElement", "HTMLElement")}}) is a cancellable event that is fired just before a dialog is opened or closed.
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
Note that both `Confirm` and `Close` buttons result in the {{domxref("HTMLDialogElement/close_event", "close")}} event being fired, and that the result should reflect the selected dialog option.

{{EmbedLiveSample("Open / close a modal dialog", '100%', "250px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{htmlelement("dialog")}} element
