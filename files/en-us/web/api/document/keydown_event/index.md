---
title: 'Document: keydown event'
slug: Web/API/Document/keydown_event
tags:
  - API
  - DOM
  - Document
  - Event
  - KeyboardEvent
  - Reference
  - keydown
browser-compat: api.Document.keydown_event
---
{{APIRef}}

The **`keydown`** event is fired when a key is pressed.

Unlike the {{domxref("Document/keypress_event", "keypress")}} event, the `keydown` event is fired for all keys, regardless of whether they produce a character value.

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
        {{domxref("GlobalEventHandlers.onkeydown", "onkeydown")}}
      </td>
    </tr>
  </tbody>
</table>

The `keydown` and {{domxref("Document/keyup_event", "keyup")}} events provide a code indicating which key is pressed, while {{domxref("Document/keypress_event", "keypress")}} indicates which _character_ was entered. For example, a lowercase "a" will be reported as 65 by `keydown` and `keyup`, but as 97 by `keypress`. An uppercase "A" is reported as 65 by all events.

## Examples

### addEventListener keydown example

This example logs the {{domxref("KeyboardEvent.code")}} value whenever you press down a key.

```html
<p>Focus the IFrame first (e.g. by clicking in it), then try pressing some keys.</p>
<p id="log"></p>
```

```js
const log = document.getElementById('log');

document.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("addEventListener_keydown_example")}}

### onkeydown equivalent

```js
document.onkeydown = logKey;
```

### Ignoring keydown during IME composition

An _Input Method Editor (IME)_ is a program that enables users to enter characters that are not supported by their keyboard using some other key combination.

Since Firefox 65, the `keydown` and {{domxref("Document/keyup_event", "keyup")}} events are now fired during IME composition ({{bug(354358)}}). To ignore all `keydown` events that are part of composition, do something like this (229 is a special value set for a `keyCode` relating to an event that has been processed by an IME):

```js
eventTarget.addEventListener("keydown", event => {
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

- {{domxref("Document/keypress_event", "keypress")}}
- {{domxref("Document/keyup_event", "keyup")}}
- {{domxref("Element")}}: {{domxref("Element/keydown_event", "keydown")}} event
