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
    <button type="submit">Close via method="dialog"</button>
  </form>
  <button id="close">Close via .close() method</button>
  <p>Or hit the <kbd>Esc</kbd> key</p>
</dialog>

<button id="open">Open dialog</button>
```

```html hidden
<pre id="status-text"></pre>
```

```css hidden
#status-text {
  height: 120px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const statusText = document.getElementById("status-text");
function log(text) {
  statusText.innerText = `${statusText.innerText}${text}\n`;
  statusText.scrollTop = statusText.scrollHeight;
}
```

#### JavaScript

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");

openButton.addEventListener("click", () => {
  dialog.showModal();
  log("dialog: opened");
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("close", (event) => {
  log("dialog: closed");
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
