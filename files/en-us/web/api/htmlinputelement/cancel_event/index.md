---
title: "HTMLInputElement: cancel event"
short-title: cancel
slug: Web/API/HTMLInputElement/cancel_event
page-type: web-api-event
browser-compat: api.HTMLInputElement.cancel_event
---

{{APIRef}}

The **`cancel`** event fires on an {{HTMLElement("input")}} element when the user cancels the file picker dialog via the <kbd>Esc</kbd> key or the cancel button and when the user re-selects the same files that were previously selected of `type="file"`.

This event is not cancelable but can bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("cancel", (event) => {});

oncancel = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Canceling an input element

#### HTML

```html
<label for="file">Select a file. Or don't.</label>
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

- HTML {{HTMLElement("input")}} element
