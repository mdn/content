---
title: 'HTMLDialogElement: close event'
slug: Web/API/HTMLDialogElement/close_event
page-type: web-api-event
tags:
  - API
  - Event
  - HTML DOM
  - HTMLDialogElement
  - Reference
  - close
browser-compat: api.HTMLDialogElement.close_event
---
{{ APIRef() }}

The `close` event is fired on an `HTMLDialogElement` object when the dialog it represents has been closed.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('close', (event) => {});

onclose = (event) => { };
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
dialog.addEventListener('close', (event) => {
    result.textContent = 'dialog was closed';
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

- HTML [`<dialog>`](/en-US/docs/Web/HTML/Element/dialog) element
