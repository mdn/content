---
title: 'HTMLDialogElement: cancel event'
slug: Web/API/HTMLDialogElement/cancel_event
page-type: web-api-event
tags:
  - API
  - Event
  - HTML DOM
  - HTMLDialogElement
  - NeedsExample
  - cancel
browser-compat: api.HTMLDialogElement.cancel_event
---
{{APIRef}}

The **`cancel`** event fires on a {{HTMLElement("dialog")}} when the user instructs the browser that they wish to dismiss the current open dialog. For example, the browser might fire this event when the user presses the <kbd>Esc</kbd> key or clicks a "Close dialog" button which is part of the browser's UI.

This event does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('cancel', (event) => {});

oncancel = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Live example

#### HTML

```html
<dialog class="example-dialog">
    <button class="close" type="reset">Close</button>
</dialog>

<button class="open-dialog">Open dialog</button>

<div class="result"></div>
```

```css hidden
button, div {
    margin: .5rem;
}
```

#### JavaScript

```js
const result = document.querySelector('.result');

const dialog = document.querySelector('.example-dialog');

dialog.addEventListener('cancel', (event) => {
  result.textContent = 'dialog was canceled';
});

const openDialog = document.querySelector('.open-dialog');
openDialog.addEventListener('click', () => {
  if (typeof dialog.showModal === 'function') {
      dialog.showModal();
      result.textContent = '';
  } else {
      result.textContent = 'The dialog API is not supported by this browser';
  }
});

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
    dialog.close();
});
```

#### Result

{{ EmbedLiveSample('Live_example', '100%', '100px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{HTMLElement("dialog")}} element
- {{domxref("HTMLDialogElement/close_event", "close")}}
