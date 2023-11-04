---
title: "HTMLElement: cancel event"
short-title: cancel
slug: Web/API/HTMLElement/cancel_event
page-type: web-api-event
browser-compat: api.HTMLElement.cancel_event
---

{{APIRef}}

The **`cancel`** event is fired at {{HTMLElement("input")}} and {{HTMLElement("dialog")}} elements when the user instructs the browser that they wish to dismiss the current open dialog, or at input elements in the File state when the user does not change their selection. For {{HTMLElement("dialog")}} elements, The browser fires this event when the user presses the <kbd>Esc</kbd> key.

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

### \<dialog> element

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

{{ EmbedLiveSample('dialog_cancel', '100%', '100px') }}

### \<input> element

#### HTML

```html
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
  result.textContent = "Cancelled.";
});

elem.addEventListener("change", () => {
  if (elem.files.length == 1) {
    result.textContent = "File Selected.";
  }
});
```

#### Result

{{ EmbedLiveSample('input_cancel', '100%', '100px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{HTMLElement("input")}} element
- HTML {{HTMLElement("dialog")}} element
- {{domxref("HTMLDialogElement/close_event", "close")}}
