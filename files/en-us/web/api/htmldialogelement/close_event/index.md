---
title: 'HTMLDialogElement: close event'
slug: Web/API/HTMLDialogElement/close_event
tags:
  - API
  - Event
  - Experimental
  - HTML DOM
  - HTMLDialogElement
  - Reference
  - close
browser-compat: api.HTMLDialogElement.close_event
---
{{ APIRef() }}

The `close` event is fired on an `HTMLDialogElement` object when the dialog it represents has been closed.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/GlobalEventHandlers/onclose"
            >onclose</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

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

#### JS

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
