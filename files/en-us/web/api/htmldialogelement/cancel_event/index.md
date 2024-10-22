---
title: "HTMLDialogElement: cancel event"
short-title: cancel
slug: Web/API/HTMLDialogElement/cancel_event
page-type: web-api-event
browser-compat: api.HTMLDialogElement.cancel_event
---

{{APIRef}}

The **`cancel`** event fires on a {{HTMLElement("dialog")}} when the user instructs the browser that they wish to dismiss the current open dialog. The browser fires this event when the user presses the <kbd>Esc</kbd> key.

This event does not bubble.

When a `<dialog>` is dismissed with the <kbd>Esc</kbd> key, both the `cancel` and {{domxref("HTMLDialogElement/close_event", "close")}} events are fired.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("cancel", (event) => {});

oncancel = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Canceling a dialog

#### HTML

```html
<dialog class="example-dialog">
  <button class="close" type="reset">Close</button>
</dialog>

<button class="open-dialog">Open dialog</button>

<div class="result"></div>
```

```css hidden
button,
div {
  margin: 0.5rem;
}
```

#### JavaScript

```js
const result = document.querySelector(".result");

const dialog = document.querySelector(".example-dialog");

dialog.addEventListener("cancel", (event) => {
  result.textContent = "dialog was canceled";
});

const openDialog = document.querySelector(".open-dialog");
openDialog.addEventListener("click", () => {
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
    result.textContent = "";
  } else {
    result.textContent = "The dialog API is not supported by this browser";
  }
});

const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### Result

{{ EmbedLiveSample('Canceling a dialog', '100%', '100px') }}

### Canceling an input element

#### HTML

```html
<label for="file">Select or file. Or don't.</label>
<input type="file" id="file" name="file" />

<div id="result"></div>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

#### JavaScript

```js
const elem = document.getElementById("file");

const result = document.getElementById("result");

elem.addEventListener("cancel", () => {
  result.textContent = "Canceled.";
});

elem.addEventListener("change", () => {
  if (elem.files.length == 1) {
    result.textContent = "File Selected.";
  }
});
```

#### Result

{{ EmbedLiveSample('Canceling an input element', '100%', '100px') }}

Open the file selector, then close the selection dialog with the escape key or the cancel button. Both of these will cause the cancel event to be fired. Also, try selecting a local file on your machine; then reopen the file selection window and reselect the same file. This too causes the cancel event to be fired.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{HTMLElement("dialog")}} element
- {{domxref("HTMLDialogElement/close_event", "close")}}
