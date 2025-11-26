---
title: "HTMLDialogElement: close event"
short-title: close
slug: Web/API/HTMLDialogElement/close_event
page-type: web-api-event
browser-compat: api.HTMLDialogElement.close_event
---

{{APIRef("HTML DOM")}}

The `close` event is fired on an `HTMLDialogElement` object when the {{htmlelement("dialog")}} it represents has been closed.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("close", (event) => { })

onclose = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Live example

#### HTML

```html
<dialog id="dialog">
  <form method="dialog">
    <button>Close via method="dialog"</button>
  </form>
  <button id="close">Close via .close() method</button>
  <p>Or hit the <kbd>Esc</kbd> key</p>
</dialog>

<button class="open-dialog">Open dialog</button>

<div class="status-text"></div>
```

```css hidden
button,
div {
  margin: 0.5rem;
}
```

#### JavaScript

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const statusText = document.getElementById("status-text");

dialog.addEventListener("close", (event) => {
  statusText.textContent = "dialog was closed";
});

openButton.addEventListener("click", () => {
  dialog.showModal();
  statusText.textContent = "";
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### Result

{{ EmbedLiveSample('Live_example', '100%', '200px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML [`<dialog>`](/en-US/docs/Web/HTML/Reference/Elements/dialog) element
- The [`Event`](/en-US/docs/Web/API/Event) interface
