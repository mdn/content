---
title: 'Document: keyup event'
slug: Web/API/Document/keyup_event
tags:
  - DOM
  - Document
  - Event
  - KeyboardEvent
  - Reference
  - keyup
browser-compat: api.Document.keyup_event
---
{{APIRef}}

The **`keyup`** event is fired when a key is released.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("KeyboardEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers.onkeyup", "onkeyup")}}
      </td>
    </tr>
  </tbody>
</table>

The {{domxref("Document/keydown_event", "keydown")}} and `keyup` events provide a code indicating which key is pressed, while {{domxref("Document/keypress_event", "keypress")}} indicates which _character_ was entered. For example, a lowercase "a" will be reported as 65 by `keydown` and `keyup`, but as 97 by `keypress`. An uppercase "A" is reported as 65 by all events.

> **Note:** If you're looking for a way to react to changes in an input's value, you should use the [`input` event](/en-US/docs/Web/API/HTMLElement/input_event). Some changes are not detectable by `keyup`, for example pasting text from the context menu in a text input.

## Examples

This example logs the {{domxref("KeyboardEvent.code")}} value whenever you release a key.

### addEventListener keyup example

```html
<p>Focus the IFrame first (e.g. by clicking in it), then try pressing some keys.</p>
<p id="log"></p>
```

```js
const log = document.getElementById('log');

document.addEventListener('keyup', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("addEventListener_keyup_example")}}

### onkeyup equivalent

```js
document.onkeyup = logKey;
```

### Ignoring keyup during IME composition

An _Input Method Editor (IME)_ is a program that enables users to enter characters that are not supported by their keyboard using some other key combination.

Since Firefox 65, the {{domxref("Document/keydown_event", "keydown")}} and `keyup` events are now fired during IME composition, to improve cross-browser compatibility for CJKT users ({{bug(354358)}}. To ignore all `keyup` events that are part of composition, do something like this (229 is a special value set for a `keyCode` relating to an event that has been processed by an IME):

```js
eventTarget.addEventListener("keyup", event => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // do something
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document/keydown_event", "keydown")}}
- {{domxref("Document/keypress_event", "keypress")}}
- {{domxref("Element")}}: {{domxref("Element/keyup_event", "keyup")}} event
